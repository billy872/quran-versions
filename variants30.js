// The 30 Official Variant Qurans — extracted from presentation slides
// Source: Hatun Tash collection (26→37 Qurans), Bernie Power collection (23 Qurans)
// Academic source: Ibn Mujahid (d. 936), Al-Shatibi (d. 1194), Al-Jazari (d. 1429)

var THIRTY_VARIANTS = {
  // 7 Readers chosen by Ibn Mujahid (d. 936) = 14 transmissions (Al-Shatibi, d. 1194)
  sevenReaders: [
    {num:1, reader:"Nafi' al-Madani", readerDates:"Medina, 689–785 AD", rawi1:"Qalun", rawi1d:"d. 835 AD", rawi2:"Warsh", rawi2d:"d. 812 AD"},
    {num:2, reader:"Ibn Kathir al-Makki", readerDates:"Mecca, 666–738 AD", rawi1:"Al-Bazzi", rawi1d:"d. 864 AD", rawi2:"Qunbul", rawi2d:"d. 904 AD"},
    {num:3, reader:"Abu 'Amr ibn al-'Ala'", readerDates:"Basra, 690–770 AD", rawi1:"Al-Duri", rawi1d:"d. 860 AD", rawi2:"Al-Susi", rawi2d:"d. 874 AD"},
    {num:4, reader:"Ibn Amir ad-Dimashqi", readerDates:"Damascus, d. 736 AD", rawi1:"Hisham", rawi1d:"d. 859 AD", rawi2:"Ibn Dhakwan", rawi2d:"d. 857 AD"},
    {num:5, reader:"Aasim ibn Abi al-Najud", readerDates:"Kufa, 700–745 AD", rawi1:"Shu'bah", rawi1d:"d. 809 AD", rawi2:"Hafs", rawi2d:"d. 796 AD", rawi2highlight:true},
    {num:6, reader:"Hamzah az-Zaiyyat", readerDates:"Kufa, 696–772 AD", rawi1:"Khalaf", rawi1d:"d. 844 AD", rawi2:"Khallad", rawi2d:"d. 835 AD"},
    {num:7, reader:"Al-Kisa'i", readerDates:"Kufa, 737–805 AD", rawi1:"Al-Layth", rawi1d:"d. 854 AD", rawi2:"Al-Duri", rawi2d:"d. 860 AD"}
  ],
  // 3 more chosen by Al-Jazari (d. 1429) = 6 more transmissions
  threeMore: [
    {num:8, reader:"Abu Ja'far", readerDates:"Medina, d. 748 AD", rawi1:"'Isa ibn Wardan", rawi1d:"d. 777 AD", rawi2:"Ibn Jummaz", rawi2d:"d. 787 AD"},
    {num:9, reader:"Ya'qub al-Yamani", readerDates:"Basra, d. 821 AD", rawi1:"Ruways", rawi1d:"d. 853 AD", rawi2:"Rawh", rawi2d:"d. 849 AD"},
    {num:10, reader:"Khalaf", readerDates:"Kufa, d. 844 AD", rawi1:"Ishaq", rawi1d:"d. 899 AD", rawi2:"Idris", rawi2d:"d. 905 AD"}
  ]
};

// Hatun Tash's labeled collection (from Image 3)
var HATUN_QURANS = [
  {num:1, label:"Al Susi"},
  {num:2, label:"Abi Ja'far"},
  {num:3, label:"Ya'quub"},
  {num:4, label:"Khalaf Al Aasher; Al Donah Way"},
  {num:5, label:"Warsh; Al Azraq Way"},
  {num:6, label:"Doori Abi Amr Al Basri (Kesaa'i)"},
  {num:7, label:"Doori (Abi Amr al Alaa)"},
  {num:8, label:"Ibn Jamaz"},
  {num:9, label:"Warsh; Al Asbahaani Way"},
  {num:10, label:"Ibn Aamer"},
  {num:11, label:"Al Layth ibn Khaaled"},
  {num:12, label:"Sho'bah ibn Ayyaah ibn Saalem Al Asid Al Nahshali al Kufi"},
  {num:13, label:"Al Kesaa'i (reading of Abu Haareth al Layth ibn Khaled al Baghdaadi)"},
  {num:14, label:"Ibn Kathir"},
  {num:15, label:"Khalaf; Al Shaatebeyyah Way"},
  {num:16, label:"Heshaam Ibn Ammar"},
  {num:17, label:"Al Bazzi"},
  {num:18, label:"Sho'bah (Ibn Abi)"},
  {num:19, label:"Al Imam Abu Bakar Al (Damashqi)"},
  {num:20, label:"Hafs"},
  {num:21, label:"Rawh"},
  {num:22, label:"Qaloon; Al Shatebyyi"},
  {num:23, label:"Sho'beh"},
  {num:24, label:"Khalaf"},
  {num:25, label:"Qalun"},
  {num:26, label:"Qunbol (Ibn Abi Kathir al Abi Jowjel Basiri)"}
];

var V30_I18N = {
en: {
  v30Label: "The 30 Official Variant Qurans",
  v30H: "30 Different Qurans — Not One",
  v30P: "Islamic scholarship itself recognizes 10 readers and 20 transmitters, producing at least 20 distinct Quran texts. With additional transmission paths (turuq), the count reaches 30+. These are not pronunciation differences — they contain different words, meanings, and grammar.",
  v30Stat: "93,263 differences",
  v30StatLabel: "across all 30 readings compared to Hafs",
  v30ChartCap: "The 30 official readers and transmitters. The 7 original readers were chosen by Ibn Mujahid (d. 936 CE). 14 transmissions were documented by Al-Shatibi (d. 1194 CE). 3 more readers (6 transmissions) were added by Al-Jazari (d. 1429 CE). Hafs (circled) became the global standard only in 1924. Source: Islamic Qira'at scholarship.",
  hatunH: "Physical Evidence: Multiple Qurans Exist as Printed Books",
  hatunP: "These are not theoretical. They are real, physical, printed Qurans — each with different text — available for purchase in Islamic bookstores worldwide.",
  hatunCap: "Hatun Tash's collection of 26 different Quran editions (now 37). Each labeled with its reader/transmitter name. Every one contains textual differences from the others. Source: DCCI Ministries.",
  bernieCap: "Bernie Power's collection of 23 different Qira'at Qurans, with colored tabs marking textual differences. Each book is a different version of 'the same' Quran. Source: Bernie Power.",
  notExclusive: "This is not exhaustive — these are just the officially recognized variants. When examined, we immediately find textual differences in words, grammar, pronouns, verb forms, and meaning. This directly refutes the claim that 'not a single word has been changed.'",
  readerCol: "Reader", transmitterCol: "Transmitter 1", transmitter2Col: "Transmitter 2", chosenBy: "Chosen by",
  sevenLabel: "The Original 7 Readers → 14 Transmissions",
  threeLabel: "3 Additional Readers → 6 More Transmissions"
},
hi: {
  v30Label: "30 आधिकारिक भिन्न कुरान",
  v30H: "30 अलग-अलग कुरान — एक नहीं",
  v30P: "इस्लामी विद्वता स्वयं 10 पाठकों और 20 संचारकों को मान्यता देती है, जो कम से कम 20 अलग कुरान पाठ उत्पन्न करते हैं। अतिरिक्त संचरण मार्गों (तुरुक) के साथ, संख्या 30+ तक पहुंचती है।",
  v30Stat: "93,263 अंतर",
  v30StatLabel: "हफ़्स की तुलना में सभी 30 पाठों में",
  v30ChartCap: "30 आधिकारिक पाठक और संचारक। मूल 7 पाठकों को इब्न मुजाहिद (मृ. 936 ई.) ने चुना। 14 संचरणों को अल-शातिबी (मृ. 1194 ई.) ने प्रलेखित किया। 3 और पाठक (6 संचरण) अल-जज़री (मृ. 1429 ई.) ने जोड़े। हफ़्स (गोले में) केवल 1924 में वैश्विक मानक बना।",
  hatunH: "भौतिक साक्ष्य: कई कुरान मुद्रित पुस्तकों के रूप में मौजूद हैं",
  hatunP: "ये सैद्धांतिक नहीं हैं। ये वास्तविक, भौतिक, मुद्रित कुरान हैं — प्रत्येक अलग पाठ के साथ — दुनिया भर की इस्लामी किताबों की दुकानों में उपलब्ध।",
  hatunCap: "हातून ताश का 26 अलग कुरान संस्करणों का संग्रह (अब 37)। प्रत्येक अपने पाठक/संचारक नाम के साथ लेबल। स्रोत: DCCI मंत्रालय।",
  bernieCap: "बर्नी पावर का 23 अलग किराअत कुरानों का संग्रह, रंगीन टैब पाठ्य अंतर दर्शाते हैं। स्रोत: बर्नी पावर।",
  notExclusive: "यह सम्पूर्ण सूची नहीं है — ये केवल आधिकारिक रूप से मान्यता प्राप्त भिन्नताएं हैं। जांच करने पर, हमें तुरंत शब्दों, व्याकरण, सर्वनामों, क्रिया रूपों और अर्थ में पाठ्य अंतर मिलते हैं। यह सीधे इस दावे का खंडन करता है कि 'एक भी शब्द नहीं बदला गया है।'",
  readerCol: "पाठक", transmitterCol: "संचारक 1", transmitter2Col: "संचारक 2", chosenBy: "द्वारा चुने गए",
  sevenLabel: "मूल 7 पाठक → 14 संचरण",
  threeLabel: "3 अतिरिक्त पाठक → 6 और संचरण"
},
ur: {
  v30Label: "30 سرکاری مختلف قرآن",
  v30H: "30 مختلف قرآن — ایک نہیں",
  v30P: "خود اسلامی علم 10 قراء اور 20 راویوں کو تسلیم کرتا ہے، جو کم از کم 20 الگ قرآنی متون پیدا کرتے ہیں۔ اضافی ترسیلی راستوں (طرق) کے ساتھ، تعداد 30+ تک پہنچتی ہے۔",
  v30Stat: "93,263 اختلافات",
  v30StatLabel: "حفص کے مقابلے میں تمام 30 قراءتوں میں",
  v30ChartCap: "30 سرکاری قراء اور راوی۔ اصل 7 قراء کو ابن مجاہد (وفات 936 عیسوی) نے منتخب کیا۔ 14 روایات کو الشاطبی (وفات 1194 عیسوی) نے مستند کیا۔ 3 مزید قراء (6 روایات) الجزری (وفات 1429 عیسوی) نے شامل کیے۔ حفص (دائرے میں) صرف 1924 میں عالمی معیار بنا۔",
  hatunH: "مادی ثبوت: متعدد قرآن مطبوعہ کتابوں کے طور پر موجود ہیں",
  hatunP: "یہ نظریاتی نہیں ہیں۔ یہ حقیقی، مادی، مطبوعہ قرآن ہیں — ہر ایک مختلف متن کے ساتھ — دنیا بھر کی اسلامی کتابوں کی دکانوں میں دستیاب۔",
  hatunCap: "حاتون تاش کا 26 مختلف قرآن ایڈیشنز کا مجموعہ (اب 37)۔ ہر ایک اپنے قاری/راوی نام کے ساتھ لیبل۔ ماخذ: DCCI وزارتیں۔",
  bernieCap: "برنی پاور کا 23 مختلف قراءت قرآنوں کا مجموعہ، رنگین ٹیبز متنی اختلافات ظاہر کرتے ہیں۔ ماخذ: برنی پاور۔",
  notExclusive: "یہ مکمل نہیں ہے — یہ صرف سرکاری طور پر تسلیم شدہ اختلافات ہیں۔ جانچ کرنے پر، ہمیں فوری طور پر الفاظ، گرامر، ضمائر، فعل کی شکلوں اور معنی میں متنی اختلافات ملتے ہیں۔ یہ براہ راست اس دعوے کی تردید کرتا ہے کہ 'ایک بھی لفظ نہیں بدلا گیا۔'",
  readerCol: "قاری", transmitterCol: "راوی 1", transmitter2Col: "راوی 2", chosenBy: "کے منتخب کردہ",
  sevenLabel: "اصل 7 قراء ← 14 روایات",
  threeLabel: "3 اضافی قراء ← 6 مزید روایات"
},
fa: {
  v30Label: "30 قرآن رسمی متفاوت",
  v30H: "30 قرآن متفاوت — نه یکی",
  v30P: "خود علوم اسلامی 10 قاری و 20 راوی را به رسمیت می‌شناسد که حداقل 20 متن قرآنی متمایز تولید می‌کنند. با مسیرهای انتقال اضافی (طرق)، تعداد به 30+ می‌رسد.",
  v30Stat: "93,263 تفاوت",
  v30StatLabel: "در تمام 30 قرائت در مقایسه با حفص",
  v30ChartCap: "30 قاری و راوی رسمی. 7 قاری اصلی توسط ابن مجاهد (درگذشت 936 م.) انتخاب شدند. 14 روایت توسط الشاطبی (درگذشت 1194 م.) مستند شدند. 3 قاری دیگر (6 روایت) توسط الجزری (درگذشت 1429 م.) افزوده شدند. حفص (دایره شده) تنها در 1924 استاندارد جهانی شد.",
  hatunH: "شواهد فیزیکی: قرآن‌های متعدد به صورت کتاب‌های چاپی وجود دارند",
  hatunP: "اینها نظری نیستند. اینها قرآن‌های واقعی، فیزیکی و چاپ شده هستند — هر کدام با متن متفاوت — در کتابفروشی‌های اسلامی سراسر جهان موجودند.",
  hatunCap: "مجموعه 26 نسخه متفاوت قرآن حاتون تاش (اکنون 37). هر کدام با نام قاری/راوی خود برچسب‌گذاری شده. منبع: وزارت‌های DCCI.",
  bernieCap: "مجموعه 23 قرآن قرائتی متفاوت برنی پاور، با زبانه‌های رنگی که تفاوت‌های متنی را نشان می‌دهند. منبع: برنی پاور.",
  notExclusive: "این فهرست کامل نیست — اینها فقط تفاوت‌های رسماً به رسمیت شناخته شده هستند. با بررسی، فوراً تفاوت‌های متنی در کلمات، دستور زبان، ضمایر، صرف افعال و معنی می‌یابیم. این مستقیماً ادعای 'حتی یک کلمه تغییر نکرده است' را رد می‌کند.",
  readerCol: "قاری", transmitterCol: "راوی 1", transmitter2Col: "راوی 2", chosenBy: "انتخاب شده توسط",
  sevenLabel: "7 قاری اصلی ← 14 روایت",
  threeLabel: "3 قاری اضافی ← 6 روایت دیگر"
}
};

function buildV30Section(lang) {
  lang = lang || localStorage.getItem('lang') || 'en';
  var t = V30_I18N[lang] || V30_I18N.en;
  var h = '<div class="sec">';
  h += '<div class="sec-lbl" data-i="v30Label">' + t.v30Label + '</div>';
  h += '<h2 data-i="v30H">' + t.v30H + '</h2>';
  h += '<p data-i="v30P">' + t.v30P + '</p>';

  // Big stat
  h += '<div class="stats" style="grid-template-columns:1fr;max-width:400px">';
  h += '<div class="stat"><div class="stat-n" style="font-size:2.2rem;color:var(--text)" data-i="v30Stat">' + t.v30Stat + '</div>';
  h += '<div class="stat-l" data-i="v30StatLabel">' + t.v30StatLabel + '</div></div></div>';

  // Chart image
  h += '<div class="card" style="margin:24px 0"><img src="images/30-readers-chart.jpg" alt="30 Official Readers and Transmitters" style="width:100%;height:auto;max-height:500px;object-fit:contain" loading="lazy">';
  h += '<div class="card-cap" data-i="v30ChartCap">' + t.v30ChartCap + '</div></div>';

  // Table: 7 Readers = 14 Transmissions
  h += '<h3 style="font-size:1rem;margin:24px 0 10px;font-weight:600" data-i="sevenLabel">' + t.sevenLabel + '</h3>';
  h += '<p style="font-size:.8rem;color:var(--text-3);margin-bottom:12px">' + t.chosenBy + ': Ibn Mujahid (d. 936 CE) — 14 ' + t.chosenBy + ' Al-Shatibi (d. 1194 CE)</p>';
  h += buildReaderTable(THIRTY_VARIANTS.sevenReaders, t);

  // Table: 3 More = 6 Transmissions
  h += '<h3 style="font-size:1rem;margin:24px 0 10px;font-weight:600" data-i="threeLabel">' + t.threeLabel + '</h3>';
  h += '<p style="font-size:.8rem;color:var(--text-3);margin-bottom:12px">' + t.chosenBy + ': Al-Jazari (d. 1429 CE)</p>';
  h += buildReaderTable(THIRTY_VARIANTS.threeMore, t);

  // Total
  h += '<div class="callout" style="margin:24px 0"><p style="font-size:.95rem"><strong>10 ' + t.readerCol + ' × 2 ' + t.transmitterCol + ' = 20 ' + (lang==='en'?'distinct Quran texts':'') + '</strong><br>';
  h += '<span style="color:var(--text-2)">' + (lang==='en'?'With additional transmission paths (turuq), the number reaches 30+. Across these, ':'') + '<strong>' + t.v30Stat + '</strong> ' + t.v30StatLabel + '.</span></p></div>';

  // Physical Evidence heading
  h += '<h3 style="font-size:1.1rem;margin:32px 0 10px;font-weight:600" data-i="hatunH">' + t.hatunH + '</h3>';
  h += '<p style="color:var(--text-2);font-size:.9rem;margin-bottom:16px" data-i="hatunP">' + t.hatunP + '</p>';

  // Hatun's 26 Qurans image
  h += '<div class="card" style="margin:16px 0"><img src="images/hatuns-26-qurans.jpg" alt="Hatun Tash 26 different Quran editions" style="width:100%;height:auto" loading="lazy">';
  h += '<div class="card-cap" data-i="hatunCap">' + t.hatunCap + '</div></div>';

  // Bernie Power's 23 Qurans
  h += '<div class="card" style="margin:16px 0"><img src="images/bernie-powers-23-qurans.jpg" alt="Bernie Power 23 Qiraat Qurans" style="width:100%;height:auto" loading="lazy">';
  h += '<div class="card-cap" data-i="bernieCap">' + t.bernieCap + '</div></div>';

  // Not exhaustive callout
  h += '<div class="callout" style="margin:24px 0"><p data-i="notExclusive">' + t.notExclusive + '</p></div>';

  h += '</div>';
  document.getElementById('v30-section').innerHTML = h;
}

function buildReaderTable(data, t) {
  var h = '<div class="tw"><table><thead><tr><th>#</th><th>' + t.readerCol + '</th><th>' + t.transmitterCol + '</th><th>' + t.transmitter2Col + '</th></tr></thead><tbody>';
  data.forEach(function(r) {
    h += '<tr>';
    h += '<td>' + r.num + '</td>';
    h += '<td><strong>' + r.reader + '</strong><br><span style="font-size:.75rem;color:var(--text-3)">' + r.readerDates + '</span></td>';
    h += '<td>' + r.rawi1 + '<br><span style="font-size:.75rem;color:var(--text-3)">' + r.rawi1d + '</span></td>';
    h += '<td>' + (r.rawi2highlight ? '<strong style="border:1px solid var(--text);padding:2px 6px;border-radius:3px">' + r.rawi2 + '</strong>' : r.rawi2) + '<br><span style="font-size:.75rem;color:var(--text-3)">' + r.rawi2d + '</span></td>';
    h += '</tr>';
  });
  h += '</tbody></table></div>';
  return h;
}

// Hook into setLang chain
var _origSetLang4 = window.setLang;
window.setLang = function(lang) {
  _origSetLang4(lang);
  buildV30Section(lang);
  // Also update data-i elements in this section
  var t = V30_I18N[lang] || V30_I18N.en;
  document.querySelectorAll('#v30-section [data-i]').forEach(function(el) {
    var key = el.getAttribute('data-i');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Direction enforcement
  var dirs = {en:'ltr', hi:'ltr', ur:'rtl', fa:'rtl'};
  document.documentElement.setAttribute('dir', dirs[lang] || 'ltr');
};

document.addEventListener('DOMContentLoaded', function(){ buildV30Section(); });
