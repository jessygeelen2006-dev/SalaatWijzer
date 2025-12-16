
import React from 'react';
import { PrayerTimings } from '../types';

interface PrayerTableProps {
  timings: PrayerTimings;
  city: string;
  dateFormatted?: string;
}

export const PrayerTable: React.FC<PrayerTableProps> = ({ timings, city, dateFormatted }) => {
  const prayers = [
    { name: 'Fajr', time: timings.Fajr, icon: '🌅' },
    { name: 'Shoroeq', time: timings.Sunrise, icon: '🌤' },
    { name: 'Dhuhr', time: timings.Dhuhr, icon: '☀️' },
    { name: 'Asr', time: timings.Asr, icon: '🌥' },
    { name: 'Maghrib', time: timings.Maghrib, icon: '🌇' },
    { name: 'Isha', time: timings.Isha, icon: '🌙' },
  ];

  // Helper to determine active prayer based on current time
  const getCurrentPrayerIndex = () => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Simple parsing HH:MM
    const parseTime = (timeStr: string) => {
      const [time] = timeStr.split(' '); // Remove (EST) etc if present
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m;
    };

    for (let i = 0; i < prayers.length; i++) {
      if (currentMinutes < parseTime(prayers[i].time)) {
        return i === 0 ? 5 : i - 1; // Logic can be complex, simplifying for UI highlight
      }
    }
    return 5; // Isha or later
  };

  const activeIndex = getCurrentPrayerIndex();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-8">
      <div className="bg-emerald-600 p-4 text-white">
        <h2 className="text-xl font-bold text-center">Gebedstijden Vandaag</h2>
        <p className="text-center text-emerald-100 text-sm opacity-90 capitalize">
          {dateFormatted || new Date().toLocaleDateString('nl-NL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </div>
      <div className="p-0">
        <div className="grid grid-cols-1 divide-y divide-slate-100">
          {prayers.map((prayer, idx) => (
            <div
              key={prayer.name}
              className={`flex justify-between items-center p-4 transition-colors ${
                idx === activeIndex
                  ? 'bg-emerald-50 border-l-4 border-emerald-500'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-label={prayer.name}>
                  {prayer.icon}
                </span>
                <span
                  className={`font-medium ${
                    idx === activeIndex ? 'text-emerald-800' : 'text-slate-700'
                  }`}
                >
                  {prayer.name}
                </span>
              </div>
              <span
                className={`font-bold text-lg ${
                  idx === activeIndex ? 'text-emerald-700' : 'text-slate-900'
                }`}
              >
                {prayer.time.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
