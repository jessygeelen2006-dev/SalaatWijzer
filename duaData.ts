
import { Dua } from './types';

// Dit is de database voor de Programmatic SEO Dua Pages.
// Om op te schalen naar 200+, voeg hier items toe. 
// De structuur zorgt ervoor dat elke pagina uniek en rijk aan content is.

export const DUAS: Dua[] = [
  // --- Ochtend & Avond ---
  {
    slug: 'voor-het-slapen',
    title: 'Dua voor het slapen gaan',
    category: 'Ochtend & Avond',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amutu wa ahya',
    translation: 'In Uw naam, O Allah, sterf ik en leef ik.',
    source: 'Sahih Bukhari 6312',
    context: 'Het reciteren van deze dua voor het slapengaan is een Sunnah van de Profeet (vrede zij met hem). Het herinnert ons eraan dat slaap een "kleine dood" is en dat we onze ziel aan Allah toevertrouwen voor de nacht. Het brengt rust in het hart en bescherming tijdens de slaap.',
    benefits: ['Bescherming tijdens de slaap', 'Bewustzijn van Allah voor de rust', 'Volgen van de Sunnah']
  },
  {
    slug: 'bij-het-wakker-worden',
    title: 'Dua bij het wakker worden',
    category: 'Ochtend & Avond',
    arabic: 'الْحَمْدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdu lillahil-ladhi ahyana ba’da ma amatana wa ilayhin-nushur',
    translation: 'Alle lof zij Allah Die ons tot leven heeft gebracht nadat Hij ons heeft doen sterven en tot Hem is de terugkeer.',
    source: 'Sahih Bukhari',
    context: 'Deze smeekbede is het eerste wat een moslim zegt bij het openen van de ogen. Het is een uiting van dankbaarheid voor de nieuwe dag die ons geschonken is, een nieuwe kans om goede daden te verrichten.',
    benefits: ['Dankbaarheid tonen', 'De dag beginnen met Dhikr', 'Erkenning van de opstanding']
  },

  // --- Emoties & Bescherming ---
  {
    slug: 'tegen-boze-oog',
    title: 'Dua voor bescherming tegen het boze oog',
    category: 'Emoties & Bescherming',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ',
    transliteration: 'A’udhu bi kalimatillahi at-tammati min kulli shaytanin wa hammatin wa min kulli ‘aynin lammatin',
    translation: 'Ik zoek toevlucht bij de perfecte woorden van Allah tegen elke duivel, elk giftig dier en elk jaloers oog.',
    source: 'Sahih Bukhari 3371',
    context: 'Het boze oog (Al-Ayn) is een realiteit in de Islam. Deze krachtige dua werd door de Profeet Ibrahim gebruikt voor zijn zonen Ishmael en Ishaq, en later door de Profeet Muhammad voor Hasan en Husayn. Het is essentieel voor ouders om deze over hun kinderen te reciteren.',
    benefits: ['Bescherming voor kinderen', 'Afweren van jaloezie (Hasad)', 'Spirituele veiligheid']
  },
  {
    slug: 'bij-angst-en-zorgen',
    title: 'Dua bij angst, zorgen en verdriet',
    category: 'Emoties & Bescherming',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ',
    transliteration: 'Allahumma inni a’udhu bika minal-hammi wal-hazani, wal-ajzi wal-kasali',
    translation: 'O Allah, ik zoek mijn toevlucht bij U tegen zorgen en verdriet, tegen onvermogen en luiheid.',
    source: 'Sahih Bukhari 6369',
    context: 'Mentale gezondheid is belangrijk. Deze dua is een krachtig hulpmiddel bij depressieve gevoelens, angststoornissen of algemene zorgen over de toekomst. Het erkent onze zwakte en vraagt Allah om kracht.',
    benefits: ['Verlichting van stress', 'Mentale weerbaarheid', 'Bescherming tegen luiheid']
  },
  {
    slug: 'bij-moeilijkheden',
    title: 'Dua als iets moeilijk wordt',
    category: 'Emoties & Bescherming',
    arabic: 'اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً',
    transliteration: 'Allahumma la sahla illa ma ja’altahu sahla, wa anta taj’alul-hazna idha shi’ta sahla',
    translation: 'O Allah, er is niets makkelijks behalve wat U makkelijk heeft gemaakt, en U maakt het moeilijke makkelijk als U dat wilt.',
    source: 'Ibn Hibban',
    context: 'Perfect voor studenten voor een examen, bij sollicitaties of moeilijke projecten. Het herinnert ons eraan dat succes alleen van Allah komt.',
    benefits: ['Vertrouwen in Allah', 'Stressvermindering bij taken', 'Succes in ondernemingen']
  },

  // --- Eten & Drinken ---
  {
    slug: 'voor-het-eten',
    title: 'Dua voor het eten',
    category: 'Eten & Drinken',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah',
    translation: 'In de naam van Allah.',
    source: 'Abu Dawud',
    context: 'Het zeggen van Bismillah voor het eten zegent het voedsel en voorkomt dat de Shaytaan mee-eet. Als je het vergeet, zeg dan "Bismillahi awwalahu wa akhirahu" (In de naam van Allah aan het begin en aan het einde).',
    benefits: ['Barakah in het eten', 'Bescherming tegen Shaytaan', 'Bewust eten']
  },
  {
    slug: 'na-het-eten',
    title: 'Dua na het eten',
    category: 'Eten & Drinken',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdulillahi lladhi at’amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwatin',
    translation: 'Alle lof zij Allah Die mij hiermee heeft gevoed en het mij heeft geschonken zonder enige macht of kracht van mijn kant.',
    source: 'At-Tirmidhi',
    context: 'Dankbaarheid na de maaltijd is een reden voor vergeving van zonden. Het erkent dat onze voorziening niet door ons eigen werk komt, maar een gunst is.',
    benefits: ['Vergeving van zonden', 'Toename van voorziening', 'Bescheidenheid']
  },

  // --- Reizen ---
  {
    slug: 'voor-het-reizen',
    title: 'Dua voor het reizen (in auto of vliegtuig)',
    category: 'Reizen & Onderweg',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: 'Subhanalladhi sakhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun',
    translation: 'Glorieus is Degene Die dit voor ons dienstbaar heeft gemaakt, en wij waren daartoe niet in staat. En voorwaar, tot onze Heer zullen wij terugkeren.',
    source: 'Quran 43:13-14',
    context: 'Deze prachtige Ayah uit de Quran wordt gereciteerd bij het instappen van een voertuig. Het biedt bescherming onderweg en herinnert ons aan de uiteindelijke reis naar het Hiernamaals.',
    benefits: ['Veiligheid onderweg', 'Bewustzijn van de dood', 'Zegening van het voertuig']
  },
  {
    slug: 'bij-binnentreden-stad',
    title: 'Dua bij het binnentreden van een nieuwe stad',
    category: 'Reizen & Onderweg',
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهَا',
    transliteration: 'Allahumma barik lana fiha',
    translation: 'O Allah, zegen het voor ons.',
    source: 'Tabarani',
    context: 'Wanneer je een nieuwe stad of dorp binnenrijdt, vraag je Allah om het goede van deze plek en bescherming tegen het slechte ervan.',
    benefits: ['Goede ontvangst', 'Bescherming tegen ziektes van de plek', 'Barakah in verblijf']
  },

  // --- Thuis & Familie ---
  {
    slug: 'voor-ouders',
    title: 'Dua voor de ouders',
    category: 'Thuis & Familie',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbirhamhuma kama rabbayani saghira',
    translation: 'O mijn Heer, wees hen genadig, zoals zij mij opvoedden toen ik klein was.',
    source: 'Quran 17:24',
    context: 'Een van de meest geciteerde dua\'s uit de Quran. We zijn verplicht goed te zijn voor onze ouders, en smeekbeden voor hen te doen is een vorm van Birr (goedheid), zowel tijdens hun leven als na hun dood.',
    benefits: ['Plicht jegens ouders vervullen', 'Genade voor ouders', 'Gezegend nageslacht']
  },
  {
    slug: 'bij-verlaten-huis',
    title: 'Dua bij het verlaten van het huis',
    category: 'Thuis & Familie',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ',
    transliteration: 'Bismillahi tawakkaltu alallahi, wa la hawla wa la quwwata illa billah',
    translation: 'In de naam van Allah, ik leg mijn vertrouwen in Allah, er is geen macht en geen kracht behalve bij Allah.',
    source: 'Abu Dawud',
    context: 'Wie dit zegt bij het verlaten van zijn huis, wordt beschermd, geleid en de duivel zal van hem wijken. Het is een spiritueel schild voor de buitenwereld.',
    benefits: ['Volledige bescherming buitenshuis', 'Leiding in keuzes', 'Afstand van Shaytaan']
  },
  {
    slug: 'gemeenschap-partner',
    title: 'Dua voor intimiteit tussen echtgenoten',
    category: 'Thuis & Familie',
    arabic: 'بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ، وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا',
    transliteration: 'Bismillah, Allahumma jannibnash-Shaytan, wa jannibish-Shaytana ma razaqtana',
    translation: 'In de naam van Allah. O Allah, houd de Shaytaan weg van ons en houd de Shaytaan weg van wat U ons schenkt (nageslacht).',
    source: 'Sahih Bukhari',
    context: 'Deze dua wordt aangeraden voor echtgenoten voor de gemeenschap. Mocht er een kind uit voortkomen, dan zal de Shaytaan hem/haar geen schade kunnen berokkenen.',
    benefits: ['Gezegend nageslacht', 'Bescherming tegen Shaytaan', 'Zegening van het huwelijk']
  },

  // --- Gebed & Moskee ---
  {
    slug: 'na-adhan',
    title: 'Dua na de Adhan (gebedsoproep)',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ',
    transliteration: 'Allahumma Rabba hadhihid-da’watit-tammah, was-salatil-qa’imah, ati Muhammadan al-wasilata wal-fadilah, wab’ath-hu maqaman mahmudan alladhi wa’adtah',
    translation: 'O Allah, Heer van deze perfecte oproep en het te verrichten gebed, schenk Mohammed Al-Wasilah (een positie in het Paradijs) en uitmuntendheid, en verhef hem tot de geprezen positie die U hem beloofd heeft.',
    source: 'Sahih Bukhari',
    context: 'Wie deze dua reciteert na de Adhan, zal de bemiddeling (Shafa\'ah) van de Profeet ontvangen op de Dag des Oordeels.',
    benefits: ['Shafa\'ah van de Profeet', 'Hoge beloning', 'Verbinding met het gebed']
  },
  {
    slug: 'binnentreden-moskee',
    title: 'Dua bij het binnentreden van de moskee',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahumma iftah li abwaba rahmatik',
    translation: 'O Allah, open voor mij de deuren van Uw genade.',
    source: 'Sahih Muslim',
    context: 'De moskee is een plaats van Rahmah (genade). We vragen Allah om toegang tot deze genade bij binnenkomst. Stap altijd met rechts naar binnen.',
    benefits: ['Toegang tot genade', 'Adab (etiquette) van de moskee', 'Spirituele opening']
  },

  // --- Ziekte & Gezondheid ---
  {
    slug: 'bezoek-zieke',
    title: 'Dua bij het bezoeken van een zieke',
    category: 'Ziekte & Gezondheid',
    arabic: 'لاَ بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ',
    transliteration: 'La ba’sa tahurun insha’Allah',
    translation: 'Maak je geen zorgen, het zal een zuivering zijn (van zonden), als Allah het wil.',
    source: 'Sahih Bukhari',
    context: 'Het bezoeken van zieken is een plicht en een grote daad van aanbidding. Deze woorden bieden troost aan de patiënt en herinneren hen eraan dat ziekte zonden kan wissen.',
    benefits: ['Troost bieden', 'Zonden wissen', 'Hoop geven']
  },
  {
    slug: 'pijn-lichaam',
    title: 'Dua bij pijn in het lichaam',
    category: 'Ziekte & Gezondheid',
    arabic: 'بِسْمِ اللَّهِ (3x) ... أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (7x)',
    transliteration: 'Bismillah (3x). A’udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru (7x)',
    translation: 'In de naam van Allah (3x). Ik zoek toevlucht bij Allah en Zijn macht tegen het kwaad van wat ik voel en waar ik voor vrees (7x).',
    source: 'Sahih Muslim',
    context: 'Leg je hand op de plek waar je pijn hebt en reciteer deze woorden. Het is een vorm van Ruqyah die je op jezelf kunt toepassen.',
    benefits: ['Genezing (Shifa)', 'Zelf-Ruqyah', 'Vertrouwen op Allah\'s macht']
  },

  // --- Natuur & Weer ---
  {
    slug: 'bij-regen',
    title: 'Dua als het regent',
    category: 'Natuur & Weer',
    arabic: 'اللَّهُمَّ صَيِّباً نَافِعاً',
    transliteration: 'Allahumma sayyiban nafi’a',
    translation: 'O Allah, laat het een nuttige regen zijn.',
    source: 'Sahih Bukhari',
    context: 'Regen is een tijd waarin smeekbeden worden verhoord. In plaats van te klagen over het weer, vragen we Allah om de regen profijtelijk te maken voor de aarde en ons.',
    benefits: ['Verhoorde dua\'s', 'Zegen in de regen', 'Positieve mindset']
  },
  {
    slug: 'bij-onweer',
    title: 'Dua bij onweer en donder',
    category: 'Natuur & Weer',
    arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكَةُ مِنْ خِيفَتِهِ',
    transliteration: 'Subhanalladhi yusabbihur-ra’du bihamdihi wal-mala’ikatu min khifatih',
    translation: 'Glorieus is Degene voor Wie de donder de glorie prijst, en de engelen uit vrees voor Hem.',
    source: 'Muwatta Malik',
    context: 'Abdullah ibn Zubair stopte met praten als hij de donder hoorde en reciteerde dit. Het herinnert aan de grootsheid en kracht van de Schepper.',
    benefits: ['Ontzag voor Allah', 'Erkenning van natuurkrachten', 'Dhikr tijdens angst']
  }
];

// Helper functies
export const getAllDuas = () => DUAS;
export const getDuaBySlug = (slug: string) => DUAS.find(d => d.slug === slug);
export const getDuasByCategory = (category: string) => DUAS.filter(d => d.category === category);
export const getRelatedDuas = (currentSlug: string, category: string, limit: number = 3) => {
    return DUAS.filter(d => d.category === category && d.slug !== currentSlug).slice(0, limit);
};
