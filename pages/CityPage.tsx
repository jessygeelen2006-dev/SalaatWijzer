
import React, { useEffect, useState } from 'react';
import { getCityBySlug, getProvinceBySlug, Link, Navigate, useParams } from '../constants';
import { fetchPrayerTimes } from '../services/api';
import { DailyPrayerData } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrayerTable } from '../components/PrayerTable';
import { MetaHead } from '../components/MetaHead';
import { ProductCTA } from '../components/ProductCTA';

export const CityPage: React.FC = () => {
  const { provinceSlug, citySlug } = useParams<{ provinceSlug: string; citySlug: string }>();
  const [data, setData] = useState<DailyPrayerData | null>(null);
  const [loading, setLoading] = useState(true);

  const province = getProvinceBySlug(provinceSlug || '');
  const city = getCityBySlug(provinceSlug || '', citySlug || '');

  // Fetch data on mount or slug change
  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchPrayerTimes(city.name).then((res) => {
        setData(res);
        setLoading(false);
      });
    }
  }, [city]);

  if (!province || !city) {
    return <Navigate to="/" replace />;
  }

  // Calculate formatted date from API data to ensure accuracy
  const getFormattedDate = () => {
    if (!data) return undefined;
    try {
      // API format is typically DD-MM-YYYY in gregorian.date
      const [day, month, year] = data.date.gregorian.date.split('-');
      
      // Safety check: ensure we have valid numbers
      if (!day || !month || !year) throw new Error("Invalid date format");

      const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
      
      return dateObj.toLocaleDateString('nl-NL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      // Fallback: Return undefined so PrayerTable uses `new Date()` (Today)
      // This prevents showing "16-12-2016" string if API returns weird data.
      return undefined;
    }
  };

  const displayDate = getFormattedDate();

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": city.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": province.name,
      "addressCountry": "NL"
    },
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": province.name
    },
    "event": data ? [
        { "@type": "Event", "name": "Fajr Gebed", "startDate": `${data.date.gregorian.date}T${data.timings.Fajr}` },
        { "@type": "Event", "name": "Dhuhr Gebed", "startDate": `${data.date.gregorian.date}T${data.timings.Dhuhr}` },
        { "@type": "Event", "name": "Maghrib Gebed", "startDate": `${data.date.gregorian.date}T${data.timings.Maghrib}` }
    ] : []
  };

  const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
          {
              "@type": "Question",
              "name": `Hoe laat is Fajr in ${city.name} vandaag?`,
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": data ? `Vandaag is het Fajr gebed in ${city.name} om ${data.timings.Fajr}.` : `Bekijk de actuele tijden hierboven.`
              }
          }
      ]
  };

  // Combine schemas
  const combinedSchema = [jsonLd, faqJsonLd];

  return (
    <>
      <MetaHead
        title={`Gebedstijden ${city.name} - Vandaag & Actueel`}
        description={`Actuele gebedstijden voor ${city.name} (${province.name}). Bekijk hoe laat Fajr, Dhuhr, Asr, Maghrib en Isha vandaag zijn.`}
        canonicalPath={`/gebedstijden/${province.slug}/${city.slug}`}
        jsonLd={combinedSchema}
        ogType="article"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: province.name, path: `/gebedstijden/${province.slug}` },
            { label: city.name, path: `/gebedstijden/${province.slug}/${city.slug}` },
          ]}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : data ? (
          <main>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Gebedstijden {city.name}
            </h1>
            <p className="text-slate-600 mb-8 text-lg">
               Actuele islamitische gebedstijden voor vandaag, <span className="capitalize">{displayDate || new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}</span>.
            </p>

            <PrayerTable 
              timings={data.timings} 
              city={city.name} 
              dateFormatted={displayDate}
            />

            {/* PRODUCT PLACEMENT: High intent location */}
            <div className="mb-12">
               <ProductCTA variant="compact" />
            </div>

            {/* Content for SEO and Local Context */}
            <div className="prose prose-slate max-w-none mt-12 bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm">
                <h3>Over het gebed in {city.name}</h3>
                <p>
                    Moslims in <strong>{city.name}</strong> en omgeving ({province.name}) gebruiken deze tijden om hun dagelijkse gebeden te verrichten. 
                    De tijden worden automatisch berekend op basis van de geografische coördinaten van {city.name}.
                </p>
                
                <h4>Lokale Informatie</h4>
                <p>
                    Ben je op zoek naar een plek om te bidden? In {city.name} en de regio {province.name} zijn diverse moskeeën te vinden. 
                    Wij adviseren om de exacte Iqamah tijden altijd bij uw lokale moskee te controleren, aangezien deze kunnen afwijken van de astronomische tijden.
                </p>

                <h4>Veelgestelde vragen</h4>
                <div className="not-prose space-y-4 mt-6">
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-bold text-slate-900">Hoe laat is het Iftar in {city.name}?</p>
                        <p className="text-slate-700 mt-1">Iftar is gelijk aan de tijd van Maghrib. Vandaag is dat om <strong>{data.timings.Maghrib}</strong>.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-bold text-slate-900">Welke berekening wordt gebruikt?</p>
                        <p className="text-slate-700 mt-1">Wij tonen tijden gebaseerd op de <em>Muslim World League</em> methode, standaard voor Europa.</p>
                    </div>
                </div>
            </div>

            {/* Internal Linking Area */}
            <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Andere steden in {province.name}</h3>
                <div className="flex flex-wrap gap-2">
                    {province.cities.filter(c => c.slug !== city.slug).map(c => (
                        <Link 
                            key={c.slug} 
                            to={`/gebedstijden/${province.slug}/${c.slug}`}
                            className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                        >
                            {c.name}
                        </Link>
                    ))}
                </div>
            </div>
          </main>
        ) : (
          <div className="text-center py-12 text-red-600">
            Er is een fout opgetreden bij het laden van de gegevens. Probeer het later opnieuw.
          </div>
        )}
      </div>
    </>
  );
};
