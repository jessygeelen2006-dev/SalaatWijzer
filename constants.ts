
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Province, City } from './types';

// Helper functie om data efficiënt te genereren en slugs consistent te houden.
// Dit voorkomt dat we duizenden regels herhalende code moeten schrijven.
const createProvince = (name: string, slug: string, cityNames: string[]): Province => {
  const cities: City[] = cityNames.sort().map(cityName => {
    // Slugify logic: 's-Hertogenbosch -> s-hertogenbosch, Alphen aan den Rijn -> alphen-aan-den-rijn
    const citySlug = cityName
      .toLowerCase()
      .trim()
      .replace(/'/g, '') // Remove apostrophes (e.g. 's-Gravenhage -> s-gravenhage)
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-'); // Replace spaces with dashes

    return {
      name: cityName,
      slug: citySlug,
      province: slug
    };
  });

  return {
    name,
    slug,
    cities
  };
};

// Hieronder een zeer uitgebreide lijst van plaatsen in Nederland, gegroepeerd per provincie.
// Dit dekt de meeste zoekintenties voor lokale gebedstijden.

export const PROVINCES: Province[] = [
  createProvince('Groningen', 'groningen', [
    'Groningen', 'Appingedam', 'Delfzijl', 'Eemshaven', 'Haren', 'Hoogezand', 'Sappemeer', 
    'Stadskanaal', 'Veendam', 'Winschoten', 'Bedum', 'Leek', 'Zuidhorn', 'Marum', 
    'Uithuizen', 'Oude Pekela', 'Nieuwe Pekela', 'Ter Apel', 'Bellingwolde', 'Grootegast', 
    'Ten Boer', 'Loppersum', 'Middelstum', 'Winsum', 'Vlagtwedde', 'Musselkanaal', 'Scheemda',
    'Finsterwolde', 'Bad Nieuweschans', 'Slochteren', 'Siddeburen', 'Zuidbroek', 'Noordbroek'
  ]),

  createProvince('Friesland', 'friesland', [
    'Leeuwarden', 'Sneek', 'Heerenveen', 'Drachten', 'Harlingen', 'Franeker', 'Dokkum', 
    'Bolsward', 'Joure', 'Wolvega', 'Lemmer', 'Gorredijk', 'Stiens', 'Grou', 'Burgum', 
    'Workum', 'Hindeloopen', 'Sloten', 'Stavoren', 'IJlst', 'Makkum', 'Kollum', 
    'Buitenpost', 'Surhuisterveen', 'Damwoude', 'Zwaagwesteinde', 'Oosterwolde', 
    'Appelscha', 'Balk', 'Koudum', 'Wommels', 'Dronryp', 'Menaldum', 'Berlikum', 
    'Sint Annaparochie', 'Hallum', 'Ferwert', 'Holwerd', 'Ameland', 'Vlieland', 
    'Terschelling', 'Schiermonnikoog'
  ]),

  createProvince('Drenthe', 'drenthe', [
    'Assen', 'Emmen', 'Hoogeveen', 'Meppel', 'Coevorden', 'Klazienaveen', 'Beilen', 
    'Roden', 'Borger', 'Zuidlaren', 'Eelde', 'Gieten', 'Westerbork', 'Norg', 'Diever', 
    'Dwingeloo', 'Havelte', 'Ruinen', 'Vries', 'Paterswolde', 'Peize', 'Schoonebeek', 
    'Nieuw-Amsterdam', 'Erica', 'Emmer-Compascuum', 'Ter Apel', 'Valthermond', 
    'Tweede Exloërmond', 'Grolloo', 'Rolde', 'Smilde', 'Bovensmilde', 'Hooghalen'
  ]),

  createProvince('Overijssel', 'overijssel', [
    'Zwolle', 'Enschede', 'Deventer', 'Hengelo', 'Almelo', 'Kampen', 'Rijssen', 
    'Hardenberg', 'Nijverdal', 'Raalte', 'Oldenzaal', 'Steenwijk', 'Haaksbergen', 
    'Dalfsen', 'Losser', 'Dedemsvaart', 'Ommen', 'Wierden', 'Staphorst', 'Genemuiden', 
    'Tubbergen', 'Borne', 'Goor', 'Lochem', 'Vriezenveen', 'Denekamp', 'Ootmarsum', 
    'Hasselt', 'Zwartsluis', 'Vollenhove', 'Giethoorn', 'Markelo', 'Diepenheim', 
    'Delden', 'Holten', 'Hellendoorn', 'Gramsbergen', 'Balkbrug', 'Nieuwleusen', 
    'IJsselmuiden', 'Bathmen'
  ]),

  createProvince('Flevoland', 'flevoland', [
    'Almere', 'Almere Buiten', 'Almere Haven', 'Almere Stad', 'Almere Poort',
    'Lelystad', 'Dronten', 'Emmeloord', 'Zeewolde', 'Urk', 'Biddinghuizen', 
    'Swifterbant', 'Marknesse', 'Ens', 'Tollebeek', 'Luttelgeest', 'Nagele', 
    'Rutten', 'Creil', 'Espel', 'Bant', 'Kraggenburg'
  ]),

  createProvince('Gelderland', 'gelderland', [
    'Arnhem', 'Nijmegen', 'Apeldoorn', 'Ede', 'Doetinchem', 'Barneveld', 'Zutphen', 
    'Harderwijk', 'Tiel', 'Wageningen', 'Wijchen', 'Culemborg', 'Zevenaar', 
    'Geldermalsen', 'Epe', 'Winterswijk', 'Nunspeet', 'Zaltbommel', 'Druten', 
    'Duiven', 'Groesbeek', 'Putten', 'Ermelo', 'Nijkerk', 'Lichtenvoorde', 'Dieren', 
    'Brummen', 'Elburg', 'Lochem', 'Bemmel', 'Renkum', 'Didam', 'Doesburg', 
    'Hattem', 'Heerde', 'Vaassen', 'Twello', 'Velp', 'Rheden', 'Oosterbeek', 
    'Doorwerth', 'Bennekom', 'Lunteren', 'Voorthuizen', 'Scherpenzeel', 'Hoevelaken', 
    'Beuningen', 'Huissen', 'Elst', 'Gendt', 'Westervoort', 's-Heerenberg', 
    'Varsseveld', 'Aalten', 'Borculo', 'Eibergen', 'Neede', 'Ruurlo', 'Vorden', 
    'Hengelo (Gld)', 'Zelhem', 'Wezep', 'Oldebroek', 'T'
  ]),

  createProvince('Utrecht', 'utrecht', [
    'Utrecht', 'Amersfoort', 'Veenendaal', 'Zeist', 'Nieuwegein', 'Woerden', 
    'Houten', 'Soest', 'IJsselstein', 'Maarssen', 'Leusden', 'Baarn', 'Bilthoven', 
    'De Meern', 'Mijdrecht', 'Vianen', 'Bunschoten-Spakenburg', 'Wijk bij Duurstede', 
    'Rhenen', 'Breukelen', 'Driebergen-Rijsenburg', 'Bunnik', 'Montfoort', 
    'Oudewater', 'Loosdrecht', 'Vleuten', 'Harmelen', 'Abcoude', 'Wilnis', 
    'Vinkeveen', 'Doorn', 'Maarn', 'Amerongen', 'Leersum', 'Woudenberg', 
    'Renswoude', 'Eemnes', 'Lopik', 'Benschop'
  ]),

  createProvince('Noord-Holland', 'noord-holland', [
    'Amsterdam', 'Haarlem', 'Alkmaar', 'Zaanstad', 'Zaandam', 'Amstelveen', 
    'Hilversum', 'Purmerend', 'Hoorn', 'Den Helder', 'Heerhugowaard', 'Weesp', 
    'Bussum', 'Naarden', 'Huizen', 'Beverwijk', 'Heemskerk', 'Castricum', 
    'Aalsmeer', 'Uithoorn', 'Heemstede', 'Zandvoort', 'Bloemendaal', 'IJmuiden', 
    'Velsen-Noord', 'Velsen-Zuid', 'Velserbroek', 'Santpoort', 'Haarlemmerliede', 
    'Halfweg', 'Zwanenburg', 'Badhoevedorp', 'Hoofddorp', 'Nieuw-Vennep', 
    'Lisse', 'Hillegom', 'Sassenheim', 'Voorhout', 'Noordwijkerhout', 'Schagen', 
    'Enkhuizen', 'Medemblik', 'Opmeer', 'Wognum', 'Grootebroek', 'Bovenkarspel', 
    'Andijk', 'Wervershoof', 'Heiloo', 'Limmen', 'Akersloot', 'Uitgeest', 
    'Krommenie', 'Wormerveer', 'Wormer', 'Koog aan de Zaan', 'Zaandijk', 
    'Assendelft', 'Oostzaan', 'Landsmeer', 'Volendam', 'Edam', 'Monnickendam', 
    'Middenbeemster', 'Texel', 'Den Burg'
  ]),

  createProvince('Zuid-Holland', 'zuid-holland', [
    'Rotterdam', 'Den Haag', 's-Gravenhage', 'Leiden', 'Dordrecht', 'Zoetermeer', 
    'Delft', 'Gouda', 'Alphen aan den Rijn', 'Schiedam', 'Vlaardingen', 'Spijkenisse', 
    'Capelle aan den IJssel', 'Katwijk', 'Rijswijk', 'Voorburg', 'Leidschendam', 
    'Wassenaar', 'Voorschoten', 'Oegstgeest', 'Leiderdorp', 'Zoeterwoude', 
    'Noordwijk', 'Noordwijkerhout', 'Lisse', 'Hillegom', 'Teylingen', 'Kaag en Braassem', 
    'Nieuwkoop', 'Bodegraven', 'Reeuwijk', 'Waddinxveen', 'Boskoop', 'Lansingerland', 
    'Berkel en Rodenrijs', 'Bergschenhoek', 'Bleiswijk', 'Pijnacker', 'Nootdorp', 
    'Westland', 'Naaldwijk', 's-Gravenzande', 'Monster', 'Wateringen', 'De Lier', 
    'Honselersdijk', 'Poeldijk', 'Maassluis', 'Midden-Delfland', 'Schipluiden', 
    'Maasland', 'Krimpen aan den IJssel', 'Krimpen aan de Lek', 'Lekkerkerk', 
    'Ouderkerk aan den IJssel', 'Ridderkerk', 'Barendrecht', 'Albrandswaard', 
    'Rhoon', 'Poortugaal', 'Hellevoetsluis', 'Brielle', 'Westvoorne', 'Rockanje', 
    'Oostvoorne', 'Goeree-Overflakkee', 'Middelharnis', 'Sommelsdijk', 'Ouddorp', 
    'Hoek van Holland', 'Zwijndrecht', 'Hendrik-Ido-Ambacht', 'Alblasserdam', 
    'Papendrecht', 'Sliedrecht', 'Hardinxveld-Giessendam', 'Gorinchem', 'Leerdam', 
    'Vianen', 'Giessenlanden', 'Molenwaard', 'Oud-Beijerland', 'Strijen', 
    'Cromstrijen', 'Korendijk', 'Binnenmaas'
  ]),

  createProvince('Zeeland', 'zeeland', [
    'Middelburg', 'Vlissingen', 'Goes', 'Terneuzen', 'Zierikzee', 'Hulst', 
    'Tholen', 'Veere', 'Kapelle', 'Yerseke', 'Breskens', 'Oostburg', 'Sluis', 
    'Axel', 'Sas van Gent', 'Biervliet', 'Aardenburg', 'IJzendijke', 'Hoek', 
    'Zaamslag', 'Kloosterzande', 'Westdorpe', 'Koewacht', 'Vogelwaarde', 
    'Heinkenszand', 's-Gravenpolder', 'Kruiningen', 'Krabbendijke', 'Rilland', 
    'Hansweert', 'Wemeldinge', 'Kortgene', 'Kamperland', 'Domburg', 'Westkapelle', 
    'Oostkapelle', 'Vrouwenpolder', 'Serooskerke', 'Koudekerke', 'Zoutelande', 
    'Bruinisse', 'Burgh-Haamstede', 'Renesse', 'Nieuwerkerk', 'Oosterland', 
    'Sint-Maartensdijk', 'Sint-Annaland'
  ]),

  createProvince('Noord-Brabant', 'noord-brabant', [
    'Eindhoven', 'Tilburg', 'Breda', 's-Hertogenbosch', 'Den Bosch', 'Helmond', 
    'Roosendaal', 'Oss', 'Bergen op Zoom', 'Oosterhout', 'Waalwijk', 'Veldhoven', 
    'Uden', 'Veghel', 'Boxtel', 'Best', 'Valkenswaard', 'Geldrop', 'Mierlo', 
    'Nuenen', 'Deurne', 'Gemert', 'Bakel', 'Laarbeek', 'Asten', 'Someren', 
    'Cranendonck', 'Budel', 'Heeze', 'Leende', 'Waalre', 'Eersel', 'Bladel', 
    'Reusel', 'Oirschot', 'Hilvarenbeek', 'Goirle', 'Riel', 'Loon op Zand', 
    'Kaatsheuvel', 'Dongen', 'Gilze', 'Rijen', 'Alphen-Chaam', 'Baarle-Nassau', 
    'Etten-Leur', 'Zundert', 'Rijsbergen', 'Rucphen', 'Halderberge', 'Oudenbosch', 
    'Zevenbergen', 'Moerdijk', 'Klundert', 'Willemstad', 'Steenbergen', 'Woensdrecht', 
    'Hoogerheide', 'Ossendrecht', 'Geertruidenberg', 'Raamsdonksveer', 'Drimmelen', 
    'Made', 'Werkendam', 'Woudrichem', 'Aalburg', 'Heusden', 'Drunen', 'Vlijmen', 
    'Sint-Michielsgestel', 'Schijndel', 'Vught', 'Haaren', 'Oisterwijk', 
    'Bernheze', 'Heesch', 'Landerd', 'Grave', 'Cuijk', 'Boxmeer', 'Sint Anthonis', 
    'Mill en Sint Hubert'
  ]),

  createProvince('Limburg', 'limburg', [
    'Maastricht', 'Venlo', 'Sittard', 'Geleen', 'Heerlen', 'Roermond', 'Weert', 
    'Kerkrade', 'Landgraaf', 'Venray', 'Brunssum', 'Stein', 'Beek', 'Gennep', 
    'Valkenburg', 'Horst', 'Sevenum', 'Panningen', 'Helden', 'Meijel', 'Kessel', 
    'Maasbree', 'Baarlo', 'Tegelen', 'Blerick', 'Reuver', 'Beesel', 'Swalmen', 
    'Haelen', 'Heythuysen', 'Roggel', 'Nederweert', 'Stramproy', 'Echt', 'Susteren', 
    'Born', 'Elsloo', 'Beek', 'Meerssen', 'Bunde', 'Gulpen', 'Wittem', 'Vaals', 
    'Margraten', 'Eijsden', 'Simpelveld', 'Voerendaal', 'Nuth', 'Schinnen', 
    'Onderbanken', 'Schinveld'
  ])
];

export const getProvinceBySlug = (slug: string) =>
  PROVINCES.find((p) => p.slug === slug);

export const getCityBySlug = (provinceSlug: string, citySlug: string) => {
  const province = getProvinceBySlug(provinceSlug);
  return province?.cities.find((c) => c.slug === citySlug);
};

export const ALL_CITIES = PROVINCES.flatMap((p) => p.cities);

// --- Custom Router Implementation ---
// Because react-router-dom is missing in the environment, we implement a lightweight
// version here to satisfy the app's requirements without adding new files.

const RouterContext = createContext<{
  path: string;
  navigate: (path: string, options?: { replace?: boolean }) => void;
}>({
  path: typeof window !== 'undefined' ? window.location.pathname : '/',
  navigate: () => {},
});

export const BrowserRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (newPath: string, options?: { replace?: boolean }) => {
    if (options?.replace) {
      window.history.replaceState({}, '', newPath);
    } else {
      window.history.pushState({}, '', newPath);
    }
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { path } = useContext(RouterContext);
  
  const routes = React.Children.toArray(children);
  for (const route of routes) {
    if (!React.isValidElement(route)) continue;
    const { path: routePath, element } = route.props as { path: string; element: React.ReactNode };

    // Basic regex matching for routes like /gebedstijden/:provinceSlug
    let regexPath = routePath
      .replace(/\*/g, '.*')
      .replace(/:[A-Za-z0-9_]+/g, '([^/]+)');

    if (regexPath === '/') regexPath = '^/$';
    else regexPath = '^' + regexPath + '$';

    if (new RegExp(regexPath).test(path)) {
      return <>{element}</>;
    }
  }
  return null;
};

export const Route: React.FC<{ path: string; element: React.ReactNode }> = () => null;

export const Link: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({
  to,
  className,
  children,
}) => {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};

export const Navigate: React.FC<{ to: string; replace?: boolean }> = ({ to, replace }) => {
  const { navigate } = useContext(RouterContext);
  useEffect(() => {
    navigate(to, { replace });
  }, [to, replace, navigate]);
  return null;
};

export function useParams<T extends Record<string, string>>(): T {
  const { path } = useContext(RouterContext);
  const parts = path.split('/').filter(Boolean);

  // Hardcoded matching logic for the known app routes
  if (path.startsWith('/gebedstijden/')) {
    if (parts.length === 3) {
      return { provinceSlug: parts[1], citySlug: parts[2] } as unknown as T;
    }
    if (parts.length === 2) {
      return { provinceSlug: parts[1] } as unknown as T;
    }
  }
  if (path.startsWith('/dua/') && parts.length === 2) {
    return { duaSlug: parts[1] } as unknown as T;
  }
  return {} as T;
}
