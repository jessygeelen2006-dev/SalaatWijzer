import React from 'react';
import { Link } from 'react-router-dom';
import { PROVINCES } from '../constants';
import { MetaHead } from '../components/MetaHead';
import { ProductCTA } from '../components/ProductCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="SalaatWijzer - Gebedstijden Nederland"
        description="SalaatWijzer: Zoek actuele gebedstijden voor elke stad in Nederland. Fajr, Maghrib, Isha tijden voor Amsterdam, Rotterdam, Utrecht en meer."
        canonicalPath="/"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-4xl md:text-5xl mb-4 block">🧭</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            SalaatWijzer Nederland
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bekijk de exacte, dagelijks bijgewerkte gebedstijden voor jouw stad. 
            Gebaseerd op de Muslim World League berekening voor nauwkeurigheid in Europa.
          </p>
        </div>

        {/* Featured Product Section */}
        <div className="mb-16">
            <ProductCTA />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROVINCES.map((province) => (
            <div
              key={province.slug}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                <Link
                  to={`/gebedstijden/${province.slug}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {province.name}
                </Link>
              </h2>
              <ul className="space-y-2">
                {province.cities.slice(0, 5).map((city) => (
                  <li key={city.slug}>
                    <Link
                      to={`/gebedstijden/${province.slug}/${city.slug}`}
                      className="text-slate-600 hover:text-emerald-600 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 mr-2 transition-colors"></span>
                      {city.name}
                    </Link>
                  </li>
                ))}
                {province.cities.length > 5 && (
                  <li className="pt-2">
                    <Link
                      to={`/gebedstijden/${province.slug}`}
                      className="text-xs font-semibold text-emerald-600 uppercase tracking-wide hover:underline"
                    >
                      Bekijk alle {province.cities.length} steden &rarr;
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        
        {/* SEO Content Section */}
        <section className="mt-16 prose prose-slate max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
           <h2>Waarom nauwkeurige gebedstijden belangrijk zijn</h2>
           <p>
             Het verrichten van het gebed (Salah) op de vastgestelde tijden is een van de zuilen van de Islam.
             <strong>SalaatWijzer</strong> biedt een gebruiksvriendelijk overzicht per stad, zodat je altijd weet wanneer het tijd is voor
             Fajr, Dhuhr, Asr, Maghrib en Isha, waar je ook bent in Nederland.
           </p>
           <h3>Berekeningsmethode</h3>
           <p>
             Wij maken gebruik van de API van Aladhan.com, ingesteld op de methode van de <strong>Muslim World League</strong>. 
             Deze methode wordt breed geaccepteerd in Europa en houdt rekening met hogere breedtegraden.
           </p>
        </section>
      </div>
    </>
  );
};