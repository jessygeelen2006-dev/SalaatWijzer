
import React, { useState, useRef, useEffect } from 'react';
import { Link, Navigate, useParams } from '../constants';
import { getDuaBySlug, getRelatedDuas } from '../duaData';
import { MetaHead } from '../components/MetaHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCTA } from '../components/ProductCTA';
import { GoogleGenAI, Modality } from "@google/genai";

// --- Audio Helper Functions for Gemini TTS ---
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  // Ensure the buffer is aligned for Int16Array
  const buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  const dataInt16 = new Int16Array(buffer);
  
  const frameCount = dataInt16.length / numChannels;
  const audioBuffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = audioBuffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return audioBuffer;
}

export const DuaPage: React.FC = () => {
  const { duaSlug } = useParams<{ duaSlug: string }>();
  const dua = getDuaBySlug(duaSlug || '');
  
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    // Cleanup audio context on unmount
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handlePlayAudio = async () => {
    if (isPlaying) {
      // Stop logic
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop();
      }
      setIsPlaying(false);
      return;
    }

    if (!dua) return;

    setIsLoadingAudio(true);

    try {
      // Initialize AudioContext on user gesture
      if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      } else if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }

      // Check if API key is selected (if using in AI Studio environment)
      // This ensures we have a valid key if process.env.API_KEY is not sufficient/set
      if ((window as any).aistudio && typeof (window as any).aistudio.hasSelectedApiKey === 'function') {
         const hasKey = await (window as any).aistudio.hasSelectedApiKey();
         if (!hasKey && typeof (window as any).aistudio.openSelectKey === 'function') {
             await (window as any).aistudio.openSelectKey();
         }
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Use the Arabic text for TTS
      const promptText = `Please recite the following Islamic prayer in Arabic clearly: ${dua.arabic}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: promptText }] }],
        config: {
          responseModalities: [Modality.AUDIO], 
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (base64Audio && audioContextRef.current) {
        const audioBytes = decode(base64Audio);
        const audioBuffer = await decodeAudioData(
          audioBytes,
          audioContextRef.current,
          24000,
          1
        );

        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContextRef.current.destination);
        
        source.onended = () => {
          setIsPlaying(false);
        };

        source.start();
        sourceNodeRef.current = source;
        setIsPlaying(true);
      } else {
        console.warn("No audio data found in response:", response);
        alert("Geen audio ontvangen van de server. Probeer het opnieuw.");
      }

    } catch (error: any) {
      console.error("Error generating or playing audio:", error);
      // Show more specific error message if possible
      const msg = error.message || "Onbekende fout";
      alert(`Het lukte niet om de audio af te spelen. Foutmelding: ${msg}`);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  if (!dua) {
    return <Navigate to="/dua" replace />;
  }

  const related = getRelatedDuas(dua.slug, dua.category);

  // Schema.org Article / CreativeWork
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": dua.title,
      "description": `Leer de ${dua.title}. Inclusief Arabische tekst, fonetische uitspraak en Nederlandse vertaling.`,
      "articleBody": dua.context,
      "inLanguage": ["nl", "ar"],
      "about": {
          "@type": "Thing",
          "name": "Islamitische Smeekbede"
      }
  };

  return (
    <>
      <MetaHead
        title={`${dua.title} - Arabisch, Uitspraak & Betekenis`}
        description={`Leer de ${dua.title}. Fonetisch: ${dua.transliteration.substring(0, 50)}... Lees de betekenis en wanneer je deze zegt.`}
        canonicalPath={`/dua/${dua.slug}`}
        jsonLd={jsonLd}
        ogType="article"
      />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
            { label: 'Dua Boek', path: '/dua' },
            { label: dua.title, path: `/dua/${dua.slug}` }
        ]} />

        <article>
            <header className="text-center mb-10">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    {dua.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {dua.title}
                </h1>
                <p className="text-slate-500 italic">
                    {dua.source && `Bron: ${dua.source}`}
                </p>
            </header>

            {/* The Dua Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden mb-12">
                <div className="bg-emerald-600/5 p-8 md:p-12 text-center border-b border-emerald-100">
                    <p className="text-3xl md:text-5xl font-serif leading-loose md:leading-relaxed text-slate-800 mb-8" style={{ fontFamily: '"Amiri", "Traditional Arabic", serif' }}>
                        {dua.arabic}
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xs font-bold text-emerald-600 uppercase mb-1">Uitspraak (Transliteratie)</h3>
                            <p className="text-lg md:text-xl font-medium text-slate-700 italic">
                                "{dua.transliteration}"
                            </p>
                        </div>
                        
                        {/* Audio Player Button */}
                        <div className="mt-8 flex justify-center">
                            <button 
                                onClick={handlePlayAudio}
                                disabled={isLoadingAudio}
                                className={`
                                    flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all shadow-sm
                                    ${isPlaying 
                                        ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
                                        : 'bg-emerald-600 text-white hover:bg-emerald-700 border border-transparent'
                                    }
                                    ${isLoadingAudio ? 'opacity-75 cursor-not-allowed' : ''}
                                `}
                            >
                                {isLoadingAudio ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Genereren...</span>
                                    </>
                                ) : isPlaying ? (
                                    <>
                                        <span>⏹️</span>
                                        <span>Stop Audio</span>
                                    </>
                                ) : (
                                    <>
                                        <span>🔊</span>
                                        <span>Beluister Dua (AI)</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Gegenereerd met Gemini 2.5 Flash TTS</p>
                    </div>
                </div>
                <div className="p-6 md:p-8 bg-emerald-700 text-white text-center">
                    <h3 className="text-xs font-bold text-emerald-200 uppercase mb-2">Betekenis</h3>
                    <p className="text-lg md:text-xl leading-relaxed">
                        "{dua.translation}"
                    </p>
                </div>
            </div>

            {/* Content Body (pSEO Rich Content) */}
            <div className="prose prose-slate prose-lg max-w-none mb-12">
                <h2>Wanneer en waarom deze Dua?</h2>
                <p>{dua.context}</p>

                {dua.benefits && dua.benefits.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose mt-8">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="text-emerald-500">✓</span> Deugden & Voordelen
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {dua.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-700 text-base">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="my-12">
                <ProductCTA variant="compact" />
            </div>

            {/* Related Duas */}
            {related.length > 0 && (
                <div className="border-t border-slate-200 pt-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Gerelateerde Smeekbeden</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {related.map(r => (
                            <Link key={r.slug} to={`/dua/${r.slug}`} className="block p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
                                <h4 className="font-bold text-slate-800 mb-2">{r.title}</h4>
                                <p className="text-sm text-slate-500 line-clamp-2">{r.context}</p>
                                <span className="text-emerald-600 text-sm font-medium mt-4 inline-block">Lees Dua &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </article>
      </div>
    </>
  );
};
