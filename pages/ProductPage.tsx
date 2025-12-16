
import React from 'react';
import { Link } from '../constants';
import { MetaHead } from '../components/MetaHead';

export const ProductPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Het Dagelijkse Gebedsboekje - Structuur & Focus in Salah"
        description="Download Het Dagelijkse Gebedsboekje (PDF). Krijg meer rust, structuur en focus in je dagelijkse gebeden. Beschikbaar als standaard en Ramadan editie."
        canonicalPath="/product/gebedsboekje"
        ogType="product"
      />
      
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-200 text-sm font-medium mb-6">
                    Directe Download (PDF)
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                    Meer rust en focus in je <br/><span className="text-emerald-400">Dagelijkse Gebeden</span>
                </h1>
                <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Ben je op zoek naar meer structuur in je aanbidding? "Het Dagelijkse Gebedsboekje" is jouw digitale gids (45-60 pagina's) om je Salah naar een hoger niveau te tillen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#pricing" className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg shadow-lg hover:bg-emerald-50 transition-colors">
                        Download Nu – €9,99
                    </a>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1 prose prose-lg text-slate-600">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom dit boekje?</h2>
                    <p>
                        In de drukte van het dagelijks leven kan het gebed soms voelen als een routineklus. We bidden snel tussendoor en verliezen de spirituele connectie (Khushoo).
                    </p>
                    <p>
                        Dit digitale boekje is ontworpen om daar verandering in te brengen. Het biedt:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Structuur:</strong> Checklists en schema's voor je dagelijkse aanbidding.</li>
                        <li><strong>Verdieping:</strong> Uitleg over de betekenis van handelingen.</li>
                        <li><strong>Reflectie:</strong> Ruimte om je spirituele doelen bij te houden.</li>
                        <li><strong>Dua Lijsten:</strong> Essentiële smeekbeden voor na het gebed.</li>
                    </ul>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    {/* Visual representation of the PDF */}
                    <div className="relative w-64 h-80 bg-white shadow-2xl border border-slate-200 rounded-r-xl rounded-l-sm flex flex-col items-center justify-center p-8 text-center rotate-3 hover:rotate-0 transition-transform duration-500">
                         <div className="absolute top-0 left-0 bottom-0 w-2 bg-slate-200 rounded-l-sm"></div>
                         <h3 className="font-serif text-2xl font-bold text-emerald-800">Het Dagelijkse<br/>Gebedsboekje</h3>
                         <p className="text-xs uppercase tracking-widest mt-4 text-slate-500">PDF Editie</p>
                         <div className="mt-8 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                             <span className="text-2xl">🤲</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-16">
                <div className="bg-slate-900 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white">Kies jouw editie</h2>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="p-8 text-center hover:bg-slate-50 transition-colors">
                        <h3 className="text-xl font-bold text-slate-800">Standaard Editie</h3>
                        <p className="text-slate-500 text-sm mt-2">Voor het hele jaar</p>
                        <div className="text-4xl font-bold text-emerald-600 mt-6">€9,99</div>
                        <ul className="mt-6 space-y-3 text-left text-sm text-slate-600 max-w-xs mx-auto">
                            <li className="flex gap-2">✓ <span>45-60 Pagina's PDF</span></li>
                            <li className="flex gap-2">✓ <span>Directe download</span></li>
                            <li className="flex gap-2">✓ <span>Printbaar formaat</span></li>
                        </ul>
                        <button className="mt-8 w-full py-3 px-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                            Koop Standaard
                        </button>
                    </div>
                    <div className="p-8 text-center bg-emerald-50/50 hover:bg-emerald-50 transition-colors relative">
                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">POPULAIR</div>
                        <h3 className="text-xl font-bold text-slate-800">Ramadan Editie</h3>
                        <p className="text-slate-500 text-sm mt-2">Met extra Tarawih & Iftar planners</p>
                        <div className="text-4xl font-bold text-emerald-800 mt-6">€12,99</div>
                        <ul className="mt-6 space-y-3 text-left text-sm text-slate-600 max-w-xs mx-auto">
                            <li className="flex gap-2">✓ <span>Alles van Standaard</span></li>
                            <li className="flex gap-2">✓ <span>Ramadan Tracker</span></li>
                            <li className="flex gap-2">✓ <span>Laylatul Qadr Gids</span></li>
                        </ul>
                        <button className="mt-8 w-full py-3 px-4 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 transition-colors">
                            Koop Ramadan Editie
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Veelgestelde vragen</h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-bold text-slate-800">Hoe ontvang ik het boekje?</h4>
                        <p className="text-sm text-slate-600 mt-1">Direct na betaling ontvang je een e-mail met een link om de PDF te downloaden.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-bold text-slate-800">Kan ik het uitprinten?</h4>
                        <p className="text-sm text-slate-600 mt-1">Ja, het boekje is opgemaakt in A4/A5 formaat en is perfect om thuis uit te printen en in te binden.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
