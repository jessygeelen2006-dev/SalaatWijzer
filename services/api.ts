
import { DailyPrayerData, ApiResponse } from '../types';

// Aladhan API Endpoint
const API_BASE = 'https://api.aladhan.com/v1/timingsByCity';

/**
 * Fetches prayer times for a specific city.
 * Uses method 3 (Muslim World League) as requested for reliable European calculation.
 */
export const fetchPrayerTimes = async (city: string): Promise<DailyPrayerData | null> => {
  try {
    // FIX: Aladhan API requires DD-MM-YYYY format in the path. 
    // ISO string gives YYYY-MM-DD which causes the API to default to random dates (like 2016).
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const today = `${day}-${month}-${year}`; // DD-MM-YYYY

    const country = 'Netherlands';
    const method = 3; // Muslim World League

    const url = `${API_BASE}/${today}?city=${encodeURIComponent(
      city
    )}&country=${encodeURIComponent(country)}&method=${method}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch prayer times');
    }

    const json: ApiResponse = await response.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    return null;
  }
};
