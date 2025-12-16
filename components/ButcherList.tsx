
import React from 'react';
import { Butcher } from '../types';

interface ButcherListProps {
  butchers: Butcher[];
  city: string;
}

export const ButcherList: React.FC<ButcherListProps> = ({ butchers, city }) => {
  // Check if the butchers shown are actually from the city requested or fallback
  // We can do a simple check: does any address contain the city name?
  const isRegionalFallback = butchers.length > 0 && !butchers[0].address.toLowerCase().includes(city.toLowerCase());

  return (
    <div className="mt-12 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-2xl">🥩</span> Turkse Slagers {isRegionalFallback ? 'in de omgeving' : `in ${city}`}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
            {isRegionalFallback 
                ? `Geen slagers gevonden direct in ${city}. Bekijk deze populaire opties in de regio:` 
                : 'Vind de beste halal slagerijen en vleeshandels in de buurt.'}
            </p>
        </div>
      </div>
      
      <div className="divide-y divide-slate-100">
        {butchers.map((butcher, idx) => (
          <div key={idx} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
            {/* Structured Data for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ButcherShop",
                "name": butcher.name,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": butcher.address.split(',')[0],
                  "addressLocality": city, // Keep context local for the page, or use actual address? Actual is better for accuracy.
                  "addressCountry": "NL"
                },
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": butcher.rating,
                  "reviewCount": butcher.reviews
                }
              })}
            </script>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors">
                  {butcher.name}
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                  Halal
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-2 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {butcher.address}
              </p>
              <div className="flex flex-wrap gap-2">
                {butcher.specialty.map((spec, i) => (
                  <span key={i} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
                <div className="text-center">
                    <div className="text-2xl font-bold text-amber-500 flex items-center justify-center">
                        {butcher.rating} <span className="text-base ml-1">★</span>
                    </div>
                    <div className="text-xs text-slate-400">{butcher.reviews} reviews</div>
                </div>
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(butcher.name + ' ' + butcher.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:scale-110 transition-all shadow-sm border border-emerald-100"
                    title="Open in Google Maps"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.447-.894L15 7m0 13V7"></path></svg>
                </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
          <a 
            href={`https://www.google.com/maps/search/turkse+slager+${city}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-800 hover:underline"
          >
              Zoek zelf verder in {city} op Google Maps &rarr;
          </a>
      </div>
    </div>
  );
};
