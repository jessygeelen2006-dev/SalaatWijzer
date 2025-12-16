
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProvincePage } from './pages/ProvincePage';
import { CityPage } from './pages/CityPage';
import { ProductPage } from './pages/ProductPage';
import { SitemapGenerator } from './pages/SitemapGenerator';
import { DuaIndexPage } from './pages/DuaIndexPage';
import { DuaPage } from './pages/DuaPage';

/*
 * Technical Architecture Overview:
 * 
 * 1. Routing Strategy:
 *    Using HashRouter for client-side SPA compatibility without server configuration.
 *    Structure: /gebedstijden/:province/:city
 * 
 * 2. Data Flow:
 *    - constants.ts acts as the "Database" mapping cities to provinces.
 *    - api.ts handles fetching from external Aladhan API.
 *    - Components are functional and typed via types.ts.
 * 
 * 3. SEO Strategy (Programmatic):
 *    - MetaHead component injects dynamic Title, Description, and Canonicals into the DOM.
 *    - JSON-LD Structured data is generated per CityPage for "Place" and "Event".
 *    - Internal linking is enforced via Breadcrumbs and "Nearby Cities" lists.
 * 
 * 4. Performance:
 *    - Tailwind CSS for minimal CSS bundle size.
 *    - Fetch logic is simple and lightweight.
 */

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-emerald-700 font-bold text-xl hover:opacity-80 transition-opacity">
               <span className="text-2xl">🧭</span>
               <span className="hidden sm:inline">SalaatWijzer</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <Link to="/" className="hover:text-emerald-600 hidden sm:block">Home</Link>
                <Link to="/dua" className="hover:text-emerald-600">Dua's</Link>
                <Link to="/product/gebedsboekje" className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 transition-colors">
                  <span>📖</span>
                  <span className="hidden sm:inline">Gebedsboekje</span>
                </Link>
            </nav>
          </div>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dua" element={<DuaIndexPage />} />
            <Route path="/dua/:duaSlug" element={<DuaPage />} />
            <Route path="/product/gebedsboekje" element={<ProductPage />} />
            <Route path="/sitemap-generator" element={<SitemapGenerator />} />
            <Route path="/gebedstijden/:provinceSlug" element={<ProvincePage />} />
            <Route path="/gebedstijden/:provinceSlug/:citySlug" element={<CityPage />} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
             <div>
                <h4 className="text-white font-bold mb-4">SalaatWijzer</h4>
                <p>Uw betrouwbare gids voor islamitische gebedstijden in heel Nederland. Geoptimaliseerd voor mobiel en dagelijks bijgewerkt.</p>
             </div>
             <div>
                <h4 className="text-white font-bold mb-4">Ontdek</h4>
                <ul className="space-y-2">
                    <li><Link to="/dua" className="hover:text-white">Dua Boek & Smeekbeden</Link></li>
                    <li><Link to="/product/gebedsboekje" className="hover:text-white text-emerald-400">Het Dagelijkse Gebedsboekje</Link></li>
                </ul>
                <h4 className="text-white font-bold mb-2 mt-4">Snelle Links</h4>
                <ul className="space-y-2">
                    <li><Link to="/gebedstijden/utrecht/utrecht" className="hover:text-white">Utrecht</Link></li>
                    <li><Link to="/gebedstijden/zuid-holland/den-haag" className="hover:text-white">Den Haag</Link></li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold mb-4">Data Bron</h4>
                <p>Data via Aladhan API. Berekening: Muslim World League (MWL). Dua's uit Sahih Bukhari & Muslim. Controleer altijd bij uw lokale moskee.</p>
             </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-slate-800 text-xs">
            &copy; {new Date().getFullYear()} SalaatWijzer. Alle rechten voorbehouden.
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
