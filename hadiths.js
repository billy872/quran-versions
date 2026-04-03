// Major Hadith Collections — comprehensive reference
// Sources: Encyclopedia of Islam, hadith scholars, academic references

var HADITH_COLLECTIONS = {
kutubSittah: [
  {name:"Sahih al-Bukhari",ar:"صحيح البخاري",compiler:"Muhammad al-Bukhari",born:810,died:870,origin:"Bukhara, Uzbekistan",total:7563,unique:2602,years:16,grade:"Sahih (Authentic)",status:"Most authoritative Sunni collection",note:"Selected from ~600,000 narrations. Considered the most authentic book after the Quran by Sunni Muslims."},
  {name:"Sahih Muslim",ar:"صحيح مسلم",compiler:"Muslim ibn al-Hajjaj",born:815,died:875,origin:"Nishapur, Iran",total:7500,unique:3033,years:15,grade:"Sahih (Authentic)",status:"2nd most authoritative",note:"Selected from ~300,000 narrations. Together with Bukhari, called 'The Two Sahihs' (al-Sahihayn)."},
  {name:"Sunan Abu Dawud",ar:"سنن أبي داود",compiler:"Abu Dawud al-Sijistani",born:817,died:889,origin:"Sistan, Iran",total:5274,unique:null,years:20,grade:"Mixed (Sahih to Da'if)",status:"3rd most authoritative",note:"Selected from ~500,000. Contains sahih, hasan, and some weak hadiths. Author noted weak ones explicitly."},
  {name:"Jami' at-Tirmidhi",ar:"جامع الترمذي",compiler:"Al-Tirmidhi",born:824,died:892,origin:"Termez, Uzbekistan",total:3956,unique:null,years:null,grade:"Mixed (graded by compiler)",status:"Major Sunan collection",note:"Unique for grading each hadith (sahih, hasan, da'if, gharib). Also includes fiqh commentary."},
  {name:"Sunan an-Nasa'i",ar:"سنن النسائي",compiler:"Al-Nasa'i",born:829,died:915,origin:"Nasa, Turkmenistan",total:5761,unique:null,years:null,grade:"Mixed (strict criteria)",status:"Major Sunan collection",note:"Known for strictest criteria among the four Sunan. Originally 'al-Sunan al-Kubra', later abridged."},
  {name:"Sunan Ibn Majah",ar:"سنن ابن ماجه",compiler:"Ibn Majah",born:824,died:887,origin:"Qazvin, Iran",total:4341,unique:null,years:null,grade:"Mixed (weakest of the six)",status:"6th canonical collection",note:"Contains some hadiths not found in other five. Debated whether it should be 6th or replaced by Muwatta Malik."}
],
otherSunni: [
  {name:"Muwatta Malik",ar:"موطأ مالك",compiler:"Malik ibn Anas",born:711,died:795,origin:"Medina, Saudi Arabia",total:1594,unique:null,years:40,grade:"Sahih / Mursal",status:"Earliest compiled collection",note:"Oldest surviving hadith collection. Some scholars consider it more worthy of the 6th spot than Ibn Majah. Contains both hadiths and Medinan practice."},
  {name:"Musnad Ahmad",ar:"مسند أحمد",compiler:"Ahmad ibn Hanbal",born:780,died:855,origin:"Baghdad, Iraq",total:27647,unique:null,years:null,grade:"Mixed",status:"Largest early collection",note:"One of the largest hadith collections. Arranged by narrator (musnad), not topic. Ahmad endured persecution for his beliefs about the Quran being uncreated."},
  {name:"Sahih Ibn Khuzaymah",ar:"صحيح ابن خزيمة",compiler:"Ibn Khuzaymah",born:837,died:923,origin:"Nishapur, Iran",total:3079,unique:null,years:null,grade:"Sahih",status:"Supplementary Sahih",note:"Only about a quarter of the original work survives."},
  {name:"Sahih Ibn Hibban",ar:"صحيح ابن حبان",compiler:"Ibn Hibban",born:883,died:965,origin:"Bust, Afghanistan",total:7491,unique:null,years:null,grade:"Sahih",status:"Supplementary Sahih",note:"Arranged in a unique non-standard order. Considered reliable by most scholars."},
  {name:"Al-Mustadrak",ar:"المستدرك",compiler:"Al-Hakim al-Nishapuri",born:933,died:1012,origin:"Nishapur, Iran",total:8803,unique:null,years:null,grade:"Mixed (disputed)",status:"Supplementary collection",note:"Claims to contain hadiths meeting Bukhari/Muslim criteria but not included by them. Al-Dhahabi disputed many gradings."},
  {name:"Sunan al-Darimi",ar:"سنن الدارمي",compiler:"Al-Darimi",born:797,died:869,origin:"Samarkand, Uzbekistan",total:3503,unique:null,years:null,grade:"Mixed",status:"Early Sunan collection",note:"Some scholars rank this among the six canonical collections instead of Ibn Majah."}
],
shia: [
  {name:"Al-Kafi",ar:"الكافي",compiler:"Muhammad ibn Ya'qub al-Kulayni",born:864,died:941,origin:"Kulayn/Baghdad, Iraq",total:16199,unique:null,years:20,grade:"Mixed",status:"Most important Shia collection",note:"'The Sufficient Book'. Contains usul (principles), furu (branches), and rawdah (miscellaneous). Not all hadiths accepted as authentic by Shia scholars."},
  {name:"Man La Yahduruhu al-Faqih",ar:"من لا يحضره الفقيه",compiler:"Ibn Babawayh (al-Saduq)",born:923,died:991,origin:"Qom/Rey, Iran",total:5963,unique:null,years:null,grade:"Mixed",status:"2nd most important Shia",note:"'For Him Without Access to a Jurist'. Practical legal reference focusing on jurisprudence."},
  {name:"Tahdhib al-Ahkam",ar:"تهذيب الأحكام",compiler:"Shaykh al-Tusi",born:995,died:1067,origin:"Tus/Baghdad/Najaf",total:13590,unique:null,years:null,grade:"Mixed",status:"3rd Shia canonical",note:"'Refinement of the Laws'. Commentary on al-Muqni'ah by al-Mufid."},
  {name:"Al-Istibsar",ar:"الاستبصار",compiler:"Shaykh al-Tusi",born:995,died:1067,origin:"Tus/Baghdad/Najaf",total:5511,unique:null,years:null,grade:"Mixed",status:"4th Shia canonical",note:"'Reflection on Disagreements'. Addresses contradictions between hadiths. Same compiler as Tahdhib."}
]
};

// Key hadiths about Quran preservation/variants (relevant to this page's topic)
var KEY_HADITHS = [
  {ref:"Sahih al-Bukhari 4987",topic:"Uthman's standardization",text:"Hudhaifa was afraid of the Muslims' differences in the recitation of the Quran, so he said to 'Uthman, 'O chief of the Believers! Save this nation before they differ about the Book (Quran) as Jews and Christians did before.'",significance:"Shows disputes about Quran recitation existed among early Muslims"},
  {ref:"Sahih al-Bukhari 4992",topic:"Seven Ahruf",text:"The Messenger of Allah said: 'This Quran has been revealed to be recited in seven different ways [ahruf], so recite of it whichever is easier for you.'",significance:"Foundation for the claim of multiple valid readings"},
  {ref:"Sahih Muslim 1050",topic:"Lost Surahs",text:"Abu Musa al-Ash'ari said: 'We used to recite a surah which resembled in length and severity to [Surah] Bara'at. I have, however, forgotten it with the exception of this which I remember out of it...'",significance:"Companion testifying that entire surahs were forgotten"},
  {ref:"Sahih al-Bukhari 6830",topic:"Missing verses",text:"Umar said: 'And then we used to recite among the Verses in Allah's Book: O people! Do not claim to be the offspring of other than your fathers, as it is disbelief on your part...'",significance:"Verse recited by Umar but not found in the compiled Quran"},
  {ref:"Sahih al-Bukhari 5005",topic:"Quran collection",text:"Zaid bin Thabit said: 'Abu Bakr sent for me after the casualties among the warriors of the Battle of Yamama... I started looking for the Quran and collecting it from palm stalks, thin white stones, and from the men who knew it by heart.'",significance:"Shows the Quran was not in a single compiled form during Muhammad's lifetime"},
  {ref:"Sahih al-Bukhari 5037",topic:"Muhammad forgot verses",text:"The Prophet heard a man reciting the Quran in the mosque and said, 'May Allah bestow His Mercy on him, as he has reminded me of such-and-such verses of such a Surah.'",significance:"Muhammad himself forgot verses of the Quran"},
  {ref:"Sahih Muslim 1874",topic:"Stoning verse",text:"'Abdullah bin 'Abbas reported that Umar said, sitting on the pulpit of the Messenger of Allah: '...the verse of the stoning... we did recite this verse and understood and memorized it. Allah's Apostle did carry out the punishment of stoning...'",significance:"A verse about stoning that was recited and practiced but is not in the compiled Quran"},
  {ref:"Sahih al-Bukhari 4049",topic:"Quran reciter killed",text:"Anas reported: 'Seventy of the Ansar were killed at the battle of Bi'r Ma'una, and they used to be called the Qurra' [reciters].'",significance:"Mass death of Quran reciters prompted urgency to compile the text"}
];

var HADITH_I18N = {
en: {
  hadithLabel:"Hadith Collections",
  hadithH:"The Major Hadith Collections",
  hadithP:"Hadith are records of Muhammad's sayings and actions, second only to the Quran in Islamic authority. Multiple collections exist with varying criteria for authenticity.",
  kutubH:"The Six Canonical Sunni Collections (Kutub al-Sittah)",
  kutubP:"These six are considered the most authoritative hadith collections in Sunni Islam.",
  otherH:"Other Major Sunni Collections",
  shiaH:"The Four Canonical Shia Collections (Al-Kutub al-Arba'a)",
  shiaP:"Shia Islam has its own hadith tradition with different chains of transmission.",
  keyH:"Key Hadiths About Quran Preservation",
  keyP:"These hadiths from the most authoritative Sunni collections directly address how the Quran was transmitted, compiled, and varied — from Islam's own sources.",
  thColl:"Collection",thCompiler:"Compiler",thPeriod:"Period",thOrigin:"Origin",thHadiths:"Hadiths",thGrade:"Grade",thNote:"Notes",
  thRef:"Reference",thTopic:"Topic",thText:"Text",thSignif:"Significance",
  note1:"All dates are CE (Common Era). Hadith counts vary by edition and counting method.",
  note2:'Source: Ibn al-Salah, <em>An Introduction to the Science of Hadith</em>; Al-Suyuti, <em>Tadrib al-Rawi</em>; Jonathan A.C. Brown, <em>Hadith: Muhammad\'s Legacy</em> (Cambridge, 2009).'
},
hi: {
  hadithLabel:"हदीस संग्रह",
  hadithH:"प्रमुख हदीस संग्रह",
  hadithP:"हदीस मुहम्मद के कथनों और कार्यों के अभिलेख हैं, इस्लामी अधिकार में कुरान के बाद दूसरे स्थान पर। प्रामाणिकता के लिए विभिन्न मानदंडों के साथ कई संग्रह मौजूद हैं।",
  kutubH:"छह प्रामाणिक सुन्नी संग्रह (कुतुब अल-सित्ता)",
  kutubP:"ये छह सुन्नी इस्लाम में सबसे आधिकारिक हदीस संग्रह माने जाते हैं।",
  otherH:"अन्य प्रमुख सुन्नी संग्रह",
  shiaH:"चार प्रामाणिक शिया संग्रह (अल-कुतुब अल-अरबा)",
  shiaP:"शिया इस्लाम की अपनी हदीस परंपरा है जिसमें संचरण की अलग श्रृंखलाएं हैं।",
  keyH:"कुरान संरक्षण के बारे में मुख्य हदीसें",
  keyP:"सबसे आधिकारिक सुन्नी संग्रहों से ये हदीसें सीधे कुरान के संचरण, संकलन और भिन्नता को संबोधित करती हैं — इस्लाम के अपने स्रोतों से।",
  thColl:"संग्रह",thCompiler:"संकलक",thPeriod:"काल",thOrigin:"उत्पत्ति",thHadiths:"हदीसें",thGrade:"श्रेणी",thNote:"टिप्पणियां",
  thRef:"संदर्भ",thTopic:"विषय",thText:"पाठ",thSignif:"महत्व",
  note1:"सभी तिथियां ईसवी हैं। हदीस संख्या संस्करण और गिनती पद्धति के अनुसार भिन्न हो सकती हैं।",
  note2:'स्रोत: इब्न अल-सलाह; अल-सुयूती; जोनाथन ए.सी. ब्राउन, <em>हदीस: मुहम्मद की विरासत</em> (केम्ब्रिज, 2009)।'
},
ur: {
  hadithLabel:"حدیث کے مجموعے",
  hadithH:"اہم حدیث کے مجموعے",
  hadithP:"حدیث محمد کے اقوال اور اعمال کا ریکارڈ ہے، اسلامی اتھارٹی میں قرآن کے بعد دوسرے نمبر پر۔ مستندیت کے مختلف معیارات کے ساتھ متعدد مجموعے موجود ہیں۔",
  kutubH:"چھ مستند سنی مجموعے (کتب الستہ)",
  kutubP:"یہ چھ سنی اسلام میں سب سے مستند حدیث کے مجموعے سمجھے جاتے ہیں۔",
  otherH:"دیگر اہم سنی مجموعے",
  shiaH:"چار مستند شیعہ مجموعے (الکتب الاربعہ)",
  shiaP:"شیعہ اسلام کی اپنی حدیث کی روایت ہے جس میں نقل کی مختلف زنجیریں ہیں۔",
  keyH:"قرآن کی حفاظت کے بارے میں اہم احادیث",
  keyP:"سب سے مستند سنی مجموعوں سے یہ احادیث براہ راست قرآن کی ترسیل، تدوین اور اختلافات کو بیان کرتی ہیں — اسلام کے اپنے ذرائع سے۔",
  thColl:"مجموعہ",thCompiler:"مرتب",thPeriod:"دور",thOrigin:"اصل",thHadiths:"احادیث",thGrade:"درجہ",thNote:"نوٹس",
  thRef:"حوالہ",thTopic:"موضوع",thText:"متن",thSignif:"اہمیت",
  note1:"تمام تاریخیں عیسوی ہیں۔ حدیث کی تعداد ایڈیشن اور شمار کے طریقے سے مختلف ہو سکتی ہے۔",
  note2:'ماخذ: ابن الصلاح؛ السیوطی؛ جوناتھن اے سی براؤن، <em>حدیث: محمد کی وراثت</em> (کیمبرج، 2009)۔'
},
fa: {
  hadithLabel:"مجموعه‌های حدیث",
  hadithH:"مجموعه‌های مهم حدیث",
  hadithP:"حدیث سوابق گفته‌ها و اعمال محمد است، از نظر اقتدار اسلامی پس از قرآن در مقام دوم. مجموعه‌های متعددی با معیارهای مختلف اعتبارسنجی وجود دارند.",
  kutubH:"شش مجموعه معتبر اهل سنت (کتب سته)",
  kutubP:"این شش مجموعه معتبرترین مجموعه‌های حدیث در اسلام اهل سنت محسوب می‌شوند.",
  otherH:"سایر مجموعه‌های مهم اهل سنت",
  shiaH:"چهار مجموعه معتبر شیعه (الکتب الأربعة)",
  shiaP:"اسلام شیعه سنت حدیثی خاص خود با زنجیره‌های نقل متفاوت دارد.",
  keyH:"احادیث کلیدی درباره حفظ قرآن",
  keyP:"این احادیث از معتبرترین مجموعه‌های اهل سنت مستقیماً به نحوه انتقال، گردآوری و تفاوت‌های قرآن می‌پردازند — از منابع خود اسلام.",
  thColl:"مجموعه",thCompiler:"مؤلف",thPeriod:"دوره",thOrigin:"خاستگاه",thHadiths:"احادیث",thGrade:"درجه",thNote:"یادداشت‌ها",
  thRef:"مرجع",thTopic:"موضوع",thText:"متن",thSignif:"اهمیت",
  note1:"تمام تاریخ‌ها میلادی هستند. تعداد احادیث بر اساس نسخه و روش شمارش متفاوت است.",
  note2:'منبع: ابن صلاح؛ سیوطی؛ جاناتان ای.سی. براون، <em>حدیث: میراث محمد</em> (کمبریج، 2009).'
}
};

function buildHadithSection() {
  var lang = localStorage.getItem('lang') || 'en';
  var t = HADITH_I18N[lang] || HADITH_I18N.en;
  var h = '';

  h += '<div class="sec">';
  h += '<div class="sec-lbl" data-i="hadithLabel">' + t.hadithLabel + '</div>';
  h += '<h2 data-i="hadithH">' + t.hadithH + '</h2>';
  h += '<p data-i="hadithP">' + t.hadithP + '</p>';

  // Kutub al-Sittah
  h += '<h3 style="font-size:1.1rem;margin:28px 0 12px;font-weight:600" data-i="kutubH">' + t.kutubH + '</h3>';
  h += '<p style="color:var(--text-2);font-size:.9rem;margin-bottom:16px" data-i="kutubP">' + t.kutubP + '</p>';
  h += buildCollectionCards(HADITH_COLLECTIONS.kutubSittah, t);

  // Other Sunni
  h += '<h3 style="font-size:1.1rem;margin:36px 0 12px;font-weight:600" data-i="otherH">' + t.otherH + '</h3>';
  h += buildCollectionCards(HADITH_COLLECTIONS.otherSunni, t);

  // Shia
  h += '<h3 style="font-size:1.1rem;margin:36px 0 12px;font-weight:600" data-i="shiaH">' + t.shiaH + '</h3>';
  h += '<p style="color:var(--text-2);font-size:.9rem;margin-bottom:16px" data-i="shiaP">' + t.shiaP + '</p>';
  h += buildCollectionCards(HADITH_COLLECTIONS.shia, t);

  // Key Hadiths about Quran
  h += '<h3 style="font-size:1.1rem;margin:36px 0 12px;font-weight:600" data-i="keyH">' + t.keyH + '</h3>';
  h += '<p style="color:var(--text-2);font-size:.9rem;margin-bottom:16px" data-i="keyP">' + t.keyP + '</p>';
  h += buildKeyHadiths(t);

  // Notes
  h += '<p style="font-size:.8rem;color:var(--text-3);margin-top:20px" data-i="note1">' + t.note1 + '</p>';
  h += '<p style="font-size:.8rem;color:var(--text-3);margin-top:6px" data-i="note2">' + t.note2 + '</p>';

  h += '</div>';
  document.getElementById('hadith-section').innerHTML = h;
}

function buildCollectionCards(collections, t) {
  var h = '';
  collections.forEach(function(c) {
    h += '<div class="card" style="margin-bottom:12px">';
    h += '<div class="card-body" style="padding:20px">';
    h += '<div class="card-head">';
    h += '<div><div class="card-name" style="font-size:1.15rem">' + c.name + '</div>';
    h += '<div style="font-size:1rem;color:var(--text-2);direction:rtl;display:inline-block;margin-top:2px">' + c.ar + '</div></div>';
    h += '<div class="tags"><span class="tag">' + c.grade + '</span></div>';
    h += '</div>';
    h += '<div class="dets" style="margin-top:14px">';
    h += '<div><div class="det-lbl">' + t.thCompiler + '</div><div class="det-val">' + c.compiler + ' (' + c.born + '–' + c.died + ' CE)</div></div>';
    h += '<div><div class="det-lbl">' + t.thOrigin + '</div><div class="det-val">' + c.origin + '</div></div>';
    h += '<div><div class="det-lbl">' + t.thHadiths + '</div><div class="det-val">' + c.total.toLocaleString() + (c.unique ? ' (unique: ' + c.unique.toLocaleString() + ')' : '') + '</div></div>';
    if (c.years) h += '<div><div class="det-lbl">Compilation</div><div class="det-val">' + c.years + ' years</div></div>';
    h += '</div>';
    h += '<div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);color:var(--text-2);font-size:.85rem;line-height:1.6">' + c.note + '</div>';
    h += '</div></div>';
  });
  return h;
}

function buildKeyHadiths(t) {
  var h = '';
  KEY_HADITHS.forEach(function(k) {
    h += '<div class="card" style="margin-bottom:12px">';
    h += '<div class="card-body" style="padding:20px">';
    h += '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:10px">';
    h += '<div class="card-name" style="font-size:1rem">' + k.topic + '</div>';
    h += '<span class="tag">' + k.ref + '</span>';
    h += '</div>';
    h += '<blockquote style="border-left:2px solid var(--border);padding-left:16px;margin:12px 0;color:var(--text-2);font-size:.9rem;line-height:1.7;font-style:italic">"' + k.text + '"</blockquote>';
    h += '<div style="color:var(--text);font-size:.85rem;font-weight:500">' + t.thSignif + ': <span style="color:var(--text-2);font-weight:400">' + k.significance + '</span></div>';
    h += '</div></div>';
  });
  return h;
}

// Hook into language switching
var _origSetLang2 = window.setLang;
window.setLang = function(lang) {
  _origSetLang2(lang);
  var t = HADITH_I18N[lang] || HADITH_I18N.en;
  // Update hadith-specific data-i elements
  document.querySelectorAll('#hadith-section [data-i]').forEach(function(el) {
    var key = el.getAttribute('data-i');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
};

document.addEventListener('DOMContentLoaded', buildHadithSection);
