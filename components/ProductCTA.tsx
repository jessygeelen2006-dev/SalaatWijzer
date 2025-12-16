
import React from 'react';
import { Link } from '../constants';

interface ProductCTAProps {
  variant?: 'compact' | 'full';
}

export const ProductCTA: React.FC<ProductCTAProps> = ({ variant = 'full' }) => {
  return (
    <div className={`bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl overflow-hidden shadow-sm ${variant === 'compact' ? 'p-4' : 'p-6 md:p-8'}`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Realistic Thumbnail Cover */}
        <div className="shrink-0">
            <div className={`relative bg-emerald-900 rounded-r-md rounded-l-sm shadow-md overflow-hidden ${variant === 'compact' ? 'w-24 h-36' : 'w-32 h-48 md:w-40 md:h-56'}`}>
                {/* Background Image */}
                <div 
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1629738722789-9486c9068b8e?q=80&w=400&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                
                {/* Overlay & Text */}
                <div className="relative h-full w-full p-3 flex flex-col items-center justify-between text-center border-l-2 border-emerald-950/30">
                    <div className="w-full border border-amber-100/20 h-full flex flex-col justify-center p-2 rounded-sm bg-gradient-to-b from-transparent to-black/30">
                        <span className="font-serif text-[8px] text-amber-100/70 tracking-wider uppercase mb-2">Al-Yawn</span>
                        <h4 className="font-serif font-bold text-amber-50 leading-tight text-sm drop-shadow-sm">
                            Het Dagelijkse<br/>Gebedsboekje
                        </h4>
                        <div className="w-8 h-[1px] bg-amber-200/50 mx-auto mt-2 mb-1"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-grow text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide rounded-full mb-2">
            Nieuw Digitaal Product
          </div>
          <h3 className={`font-bold text-slate-900 ${variant === 'compact' ? 'text-lg' : 'text-2xl md:text-3xl'}`}>
            Het Dagelijkse Gebedsboekje
          </h3>
          <p className={`text-slate-600 mt-2 ${variant === 'compact' ? 'text-sm' : 'text-lg'}`}>
            Structuur, rust en focus voor je dagelijkse gebeden. Een PDF-gids (45-60 pag.) om je Salah te verdiepen.
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-emerald-700">€9,99</span>
                <span className="text-sm text-slate-400 line-through">€14,99</span>
            </div>
            <Link 
                to="/product/gebedsboekje"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
                Bekijk het boekje
            </Link>
          </div>
          {variant === 'full' && (
              <p className="mt-3 text-xs text-slate-500">
                  Ook beschikbaar: Speciale Ramadan Editie (€12,99)
              </p>
          )}
        </div>
      </div>
    </div>
  );
};
