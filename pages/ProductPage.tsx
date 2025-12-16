
import React from 'react';
import { MetaHead } from '../components/MetaHead';

export const ProductPage: React.FC = () => {
  const stripeLink = "https://buy.stripe.com/fZufZh6NjeN2dafaQW";

  return (
    <>
      <MetaHead
        title="Het Dagelijkse Gebedsboekje - Meer Khushoo in je Salah"
        description="Download direct Het Dagelijkse Gebedsboekje (PDF). De gids voor meer rust, structuur en focus in je dagelijkse gebeden. Start vandaag nog."
        canonicalPath="/product/gebedsboekje"
        ogType="product"
        image="https://placehold.co/1200x630/065f46/ffffff?text=Het+Gebedsboekje"
      />
      
      <div className="bg-slate-50 min-h-screen font-sans">
        
        {/* --- HERO SECTION --- */}
        <div className="relative bg-emerald-900 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-teal-300 blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Copy */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Directe Download (PDF)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Meer rust en focus in je <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200">
                                Dagelijkse Gebeden
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/90 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Ben je op zoek naar meer structuur in je aanbidding? Dit digitale werkboek (PDF) is jouw gids om je Salah naar een hoger niveau te tillen.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a 
                                href={stripeLink} 
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-emerald-900 transition-all duration-200 bg-white rounded-lg shadow-lg hover:bg-emerald-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            >
                                Download Nu – €9,99
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </a>
                            <a href="#features" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-emerald-100 transition-all duration-200 bg-emerald-800/50 border border-emerald-700 rounded-lg hover:bg-emerald-800 focus:outline-none">
                                Lees meer
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-emerald-300/80 flex items-center justify-center md:justify-start gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Direct toegang na betaling
                        </p>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-white shadow-2xl rounded-r-xl rounded-l-sm border-l-4 border-l-emerald-800 flex flex-col items-center text-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                             <div className="absolute top-0 right-0 p-4">
                                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">🧭</div>
                             </div>
                             <div className="mt-12 mb-auto">
                                 <h3 className="font-serif text-3xl font-bold text-emerald-900 leading-tight">Het Dagelijkse<br/>Gebedsboekje</h3>
                                 <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                                 <p className="text-sm text-slate-500 mt-4 font-medium uppercase tracking-widest">Al-Yawn Editie</p>
                             </div>
                             <div className="mt-8 w-full bg-slate-100 rounded-lg p-3">
                                 <p className="text-xs text-slate-500">Inclusief Checklists & Dua's</p>
                             </div>
                        </div>
                        {/* Shadow/Glow behind book */}
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- PROBLEM / AGITATION --- */}
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Herken je dit?</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-4xl mb-4">🏃‍♂️</div>
                        <h3 className="font-bold text-slate-800 mb-2">Gehaast Bidden</h3>
                        <p className="text-sm text-slate-600">Je bidt snel tussendoor en voelt dat het meer een routineklus is dan een spiritueel moment.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-4xl mb-4">🤯</div>
                        <h3 className="font-bold text-slate-800 mb-2">Snel Afgeleid</h3>
                        <p className="text-sm text-slate-600">Tijdens het gebed dwalen je gedachten af naar werk, boodschappen of zorgen.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-4xl mb-4">📉</div>
                        <h3 className="font-bold text-slate-800 mb-2">Dip in Imaan</h3>
                        <p className="text-sm text-slate-600">Je wilt die zoete smaak van Imaan weer proeven, maar weet niet waar je moet beginnen.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SOLUTION / FEATURES --- */}
        <div id="features" className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ontworpen voor verandering</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Dit digitale boekje is geen saai leesboek, maar een actiegerichte gids om je te helpen focussen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Structuur & Planning</h3>
                                <p className="text-slate-600 mt-1">Handige checklists en schema's voor je dagelijkse aanbidding, zodat je niets vergeet.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Verdieping van Kennis</h3>
                                <p className="text-slate-600 mt-1">Heldere uitleg over de betekenis van handelingen en woorden in het gebed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Reflectie & Doelen</h3>
                                <p className="text-slate-600 mt-1">Speciale ruimte om je spirituele doelen bij te houden en te reflecteren op je voortgang.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Exclusieve Dua Lijsten</h3>
                                <p className="text-slate-600 mt-1">Een verzameling van essentiële smeekbeden voor na het gebed (Adhkar).</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform rotate-2 max-w-sm">
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                                <div className="h-32 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-center text-emerald-800/50 text-sm">
                                    Voorbeeld Pagina: Salah Tracker
                                </div>
                                <div className="h-4 bg-slate-100 rounded w-full"></div>
                                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- PRICING & CTA --- */}
        <div id="pricing" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl overflow-hidden text-white border border-slate-700">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Investeer in je Akhira</h2>
                            <p className="text-slate-300 mb-8">
                                Voor de prijs van een lunch krijg je een tool die je dagelijks helpt dichter bij Allah te komen.
                            </p>
                            
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-5xl font-bold text-emerald-400">€9,99</div>
                                <div className="text-xl text-slate-500 line-through">€14,99</div>
                            </div>

                            <a 
                                href={stripeLink}
                                className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 mb-4"
                            >
                                Download Direct
                            </a>
                            
                            <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                                <span className="flex items-center gap-1">🔒 Veilig betalen</span>
                                <span className="flex items-center gap-1">⚡ Directe levering</span>
                            </div>
                        </div>
                        <div className="bg-emerald-800/30 p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center">
                            <h3 className="font-bold text-lg mb-6 text-emerald-200">Wat je ontvangt:</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Het volledige E-book</strong> (45-60 pagina's PDF)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Printbaar Formaat</strong> (A4 & A5 geoptimaliseerd)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Salah Trackers</strong> voor dagelijks gebruik</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Levenslang toegang</strong> tot updates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Upsell / Alternative (Ramadan) - Keeping it visible but secondary based on prompt flow */}
                <div className="mt-12 p-6 bg-emerald-50 rounded-xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
                    <div>
                        <h4 className="font-bold text-emerald-900">Ook beschikbaar: Ramadan Editie</h4>
                        <p className="text-sm text-emerald-700">Met extra Tarawih & Iftar planners voor €12,99</p>
                    </div>
                    <button className="px-4 py-2 bg-white border border-emerald-200 text-emerald-700 font-medium rounded-lg text-sm hover:bg-emerald-50 opacity-70 cursor-not-allowed" title="Tijdelijk niet beschikbaar">
                        Binnenkort weer beschikbaar
                    </button>
                </div>
            </div>
        </div>

        {/* --- GUARANTEE --- */}
        <div className="py-12 bg-slate-50">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mx-auto mb-4 border border-slate-200">🛡️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">30 Dagen Tevredenheidsgarantie</h3>
                <p className="text-slate-600 text-sm">
                    Wij geloven dat dit boekje je echt zal helpen. Ben je niet tevreden of vind je de inhoud niet waardevol? 
                    Stuur ons binnen 30 dagen een mailtje en je krijgt je geld terug. Geen vragen.
                </p>
            </div>
        </div>

        {/* --- FAQ --- */}
        <div className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-2xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Veelgestelde vragen</h3>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800">Hoe ontvang ik het boekje?</h4>
                        <p className="text-sm text-slate-600 mt-2">Direct na betaling ontvang je automatisch een e-mail met een beveiligde link om de PDF te downloaden. Check ook je spam-folder!</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800">Kan ik het uitprinten?</h4>
                        <p className="text-sm text-slate-600 mt-2">Ja, zeker! Het boekje is opgemaakt in A4/A5 formaat en is perfect om thuis uit te printen en eventueel in te binden voor dagelijks gebruik.</p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800">Is het geschikt voor mobiel?</h4>
                        <p className="text-sm text-slate-600 mt-2">Absoluut. Het PDF-bestand is geoptimaliseerd om ook prettig te lezen op je telefoon of tablet.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- STICKY MOBILE CTA (Optional but good for CRO) --- */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href={stripeLink} className="block w-full py-3 bg-emerald-600 text-white font-bold text-center rounded-lg shadow-md">
                Download Nu voor €9,99
            </a>
        </div>

      </div>
    </>
  );
};
