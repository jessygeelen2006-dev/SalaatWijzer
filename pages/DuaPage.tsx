
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getDuaBySlug, getRelatedDuas } from '../duaData';
import { MetaHead } from '../components/MetaHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCTA } from '../components/ProductCTA';

export const DuaPage: React.FC = () => {
  const { duaSlug } = useParams<{ duaSlug: string }>();
  const dua = getDuaBySlug(duaSlug || '');
  
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
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xs font-bold text-emerald-600 uppercase mb-1">Uitspraak (Transliteratie)</h3>
                            <p className="text-lg md:text-xl font-medium text-slate-700 italic">
                                "{dua.transliteration}"
                            </p>
                        </div>
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
