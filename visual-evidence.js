// Visual Evidence: Side-by-side manuscript comparisons showing actual textual differences
// Source: Pfander Films / DCCI Ministries presentation slides

var VISUAL_EVIDENCE = [
  {
    img: "images/variant-3-146.jpg",
    verse: "Sura 3:146",
    hafsWord: "Qaatala", hafsArabic: "قَاتَلَ",
    warshWord: "Qutila", warshArabic: "قُتِلَ",
    hafsReading: "Hafs",
    warshReading: "Warsh",
    en: {
      hafsTranslation: '"And how many a prophet <strong>fought</strong>, with whom were many worshippers of the Lord"',
      warshTranslation: '"And how many prophets <strong>were killed</strong>, with whom were many worshippers of the Lord"',
      problem: 'Did the Prophets simply <strong>FIGHT</strong>, or were they <strong>KILLED</strong>? These are fundamentally different events. Fighting means you survive. Being killed means you don\'t.',
      type: 'Active voice → Passive voice'
    },
    hi: {
      hafsTranslation: '"और कितने ही नबी <strong>लड़े</strong>, जिनके साथ बहुत से रब के बंदे थे"',
      warshTranslation: '"और कितने ही नबी <strong>मारे गए</strong>, जिनके साथ बहुत से रब के बंदे थे"',
      problem: 'क्या नबी केवल <strong>लड़े</strong>, या वे <strong>मारे गए</strong>? ये मौलिक रूप से अलग घटनाएं हैं।',
      type: 'सक्रिय → निष्क्रिय'
    },
    ur: {
      hafsTranslation: '"اور کتنے ہی نبی <strong>لڑے</strong>، جن کے ساتھ بہت سے رب کے بندے تھے"',
      warshTranslation: '"اور کتنے ہی نبی <strong>مارے گئے</strong>، جن کے ساتھ بہت سے رب کے بندے تھے"',
      problem: 'کیا انبیاء صرف <strong>لڑے</strong>، یا وہ <strong>مارے گئے</strong>؟ یہ بنیادی طور پر مختلف واقعات ہیں۔',
      type: 'فاعل ← مفعول'
    },
    fa: {
      hafsTranslation: '"و چه بسیار پیامبرانی که <strong>جنگیدند</strong>، و با آنها بندگان بسیاری بودند"',
      warshTranslation: '"و چه بسیار پیامبرانی که <strong>کشته شدند</strong>، و با آنها بندگان بسیاری بودند"',
      problem: 'آیا پیامبران فقط <strong>جنگیدند</strong>، یا <strong>کشته شدند</strong>؟ اینها رویدادهای اساساً متفاوتی هستند.',
      type: 'معلوم ← مجهول'
    }
  },
  {
    img: "images/variant-43-19.jpg",
    verse: "Sura 43:19",
    hafsWord: "ibaadu", hafsArabic: "عِبَادُ",
    warshWord: "inda", warshArabic: "عِندَ",
    hafsReading: "Hafs",
    warshReading: "Rawh",
    en: {
      hafsTranslation: '"And they make the angels, who are <strong>slaves</strong> of the Beneficent, females"',
      warshTranslation: '"And they make the angels, who are <strong>in the presence</strong> of the Beneficent, females"',
      problem: 'Are the angels <strong>slaves</strong> of Allah, or simply <strong>in His presence</strong>? These are completely different theological statements. A slave serves; one in God\'s presence simply exists near Him.',
      type: 'Completely different word and meaning'
    },
    hi: {
      hafsTranslation: '"और वे फरिश्तों को, जो रहमान के <strong>बंदे</strong> हैं, मादा बनाते हैं"',
      warshTranslation: '"और वे फरिश्तों को, जो रहमान <strong>की उपस्थिति में</strong> हैं, मादा बनाते हैं"',
      problem: 'क्या फरिश्ते अल्लाह के <strong>बंदे</strong> हैं, या बस <strong>उसकी उपस्थिति में</strong> हैं? ये पूरी तरह अलग धार्मिक बयान हैं।',
      type: 'पूर्णतया भिन्न शब्द और अर्थ'
    },
    ur: {
      hafsTranslation: '"اور وہ فرشتوں کو، جو رحمان کے <strong>بندے</strong> ہیں، مؤنث بناتے ہیں"',
      warshTranslation: '"اور وہ فرشتوں کو، جو رحمان <strong>کی موجودگی میں</strong> ہیں، مؤنث بناتے ہیں"',
      problem: 'کیا فرشتے اللہ کے <strong>بندے</strong> ہیں، یا صرف <strong>اس کی موجودگی میں</strong> ہیں؟ یہ مکمل طور پر مختلف مذہبی بیانات ہیں۔',
      type: 'مکمل مختلف لفظ اور معنی'
    },
    fa: {
      hafsTranslation: '"و آنها فرشتگان را که <strong>بندگان</strong> رحمان هستند، مؤنث می‌سازند"',
      warshTranslation: '"و آنها فرشتگان را که <strong>در حضور</strong> رحمان هستند، مؤنث می‌سازند"',
      problem: 'آیا فرشتگان <strong>بندگان</strong> خدا هستند، یا صرفاً <strong>در حضور</strong> او؟ اینها بیانیه‌های الهیاتی کاملاً متفاوتی هستند.',
      type: 'کلمه و معنای کاملاً متفاوت'
    }
  },
  {
    img: "images/variant-46-15.jpg",
    verse: "Sura 46:15",
    hafsWord: "ihsaanan", hafsArabic: "إِحْسَانًا",
    warshWord: "husnan", warshArabic: "حُسْنًا",
    hafsReading: "Hafs",
    warshReading: "Al-Duri (Abu Amir al-Alaa)",
    en: {
      hafsTranslation: '"And We have enjoined on man <strong>doing good</strong> to his parents"',
      warshTranslation: '"And We have enjoined on man <strong>beauty</strong> to his parents"',
      problem: 'Are men supposed to <strong>do good</strong> to their parents, or be <strong>beautiful</strong> to them? As a parent, you\'d prefer your son to be <strong>good</strong>, rather than <strong>good looking</strong>.',
      type: 'Different word — different instruction'
    },
    hi: {
      hafsTranslation: '"और हमने इंसान को अपने माता-पिता के साथ <strong>अच्छा व्यवहार</strong> करने का आदेश दिया"',
      warshTranslation: '"और हमने इंसान को अपने माता-पिता के साथ <strong>सुंदरता</strong> का आदेश दिया"',
      problem: 'क्या पुरुषों को अपने माता-पिता के साथ <strong>अच्छा</strong> करना चाहिए, या <strong>सुंदर</strong> होना चाहिए? एक माता-पिता के रूप में, आप चाहेंगे कि आपका बेटा <strong>अच्छा</strong> हो, न कि <strong>सुंदर</strong>।',
      type: 'अलग शब्द — अलग निर्देश'
    },
    ur: {
      hafsTranslation: '"اور ہم نے انسان کو اپنے والدین کے ساتھ <strong>نیکی</strong> کرنے کا حکم دیا"',
      warshTranslation: '"اور ہم نے انسان کو اپنے والدین کے ساتھ <strong>خوبصورتی</strong> کا حکم دیا"',
      problem: 'کیا مردوں کو اپنے والدین کے ساتھ <strong>نیکی</strong> کرنی چاہیے، یا <strong>خوبصورت</strong> ہونا چاہیے؟ ایک والدین کے طور پر، آپ چاہیں گے کہ آپ کا بیٹا <strong>نیک</strong> ہو، نہ کہ <strong>خوبصورت</strong>۔',
      type: 'مختلف لفظ — مختلف ہدایت'
    },
    fa: {
      hafsTranslation: '"و ما به انسان سفارش کردیم که با والدینش <strong>نیکی</strong> کند"',
      warshTranslation: '"و ما به انسان سفارش کردیم که با والدینش <strong>زیبایی</strong> کند"',
      problem: 'آیا مردان باید با والدین خود <strong>نیکی</strong> کنند، یا <strong>زیبا</strong> باشند؟ به عنوان والدین، ترجیح می‌دهید فرزندتان <strong>نیکو</strong> باشد، نه <strong>زیبا</strong>.',
      type: 'کلمه متفاوت — دستور متفاوت'
    }
  },
  {
    img: "images/variant-98-6.jpg",
    verse: "Sura 98:6",
    hafsWord: "al bareiyyati", hafsArabic: "الْبَرِيَّةِ",
    warshWord: "al bare'ati", warshArabic: "الْبَرِيئَةِ",
    hafsReading: "Hafs",
    warshReading: "Warsh (Al Asbahaani)",
    en: {
      hafsTranslation: '"Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell... Those are the worst of <strong>creatures</strong>"',
      warshTranslation: '"Indeed, they who disbelieved among the People of the Scripture and the polytheists will be in the fire of Hell... Those are the worst of <strong>the innocent</strong>"',
      problem: 'Are Christians and Jews the worst <strong>creatures</strong>, or the worst of <strong>the innocent</strong>? And if they\'re <strong>innocent</strong>, what are they doing in Hell?',
      type: 'Different root word — contradictory meaning'
    },
    hi: {
      hafsTranslation: '"निश्चय ही जिन्होंने इनकार किया... वे नरक की आग में होंगे... वे सबसे बुरे <strong>प्राणी</strong> हैं"',
      warshTranslation: '"निश्चय ही जिन्होंने इनकार किया... वे नरक की आग में होंगे... वे सबसे बुरे <strong>निर्दोष</strong> हैं"',
      problem: 'क्या ईसाई और यहूदी सबसे बुरे <strong>प्राणी</strong> हैं, या सबसे बुरे <strong>निर्दोष</strong>? और अगर वे <strong>निर्दोष</strong> हैं, तो वे नरक में क्या कर रहे हैं?',
      type: 'भिन्न मूल शब्द — विरोधाभासी अर्थ'
    },
    ur: {
      hafsTranslation: '"بے شک جنہوں نے کفر کیا... وہ جہنم کی آگ میں ہوں گے... وہ بدترین <strong>مخلوق</strong> ہیں"',
      warshTranslation: '"بے شک جنہوں نے کفر کیا... وہ جہنم کی آگ میں ہوں گے... وہ بدترین <strong>بے گناہ</strong> ہیں"',
      problem: 'کیا عیسائی اور یہودی بدترین <strong>مخلوق</strong> ہیں، یا بدترین <strong>بے گناہ</strong>؟ اور اگر وہ <strong>بے گناہ</strong> ہیں، تو وہ جہنم میں کیا کر رہے ہیں؟',
      type: 'مختلف اصل لفظ — متضاد معنی'
    },
    fa: {
      hafsTranslation: '"در حقیقت کسانی که کفر ورزیدند... در آتش جهنم خواهند بود... آنها بدترین <strong>مخلوقات</strong> هستند"',
      warshTranslation: '"در حقیقت کسانی که کفر ورزیدند... در آتش جهنم خواهند بود... آنها بدترین <strong>بی‌گناهان</strong> هستند"',
      problem: 'آیا مسیحیان و یهودیان بدترین <strong>مخلوقات</strong> هستند، یا بدترین <strong>بی‌گناهان</strong>؟ و اگر <strong>بی‌گناه</strong> هستند، در جهنم چه می‌کنند؟',
      type: 'ریشه کلمه متفاوت — معنای متناقض'
    }
  }
];

var VE_I18N = {
  en:{veLabel:"Visual Evidence",veH:"Side-by-Side Manuscript Comparisons",veP:"These are not theoretical differences. Below are actual photographs from different printed Quran editions, showing the exact Arabic text where the words differ. Each comparison shows a real, physical, documented variant.",veNote:"These are just 4 examples. There are 10,243+ documented variants across the readings. Source: Pfander Films / DCCI Ministries. Manuscript photographs from actual printed Quran editions.",vsLabel:"vs.",problemLabel:"The Problem"},
  hi:{veLabel:"दृश्य साक्ष्य",veH:"पांडुलिपियों की आमने-सामने तुलना",veP:"ये सैद्धांतिक अंतर नहीं हैं। नीचे विभिन्न मुद्रित कुरान संस्करणों की वास्तविक तस्वीरें हैं, जो दिखाती हैं कि शब्द कहां भिन्न हैं।",veNote:"ये केवल 4 उदाहरण हैं। पाठों में 10,243+ प्रलेखित भिन्नताएं हैं। स्रोत: Pfander Films / DCCI Ministries।",vsLabel:"बनाम",problemLabel:"समस्या"},
  ur:{veLabel:"بصری ثبوت",veH:"مخطوطات کا آمنے سامنے موازنہ",veP:"یہ نظریاتی اختلافات نہیں ہیں۔ نیچے مختلف مطبوعہ قرآن ایڈیشنز کی حقیقی تصاویر ہیں، جو ظاہر کرتی ہیں کہ الفاظ کہاں مختلف ہیں۔",veNote:"یہ صرف 4 مثالیں ہیں۔ قراءتوں میں 10,243+ دستاویزی اختلافات ہیں۔ ماخذ: Pfander Films / DCCI وزارتیں۔",vsLabel:"بمقابلہ",problemLabel:"مسئلہ"},
  fa:{veLabel:"شواهد بصری",veH:"مقایسه دست‌نوشته‌ها کنار هم",veP:"اینها تفاوت‌های نظری نیستند. در زیر عکس‌های واقعی از نسخه‌های چاپی مختلف قرآن هستند که نشان می‌دهند کلمات کجا متفاوتند.",veNote:"اینها فقط 4 مثال هستند. بیش از 10,243+ تفاوت مستند در قرائت‌ها وجود دارد. منبع: Pfander Films / وزارت‌های DCCI.",vsLabel:"در برابر",problemLabel:"مشکل"}
};

function buildVisualEvidence(lang) {
  lang = lang || localStorage.getItem('lang') || 'en';
  var t = VE_I18N[lang] || VE_I18N.en;
  var h = '<div class="sec">';
  h += '<div class="sec-lbl" data-i="veLabel">' + t.veLabel + '</div>';
  h += '<h2 data-i="veH">' + t.veH + '</h2>';
  h += '<p data-i="veP">' + t.veP + '</p>';

  VISUAL_EVIDENCE.forEach(function(v) {
    var tr = v[lang] || v.en;
    h += '<div class="card" style="margin:20px 0">';
    // Image
    h += '<img src="' + v.img + '" alt="' + v.verse + ' comparison" style="width:100%;height:auto" loading="lazy">';
    h += '<div class="card-body">';
    // Verse header
    h += '<div class="card-head"><div class="card-name" style="font-size:1.2rem">' + v.verse + '</div>';
    h += '<span class="tag">' + tr.type + '</span></div>';
    // Two columns: Hafs vs Other
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">';
    // Hafs side
    h += '<div style="padding:14px;border:1px solid var(--border);border-radius:6px">';
    h += '<div style="font-size:.65rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-3);font-weight:600;margin-bottom:6px">' + v.hafsReading + '</div>';
    h += '<div style="font-size:1.2rem;font-weight:700">' + v.hafsWord + ' <span style="font-size:1rem;color:var(--text-2);direction:rtl;display:inline">' + v.hafsArabic + '</span></div>';
    h += '<div style="margin-top:8px;font-size:.85rem;color:var(--text-2);line-height:1.6">' + tr.hafsTranslation + '</div>';
    h += '</div>';
    // Other side
    h += '<div style="padding:14px;border:1px solid var(--border);border-radius:6px">';
    h += '<div style="font-size:.65rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-3);font-weight:600;margin-bottom:6px">' + v.warshReading + '</div>';
    h += '<div style="font-size:1.2rem;font-weight:700">' + v.warshWord + ' <span style="font-size:1rem;color:var(--text-2);direction:rtl;display:inline">' + v.warshArabic + '</span></div>';
    h += '<div style="margin-top:8px;font-size:.85rem;color:var(--text-2);line-height:1.6">' + tr.warshTranslation + '</div>';
    h += '</div></div>';
    // Problem callout
    h += '<div class="callout" style="margin:12px 0 0"><div class="lbl">' + t.problemLabel + '</div>';
    h += '<p>' + tr.problem + '</p></div>';
    h += '</div></div>';
  });

  h += '<div class="callout" style="margin:20px 0"><p style="font-size:.85rem" data-i="veNote">' + t.veNote + '</p></div>';
  h += '</div>';
  document.getElementById('visual-evidence-section').innerHTML = h;
}

var _origSetLang5 = window.setLang;
window.setLang = function(lang) {
  _origSetLang5(lang);
  buildVisualEvidence(lang);
  var dirs = {en:'ltr', hi:'ltr', ur:'rtl', fa:'rtl'};
  document.documentElement.setAttribute('dir', dirs[lang] || 'ltr');
};

document.addEventListener('DOMContentLoaded', function(){ buildVisualEvidence(); });
