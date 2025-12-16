
import React, { useEffect } from 'react';

interface MetaHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: Record<string, any>;
  ogType?: 'website' | 'article' | 'product';
  image?: string;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  canonicalPath,
  jsonLd,
  ogType = 'website',
  image = 'https://placehold.co/1200x630/059669/ffffff?text=SalaatWijzer', // Default fallback image updated
}) => {
  useEffect(() => {
    // 1. Basic SEO
    document.title = title;

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 2. Canonical URL
    // Used for clean indexing by search engines
    const baseUrl = 'https://salaatwijzer.nl'; // Replace with actual domain in production
    const fullUrl = `${baseUrl}${canonicalPath}`;

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 3. Open Graph (Social Sharing)
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', fullUrl);
    setMetaTag('og:type', ogType);
    setMetaTag('og:image', image);
    setMetaTag('og:site_name', 'SalaatWijzer');
    setMetaTag('og:locale', 'nl_NL');

    // 4. JSON-LD Structured Data
    if (jsonLd) {
      let script = document.querySelector("script[type='application/ld+json']");
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonicalPath, jsonLd, ogType, image]);

  return null;
};