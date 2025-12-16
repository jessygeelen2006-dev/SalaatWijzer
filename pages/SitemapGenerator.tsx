
import React from 'react';
import { PROVINCES } from '../constants';
import { getAllDuas } from '../duaData';

// This is a utility page. In a real build pipeline (Next.js/Gatsby), 
// this would be a server-side script. Since we are client-side only,
// we render the XML to the screen so the developer can copy-paste it to a file.

export const SitemapGenerator: React.FC = () => {
  const baseUrl = 'https://salaatwijzer.nl'; // Updated domain
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/dua', priority: '0.9', changefreq: 'weekly' },
    { url: '/product/gebedsboekje', priority: '0.9', changefreq: 'weekly' },
  ];

  const generateXML = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static Pages
    staticPages.forEach((page) => {
      // Clean URL: No /# prefix
      const cleanUrl = page.url === '/' ? '/' : page.url;
      xml += `
  <url>
    <loc>${baseUrl}${cleanUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Dua Pages (New)
    const allDuas = getAllDuas();
    allDuas.forEach((dua) => {
        xml += `
  <url>
    <loc>${baseUrl}/dua/${dua.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    // Province Pages
    PROVINCES.forEach((province) => {
      xml += `
  <url>
    <loc>${baseUrl}/gebedstijden/${province.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

      // City Pages
      province.cities.forEach((city) => {
        xml += `
  <url>
    <loc>${baseUrl}/gebedstijden/${province.slug}/${city.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
      });
    });

    xml += `
</urlset>`;
    return xml;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Sitemap Generator (Developer Tool)</h1>
      <p className="mb-4 text-slate-600">
        Omdat dit een Single Page Application is, genereren we de sitemap dynamisch. 
        Kopieer onderstaande XML en sla het op als <code>sitemap.xml</code> in je <code>public</code> folder.
      </p>
      <textarea
        className="w-full h-96 p-4 font-mono text-xs bg-slate-900 text-emerald-400 rounded-lg shadow-inner"
        readOnly
        value={generateXML()}
      />
    </div>
  );
};