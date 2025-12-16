
import React from 'react';
import { MetaHead } from '../components/MetaHead';

export const ProductPage: React.FC = () => {
  const stripeLinkStandard = "https://buy.stripe.com/fZufZh6NjeN2dafaQW18c03";

  return (
    <>
      <MetaHead
        title="Het Dagelijkse Gebedsboekje - Meer Khushoo in je Salah"
        description="Download direct Het Dagelijkse Gebedsboekje (PDF). De gids voor meer rust, structuur en focus in je dagelijkse gebeden. Start vandaag nog."
        canonicalPath="/product/gebedsboekje"
        ogType="product"
        image="https://placehold.co/1200x630/065f46/ffffff?text=Het+Gebedsboekje"
      />
      
      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        
        {/* --- HERO SECTION --- */}
        <div className="relative bg-emerald-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-teal-300 blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-24 relative z-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Directe Download (PDF)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Meer rust en focus in je <br/>
                            <span className="text-emerald-300">Dagelijkse Gebeden</span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/90 mb-8 leading-relaxed max-w-xl">
                            Ben je op zoek naar meer structuur in je aanbidding? "Het Dagelijkse Gebedsboekje" is jouw digitale gids (45-60 pagina's) om je Salah naar een hoger niveau te tillen.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a 
                                href={stripeLinkStandard} 
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-emerald-900 transition-all duration-200 bg-white rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-50 hover:scale-105 focus:outline-none ring-offset-2 focus:ring-2 ring-emerald-500"
                            >
                                Download Nu – €9,99
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-emerald-400/80 flex items-center justify-center md:justify-start gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Direct toegang na betaling
                        </p>
                    </div>
                    
                    {/* Visual: Book Mockup */}
                    <div className="flex-1 flex justify-center perspective-1000">
                        <div className="relative w-64 h-80 md:w-72 md:h-96 bg-white shadow-2xl rounded-r-xl rounded-l-sm border-l-4 border-l-emerald-800 flex flex-col items-center text-center p-6 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                             <div className="absolute top-4 right-4 text-emerald-100 text-4xl opacity-20">﷽</div>
                             <div className="mt-auto mb-auto">
                                 <h3 className="font-serif text-3xl font-bold text-emerald-900 leading-tight">Het Dagelijkse<br/>Gebedsboekje</h3>
                                 <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                             </div>
                             <div className="mt-auto w-full bg-slate-50 border-t border-slate-100 pt-4 pb-2">
                                 <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">PDF Editie</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- WAAROM DIT BOEKJE --- */}
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom dit boekje?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                    In de drukte van het dagelijks leven kan het gebed soms voelen als een routineklus. We bidden snel tussendoor en verliezen de spirituele connectie (Khushoo).
                    <br/><br/>
                    Dit digitale boekje is ontworpen om daar verandering in te brengen. Het biedt:
                </p>

                <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl">📋</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Structuur</h3>
                            <p className="text-sm text-slate-600">Checklists en schema's voor je dagelijkse aanbidding.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl">📖</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Verdieping</h3>
                            <p className="text-sm text-slate-600">Uitleg over de betekenis van handelingen.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl">🤲</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Dua Lijsten</h3>
                            <p className="text-sm text-slate-600">Essentiële smeekbeden voor na het gebed.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-2xl">💭</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Reflectie</h3>
                            <p className="text-sm text-slate-600">Ruimte om je spirituele doelen bij te houden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- PRICING --- */}
        <div id="pricing" className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kies jouw editie</h2>
                    <p className="text-slate-600">Investeer in je Akhira voor de prijs van een lunch.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Standard Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-500 relative flex flex-col">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-2xl uppercase tracking-wide">
                            Aanbevolen
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Standaard Editie</h3>
                        <p className="text-sm text-slate-500 mb-6">Voor het hele jaar</p>
                        
                        <div className="text-5xl font-extrabold text-emerald-600 mb-8">€9,99</div>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">✓</div>
                                <span className="text-slate-700 font-medium">45-60 Pagina's PDF</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">✓</div>
                                <span className="text-slate-700 font-medium">Directe download</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm">✓</div>
                                <span className="text-slate-700 font-medium">Printbaar formaat</span>
                            </li>
                        </ul>
                        
                        <a 
                            href={stripeLinkStandard}
                            className="block w-full py-4 bg-emerald-600 text-white font-bold text-center rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1"
                        >
                            Koop Standaard
                        </a>
                    </div>

                    {/* Ramadan Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col opacity-90">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ramadan Editie</h3>
                                <p className="text-sm text-slate-500 mb-6">Met extra planners</p>
                            </div>
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
                                Populair
                            </span>
                        </div>
                        
                        <div className="text-5xl font-bold text-slate-800 mb-8">€12,99</div>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm">✓</div>
                                <span className="text-slate-600">Alles van Standaard</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm">✓</div>
                                <span className="text-slate-600">Ramadan Tracker</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm">✓</div>
                                <span className="text-slate-600">Laylatul Qadr Gids</span>
                            </li>
                        </ul>
                        
                        <button disabled className="block w-full py-4 bg-slate-100 text-slate-400 font-bold text-center rounded-xl cursor-not-allowed">
                            Binnenkort beschikbaar
                        </button>
                    </div>
                </div>
                
                <div className="mt-12 text-center">
                    <img src="https://buy.stripe.com/brand/payment-methods.png" alt="Betaalmethoden" className="h-8 mx-auto opacity-50 grayscale hover:grayscale-0 transition-all" />
                    <p className="text-xs text-slate-400 mt-2">Veilig betalen met iDEAL, Bancontact & Creditcard</p>
                </div>
            </div>
        </div>

        {/* --- FAQ --- */}
        <div className="py-16 bg-white">
            <div className="max-w-2xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Veelgestelde vragen</h3>
                <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-3">
                            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-emerald-600">?</span>
                            Hoe ontvang ik het boekje?
                        </h4>
                        <p className="text-slate-600 mt-3 ml-11 text-sm leading-relaxed">
                            Direct na betaling ontvang je een e-mail met een link om de PDF te downloaden. Heb je niets ontvangen? Check je spam-folder.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 flex items-center gap-3">
                            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-emerald-600">?</span>
                            Kan ik het uitprinten?
                        </h4>
                        <p className="text-slate-600 mt-3 ml-11 text-sm leading-relaxed">
                            Ja, het boekje is opgemaakt in A4/A5 formaat en is perfect om thuis uit te printen en in te binden.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- STICKY MOBILE CTA --- */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href={stripeLinkStandard} className="block w-full py-3 bg-emerald-600 text-white font-bold text-center rounded-xl shadow-md">
                Download Nu – €9,99
            </a>
        </div>

      </div>
    </>
  );
};
