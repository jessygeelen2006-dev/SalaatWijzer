
export interface City {
  name: string;
  slug: string;
  province: string;
}

export interface Province {
  name: string;
  slug: string;
  cities: City[];
}

export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  [key: string]: string;
}

export interface PrayerDate {
  readable: string;
  timestamp: string;
  gregorian: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
    };
    month: {
      number: number;
      en: string;
    };
    year: string;
  };
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
    };
    year: string;
  };
}

export interface DailyPrayerData {
  timings: PrayerTimings;
  date: PrayerDate;
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: {
      id: number;
      name: string;
      params: {
        Fajr: number;
        Isha: number;
      };
    };
  };
}

export interface ApiResponse {
  code: number;
  status: string;
  data: DailyPrayerData;
}

// Nieuwe interface voor Dua's
export interface Dua {
  slug: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  category: 'Ochtend & Avond' | 'Thuis & Familie' | 'Reizen & Onderweg' | 'Emoties & Bescherming' | 'Gebed & Moskee' | 'Eten & Drinken' | 'Ziekte & Gezondheid' | 'Natuur & Weer' | 'Werk & Succes' | 'Vergeving & Spijt';
  source?: string; // e.g. Sahih Bukhari
  context: string; // Uitgebreide tekst voor pSEO body
  benefits?: string[]; // Bullets voor "Deugden"
  audio?: string; // Path to mp3 file (e.g., /audio/dua-slug.mp3)
}

// Nieuwe interface voor Turkse Slagers
export interface Butcher {
  name: string;
  address: string;
  rating: number; // 1.0 - 5.0
  reviews: number;
  specialty: string[];
}
