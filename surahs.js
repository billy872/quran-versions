// All 114 Surahs — Hafs 'an 'Asim edition (the 95% standard)
// Verse counts per Hafs. Where Warsh differs, noted in the warshVerse field.
var SURAHS = [
{n:1,name:"Al-Fatiha",ar:"الفاتحة",meaning:"The Opening",v:7,place:"Mecca",warshV:6,note:"Warsh: 6 verses (Basmalah not counted as verse 1)"},
{n:2,name:"Al-Baqarah",ar:"البقرة",meaning:"The Cow",v:286,place:"Medina"},
{n:3,name:"Aal-E-Imran",ar:"آل عمران",meaning:"The Family of Imran",v:200,place:"Medina"},
{n:4,name:"An-Nisa",ar:"النساء",meaning:"The Women",v:176,place:"Medina"},
{n:5,name:"Al-Ma'idah",ar:"المائدة",meaning:"The Table Spread",v:120,place:"Medina"},
{n:6,name:"Al-An'am",ar:"الأنعام",meaning:"The Cattle",v:165,place:"Mecca"},
{n:7,name:"Al-A'raf",ar:"الأعراف",meaning:"The Heights",v:206,place:"Mecca"},
{n:8,name:"Al-Anfal",ar:"الأنفال",meaning:"The Spoils of War",v:75,place:"Medina"},
{n:9,name:"At-Tawbah",ar:"التوبة",meaning:"The Repentance",v:129,place:"Medina",note:"Only surah without Basmalah"},
{n:10,name:"Yunus",ar:"يونس",meaning:"Jonah",v:109,place:"Mecca"},
{n:11,name:"Hud",ar:"هود",meaning:"Hud",v:123,place:"Mecca"},
{n:12,name:"Yusuf",ar:"يوسف",meaning:"Joseph",v:111,place:"Mecca"},
{n:13,name:"Ar-Ra'd",ar:"الرعد",meaning:"The Thunder",v:43,place:"Medina"},
{n:14,name:"Ibrahim",ar:"إبراهيم",meaning:"Abraham",v:52,place:"Mecca"},
{n:15,name:"Al-Hijr",ar:"الحجر",meaning:"The Rocky Tract",v:99,place:"Mecca"},
{n:16,name:"An-Nahl",ar:"النحل",meaning:"The Bee",v:128,place:"Mecca"},
{n:17,name:"Al-Isra",ar:"الإسراء",meaning:"The Night Journey",v:111,place:"Mecca"},
{n:18,name:"Al-Kahf",ar:"الكهف",meaning:"The Cave",v:110,place:"Mecca"},
{n:19,name:"Maryam",ar:"مريم",meaning:"Mary",v:98,place:"Mecca"},
{n:20,name:"Ta-Ha",ar:"طه",meaning:"Ta-Ha",v:135,place:"Mecca"},
{n:21,name:"Al-Anbiya",ar:"الأنبياء",meaning:"The Prophets",v:112,place:"Mecca"},
{n:22,name:"Al-Hajj",ar:"الحج",meaning:"The Pilgrimage",v:78,place:"Medina"},
{n:23,name:"Al-Mu'minun",ar:"المؤمنون",meaning:"The Believers",v:118,place:"Mecca"},
{n:24,name:"An-Nur",ar:"النور",meaning:"The Light",v:64,place:"Medina"},
{n:25,name:"Al-Furqan",ar:"الفرقان",meaning:"The Criterion",v:77,place:"Mecca"},
{n:26,name:"Ash-Shu'ara",ar:"الشعراء",meaning:"The Poets",v:227,place:"Mecca"},
{n:27,name:"An-Naml",ar:"النمل",meaning:"The Ant",v:93,place:"Mecca"},
{n:28,name:"Al-Qasas",ar:"القصص",meaning:"The Stories",v:88,place:"Mecca"},
{n:29,name:"Al-Ankabut",ar:"العنكبوت",meaning:"The Spider",v:69,place:"Mecca"},
{n:30,name:"Ar-Rum",ar:"الروم",meaning:"The Romans",v:60,place:"Mecca"},
{n:31,name:"Luqman",ar:"لقمان",meaning:"Luqman",v:34,place:"Mecca"},
{n:32,name:"As-Sajdah",ar:"السجدة",meaning:"The Prostration",v:30,place:"Mecca"},
{n:33,name:"Al-Ahzab",ar:"الأحزاب",meaning:"The Confederates",v:73,place:"Medina"},
{n:34,name:"Saba",ar:"سبأ",meaning:"Sheba",v:54,place:"Mecca"},
{n:35,name:"Fatir",ar:"فاطر",meaning:"The Originator",v:45,place:"Mecca"},
{n:36,name:"Ya-Sin",ar:"يس",meaning:"Ya-Sin",v:83,place:"Mecca"},
{n:37,name:"As-Saffat",ar:"الصافات",meaning:"Those Ranged in Ranks",v:182,place:"Mecca"},
{n:38,name:"Sad",ar:"ص",meaning:"Sad",v:88,place:"Mecca"},
{n:39,name:"Az-Zumar",ar:"الزمر",meaning:"The Groups",v:75,place:"Mecca"},
{n:40,name:"Ghafir",ar:"غافر",meaning:"The Forgiver",v:85,place:"Mecca"},
{n:41,name:"Fussilat",ar:"فصلت",meaning:"Explained in Detail",v:54,place:"Mecca"},
{n:42,name:"Ash-Shura",ar:"الشورى",meaning:"The Consultation",v:53,place:"Mecca"},
{n:43,name:"Az-Zukhruf",ar:"الزخرف",meaning:"The Gold Adornments",v:89,place:"Mecca"},
{n:44,name:"Ad-Dukhan",ar:"الدخان",meaning:"The Smoke",v:59,place:"Mecca"},
{n:45,name:"Al-Jathiyah",ar:"الجاثية",meaning:"The Kneeling",v:37,place:"Mecca"},
{n:46,name:"Al-Ahqaf",ar:"الأحقاف",meaning:"The Wind-curved Sandhills",v:35,place:"Mecca"},
{n:47,name:"Muhammad",ar:"محمد",meaning:"Muhammad",v:38,place:"Medina"},
{n:48,name:"Al-Fath",ar:"الفتح",meaning:"The Victory",v:29,place:"Medina"},
{n:49,name:"Al-Hujurat",ar:"الحجرات",meaning:"The Chambers",v:18,place:"Medina"},
{n:50,name:"Qaf",ar:"ق",meaning:"Qaf",v:45,place:"Mecca"},
{n:51,name:"Adh-Dhariyat",ar:"الذاريات",meaning:"The Scattering Winds",v:60,place:"Mecca"},
{n:52,name:"At-Tur",ar:"الطور",meaning:"The Mount",v:49,place:"Mecca"},
{n:53,name:"An-Najm",ar:"النجم",meaning:"The Star",v:62,place:"Mecca"},
{n:54,name:"Al-Qamar",ar:"القمر",meaning:"The Moon",v:55,place:"Mecca"},
{n:55,name:"Ar-Rahman",ar:"الرحمن",meaning:"The Most Gracious",v:78,place:"Medina"},
{n:56,name:"Al-Waqi'ah",ar:"الواقعة",meaning:"The Event",v:96,place:"Mecca"},
{n:57,name:"Al-Hadid",ar:"الحديد",meaning:"The Iron",v:29,place:"Medina"},
{n:58,name:"Al-Mujadila",ar:"المجادلة",meaning:"The Pleading Woman",v:22,place:"Medina"},
{n:59,name:"Al-Hashr",ar:"الحشر",meaning:"The Gathering",v:24,place:"Medina"},
{n:60,name:"Al-Mumtahanah",ar:"الممتحنة",meaning:"She That Is Examined",v:13,place:"Medina"},
{n:61,name:"As-Saff",ar:"الصف",meaning:"The Row",v:14,place:"Medina"},
{n:62,name:"Al-Jumu'ah",ar:"الجمعة",meaning:"The Friday",v:11,place:"Medina"},
{n:63,name:"Al-Munafiqun",ar:"المنافقون",meaning:"The Hypocrites",v:11,place:"Medina"},
{n:64,name:"At-Taghabun",ar:"التغابن",meaning:"The Mutual Loss & Gain",v:18,place:"Medina"},
{n:65,name:"At-Talaq",ar:"الطلاق",meaning:"The Divorce",v:12,place:"Medina"},
{n:66,name:"At-Tahrim",ar:"التحريم",meaning:"The Prohibition",v:12,place:"Medina"},
{n:67,name:"Al-Mulk",ar:"الملك",meaning:"The Dominion",v:30,place:"Mecca"},
{n:68,name:"Al-Qalam",ar:"القلم",meaning:"The Pen",v:52,place:"Mecca"},
{n:69,name:"Al-Haqqah",ar:"الحاقة",meaning:"The Inevitable",v:52,place:"Mecca"},
{n:70,name:"Al-Ma'arij",ar:"المعارج",meaning:"The Ways of Ascent",v:44,place:"Mecca"},
{n:71,name:"Nuh",ar:"نوح",meaning:"Noah",v:28,place:"Mecca"},
{n:72,name:"Al-Jinn",ar:"الجن",meaning:"The Jinn",v:28,place:"Mecca"},
{n:73,name:"Al-Muzzammil",ar:"المزمل",meaning:"The Wrapped One",v:20,place:"Mecca"},
{n:74,name:"Al-Muddaththir",ar:"المدثر",meaning:"The Cloaked One",v:56,place:"Mecca"},
{n:75,name:"Al-Qiyamah",ar:"القيامة",meaning:"The Resurrection",v:40,place:"Mecca"},
{n:76,name:"Al-Insan",ar:"الإنسان",meaning:"Man",v:31,place:"Medina"},
{n:77,name:"Al-Mursalat",ar:"المرسلات",meaning:"Those Sent Forth",v:50,place:"Mecca"},
{n:78,name:"An-Naba",ar:"النبأ",meaning:"The Great News",v:40,place:"Mecca"},
{n:79,name:"An-Nazi'at",ar:"النازعات",meaning:"Those Who Pull Out",v:46,place:"Mecca"},
{n:80,name:"Abasa",ar:"عبس",meaning:"He Frowned",v:42,place:"Mecca"},
{n:81,name:"At-Takwir",ar:"التكوير",meaning:"The Folding Up",v:29,place:"Mecca"},
{n:82,name:"Al-Infitar",ar:"الانفطار",meaning:"The Cleaving",v:19,place:"Mecca"},
{n:83,name:"Al-Mutaffifin",ar:"المطففين",meaning:"Those Who Deal in Fraud",v:36,place:"Mecca"},
{n:84,name:"Al-Inshiqaq",ar:"الانشقاق",meaning:"The Splitting Asunder",v:25,place:"Mecca"},
{n:85,name:"Al-Buruj",ar:"البروج",meaning:"The Great Stars",v:22,place:"Mecca"},
{n:86,name:"At-Tariq",ar:"الطارق",meaning:"The Night-Comer",v:17,place:"Mecca"},
{n:87,name:"Al-A'la",ar:"الأعلى",meaning:"The Most High",v:19,place:"Mecca"},
{n:88,name:"Al-Ghashiyah",ar:"الغاشية",meaning:"The Overwhelming",v:26,place:"Mecca"},
{n:89,name:"Al-Fajr",ar:"الفجر",meaning:"The Dawn",v:30,place:"Mecca"},
{n:90,name:"Al-Balad",ar:"البلد",meaning:"The City",v:20,place:"Mecca"},
{n:91,name:"Ash-Shams",ar:"الشمس",meaning:"The Sun",v:15,place:"Mecca"},
{n:92,name:"Al-Layl",ar:"الليل",meaning:"The Night",v:21,place:"Mecca"},
{n:93,name:"Ad-Duha",ar:"الضحى",meaning:"The Forenoon",v:11,place:"Mecca"},
{n:94,name:"Ash-Sharh",ar:"الشرح",meaning:"The Opening Forth",v:8,place:"Mecca"},
{n:95,name:"At-Tin",ar:"التين",meaning:"The Fig",v:8,place:"Mecca"},
{n:96,name:"Al-Alaq",ar:"العلق",meaning:"The Clot",v:19,place:"Mecca"},
{n:97,name:"Al-Qadr",ar:"القدر",meaning:"The Night of Decree",v:5,place:"Mecca"},
{n:98,name:"Al-Bayyinah",ar:"البينة",meaning:"The Clear Evidence",v:8,place:"Medina"},
{n:99,name:"Az-Zalzalah",ar:"الزلزلة",meaning:"The Earthquake",v:8,place:"Medina"},
{n:100,name:"Al-Adiyat",ar:"العاديات",meaning:"The Chargers",v:11,place:"Mecca"},
{n:101,name:"Al-Qari'ah",ar:"القارعة",meaning:"The Striking Hour",v:11,place:"Mecca"},
{n:102,name:"At-Takathur",ar:"التكاثر",meaning:"Competition in Increase",v:8,place:"Mecca"},
{n:103,name:"Al-Asr",ar:"العصر",meaning:"The Time",v:3,place:"Mecca"},
{n:104,name:"Al-Humazah",ar:"الهمزة",meaning:"The Slanderer",v:9,place:"Mecca"},
{n:105,name:"Al-Fil",ar:"الفيل",meaning:"The Elephant",v:5,place:"Mecca"},
{n:106,name:"Quraysh",ar:"قريش",meaning:"Quraysh",v:4,place:"Mecca"},
{n:107,name:"Al-Ma'un",ar:"الماعون",meaning:"The Small Kindnesses",v:7,place:"Mecca"},
{n:108,name:"Al-Kawthar",ar:"الكوثر",meaning:"Abundance",v:3,place:"Mecca"},
{n:109,name:"Al-Kafirun",ar:"الكافرون",meaning:"The Disbelievers",v:6,place:"Mecca"},
{n:110,name:"An-Nasr",ar:"النصر",meaning:"The Help",v:3,place:"Medina"},
{n:111,name:"Al-Masad",ar:"المسد",meaning:"The Palm Fiber",v:5,place:"Mecca"},
{n:112,name:"Al-Ikhlas",ar:"الإخلاص",meaning:"The Sincerity",v:4,place:"Mecca"},
{n:113,name:"Al-Falaq",ar:"الفلق",meaning:"The Daybreak",v:5,place:"Mecca"},
{n:114,name:"An-Nas",ar:"الناس",meaning:"Mankind",v:6,place:"Medina"}
];

// Surah section translations
var SURAH_I18N = {
en: {
  surahLabel: "Complete Surah Index",
  surahH: "All 114 Surahs of the Quran",
  surahP: "Listed in order per the Hafs 'an 'Asim edition (used by ~95% of Muslims). Verse counts follow Hafs numbering — other readings may differ.",
  surahNote: "Important: The Hafs edition counts the Basmalah as verse 1 of Al-Fatiha (making 7 verses). In the Warsh edition, it is not counted as a verse (making 6 verses). This numbering difference affects all 113 surahs that begin with the Basmalah.",
  thNum: "#", thName: "Surah Name", thAr: "Arabic", thMeaning: "Meaning", thVerses: "Verses", thPlace: "Revealed",
  totalLabel: "Total verses in Hafs edition: 6,236",
  mecca: "Mecca", medina: "Medina",
  searchPh: "Search surahs..."
},
hi: {
  surahLabel: "सम्पूर्ण सूरा सूचकांक",
  surahH: "कुरान की सभी 114 सूरतें",
  surahP: "हफ़्स अन आसिम संस्करण (~95% मुसलमानों द्वारा उपयोग) के अनुसार क्रम में। आयत गणना हफ़्स क्रमांकन का पालन करती है — अन्य पाठ भिन्न हो सकते हैं।",
  surahNote: "महत्वपूर्ण: हफ़्स संस्करण बस्मला को अल-फातिहा की आयत 1 मानता है (7 आयतें)। वर्श संस्करण में इसे आयत नहीं माना जाता (6 आयतें)। यह क्रमांकन अंतर बस्मला से शुरू होने वाली सभी 113 सूरतों को प्रभावित करता है।",
  thNum: "#", thName: "सूरा का नाम", thAr: "अरबी", thMeaning: "अर्थ", thVerses: "आयतें", thPlace: "अवतरण",
  totalLabel: "हफ़्स संस्करण में कुल आयतें: 6,236",
  mecca: "मक्का", medina: "मदीना",
  searchPh: "सूरा खोजें..."
},
ur: {
  surahLabel: "مکمل سورتوں کی فہرست",
  surahH: "قرآن کی تمام 114 سورتیں",
  surahP: "حفص عن عاصم ایڈیشن (~95% مسلمانوں کا معیار) کے مطابق ترتیب میں۔ آیات کی تعداد حفص نمبرنگ کے مطابق — دیگر قراءتوں میں فرق ہو سکتا ہے۔",
  surahNote: "اہم: حفص ایڈیشن بسملہ کو الفاتحہ کی آیت 1 شمار کرتا ہے (7 آیات)۔ ورش ایڈیشن میں اسے آیت شمار نہیں کیا جاتا (6 آیات)۔ یہ نمبرنگ فرق بسملہ سے شروع ہونے والی تمام 113 سورتوں کو متاثر کرتا ہے۔",
  thNum: "#", thName: "سورت کا نام", thAr: "عربی", thMeaning: "معنی", thVerses: "آیات", thPlace: "نزول",
  totalLabel: "حفص ایڈیشن میں کل آیات: 6,236",
  mecca: "مکہ", medina: "مدینہ",
  searchPh: "...سورت تلاش کریں"
},
fa: {
  surahLabel: "فهرست کامل سوره‌ها",
  surahH: "تمام 114 سوره قرآن",
  surahP: "به ترتیب نسخه حفص عن عاصم (~95% مسلمانان جهان). شمارش آیات بر اساس شماره‌گذاری حفص — سایر قرائت‌ها ممکن است متفاوت باشند.",
  surahNote: "مهم: نسخه حفص بسمله را آیه 1 الفاتحه می‌شمارد (7 آیه). در نسخه ورش، آیه شمرده نمی‌شود (6 آیه). این تفاوت شماره‌گذاری بر تمام 113 سوره‌ای که با بسمله شروع می‌شوند تأثیر می‌گذارد.",
  thNum: "#", thName: "نام سوره", thAr: "عربی", thMeaning: "معنی", thVerses: "آیات", thPlace: "نزول",
  totalLabel: "مجموع آیات در نسخه حفص: 6,236",
  mecca: "مکه", medina: "مدینه",
  searchPh: "...جستجوی سوره"
}
};

// Build surah table
function buildSurahSection() {
  var lang = localStorage.getItem('lang') || 'en';
  var t = SURAH_I18N[lang] || SURAH_I18N.en;
  var meccaLabel = t.mecca;
  var medinaLabel = t.medina;

  var html = '<div class="sec">';
  html += '<div class="sec-lbl" data-i="surahLabel">' + t.surahLabel + '</div>';
  html += '<h2 data-i="surahH">' + t.surahH + '</h2>';
  html += '<p data-i="surahP">' + t.surahP + '</p>';
  html += '<div class="callout" style="margin-bottom:24px"><p data-i="surahNote">' + t.surahNote + '</p></div>';
  html += '<input type="text" id="surah-search" class="surah-search" placeholder="' + t.searchPh + '" oninput="filterSurahs()">';
  html += '<div class="tw"><table id="surah-table">';
  html += '<thead><tr><th data-i="thNum">' + t.thNum + '</th><th data-i="thName">' + t.thName + '</th><th data-i="thAr">' + t.thAr + '</th><th data-i="thMeaning">' + t.thMeaning + '</th><th data-i="thVerses">' + t.thVerses + '</th><th data-i="thPlace">' + t.thPlace + '</th></tr></thead><tbody>';

  SURAHS.forEach(function(s) {
    var place = s.place === 'Mecca' ? meccaLabel : medinaLabel;
    var noteHtml = s.note ? ' <span style="color:var(--text-3);font-size:.75rem">⚠ ' + s.note + '</span>' : '';
    html += '<tr data-search="' + (s.name + ' ' + s.meaning + ' ' + s.ar).toLowerCase() + '">';
    html += '<td>' + s.n + '</td>';
    html += '<td><strong>' + s.name + '</strong>' + noteHtml + '</td>';
    html += '<td style="font-size:1.1rem;direction:rtl">' + s.ar + '</td>';
    html += '<td>' + s.meaning + '</td>';
    html += '<td>' + s.v + '</td>';
    html += '<td>' + place + '</td>';
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  html += '<p style="margin-top:12px;font-size:.85rem;color:var(--text-3)" data-i="totalLabel">' + t.totalLabel + '</p>';
  html += '</div>';

  document.getElementById('surah-section').innerHTML = html;
}

function filterSurahs() {
  var q = document.getElementById('surah-search').value.toLowerCase();
  document.querySelectorAll('#surah-table tbody tr').forEach(function(row) {
    var match = row.getAttribute('data-search').indexOf(q) !== -1;
    row.style.display = match ? '' : 'none';
  });
}

// Rebuild on language change
var origSetLang = window.setLang;
window.setLang = function(lang) {
  origSetLang(lang);
  // Update surah section translations
  var t = SURAH_I18N[lang] || SURAH_I18N.en;
  document.querySelectorAll('[data-i]').forEach(function(el) {
    var key = el.getAttribute('data-i');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Rebuild place names
  var meccaLabel = t.mecca;
  var medinaLabel = t.medina;
  document.querySelectorAll('#surah-table tbody tr').forEach(function(row) {
    var cells = row.querySelectorAll('td');
    if (cells.length >= 6) {
      var surahNum = parseInt(cells[0].textContent);
      var s = SURAHS[surahNum - 1];
      if (s) cells[5].textContent = s.place === 'Mecca' ? meccaLabel : medinaLabel;
    }
  });
  // Update search placeholder
  var search = document.getElementById('surah-search');
  if (search) search.placeholder = t.searchPh;
};

document.addEventListener('DOMContentLoaded', buildSurahSection);
