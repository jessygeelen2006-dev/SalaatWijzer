import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProvinceBySlug } from '../constants';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MetaHead } from '../components/MetaHead';

export const ProvincePage: React.FC = () => {
  const { provinceSlug } = useParams<{ provinceSlug: string }>();
  const province = getProvinceBySlug(provinceSlug || '');

  if (!province) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <MetaHead
        title={`Gebedstijden ${province.name} - Alle Steden`}
        description={`Overzicht van gebedstijden voor alle steden in de provincie ${province.name}. Vind snel jouw lokale moskee tijden.`}
        canonicalPath={`/gebedstijden/${province.slug}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: province.name, path: `/gebedstijden/${province.slug}` }]} />

        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Gebedstijden in {province.name}
        </h1>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {province.cities.map((city) => (
              <li key={city.slug}>
                <Link
                  to={`/gebedstijden/${province.slug}/${city.slug}`}
                  className="block p-4 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all group"
                >
                  <span className="font-medium text-slate-800 group-hover:text-emerald-700">
                    Gebedstijden {city.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
