import { Province } from './types';

// In a real programmatic SEO app, this would come from a database or a headless CMS.
// We map the provided cities to their likely provinces for the URL structure.
// This handles the user requirement: /gebedstijden/{provincie}/{stad}

export const PROVINCES: Province[] = [
  {
    name: 'Noord-Holland',
    slug: 'noord-holland',
    cities: [
      { name: 'Amsterdam', slug: 'amsterdam', province: 'noord-holland' },
      { name: 'Haarlem', slug: 'haarlem', province: 'noord-holland' },
      { name: 'Alkmaar', slug: 'alkmaar', province: 'noord-holland' },
      { name: 'Hilversum', slug: 'hilversum', province: 'noord-holland' },
      { name: 'Amstelveen', slug: 'amstelveen', province: 'noord-holland' },
      { name: 'Purmerend', slug: 'purmerend', province: 'noord-holland' },
      { name: 'Hoorn', slug: 'hoorn', province: 'noord-holland' },
      { name: 'Zaandam', slug: 'zaandam', province: 'noord-holland' }, // Representing Zaanstad
      { name: 'Heerhugowaard', slug: 'heerhugowaard', province: 'noord-holland' },
      { name: 'Weesp', slug: 'weesp', province: 'noord-holland' },
      { name: 'Bussum', slug: 'bussum', province: 'noord-holland' },
      { name: 'Huizen', slug: 'huizen', province: 'noord-holland' },
      { name: 'Den Helder', slug: 'den-helder', province: 'noord-holland' },
      { name: 'Beverwijk', slug: 'beverwijk', province: 'noord-holland' },
      { name: 'Heemskerk', slug: 'heemskerk', province: 'noord-holland' },
      { name: 'Castricum', slug: 'castricum', province: 'noord-holland' },
      { name: 'Aalsmeer', slug: 'aalsmeer', province: 'noord-holland' },
    ],
  },
  {
    name: 'Zuid-Holland',
    slug: 'zuid-holland',
    cities: [
      { name: 'Rotterdam', slug: 'rotterdam', province: 'zuid-holland' },
      { name: 'Den Haag', slug: 'den-haag', province: 'zuid-holland' },
      { name: 'Leiden', slug: 'leiden', province: 'zuid-holland' },
      { name: 'Dordrecht', slug: 'dordrecht', province: 'zuid-holland' },
      { name: 'Zoetermeer', slug: 'zoetermeer', province: 'zuid-holland' },
      { name: 'Delft', slug: 'delft', province: 'zuid-holland' },
      { name: 'Gouda', slug: 'gouda', province: 'zuid-holland' },
      { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn', province: 'zuid-holland' },
      { name: 'Schiedam', slug: 'schiedam', province: 'zuid-holland' },
      { name: 'Spijkenisse', slug: 'spijkenisse', province: 'zuid-holland' },
      { name: 'Vlaardingen', slug: 'vlaardingen', province: 'zuid-holland' },
      { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel', province: 'zuid-holland' },
      { name: 'Katwijk', slug: 'katwijk', province: 'zuid-holland' },
      { name: 'Rijswijk', slug: 'rijswijk', province: 'zuid-holland' },
      { name: 'Voorburg', slug: 'voorburg', province: 'zuid-holland' },
      { name: 'Waddinxveen', slug: 'waddinxveen', province: 'zuid-holland' },
      { name: 'Hellevoetsluis', slug: 'hellevoetsluis', province: 'zuid-holland' },
      { name: 'Gorinchem', slug: 'gorinchem', province: 'zuid-holland' },
      { name: 'Maassluis', slug: 'maassluis', province: 'zuid-holland' },
      { name: 'Ridderkerk', slug: 'ridderkerk', province: 'zuid-holland' },
      { name: 'Barendrecht', slug: 'barendrecht', province: 'zuid-holland' },
    ],
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    cities: [
      { name: 'Utrecht', slug: 'utrecht', province: 'utrecht' },
      { name: 'Amersfoort', slug: 'amersfoort', province: 'utrecht' },
      { name: 'Veenendaal', slug: 'veenendaal', province: 'utrecht' },
      { name: 'Zeist', slug: 'zeist', province: 'utrecht' },
      { name: 'Nieuwegein', slug: 'nieuwegein', province: 'utrecht' },
      { name: 'Houten', slug: 'houten', province: 'utrecht' },
      { name: 'Woerden', slug: 'woerden', province: 'utrecht' },
      { name: 'IJsselstein', slug: 'ijsselstein', province: 'utrecht' },
      { name: 'Soest', slug: 'soest', province: 'utrecht' },
      { name: 'Baarn', slug: 'baarn', province: 'utrecht' },
      { name: 'Leusden', slug: 'leusden', province: 'utrecht' },
    ],
  },
  {
    name: 'Gelderland',
    slug: 'gelderland',
    cities: [
      { name: 'Arnhem', slug: 'arnhem', province: 'gelderland' },
      { name: 'Nijmegen', slug: 'nijmegen', province: 'gelderland' },
      { name: 'Apeldoorn', slug: 'apeldoorn', province: 'gelderland' },
      { name: 'Ede', slug: 'ede', province: 'gelderland' },
      { name: 'Doetinchem', slug: 'doetinchem', province: 'gelderland' },
      { name: 'Zutphen', slug: 'zutphen', province: 'gelderland' },
      { name: 'Harderwijk', slug: 'harderwijk', province: 'gelderland' },
      { name: 'Tiel', slug: 'tiel', province: 'gelderland' },
      { name: 'Wageningen', slug: 'wageningen', province: 'gelderland' },
      { name: 'Zevenaar', slug: 'zevenaar', province: 'gelderland' },
      { name: 'Barneveld', slug: 'barneveld', province: 'gelderland' },
      { name: 'Culemborg', slug: 'culemborg', province: 'gelderland' },
      { name: 'Winterswijk', slug: 'winterswijk', province: 'gelderland' },
      { name: 'Nijkerk', slug: 'nijkerk', province: 'gelderland' },
    ],
  },
  {
    name: 'Noord-Brabant',
    slug: 'noord-brabant',
    cities: [
      { name: 'Eindhoven', slug: 'eindhoven', province: 'noord-brabant' },
      { name: 'Tilburg', slug: 'tilburg', province: 'noord-brabant' },
      { name: 'Breda', slug: 'breda', province: 'noord-brabant' },
      { name: "'s-Hertogenbosch", slug: 'den-bosch', province: 'noord-brabant' },
      { name: 'Helmond', slug: 'helmond', province: 'noord-brabant' },
      { name: 'Roosendaal', slug: 'roosendaal', province: 'noord-brabant' },
      { name: 'Oss', slug: 'oss', province: 'noord-brabant' },
      { name: 'Bergen op Zoom', slug: 'bergen-op-zoom', province: 'noord-brabant' },
      { name: 'Oosterhout', slug: 'oosterhout', province: 'noord-brabant' },
      { name: 'Waalwijk', slug: 'waalwijk', province: 'noord-brabant' },
      { name: 'Veldhoven', slug: 'veldhoven', province: 'noord-brabant' },
      { name: 'Uden', slug: 'uden', province: 'noord-brabant' },
      { name: 'Veghel', slug: 'veghel', province: 'noord-brabant' },
    ],
  },
  {
    name: 'Overijssel',
    slug: 'overijssel',
    cities: [
      { name: 'Enschede', slug: 'enschede', province: 'overijssel' },
      { name: 'Zwolle', slug: 'zwolle', province: 'overijssel' },
      { name: 'Deventer', slug: 'deventer', province: 'overijssel' },
      { name: 'Hengelo', slug: 'hengelo', province: 'overijssel' },
      { name: 'Almelo', slug: 'almelo', province: 'overijssel' },
      { name: 'Kampen', slug: 'kampen', province: 'overijssel' },
      { name: 'Rijssen', slug: 'rijssen', province: 'overijssel' },
      { name: 'Oldenzaal', slug: 'oldenzaal', province: 'overijssel' },
    ],
  },
  {
    name: 'Limburg',
    slug: 'limburg',
    cities: [
      { name: 'Maastricht', slug: 'maastricht', province: 'limburg' },
      { name: 'Venlo', slug: 'venlo', province: 'limburg' },
      { name: 'Sittard-Geleen', slug: 'sittard-geleen', province: 'limburg' },
      { name: 'Heerlen', slug: 'heerlen', province: 'limburg' },
      { name: 'Roermond', slug: 'roermond', province: 'limburg' },
      { name: 'Weert', slug: 'weert', province: 'limburg' },
      { name: 'Kerkrade', slug: 'kerkrade', province: 'limburg' },
    ],
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    cities: [
      { name: 'Groningen', slug: 'groningen', province: 'groningen' },
      { name: 'Veendam', slug: 'veendam', province: 'groningen' },
      { name: 'Stadskanaal', slug: 'stadskanaal', province: 'groningen' },
      { name: 'Hoogezand', slug: 'hoogezand', province: 'groningen' },
      { name: 'Delfzijl', slug: 'delfzijl', province: 'groningen' },
    ],
  },
  {
    name: 'Friesland',
    slug: 'friesland',
    cities: [
      { name: 'Leeuwarden', slug: 'leeuwarden', province: 'friesland' },
      { name: 'Drachten', slug: 'drachten', province: 'friesland' },
      { name: 'Sneek', slug: 'sneek', province: 'friesland' },
      { name: 'Heerenveen', slug: 'heerenveen', province: 'friesland' },
      { name: 'Harlingen', slug: 'harlingen', province: 'friesland' },
    ],
  },
  {
    name: 'Drenthe',
    slug: 'drenthe',
    cities: [
      { name: 'Assen', slug: 'assen', province: 'drenthe' },
      { name: 'Emmen', slug: 'emmen', province: 'drenthe' },
      { name: 'Hoogeveen', slug: 'hoogeveen', province: 'drenthe' },
      { name: 'Meppel', slug: 'meppel', province: 'drenthe' },
      { name: 'Coevorden', slug: 'coevorden', province: 'drenthe' },
    ],
  },
  {
    name: 'Flevoland',
    slug: 'flevoland',
    cities: [
      { name: 'Almere', slug: 'almere', province: 'flevoland' },
      { name: 'Lelystad', slug: 'lelystad', province: 'flevoland' },
      { name: 'Dronten', slug: 'dronten', province: 'flevoland' },
      { name: 'Zeewolde', slug: 'zeewolde', province: 'flevoland' },
      { name: 'Urk', slug: 'urk', province: 'flevoland' },
    ],
  },
  {
    name: 'Zeeland',
    slug: 'zeeland',
    cities: [
      { name: 'Middelburg', slug: 'middelburg', province: 'zeeland' },
      { name: 'Vlissingen', slug: 'vlissingen', province: 'zeeland' },
      { name: 'Goes', slug: 'goes', province: 'zeeland' },
      { name: 'Terneuzen', slug: 'terneuzen', province: 'zeeland' },
      { name: 'Zierikzee', slug: 'zierikzee', province: 'zeeland' },
    ],
  },
];

export const getProvinceBySlug = (slug: string) =>
  PROVINCES.find((p) => p.slug === slug);

export const getCityBySlug = (provinceSlug: string, citySlug: string) => {
  const province = getProvinceBySlug(provinceSlug);
  return province?.cities.find((c) => c.slug === citySlug);
};

export const ALL_CITIES = PROVINCES.flatMap((p) => p.cities);
