
import React, { useState } from 'react';
import { Link } from '../constants';
import { getAllDuas } from '../duaData';
import { MetaHead } from '../components/MetaHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const DuaIndexPage: React.FC = () => {
  const allDuas = getAllDuas();
  const [searchTerm, setSearchTerm] = useState('');

  // Group by category
  const categories = Array.from(new Set(allDuas.map(d => d.category)));
  
  const filteredDuas = allDuas.filter(d => 
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MetaHead
        title="Dua Boek & Smeekbeden - SalaatWijzer Directory"
        description="Zoek en leer krachtige Dua's voor elke situatie. Van dua voor het slapen tot bescherming tegen het boze oog. Inclusief Arabisch, uitspraak en vertaling."
        canonicalPath="/dua"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Dua Boek', path: '/dua' }]} />

        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Islamitisch Dua Boek
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Een verzameling authentieke smeekbeden (Adhkar) uit de Quran en Sunnah. 
                Vind de juiste woorden voor elk moment van de dag.
            </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
            <input 
                type="text" 
                placeholder="Zoek een dua (bijv. 'slapen' of 'reizen')..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm text-lg transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
        </div>

        {searchTerm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDuas.length > 0 ? filteredDuas.map(dua => (
                    <Link key={dua.slug} to={`/dua/${dua.slug}`} className="block bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2 block">{dua.category}</span>
                        <h3 className="text-xl font-bold text-slate-800">{dua.title}</h3>
                    </Link>
                )) : (
                    <div className="col-span-2 text-center text-slate-500 py-8">Geen dua's gevonden voor "{searchTerm}"</div>
                )}
            </div>
        ) : (
            <div className="space-y-12">
                {categories.map(cat => {
                    const catDuas = allDuas.filter(d => d.category === cat);
                    return (
                        <section key={cat}>
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
                                <span className="text-emerald-500">❖</span> {cat}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {catDuas.map(dua => (
                                    <Link key={dua.slug} to={`/dua/${dua.slug}`} className="group bg-white p-5 rounded-lg border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all shadow-sm">
                                        <h3 className="font-semibold text-slate-800 group-hover:text-emerald-800">{dua.title}</h3>
                                        <p className="text-xs text-slate-400 mt-2 truncate">{dua.translation}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        )}
      </div>
    </>
  );
};
