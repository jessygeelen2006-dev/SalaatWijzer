
import { Dua } from './types';

// Database voor Programmatic SEO Dua Pages.
// Uitgebreid met audio support en 100+ keywords dekking.

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
    benefits: ['Bescherming tijdens de slaap', 'Bewustzijn van Allah voor de rust', 'Volgen van de Sunnah'],
    audio: '/audio/voor-het-slapen.mp3'
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
    benefits: ['Dankbaarheid tonen', 'De dag beginnen met Dhikr', 'Erkenning van de opstanding'],
    audio: '/audio/bij-het-wakker-worden.mp3'
  },

  // --- Thuis & Familie (Expanded: Toilet, Kleding, Huis) ---
  {
    slug: 'toilet-binnengaan',
    title: 'Dua bij het binnengaan van het toilet',
    category: 'Thuis & Familie',
    arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration: 'Bismillahi Allahumma inni a’udhu bika minal-khubuthi wal-khaba’ith',
    translation: 'In de naam van Allah. O Allah, ik zoek toevlucht bij U tegen mannelijke en vrouwelijke onreine geesten (djinns).',
    source: 'Sahih Bukhari 142',
    context: 'Het toilet is een plek waar onreine geesten zich kunnen ophouden. Door deze dua te zeggen voordat je binnengaat (en eerst je linkervoet te plaatsen), bescherm je jezelf spiritueel tegen hun invloed.',
    benefits: ['Bescherming tegen djinns', 'Toevlucht zoeken', 'Privacy en bescheidenheid'],
    audio: '/audio/toilet-binnengaan.mp3'
  },
  {
    slug: 'toilet-verlaten',
    title: 'Dua bij het verlaten van het toilet',
    category: 'Thuis & Familie',
    arabic: 'غُفْرَانَكَ',
    transliteration: 'Ghufranaka',
    translation: 'Ik vraag U om vergeving.',
    source: 'Abu Dawud',
    context: 'Bij het verlaten van het toilet (met je rechtervoet eerst) zeg je deze korte dua. Geleerden leggen uit dat we vergeving vragen omdat we tijdens het toiletbezoek even niet in staat waren om Allah te gedenken (Dhikr).',
    benefits: ['Dankbaarheid voor verlichting', 'Vergeving vragen', 'Terugkeer naar Dhikr'],
    audio: '/audio/toilet-verlaten.mp3'
  },
  {
    slug: 'kleding-aantrekken',
    title: 'Dua bij het aantrekken van kleding',
    category: 'Thuis & Familie',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdu lillahil-ladhi kasani hadha (ath-thawba) wa razaqanihi min ghayri hawlin minni wa la quwwah',
    translation: 'Alle lof zij Allah Die mij hiermee gekleed heeft en het mij geschonken heeft, zonder macht of kracht van mijn kant.',
    source: 'Abu Dawud',
    context: 'Kleding is een gunst van Allah die ons beschermt en verfraait. Deze dua herinnert ons eraan dat al onze bezittingen van Hem komen en wist voorgaande zonden.',
    benefits: ['Vergeving van zonden', 'Dankbaarheid voor voorziening', 'Bescheidenheid'],
    audio: '/audio/kleding-aantrekken.mp3'
  },
  {
    slug: 'nieuwe-kleding',
    title: 'Dua bij het dragen van nieuwe kleding',
    category: 'Thuis & Familie',
    arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ',
    transliteration: 'Allahumma lakal-hamdu anta kasawtanihi, as’aluka min khayrihi wa khayri ma suni’a lahu, wa a’udhu bika min sharrihi wa sharri ma suni’a lahu',
    translation: 'O Allah, alle lof is aan U, U heeft mij hiermee gekleed. Ik vraag U om het goede ervan en het goede waarvoor het gemaakt is, en ik zoek toevlucht bij U tegen het kwade ervan en het kwade waarvoor het gemaakt is.',
    source: 'Abu Dawud',
    context: 'Specifiek voor wanneer je iets nieuws koopt en voor het eerst draagt. Het vraagt om de zegening (Barakah) in het kledingstuk.',
    benefits: ['Barakah in nieuwe spullen', 'Bescherming tegen hoogmoed', 'Dankbaarheid'],
    audio: '/audio/nieuwe-kleding.mp3'
  },
  {
    slug: 'huis-binnentreden',
    title: 'Dua bij het binnentreden van het huis',
    category: 'Thuis & Familie',
    arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
    transliteration: 'Bismillahi walajna, wa bismillahi kharajna, wa \'ala Rabbina tawakkalna',
    translation: 'In de naam van Allah treden wij binnen, en in de naam van Allah gaan wij naar buiten, en op onze Heer vertrouwen wij.',
    source: 'Abu Dawud',
    context: 'Het is aanbevolen om deze dua te zeggen en daarna de Salaam te geven aan de bewoners (of aan jezelf als er niemand is). Dit voorkomt dat de Shaytaan het huis binnengaat.',
    benefits: ['Huis beschermen tegen Shaytaan', 'Zegening over het huishouden', 'Verbinding met Allah'],
    audio: '/audio/huis-binnentreden.mp3'
  },
  {
    slug: 'bij-verlaten-huis',
    title: 'Dua bij het verlaten van het huis',
    category: 'Thuis & Familie',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ',
    transliteration: 'Bismillahi tawakkaltu alallahi, wa la hawla wa la quwwata illa billah',
    translation: 'In de naam van Allah, ik leg mijn vertrouwen in Allah, er is geen macht en geen kracht behalve bij Allah.',
    source: 'Abu Dawud',
    context: 'Wie dit zegt bij het verlaten van zijn huis, wordt beschermd, geleid en de duivel zal van hem wijken. Het is een spiritueel schild voor de buitenwereld, of je nu naar je werk, school of op reis gaat.',
    benefits: ['Volledige bescherming buitenshuis', 'Leiding in keuzes', 'Afstand van Shaytaan'],
    audio: '/audio/bij-verlaten-huis.mp3'
  },
  {
    slug: 'voor-huwelijk-en-gezin',
    title: 'Dua voor een Gezegend Huwelijk en Gezin',
    category: 'Thuis & Familie',
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration: 'Rabbana hab lana min azwajina wa dhurriyatina qurrata a’yunin waj’alna lil-muttaqina imama',
    translation: 'Onze Heer, maak onze echtgenoten en onze nakomelingen een verkoeling voor onze ogen en maak ons leiders voor de godvrezenden.',
    source: 'Quran 25:74 (Surah Al-Furqan)',
    context: 'Deze prachtige Quranische dua wordt gebruikt door mensen die op zoek zijn naar een vrome partner (huwelijkswens), door echtparen die huwelijksproblemen ervaren, en door ouders die bidden voor hun kinderen. "Verkoeling voor de ogen" betekent dat ze een bron van diepe vreugde en rust zijn, geen bron van stress of verdriet.',
    benefits: ['Harmonie in het huwelijk', 'Vrome kinderen', 'Vinden van de juiste partner', 'Rust in huis'],
    audio: '/audio/voor-huwelijk.mp3'
  },
  {
    slug: 'voor-ouders',
    title: 'Dua voor de ouders',
    category: 'Thuis & Familie',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbirhamhuma kama rabbayani saghira',
    translation: 'O mijn Heer, wees hen genadig, zoals zij mij opvoedden toen ik klein was.',
    source: 'Quran 17:24',
    context: 'We zijn verplicht goed te zijn voor onze ouders. Smeekbeden voor hen doen is een vorm van Birr (goedheid), zowel tijdens hun leven als na hun dood. Het helpt bij het versterken van de band en het vragen van Allahs genade voor hen.',
    benefits: ['Plicht jegens ouders vervullen', 'Genade voor ouders', 'Gezegend nageslacht'],
    audio: '/audio/voor-ouders.mp3'
  },

  // --- Emoties & Bescherming ---
  {
    slug: 'bij-angst-en-paniek',
    title: 'Dua bij Angst, Paniek en Stress',
    category: 'Emoties & Bescherming',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
    transliteration: 'Allahumma inni a’udhu bika minal-hammi wal-hazani, wal-’ajzi wal-kasali, wal-bukhli wal-jubni, wa dala’id-dayni wa ghalabatir-rijal',
    translation: 'O Allah, ik zoek mijn toevlucht bij U tegen zorgen en verdriet, tegen onvermogen en luiheid, tegen gierigheid en lafheid, tegen de last van schulden en de overheersing van mannen.',
    source: 'Sahih Bukhari 6369',
    context: 'Deze krachtige dua dekt een breed spectrum aan mentale en emotionele problemen. Of je nu last hebt van paniekaanvallen, faalangst, sociale angst, stress op het werk of depressieve gevoelens, deze dua biedt een compleet spiritueel schild. Het vraagt bescherming tegen zowel interne zwakheden (luiheid, lafheid) als externe druk (schulden, onderdrukking). Het is aanbevolen om deze dua frequent te reciteren bij gevoelens van wanhoop of innerlijke onrust.',
    benefits: ['Verlichting van paniekaanvallen', 'Bescherming tegen depressie', 'Kracht bij financiële stress', 'Mentale weerbaarheid vergroten'],
    audio: '/audio/bij-angst-en-paniek.mp3'
  },
  {
    slug: 'dua-van-yunus-bij-wanhoop',
    title: 'Dua van Yunus (Bij diepe wanhoop en tegenslag)',
    category: 'Emoties & Bescherming',
    arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    transliteration: 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin',
    translation: 'Er is geen god dan U, Glorieus bent U. Voorwaar, ik behoorde tot de onrechtplegers.',
    source: 'Quran 21:87 (Surah Al-Anbita)',
    context: 'Dit is de dua die Profeet Yunus (Jonas) verrichtte toen hij vastzat in de buik van de walvis, in diepe duisternis. Het wordt beschouwd als de ultieme dua voor verlichting bij nood, hopeloosheid, eenzaamheid en zware beproevingen. De Profeet Muhammad (saw) zei dat geen enkele moslim deze dua verricht of Allah zal hem verhoren.',
    benefits: ['Verhoord worden bij nood', 'Vergeving van zonden', 'Verlichting van diepe droefheid', 'Uitweg uit onmogelijke situaties'],
    audio: '/audio/dua-van-yunus.mp3'
  },
  {
    slug: 'tegen-boze-oog-en-jaloezie',
    title: 'Dua tegen het boze oog en jaloezie (Hasad)',
    category: 'Emoties & Bescherming',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ',
    transliteration: 'A’udhu bi kalimatillahi at-tammati min kulli shaytanin wa hammatin wa min kulli ‘aynin lammatin',
    translation: 'Ik zoek toevlucht bij de perfecte woorden van Allah tegen elke duivel, elk giftig dier en elk jaloers oog.',
    source: 'Sahih Bukhari 3371',
    context: 'Jaloezie (Hasad) en het boze oog kunnen veel schade aanrichten, zowel fysiek als mentaal. Deze dua wordt gebruikt voor bescherming van jezelf, maar ook specifiek voor kinderen. Profeet Ibrahim gebruikte het voor zijn zonen en de Profeet Muhammad voor zijn kleinzonen.',
    benefits: ['Bescherming van kinderen', 'Afweren van negatieve energie', 'Genezing van kwalen door hasad'],
    audio: '/audio/tegen-boze-oog.mp3'
  },
  {
    slug: 'bij-boosheid-en-woede',
    title: 'Dua bij boosheid en woede',
    category: 'Emoties & Bescherming',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    transliteration: 'A’udhu billahi minash-shaytanir-rajim',
    translation: 'Ik zoek mijn toevlucht bij Allah tegen de vervloekte Satan.',
    source: 'Sahih Bukhari & Muslim',
    context: 'Wanneer je boosheid, frustratie of woede voelt opkomen, is dit vaak een influistering van de Shaytaan om je controle te laten verliezen. Het direct zoeken van toevlucht bij Allah blust het vuur van de woede. De Profeet adviseerde ook om van houding te veranderen (gaan zitten of liggen) en Wudu te verrichten.',
    benefits: ['Controle over emoties', 'Voorkomen van spijt', 'Bescherming tegen slechte invloeden'],
    audio: '/audio/bij-boosheid.mp3'
  },
  {
    slug: 'bij-moeilijkheden',
    title: 'Dua als iets moeilijk wordt',
    category: 'Emoties & Bescherming',
    arabic: 'اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً',
    transliteration: 'Allahumma la sahla illa ma ja’altahu sahla, wa anta taj’alul-hazna idha shi’ta sahla',
    translation: 'O Allah, er is niets makkelijks behalve wat U makkelijk heeft gemaakt, en U maakt het moeilijke makkelijk als U dat wilt.',
    source: 'Ibn Hibban',
    context: 'Perfect voor momenten van blokkades, moeilijke taken, of wanneer je geen uitweg ziet. Het wordt vaak gereciteerd door studenten voor een examen of bij ingewikkelde werkprojecten.',
    benefits: ['Vertrouwen in Allah', 'Stressvermindering bij taken', 'Succes in ondernemingen'],
    audio: '/audio/bij-moeilijkheden.mp3'
  },

  // --- Werk, Succes & Rizq ---
  {
    slug: 'voor-rizq-en-tegen-schulden',
    title: 'Dua voor Rizq (Voorziening) en tegen Schulden',
    category: 'Werk & Succes',
    arabic: 'اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    transliteration: 'Allahummakfini bihalalika an haramika wa aghnini bifadlika amman siwak',
    translation: 'O Allah, laat Uw toegestane (Halal) zaken genoeg voor mij zijn, zodat ik geen behoefte heb aan Uw verboden (Haram) zaken, en maak mij door Uw gunst onafhankelijk van anderen dan U.',
    source: 'At-Tirmidhi 3563',
    context: 'Voor iedereen die kampt met financiële problemen, schulden, armoede of geldzorgen. Deze dua vraagt niet alleen om geld, maar om "Barakah" (zegening) in wat Halal is, en onafhankelijkheid van het vragen aan mensen. Het is een sleutel tot financiële vrijheid met de hulp van Allah.',
    benefits: ['Aflossen van schulden', 'Vermeerdering van Halal inkomen', 'Tevredenheid (Qana\'ah)'],
    audio: '/audio/voor-rizq.mp3'
  },
  {
    slug: 'voor-examen-en-kennis',
    title: 'Dua voor Examen, Studie en Concentratie',
    category: 'Werk & Succes',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
    transliteration: 'Rabbishrah li sadri wa yassir li amri wahlul uqdatan min lisani yafqahu qawli',
    translation: 'O mijn Heer, verruim mijn borst voor mij, maak mijn zaak gemakkelijk voor mij en maak de knoop in mijn tong los, zodat zij mijn woord zullen begrijpen.',
    source: 'Quran 20:25-28 (Surah Taha)',
    context: 'Dit is de dua van de Profeet Musa (Mozes) toen hij voor de Farao moest spreken. Het is de ultieme dua voor studenten tijdens examens, voor sollicitatiegesprekken, presentaties of elk moment waarop je helder moet kunnen denken en spreken. Het helpt tegen black-outs en faalangst.',
    benefits: ['Verbeterde concentratie', 'Vloeiend spreken', 'Verdwijnen van examenvrees', 'Kennis beter onthouden'],
    audio: '/audio/voor-examen.mp3'
  },

  // --- Vergeving & Spijt ---
  {
    slug: 'sayyidul-istighfar',
    title: 'Sayyidul Istighfar (De beste dua voor vergeving)',
    category: 'Vergeving & Spijt',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ',
    transliteration: 'Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana abduk, wa ana ala ahdika wa wa’dika mastata’t, a’udhu bika min sharri ma sana’t, abu’u laka bini’matika alayya, wa abu’u laka bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa ant',
    translation: 'O Allah, U bent mijn Heer, er is geen god dan U. U heeft mij geschapen en ik ben Uw dienaar. Ik houd mij aan Uw verbond en Uw belofte zo goed als ik kan. Ik zoek mijn toevlucht bij U tegen het kwade dat ik heb verricht. Ik erken Uw gunst aan mij en ik erken mijn zonde, vergeef mij dan, want werkelijk, niemand vergeeft zonden behalve U.',
    source: 'Sahih Bukhari 6306',
    context: 'De Profeet (vzmh) noemde dit de "Meester van de Smeekbeden om Vergeving". Wie deze dua overdag met overtuiging reciteert en voor de avond sterft, zal het Paradijs binnentreden (en vice versa). Het is essentieel bij gevoelens van spijt, schuldgevoel, zonde en de wens voor een nieuwe start (Tawbah).',
    benefits: ['Garantie op het Paradijs (indien geaccepteerd)', 'Complete vergeving', 'Spirituele reiniging'],
    audio: '/audio/sayyidul-istighfar.mp3'
  },

  // --- Gebed & Moskee (Expanded: Wudu, Exit) ---
  {
    slug: 'voor-wassing',
    title: 'Dua voor de wassing (Wudu)',
    category: 'Gebed & Moskee',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah',
    translation: 'In de naam van Allah.',
    source: 'Abu Dawud',
    context: 'Het zeggen van Bismillah is verplicht (volgens sommigen) of sterk aanbevolen voor het beginnen van de Wudu.',
    benefits: ['Zegening van de wassing', 'Sunnah volgen', 'Intentie zuiveren'],
    audio: '/audio/voor-wassing.mp3'
  },
  {
    slug: 'na-wassing',
    title: 'Dua na de wassing (Wudu)',
    category: 'Gebed & Moskee',
    arabic: 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
    transliteration: 'Ash-hadu an la ilaha illallah wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh. Allahummaj\'alni minat-tawwabina waj\'alni minal-mutatahhirin',
    translation: 'Ik getuig dat er geen god is dan Allah, Hij alleen, Hij heeft geen deelgenoten, en ik getuig dat Mohammed Zijn dienaar en Boodschapper is. O Allah, maak mij tot degenen die berouw tonen en maak mij tot degenen die zich reinigen.',
    source: 'At-Tirmidhi',
    context: 'Wie deze dua reciteert na een correcte Wudu, voor hem zullen de acht poorten van het Paradijs geopend worden.',
    benefits: ['Acht poorten van Jannah geopend', 'Spirituele reiniging na fysieke reiniging', 'Versterking van Tawheed'],
    audio: '/audio/na-wassing.mp3'
  },
  {
    slug: 'na-adhan',
    title: 'Dua na de Adhan (gebedsoproep)',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ',
    transliteration: 'Allahumma Rabba hadhihid-da’watit-tammah, was-salatil-qa’imah, ati Muhammadan al-wasilata wal-fadilah, wab’ath-hu maqaman mahmudan alladhi wa’adtah',
    translation: 'O Allah, Heer van deze perfecte oproep en het te verrichten gebed, schenk Mohammed Al-Wasilah en uitmuntendheid, en verhef hem tot de geprezen positie die U hem beloofd heeft.',
    source: 'Sahih Bukhari',
    context: 'Reciteer dit direct na de gebedsoproep voor de bemiddeling van de Profeet.',
    benefits: ['Shafa\'ah van de Profeet', 'Hoge beloning', 'Verbinding met het gebed'],
    audio: '/audio/na-adhan.mp3'
  },
  {
    slug: 'binnentreden-moskee',
    title: 'Dua bij het binnentreden van de moskee',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahumma iftah li abwaba rahmatik',
    translation: 'O Allah, open voor mij de deuren van Uw genade.',
    source: 'Sahih Muslim',
    context: 'Stap met rechts de moskee binnen en zeg deze dua.',
    benefits: ['Toegang tot genade', 'Adab (etiquette) van de moskee', 'Spirituele opening'],
    audio: '/audio/binnentreden-moskee.mp3'
  },
  {
    slug: 'moskee-verlaten',
    title: 'Dua bij het verlaten van de moskee',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: 'Allahumma inni as-aluka min fadlik',
    translation: 'O Allah, ik vraag U om Uw gunst.',
    source: 'Sahih Muslim',
    context: 'Stap met links de moskee uit en vraag om Allah\'s gunst (Rizq en zegeningen) voor in de wereld.',
    benefits: ['Vragen om Barakah buiten de moskee', 'Sunnah volgen', 'Bescherming'],
    audio: '/audio/moskee-verlaten.mp3'
  },
  {
    slug: 'bij-laylatul-qadr',
    title: 'Dua voor Laylatul Qadr (Waardevolle Nacht)',
    category: 'Gebed & Moskee',
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: 'Allahumma innaka ‘afuwwun tuhibbul-‘afwa fa’fu ‘anni',
    translation: 'O Allah, U bent de Meest Vergevingsgezinde en U houdt van vergeving, dus vergeef mij.',
    source: 'At-Tirmidhi',
    context: 'De specifieke dua die de Profeet (vzmh) aanraadde voor de laatste tien nachten van de Ramadan, op zoek naar Laylatul Qadr.',
    benefits: ['Vergeving van alle zonden', 'Gebruikmaken van de beste nacht', 'Tawbah'],
    audio: '/audio/laylatul-qadr.mp3'
  },

  // --- Ziekte & Gezondheid ---
  {
    slug: 'pijn-lichaam-en-genezing',
    title: 'Dua bij Pijn, Ziekte en voor Genezing',
    category: 'Ziekte & Gezondheid',
    arabic: 'بِسْمِ اللَّهِ (3x) ... أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (7x)',
    transliteration: 'Bismillah (3x). A’udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru (7x)',
    translation: 'In de naam van Allah (3x). Ik zoek toevlucht bij Allah en Zijn macht tegen het kwaad van wat ik voel en waar ik voor vrees (7x).',
    source: 'Sahih Muslim',
    context: 'Leg je hand op de plek waar je pijn hebt (hoofdpijn, buikpijn, etc.) en reciteer deze woorden. Het is een vorm van Ruqyah die je op jezelf kunt toepassen. Het kan ook gebruikt worden bij chronische ziekten of herstel na een operatie.',
    benefits: ['Genezing (Shifa)', 'Zelf-Ruqyah', 'Vertrouwen op Allah\'s macht', 'Verlichting van pijn'],
    audio: '/audio/pijn-lichaam.mp3'
  },
  {
    slug: 'bezoek-zieke',
    title: 'Dua bij het bezoeken van een zieke',
    category: 'Ziekte & Gezondheid',
    arabic: 'لاَ بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ',
    transliteration: 'La ba’sa tahurun insha’Allah',
    translation: 'Maak je geen zorgen, het zal een zuivering zijn (van zonden), als Allah het wil.',
    source: 'Sahih Bukhari',
    context: 'Het bezoeken van zieken is een plicht. Deze woorden bieden troost aan de patiënt bij ziekenhuisopname of bedlegerigheid en herinneren hen eraan dat ziekte zonden kan wissen.',
    benefits: ['Troost bieden', 'Zonden wissen', 'Hoop geven'],
    audio: '/audio/bezoek-zieke.mp3'
  },
  {
    slug: 'bij-condoleance-en-overlijden',
    title: 'Dua bij Overlijden en Rouw (Inna lillahi...)',
    category: 'Ziekte & Gezondheid',
    arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
    transliteration: 'Inna lillahi wa inna ilayhi raji’un. Allahumma-jurni fi musibati wa akhlif li khayran minha',
    translation: 'Voorwaar, aan Allah behoren wij toe en tot Hem zullen wij terugkeren. O Allah, beloon mij in mijn rampspoed en geef mij er iets beters voor in de plaats.',
    source: 'Sahih Muslim',
    context: 'Te reciteren bij het horen van nieuws over een overlijden, maar ook bij elk ander verlies (baan, geld, gezondheid). Umm Salama reciteerde dit na de dood van haar man Abu Salama, en Allah gaf haar de Profeet (vzmh) als echtgenoot in de plaats.',
    benefits: ['Geduld (Sabr) bij verlies', 'Compensatie van Allah', 'Acceptatie van het lot (Qadr)'],
    audio: '/audio/bij-overlijden.mp3'
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
    context: 'Het zeggen van Bismillah voor het eten zegent het voedsel en voorkomt dat de Shaytaan mee-eet.',
    benefits: ['Barakah in het eten', 'Bescherming tegen Shaytaan', 'Bewust eten'],
    audio: '/audio/voor-het-eten.mp3'
  },
  {
    slug: 'na-het-eten',
    title: 'Dua na het eten',
    category: 'Eten & Drinken',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdulillahi lladhi at’amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwatin',
    translation: 'Alle lof zij Allah Die mij hiermee heeft gevoed en het mij heeft geschonken zonder enige macht of kracht van mijn kant.',
    source: 'At-Tirmidhi',
    context: 'Dankbaarheid na de maaltijd is een reden voor vergeving van zonden.',
    benefits: ['Vergeving van zonden', 'Toename van voorziening', 'Bescheidenheid'],
    audio: '/audio/na-het-eten.mp3'
  },

  // --- Reizen & Onderweg (Expanded: Markt) ---
  {
    slug: 'voor-het-reizen',
    title: 'Dua voor het reizen (Auto, Vliegtuig)',
    category: 'Reizen & Onderweg',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: 'Subhanalladhi sakhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun',
    translation: 'Glorieus is Degene Die dit voor ons dienstbaar heeft gemaakt, en wij waren daartoe niet in staat. En voorwaar, tot onze Heer zullen wij terugkeren.',
    source: 'Quran 43:13-14',
    context: 'Deze prachtige Ayah wordt gereciteerd bij het instappen van een voertuig. Het biedt bescherming onderweg.',
    benefits: ['Veiligheid onderweg', 'Bewustzijn van de dood', 'Zegening van het voertuig'],
    audio: '/audio/voor-het-reizen.mp3'
  },
  {
    slug: 'bij-binnentreden-stad',
    title: 'Dua bij het binnentreden van een nieuwe stad',
    category: 'Reizen & Onderweg',
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيهَا',
    transliteration: 'Allahumma barik lana fiha',
    translation: 'O Allah, zegen het voor ons.',
    source: 'Tabarani',
    context: 'Wanneer je een nieuwe stad of dorp binnenrijdt tijdens vakantie of verhuizing.',
    benefits: ['Goede ontvangst', 'Bescherming tegen ziektes van de plek', 'Barakah in verblijf'],
    audio: '/audio/bij-binnentreden-stad.mp3'
  },
  {
    slug: 'markt-binnentreden',
    title: 'Dua bij het binnentreden van de markt (of winkelcentrum)',
    category: 'Reizen & Onderweg',
    arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لاَ يَمُوتُ، بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumitu wa huwa hayyun la yamut, biyadihil-khayr wa huwa \'ala kulli shay-in qadir',
    translation: 'Er is geen god dan Allah, Hij alleen, Hij heeft geen deelgenoten. Aan Hem behoort het Konikrijk en aan Hem is de lof. Hij geeft leven en Hij doet sterven, en Hij is de Levende Die nooit sterft. In Zijn Hand is het goede en Hij is tot alles in staat.',
    source: 'At-Tirmidhi',
    context: 'De markt is een plek van afleiding. Wie deze dua daar reciteert, krijgt een miljoen goede daden, een miljoen zonden worden gewist en wordt een miljoen graden verheven.',
    benefits: ['Enorme beloning (1 miljoen hasanat)', 'Bescherming tegen afleiding', 'Dhikr op een drukke plek'],
    audio: '/audio/markt-binnentreden.mp3'
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
    context: 'Regen is een tijd waarin smeekbeden worden verhoord. Maak gebruik van dit moment.',
    benefits: ['Verhoorde dua\'s', 'Zegen in de regen', 'Positieve mindset'],
    audio: '/audio/bij-regen.mp3'
  },
  {
    slug: 'bij-onweer',
    title: 'Dua bij onweer en donder',
    category: 'Natuur & Weer',
    arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلاَئِكَةُ مِنْ خِيفَتِهِ',
    transliteration: 'Subhanalladhi yusabbihur-ra’du bihamdihi wal-mala’ikatu min khifatih',
    translation: 'Glorieus is Degene voor Wie de donder de glorie prijst, en de engelen uit vrees voor Hem.',
    source: 'Muwatta Malik',
    context: 'Reciteer dit bij het horen van donder of zien van bliksem. Het herinnert aan de kracht van de Schepper.',
    benefits: ['Ontzag voor Allah', 'Erkenning van natuurkrachten', 'Dhikr tijdens angst'],
    audio: '/audio/bij-onweer.mp3'
  }
];

export const getAllDuas = () => DUAS;
export const getDuaBySlug = (slug: string) => DUAS.find(d => d.slug === slug);
export const getDuasByCategory = (category: string) => DUAS.filter(d => d.category === category);
export const getRelatedDuas = (currentSlug: string, category: string, limit: number = 3) => {
    return DUAS.filter(d => d.category === category && d.slug !== currentSlug).slice(0, limit);
};
