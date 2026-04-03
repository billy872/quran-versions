// Comprehensive Hadith Collections — 60+ collections across Sunni, Shia, and secondary compilations
// Sources: Wikipedia "List of hadith books"; Jonathan Brown, "Hadith: Muhammad's Legacy" (Cambridge 2009);
// Ibn al-Salah, "Introduction to the Science of Hadith"; Al-Suyuti, "Tadrib al-Rawi";
// Encyclopedia of Islam (Brill); sunnah.com; islamqa.org

var HADITH_COLLECTIONS = {

// ═══════════════════════════════════════════════
// TIER 1: The Six Canonical Sunni (Kutub al-Sittah)
// ═══════════════════════════════════════════════
kutubSittah: [
  {name:"Sahih al-Bukhari",ar:"صحيح البخاري",compiler:"Muhammad al-Bukhari",born:810,died:870,origin:"Bukhara, Uzbekistan",total:7563,unique:2602,years:16,grade:"Sahih",note:"Selected from ~600,000. Most authentic Sunni book after the Quran. Criterion: unbroken chain + narrator reliability."},
  {name:"Sahih Muslim",ar:"صحيح مسلم",compiler:"Muslim ibn al-Hajjaj",born:815,died:875,origin:"Nishapur, Iran",total:7500,unique:3033,years:15,grade:"Sahih",note:"Selected from ~300,000. Together with Bukhari = 'The Two Sahihs' (al-Sahihayn). Better organized by topic."},
  {name:"Sunan Abu Dawud",ar:"سنن أبي داود",compiler:"Abu Dawud al-Sijistani",born:817,died:889,origin:"Sistan, Iran",total:5274,unique:null,years:20,grade:"Mixed",note:"Selected from ~500,000. Contains sahih, hasan, and weak hadiths. Author explicitly flagged weak ones."},
  {name:"Jami' at-Tirmidhi",ar:"جامع الترمذي",compiler:"Al-Tirmidhi",born:824,died:892,origin:"Termez, Uzbekistan",total:3956,unique:null,years:null,grade:"Graded by compiler",note:"Unique: grades each hadith (sahih, hasan, da'if, gharib). Includes fiqh commentary and comparative analysis."},
  {name:"Sunan an-Nasa'i",ar:"سنن النسائي",compiler:"Al-Nasa'i",born:829,died:915,origin:"Nasa, Turkmenistan",total:5761,unique:null,years:null,grade:"Mixed (strict)",note:"Strictest criteria of the four Sunan. Originally 'al-Sunan al-Kubra' (~12,000), later abridged to 'al-Sughra'."},
  {name:"Sunan Ibn Majah",ar:"سنن ابن ماجه",compiler:"Ibn Majah",born:824,died:887,origin:"Qazvin, Iran",total:4341,unique:null,years:null,grade:"Weakest of six",note:"Contains ~1,300 hadiths not in other five. Debated whether Muwatta Malik or Sunan al-Darimi should replace it as 6th."}
],

// ═══════════════════════════════════════════════
// TIER 2: The Three Additional (making the "Nine Books")
// ═══════════════════════════════════════════════
nineBooks: [
  {name:"Muwatta Malik",ar:"موطأ مالك",compiler:"Malik ibn Anas",born:711,died:795,origin:"Medina, Saudi Arabia",total:1594,unique:null,years:40,grade:"Sahih / Mursal",note:"OLDEST surviving hadith collection. Some consider it more worthy than Ibn Majah for the 6th spot. Contains Medinan legal practice alongside hadiths."},
  {name:"Sunan al-Darimi",ar:"سنن الدارمي",compiler:"Al-Darimi",born:797,died:869,origin:"Samarkand, Uzbekistan",total:3503,unique:null,years:null,grade:"Mixed",note:"Some scholars rank this among the six canonical instead of Ibn Majah. Known for quality of narrators."},
  {name:"Musnad Ahmad",ar:"مسند أحمد",compiler:"Ahmad ibn Hanbal",born:780,died:855,origin:"Baghdad, Iraq",total:27647,unique:null,years:null,grade:"Mixed",note:"One of the largest early collections. Arranged by narrator (musnad), not topic. Ahmad was persecuted for refusing to accept the Quran was created."}
],

// ═══════════════════════════════════════════════
// TIER 3: Other Major Sunni Primary Collections
// ═══════════════════════════════════════════════
majorSunni: [
  {name:"Sahih Ibn Khuzaymah",ar:"صحيح ابن خزيمة",compiler:"Ibn Khuzaymah",born:837,died:923,origin:"Nishapur, Iran",total:3079,unique:null,grade:"Sahih",note:"Only ~25% of original survives. Supplements Bukhari and Muslim."},
  {name:"Sahih Ibn Hibban",ar:"صحيح ابن حبان",compiler:"Ibn Hibban",born:883,died:965,origin:"Bust, Afghanistan",total:7491,unique:null,grade:"Sahih",note:"Unique non-standard arrangement. Considered reliable by most scholars."},
  {name:"Al-Mustadrak",ar:"المستدرك على الصحيحين",compiler:"Al-Hakim al-Nishapuri",born:933,died:1012,origin:"Nishapur, Iran",total:8803,unique:null,grade:"Disputed",note:"Claims hadiths meeting Bukhari/Muslim criteria not included by them. Al-Dhahabi disputed many gradings."},
  {name:"Musannaf Abd al-Razzaq",ar:"مصنف عبد الرزاق",compiler:"Abd al-Razzaq al-San'ani",born:744,died:826,origin:"Sana'a, Yemen",total:21033,unique:null,grade:"Mixed",note:"One of the oldest surviving musannaf collections. Arranged by legal topic. Major source for early Islamic law."},
  {name:"Musannaf Ibn Abi Shaybah",ar:"مصنف ابن أبي شيبة",compiler:"Ibn Abi Shaybah",born:775,died:849,origin:"Kufa, Iraq",total:37943,unique:null,grade:"Mixed",note:"Massive collection. Over 37,000 reports including companion opinions. Major source for Hanafi jurisprudence."},
  {name:"Al-Adab al-Mufrad",ar:"الأدب المفرد",compiler:"Muhammad al-Bukhari",born:810,died:870,origin:"Bukhara, Uzbekistan",total:1322,unique:null,grade:"Mixed",note:"By Bukhari himself. Focused on Islamic manners and etiquette. Not limited to sahih grade."},
  {name:"Sunan al-Daraqutni",ar:"سنن الدارقطني",compiler:"Al-Daraqutni",born:918,died:995,origin:"Baghdad, Iraq",total:4580,unique:null,grade:"Mixed",note:"Known for identifying weak hadiths and 'ilal (hidden defects). Also authored 'Al-Ilal' on hadith criticism."},
  {name:"Sunan al-Kubra (Bayhaqi)",ar:"السنن الكبرى",compiler:"Al-Bayhaqi",born:994,died:1066,origin:"Bayhaq, Iran",total:21861,unique:null,grade:"Mixed",note:"Massive legal hadith encyclopedia. Also authored 'Shu'ab al-Iman' (Branches of Faith) and 'Dalail al-Nubuwwa'."},
  {name:"Musnad al-Tayalisi",ar:"مسند الطيالسي",compiler:"Abu Dawud al-Tayalisi",born:743,died:819,origin:"Basra, Iraq",total:2767,unique:null,grade:"Mixed",note:"One of the earliest musnad collections. Some scholars consider it pre-dates Musnad Ahmad."},
  {name:"Musnad al-Humaydi",ar:"مسند الحميدي",compiler:"Al-Humaydi",born:null,died:834,origin:"Mecca, Saudi Arabia",total:1300,unique:null,grade:"Mixed",note:"Teacher of Bukhari. His musnad is considered highly reliable due to short chains."},
  {name:"Musnad al-Bazzar",ar:"مسند البزار",compiler:"Al-Bazzar",born:null,died:905,origin:"Basra, Iraq",total:9673,unique:null,grade:"Mixed",note:"Known as 'al-Bahr al-Zakhkhar'. Contains hadiths with unusual chains for comparison."},
  {name:"Musnad Abu Ya'la",ar:"مسند أبي يعلى",compiler:"Abu Ya'la al-Mawsili",born:824,died:919,origin:"Mosul, Iraq",total:7555,unique:null,grade:"Mixed",note:"Significant musnad. Al-Haythami used it extensively in 'Majma al-Zawa'id'."},
  {name:"Musnad Ishaq Ibn Rahwayh",ar:"مسند إسحاق بن راهويه",compiler:"Ishaq Ibn Rahwayh",born:778,died:853,origin:"Marv, Turkmenistan",total:2500,unique:null,grade:"Mixed",note:"Teacher of both Bukhari and Muslim. Only partially surviving."},
  {name:"Al-Mu'jam al-Kabir",ar:"المعجم الكبير",compiler:"Al-Tabarani",born:873,died:971,origin:"Tabariya / Isfahan",total:22746,unique:null,grade:"Mixed",note:"Largest of Tabarani's three mu'jam works. Arranged alphabetically by companion name."},
  {name:"Al-Mu'jam al-Awsat",ar:"المعجم الأوسط",compiler:"Al-Tabarani",born:873,died:971,origin:"Tabariya / Isfahan",total:9491,unique:null,grade:"Mixed",note:"Middle collection by Tabarani. Contains many unique hadiths not found elsewhere."},
  {name:"Al-Mu'jam al-Saghir",ar:"المعجم الصغير",compiler:"Al-Tabarani",born:873,died:971,origin:"Tabariya / Isfahan",total:1198,unique:null,grade:"Mixed",note:"Smallest of Tabarani's three works. One hadith per teacher."},
  {name:"Shu'ab al-Iman",ar:"شعب الإيمان",compiler:"Al-Bayhaqi",born:994,died:1066,origin:"Bayhaq, Iran",total:10903,unique:null,grade:"Mixed",note:"'Branches of Faith'. Organizes hadiths around the branches of belief mentioned in Islamic theology."},
  {name:"Hilyat al-Awliya",ar:"حلية الأولياء",compiler:"Abu Nu'aym al-Isfahani",born:948,died:1038,origin:"Isfahan, Iran",total:null,unique:null,grade:"Mixed",note:"'Adornment of the Saints'. Biographical work with hadiths. 10 volumes covering pious figures and ascetics."},
  {name:"Dalail al-Nubuwwa",ar:"دلائل النبوة",compiler:"Al-Bayhaqi",born:994,died:1066,origin:"Bayhaq, Iran",total:null,unique:null,grade:"Mixed",note:"'Proofs of Prophethood'. Collection of hadiths and reports about Muhammad's miracles and signs."}
],

// ═══════════════════════════════════════════════
// EARLIEST COLLECTIONS (Pre-canonical, 1st-2nd century AH)
// ═══════════════════════════════════════════════
earliest: [
  {name:"Sahifah al-Sadiqah",ar:"الصحيفة الصادقة",compiler:"Abdullah ibn Amr ibn al-As",born:null,died:684,origin:"Medina / Egypt",total:null,unique:null,grade:"Historical",note:"Possibly the EARLIEST written hadith collection. A companion's personal notebook of Muhammad's sayings. Referenced in later collections."},
  {name:"Sahifah Hammam ibn Munabbih",ar:"صحيفة همام بن منبه",compiler:"Hammam ibn Munabbih",born:null,died:749,origin:"Yemen",total:138,unique:null,grade:"Historical",note:"138 hadiths transmitted from Abu Hurayrah. Discovered in Damascus. One of the oldest surviving manuscripts. Used to verify later collections."},
  {name:"Musannaf Ibn Jurayj",ar:"مصنف ابن جريج",compiler:"Ibn Jurayj",born:null,died:767,origin:"Mecca, Saudi Arabia",total:null,unique:null,grade:"Historical",note:"Possibly the first musannaf (topically arranged) hadith collection. Mostly lost but preserved in fragments within later works."},
  {name:"Al-Jami (Ma'mar)",ar:"الجامع لمعمر بن راشد",compiler:"Ma'mar ibn Rashid",born:714,died:770,origin:"Basra / Yemen",total:null,unique:null,grade:"Historical",note:"One of the earliest jami' (comprehensive) collections. Preserved as an appendix in Musannaf Abd al-Razzaq."}
],

// ═══════════════════════════════════════════════
// SECONDARY SUNNI COMPILATIONS (Selections from primary)
// ═══════════════════════════════════════════════
secondary: [
  {name:"Riyadh al-Salihin",ar:"رياض الصالحين",compiler:"Imam al-Nawawi",born:1233,died:1277,origin:"Nawa, Syria",total:1896,unique:null,grade:"Sahih / Hasan",note:"'Gardens of the Righteous'. Popular devotional selection from Bukhari, Muslim, and others. Widely used for Friday sermons."},
  {name:"Mishkat al-Masabih",ar:"مشكاة المصابيح",compiler:"Al-Khatib al-Tabrizi",born:null,died:1340,origin:"Tabriz, Iran",total:6285,unique:null,grade:"Mixed (graded)",note:"Expanded version of Masabih al-Sunnah by al-Baghawi. Adds source references and additional hadiths. Popular in South Asian Islam."},
  {name:"Bulugh al-Maram",ar:"بلوغ المرام",compiler:"Ibn Hajar al-Asqalani",born:1372,died:1449,origin:"Cairo, Egypt",total:1596,unique:null,grade:"Graded",note:"Legal hadiths used by Shafi'i school. Each hadith's authenticity grade is stated. Author also wrote Fath al-Bari (Bukhari commentary)."},
  {name:"Al-Jami al-Saghir",ar:"الجامع الصغير",compiler:"Jalal al-Din al-Suyuti",born:1445,died:1505,origin:"Cairo, Egypt",total:10031,unique:null,grade:"Graded",note:"Alphabetically arranged. Each hadith graded. Al-Suyuti also authored ~500 other works."},
  {name:"Kanz al-Ummal",ar:"كنز العمال",compiler:"Ali al-Muttaqi al-Hindi",born:1480,died:1567,origin:"Burhanpur, India",total:46624,unique:null,grade:"Mixed",note:"'Treasure of the Workers'. Rearranges al-Suyuti's works by topic. One of the largest hadith compilations ever."},
  {name:"Majma al-Zawa'id",ar:"مجمع الزوائد",compiler:"Al-Haythami",born:1335,died:1405,origin:"Cairo, Egypt",total:18776,unique:null,grade:"Graded",note:"Collects hadiths from six major musnads NOT found in the Kutub al-Sittah. Identifies unique material."},
  {name:"At-Targhib wat-Tarhib",ar:"الترغيب والترهيب",compiler:"Al-Mundhiri",born:1185,died:1258,origin:"Cairo, Egypt",total:5765,unique:null,grade:"Mixed",note:"'Encouragement and Warning'. Hadiths about virtues and sins. Popular for moral education."},
  {name:"Silsilat al-Ahadith al-Sahihah",ar:"سلسلة الأحاديث الصحيحة",compiler:"Al-Albani",born:1914,died:1999,origin:"Albania / Damascus / Amman",total:3786,unique:null,grade:"Sahih (per Albani)",note:"Modern revalidation of hadiths by controversial 20th-century scholar. Influential but disputed. Also authored weak hadith collection."},
  {name:"Al-Jami al-Kamil",ar:"الجامع الكامل في الحديث",compiler:"Ziya-ur-Rahman Azmi",born:1943,died:null,origin:"India",total:16000,unique:null,grade:"Sahih",note:"Most recent major compilation (2019). Claims to gather ALL known sahih hadiths from 200+ sources into one work."}
],

// ═══════════════════════════════════════════════
// SHIA: The Four Canonical Books (Al-Kutub al-Arba'a)
// ═══════════════════════════════════════════════
shiaCanonical: [
  {name:"Al-Kafi",ar:"الكافي",compiler:"Al-Kulayni",born:864,died:941,origin:"Kulayn / Baghdad",total:16199,unique:null,years:20,grade:"Mixed",note:"'The Sufficient'. Most important Shia collection. Three parts: Usul (principles), Furu (branches), Rawdah (miscellaneous). NOT all accepted as authentic even by Shia scholars."},
  {name:"Man La Yahduruhu al-Faqih",ar:"من لا يحضره الفقيه",compiler:"Ibn Babawayh (al-Saduq)",born:923,died:991,origin:"Qom / Rey, Iran",total:5963,unique:null,grade:"Mixed",note:"'For Him Without Access to a Jurist'. Practical legal reference. Al-Saduq personally vouches for authenticity of included hadiths."},
  {name:"Tahdhib al-Ahkam",ar:"تهذيب الأحكام",compiler:"Shaykh al-Tusi",born:995,died:1067,origin:"Tus / Baghdad / Najaf",total:13590,unique:null,grade:"Mixed",note:"'Refinement of Laws'. Commentary on al-Muqni'ah. Al-Tusi was the most important Shia scholar of his era."},
  {name:"Al-Istibsar",ar:"الاستبصار",compiler:"Shaykh al-Tusi",born:995,died:1067,origin:"Tus / Baghdad / Najaf",total:5511,unique:null,grade:"Mixed",note:"'Reflection on Disagreements'. Addresses contradictions between hadiths. Same compiler as Tahdhib."}
],

// ═══════════════════════════════════════════════
// SHIA: Other Primary Collections
// ═══════════════════════════════════════════════
shiaOther: [
  {name:"Nahj al-Balagha",ar:"نهج البلاغة",compiler:"Al-Sharif al-Radi",born:970,died:1015,origin:"Baghdad, Iraq",total:null,unique:null,grade:"Mixed",note:"'Peak of Eloquence'. Sermons, letters, and sayings attributed to Ali ibn Abi Talib. Authenticity debated even within Shia scholarship."},
  {name:"Al-Sahifa al-Sajjadiyya",ar:"الصحيفة السجادية",compiler:"Ali ibn Husayn Zayn al-Abidin",born:658,died:713,origin:"Medina",total:54,unique:null,grade:"Devotional",note:"'Psalms of Islam'. 54 supplications (du'as) by the 4th Shia Imam. Called 'the sister of the Quran' by some Shia scholars."},
  {name:"The Book of Sulaym ibn Qays",ar:"كتاب سليم بن قيس",compiler:"Sulaym ibn Qays",born:null,died:694,origin:"Kufa, Iraq",total:null,unique:null,grade:"Disputed",note:"Claimed as the earliest Shia hadith work. Authenticity heavily debated — some consider it fabricated, others accept it partially."},
  {name:"Bihar al-Anwar",ar:"بحار الأنوار",compiler:"Allama Majlisi",born:1616,died:1698,origin:"Isfahan, Iran",total:null,unique:null,grade:"Mixed",note:"'Seas of Lights'. 110 volumes — the largest Shia hadith encyclopedia. Gathers material from ~400 earlier sources. Foundational for modern Shia practice."},
  {name:"Wasa'il al-Shi'a",ar:"وسائل الشيعة",compiler:"Al-Hurr al-Amili",born:1624,died:1693,origin:"Jabal Amil, Lebanon",total:35850,unique:null,grade:"Mixed",note:"'Instruments of the Shia'. Major legal hadith compilation. 30 volumes organizing hadiths by legal topic from the Four Books and other sources."},
  {name:"Al-Wafi",ar:"الوافي",compiler:"Mohsen Fayz Kashani",born:1598,died:1680,origin:"Kashan, Iran",total:null,unique:null,grade:"Mixed",note:"Reorganizes the Four Books with commentary. Removes duplicate narrations and adds explanations."},
  {name:"Mustadrak al-Wasa'il",ar:"مستدرك الوسائل",compiler:"Mirza Husain Noori Tabarsi",born:1838,died:1902,origin:"Noor / Samarra, Iraq",total:23514,unique:null,grade:"Mixed",note:"Supplement to Wasa'il al-Shi'a. Adds hadiths from 80+ additional sources."}
],

// ═══════════════════════════════════════════════
// IBADI COLLECTIONS
// ═══════════════════════════════════════════════
ibadi: [
  {name:"Musnad al-Rabi ibn Habib",ar:"مسند الربيع بن حبيب",compiler:"Al-Rabi ibn Habib",born:null,died:786,origin:"Basra / Oman",total:1005,unique:null,grade:"Sahih (Ibadi)",note:"Primary hadith collection for Ibadi Islam (Oman, parts of North/East Africa). Ibadis consider it more authentic than Bukhari."},
  {name:"Tartib al-Musnad",ar:"ترتيب المسند",compiler:"Abu Ya'qub al-Warjalani",born:null,died:1174,origin:"Warjalan, Algeria",total:null,unique:null,grade:"Mixed",note:"Rearrangement and expansion of al-Rabi's Musnad. Standard reference in Ibadi jurisprudence."}
]
};

// Key hadiths about Quran preservation/variants
var KEY_HADITHS = [
  {ref:"Sahih al-Bukhari 4987",topic:"Uthman's Standardization",text:"Hudhaifa was afraid of the Muslims' differences in the recitation of the Quran, so he said to Uthman, 'O chief of the Believers! Save this nation before they differ about the Book as Jews and Christians did before.' So Uthman sent a message to Hafsa saying, 'Send us the manuscripts of the Quran so that we may compile the Quranic materials in perfect copies and return the manuscripts to you.' ... Uthman sent to every Muslim province one copy of what they had copied, and ordered that all the other Quranic materials, whether written in fragmentary manuscripts or whole copies, be burnt.",significance:"Shows disputes about Quran recitation existed among early Muslims. Uthman ordered all non-standard copies DESTROYED."},
  {ref:"Sahih al-Bukhari 4992",topic:"Seven Ahruf (Modes)",text:"The Messenger of Allah said: 'This Quran has been revealed to be recited in seven different ways [ahruf], so recite of it whichever is easier for you.'",significance:"Foundation for multiple valid readings. Islamic scholars have 30+ interpretations of what 'seven ahruf' means."},
  {ref:"Sahih Muslim 1050",topic:"Entire Surahs Forgotten",text:"Abu Musa al-Ash'ari said: 'We used to recite a surah which resembled in length and severity to Bara'at [Surah 9 — 129 verses]. I have, however, FORGOTTEN it with the exception of this which I remember out of it: If there were two valleys full of riches for the son of Adam, he would long for a third valley...'",significance:"A companion of Muhammad testifying that ENTIRE SURAHS — as long as Surah 9 — were forgotten after Muhammad's death."},
  {ref:"Sahih al-Bukhari 6830",topic:"Verses Recited but Missing",text:"Umar said: '...we used to recite among the Verses in Allah's Book: O people! Do not claim to be the offspring of other than your fathers, as it is disbelief on your part that you claim to be the offspring of other than your real father.'",significance:"Umar recited this as a Quranic verse, but it is NOT found in the compiled Quran today."},
  {ref:"Sahih al-Bukhari 5005",topic:"How the Quran Was Collected",text:"Zaid bin Thabit said: 'Abu Bakr sent for me after the casualties among the warriors of Yamama... I started looking for the Quran and collecting it from palm stalks, thin white stones, and from the men who knew it by heart.'",significance:"The Quran was NOT in a single compiled form during Muhammad's lifetime. It had to be collected from scattered materials after his death."},
  {ref:"Sahih al-Bukhari 5037",topic:"Muhammad Forgot Verses",text:"The Prophet heard a man reciting the Quran in the mosque and said, 'May Allah bestow His Mercy on him, as he has reminded me of such-and-such verses of such a Surah.'",significance:"Muhammad HIMSELF forgot verses of the Quran and needed a follower to remind him."},
  {ref:"Sahih Muslim 1874 / Bukhari 6830",topic:"The Stoning Verse",text:"Umar said, sitting on the pulpit: '...the verse of the stoning... we did recite this verse and understood and memorized it. Allah's Apostle did carry out the punishment of stoning and so did we after him. I am afraid that after a long time has passed, somebody will say: By Allah, we do not find the verse of the Rajm in Allah's Book.'",significance:"A verse about stoning for adultery was RECITED, MEMORIZED, and PRACTICED — but is NOT in the compiled Quran. Umar predicted people would deny it existed."},
  {ref:"Sahih al-Bukhari 4049",topic:"Mass Death of Quran Reciters",text:"Anas reported: 'Seventy of the Ansar were killed at Bi'r Ma'una, and they used to be called the Qurra' [reciters/memorizers of the Quran].'",significance:"Mass death of Quran memorizers in battle. This created urgency to compile the text and raised questions about how much was lost."},
  {ref:"Sahih al-Bukhari 5038",topic:"The Missing Verse of Surah 33",text:"Zaid bin Thabit said: 'When we collected the Quran, I found the last verse of Surat at-Tawbah [9:128-129] with Abu Khuzaima al-Ansari, and I did not find it with anybody other than him.'",significance:"A critical verse found with ONLY ONE person. Contradicts the claim of mass (mutawatir) transmission for every verse."},
  {ref:"Sahih Muslim 2286",topic:"Surah Similar to Musabbihat Lost",text:"Abu Musa continued: 'And we used to recite a surah which resembled one of the surahs of Musabbihat, and I have forgotten it, but remember this much: Oh people who believe, why do you say that which you do not practise [61:2] and that is recorded in your necks as a witness and you would be asked about it on the Day of Resurrection [17:13].'",significance:"A SECOND entire surah also forgotten — only fragments remembered. The memorized portions match existing verses but the surah itself is lost."},
  {ref:"Musannaf Ibn Abi Shaybah 30590",topic:"Ubayy's Quran Had More",text:"Reports indicate that Ubayy ibn Ka'b's personal codex contained Surahs al-Hafd and al-Khal' (the two qunoot surahs), which are NOT in the standard Uthmanic text.",significance:"A leading companion — whom Muhammad called 'the best reciter among you' — had a Quran with EXTRA SURAHS not included by Uthman."}
];

// Translations for hadith section
var HADITH_I18N = {
en:{hadithLabel:"Hadith Collections",hadithH:"The Major Hadith Collections",hadithP:"Hadith are records of Muhammad's sayings and actions, second only to the Quran in Islamic authority. Understanding these collections is essential — they are the primary source for Islamic law, theology, and practice.",
  kutubH:"The Six Canonical Sunni Collections (Kutub al-Sittah)",kutubP:"The most authoritative hadith collections in Sunni Islam. Compiled 200+ years after Muhammad's death.",
  nineH:"The Three Additional (Completing the 'Nine Books')",nineP:"Together with the Kutub al-Sittah, these form the nine books indexed in the world-renowned hadith concordance.",
  majorH:"Other Major Sunni Primary Collections",majorP:"Original compilations with their own chains of transmission. Many contain unique hadiths not found in the canonical six.",
  earlyH:"The Earliest Collections (1st–2nd Century AH)",earlyP:"The oldest surviving hadith documents, predating the canonical collections by decades or centuries.",
  secH:"Secondary Compilations & Selections",secP:"These select and reorganize hadiths from primary sources. Not original collections, but widely used for study and reference.",
  shiaCanH:"The Four Canonical Shia Collections (Al-Kutub al-Arba'a)",shiaCanP:"Shia Islam has its own hadith tradition with different chains of transmission going through the Ahl al-Bayt (Prophet's family).",
  shiaOthH:"Other Major Shia Collections",shiaOthP:"Important supplementary and secondary Shia hadith works spanning centuries.",
  ibadiH:"Ibadi Collections",ibadiP:"Ibadi Islam — the third major branch (predominant in Oman) — has its own hadith tradition.",
  keyH:"Key Hadiths About Quran Preservation",keyP:"These hadiths from the most authoritative collections directly address how the Quran was transmitted, compiled, lost, and varied — from Islam's own sources.",
  thCompiler:"Compiler",thOrigin:"Origin",thHadiths:"Hadiths",thGrade:"Grade",thSignif:"Significance",
  note1:"All dates CE. Hadith counts vary by edition and counting method. 'Unique' counts exclude duplicate narrations with different chains.",
  note2:'Sources: Wikipedia "List of hadith books"; Jonathan A.C. Brown, <em>Hadith: Muhammad\'s Legacy</em> (Cambridge, 2009); Ibn al-Salah, <em>Introduction to the Science of Hadith</em>; Al-Suyuti, <em>Tadrib al-Rawi</em>, vol. 1, p. 148; Encyclopedia of Islam (Brill); sunnah.com.'},
hi:{hadithLabel:"हदीस संग्रह",hadithH:"प्रमुख हदीस संग्रह",hadithP:"हदीस मुहम्मद के कथनों और कार्यों के अभिलेख हैं, इस्लामी अधिकार में कुरान के बाद दूसरे स्थान पर।",
  kutubH:"छह प्रामाणिक सुन्नी संग्रह (कुतुब अल-सित्ता)",kutubP:"सुन्नी इस्लाम में सबसे आधिकारिक। मुहम्मद की मृत्यु के 200+ वर्ष बाद संकलित।",
  nineH:"तीन अतिरिक्त ('नौ पुस्तकें' पूर्ण करने वाले)",nineP:"कुतुब अल-सित्ता के साथ, ये विश्व-प्रसिद्ध हदीस सूचकांक में अनुक्रमित नौ पुस्तकें बनाते हैं।",
  majorH:"अन्य प्रमुख सुन्नी प्राथमिक संग्रह",majorP:"अपनी स्वयं की संचरण श्रृंखलाओं के साथ मूल संकलन।",
  earlyH:"सबसे प्रारंभिक संग्रह (1ली-2री शताब्दी हिजरी)",earlyP:"सबसे पुराने जीवित हदीस दस्तावेज़।",
  secH:"द्वितीयक संकलन और चयन",secP:"ये प्राथमिक स्रोतों से हदीसों का चयन और पुनर्गठन करते हैं।",
  shiaCanH:"चार प्रामाणिक शिया संग्रह (अल-कुतुब अल-अरबा)",shiaCanP:"शिया इस्लाम की अपनी हदीस परंपरा है।",
  shiaOthH:"अन्य प्रमुख शिया संग्रह",shiaOthP:"महत्वपूर्ण पूरक और द्वितीयक शिया हदीस कार्य।",
  ibadiH:"इबादी संग्रह",ibadiP:"इबादी इस्लाम — तीसरी प्रमुख शाखा (ओमान में प्रमुख)।",
  keyH:"कुरान संरक्षण के बारे में मुख्य हदीसें",keyP:"सबसे आधिकारिक संग्रहों से — इस्लाम के अपने स्रोतों से।",
  thCompiler:"संकलक",thOrigin:"उत्पत्ति",thHadiths:"हदीसें",thGrade:"श्रेणी",thSignif:"महत्व",
  note1:"सभी तिथियां ईसवी हैं।",note2:'स्रोत: विकिपीडिया; ब्राउन, <em>हदीस</em> (2009); इब्न अल-सलाह; अल-सुयूती।'},
ur:{hadithLabel:"حدیث کے مجموعے",hadithH:"اہم حدیث کے مجموعے",hadithP:"حدیث محمد کے اقوال اور اعمال کا ریکارڈ ہے، اسلامی اتھارٹی میں قرآن کے بعد دوسرے نمبر پر۔",
  kutubH:"چھ مستند سنی مجموعے (کتب الستہ)",kutubP:"سنی اسلام میں سب سے مستند۔ محمد کی وفات کے 200+ سال بعد مرتب۔",
  nineH:"تین اضافی ('نو کتابیں' مکمل کرنے والے)",nineP:"کتب الستہ کے ساتھ، یہ عالمی شہرت یافتہ حدیث کی فہرست میں نو کتابیں بناتے ہیں۔",
  majorH:"دیگر اہم سنی بنیادی مجموعے",majorP:"اپنی سند کی زنجیروں کے ساتھ اصل مجموعے۔",
  earlyH:"سب سے قدیم مجموعے (پہلی-دوسری صدی ہجری)",earlyP:"سب سے پرانے موجود حدیث کے دستاویزات۔",
  secH:"ثانوی مجموعے اور انتخاب",secP:"یہ بنیادی ذرائع سے احادیث کا انتخاب اور تنظیم نو کرتے ہیں۔",
  shiaCanH:"چار مستند شیعہ مجموعے (الکتب الاربعہ)",shiaCanP:"شیعہ اسلام کی اپنی حدیث کی روایت ہے۔",
  shiaOthH:"دیگر اہم شیعہ مجموعے",shiaOthP:"اہم ضمنی اور ثانوی شیعہ حدیث کے کام۔",
  ibadiH:"اباضی مجموعے",ibadiP:"اباضی اسلام — تیسری بڑی شاخ (عمان میں غالب)۔",
  keyH:"قرآن کی حفاظت کے بارے میں اہم احادیث",keyP:"سب سے مستند مجموعوں سے — اسلام کے اپنے ذرائع سے۔",
  thCompiler:"مرتب",thOrigin:"اصل",thHadiths:"احادیث",thGrade:"درجہ",thSignif:"اہمیت",
  note1:"تمام تاریخیں عیسوی ہیں۔",note2:'ماخذ: ویکیپیڈیا؛ براؤن، <em>حدیث</em> (2009)؛ ابن الصلاح؛ السیوطی۔'},
fa:{hadithLabel:"مجموعه‌های حدیث",hadithH:"مجموعه‌های مهم حدیث",hadithP:"حدیث سوابق گفته‌ها و اعمال محمد است، از نظر اقتدار اسلامی پس از قرآن در مقام دوم.",
  kutubH:"شش مجموعه معتبر اهل سنت (کتب سته)",kutubP:"معتبرترین مجموعه‌ها. 200+ سال پس از درگذشت محمد گردآوری شده.",
  nineH:"سه مجموعه اضافی (تکمیل 'نه کتاب')",nineP:"همراه با کتب سته، نه کتاب فهرست‌بندی شده را تشکیل می‌دهند.",
  majorH:"سایر مجموعه‌های مهم اصلی اهل سنت",majorP:"مجموعه‌های اصلی با زنجیره‌های نقل خاص خود.",
  earlyH:"قدیمی‌ترین مجموعه‌ها (قرن اول-دوم هجری)",earlyP:"قدیمی‌ترین اسناد حدیثی موجود.",
  secH:"مجموعه‌های ثانویه و گزیده‌ها",secP:"گزینش و بازسازماندهی احادیث از منابع اصلی.",
  shiaCanH:"چهار مجموعه معتبر شیعه (الکتب الأربعة)",shiaCanP:"اسلام شیعه سنت حدیثی خاص خود دارد.",
  shiaOthH:"سایر مجموعه‌های مهم شیعه",shiaOthP:"آثار مهم مکمل و ثانویه حدیثی شیعه.",
  ibadiH:"مجموعه‌های اباضی",ibadiP:"اسلام اباضی — سومین شاخه اصلی (غالب در عمان).",
  keyH:"احادیث کلیدی درباره حفظ قرآن",keyP:"از معتبرترین مجموعه‌ها — از منابع خود اسلام.",
  thCompiler:"مؤلف",thOrigin:"خاستگاه",thHadiths:"احادیث",thGrade:"درجه",thSignif:"اهمیت",
  note1:"تمام تاریخ‌ها میلادی هستند.",note2:'منابع: ویکی‌پدیا؛ براون، <em>حدیث</em> (2009)؛ ابن صلاح؛ سیوطی.'}
};

function buildHadithSection(){
  var lang=localStorage.getItem('lang')||'en';
  var t=HADITH_I18N[lang]||HADITH_I18N.en;
  var h='<div class="sec">';
  h+='<div class="sec-lbl" data-i="hadithLabel">'+t.hadithLabel+'</div>';
  h+='<h2 data-i="hadithH">'+t.hadithH+'</h2>';
  h+='<p data-i="hadithP">'+t.hadithP+'</p>';

  var sections=[
    {key:'kutub',data:'kutubSittah',hKey:'kutubH',pKey:'kutubP'},
    {key:'nine',data:'nineBooks',hKey:'nineH',pKey:'nineP'},
    {key:'major',data:'majorSunni',hKey:'majorH',pKey:'majorP'},
    {key:'early',data:'earliest',hKey:'earlyH',pKey:'earlyP'},
    {key:'sec',data:'secondary',hKey:'secH',pKey:'secP'},
    {key:'shiaCan',data:'shiaCanonical',hKey:'shiaCanH',pKey:'shiaCanP'},
    {key:'shiaOth',data:'shiaOther',hKey:'shiaOthH',pKey:'shiaOthP'},
    {key:'ibadi',data:'ibadi',hKey:'ibadiH',pKey:'ibadiP'}
  ];

  sections.forEach(function(s){
    h+='<h3 style="font-size:1.1rem;margin:32px 0 8px;font-weight:600" data-i="'+s.hKey+'">'+t[s.hKey]+'</h3>';
    if(t[s.pKey]) h+='<p style="color:var(--text-2);font-size:.85rem;margin-bottom:14px" data-i="'+s.pKey+'">'+t[s.pKey]+'</p>';
    h+=buildCards(HADITH_COLLECTIONS[s.data],t);
  });

  // Key hadiths
  h+='<h3 style="font-size:1.1rem;margin:36px 0 8px;font-weight:600" data-i="keyH">'+t.keyH+'</h3>';
  h+='<p style="color:var(--text-2);font-size:.85rem;margin-bottom:14px" data-i="keyP">'+t.keyP+'</p>';
  KEY_HADITHS.forEach(function(k){
    h+='<div class="card" style="margin-bottom:10px"><div class="card-body" style="padding:18px">';
    h+='<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;margin-bottom:8px">';
    h+='<div class="card-name" style="font-size:.95rem">'+k.topic+'</div>';
    h+='<span class="tag" style="font-size:.55rem">'+k.ref+'</span></div>';
    h+='<blockquote style="border-left:2px solid var(--border);padding-left:14px;margin:10px 0;color:var(--text-2);font-size:.85rem;line-height:1.65;font-style:italic">"'+k.text+'"</blockquote>';
    h+='<div style="color:var(--text);font-size:.8rem;font-weight:500">'+t.thSignif+': <span style="color:var(--text-2);font-weight:400">'+k.significance+'</span></div>';
    h+='</div></div>';
  });

  h+='<p style="font-size:.75rem;color:var(--text-3);margin-top:18px" data-i="note1">'+t.note1+'</p>';
  h+='<p style="font-size:.75rem;color:var(--text-3);margin-top:4px" data-i="note2">'+t.note2+'</p>';
  h+='</div>';
  document.getElementById('hadith-section').innerHTML=h;
}

function buildCards(arr,t){
  var h='';
  arr.forEach(function(c){
    h+='<div class="card" style="margin-bottom:10px"><div class="card-body" style="padding:18px">';
    h+='<div class="card-head" style="margin-bottom:10px">';
    h+='<div><span class="card-name" style="font-size:1.05rem">'+c.name+'</span> ';
    h+='<span style="font-size:.9rem;color:var(--text-2);direction:rtl;display:inline">'+c.ar+'</span></div>';
    h+='<span class="tag">'+c.grade+'</span></div>';
    h+='<div class="dets" style="margin-top:10px">';
    h+='<div><div class="det-lbl">'+t.thCompiler+'</div><div class="det-val" style="font-size:.85rem">'+c.compiler;
    if(c.born||c.died) h+=' ('+(c.born||'?')+'–'+(c.died||'?')+' CE)';
    h+='</div></div>';
    h+='<div><div class="det-lbl">'+t.thOrigin+'</div><div class="det-val" style="font-size:.85rem">'+c.origin+'</div></div>';
    if(c.total) h+='<div><div class="det-lbl">'+t.thHadiths+'</div><div class="det-val" style="font-size:.85rem">'+c.total.toLocaleString()+(c.unique?' (unique: '+c.unique.toLocaleString()+')':'')+'</div></div>';
    h+='</div>';
    h+='<div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border);color:var(--text-2);font-size:.8rem;line-height:1.6">'+c.note+'</div>';
    h+='</div></div>';
  });
  return h;
}

// Hook into language switching
var _origSetLang2=window.setLang;
window.setLang=function(lang){
  _origSetLang2(lang);
  var t=HADITH_I18N[lang]||HADITH_I18N.en;
  document.querySelectorAll('#hadith-section [data-i]').forEach(function(el){
    var key=el.getAttribute('data-i');
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
};

document.addEventListener('DOMContentLoaded',buildHadithSection);
