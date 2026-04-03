// Translatable tables — Remaining Five + Textual Differences
var TABLE_DATA = {
  remaining: [
    {name:"Ibn Kathir",died:"738 CE",origin_en:"Mecca",origin_hi:"मक्का",origin_ur:"مکہ",origin_fa:"مکه",trans:"Al-Bazzi, Qunbul"},
    {name:"Hamzah",died:"773 CE",origin_en:"Kufa, Iraq",origin_hi:"कूफा, इराक",origin_ur:"کوفہ، عراق",origin_fa:"کوفه، عراق",trans:"Khalaf, Khallad"},
    {name:"Al-Kisa'i",died:"804 CE",origin_en:"Kufa, Iraq",origin_hi:"कूफा, इराक",origin_ur:"کوفہ، عراق",origin_fa:"کوفه، عراق",trans:"Al-Layth, Al-Duri"},
    {name:"Abu Ja'far",died:"~130 AH",origin_en:"Medina",origin_hi:"मदीना",origin_ur:"مدینہ",origin_fa:"مدینه",trans:"Ibn Wardan, Ibn Jummaz"},
    {name:"Ya'qub",died:"205 AH",origin_en:"Basra, Iraq",origin_hi:"बसरा, इराक",origin_ur:"بصرہ، عراق",origin_fa:"بصره، عراق",trans:"Ruways, Rawh"}
  ],
  diffs: [
    {v:"Q 1:4",h:"<strong>Maaliki</strong>",hm_en:"Owner",hm_hi:"मालिक",hm_ur:"مالک",hm_fa:"مالک",w:"<strong>Maliki</strong>",wm_en:"King",wm_hi:"राजा",wm_ur:"بادشاہ",wm_fa:"پادشاه",d_en:"Different word",d_hi:"अलग शब्द",d_ur:"مختلف لفظ",d_fa:"کلمه متفاوت",ref:"[4]"},
    {v:"Q 2:140",h:"<strong>taquluna</strong>",hm_en:"you say",hm_hi:"तुम कहते हो",hm_ur:"تم کہتے ہو",hm_fa:"شما می‌گویید",w:"<strong>yaquluna</strong>",wm_en:"they say",wm_hi:"वे कहते हैं",wm_ur:"وہ کہتے ہیں",wm_fa:"آنها می‌گویند",d_en:"Different pronoun",d_hi:"अलग सर्वनाम",d_ur:"مختلف ضمیر",d_fa:"ضمیر متفاوت",ref:"[4]"},
    {v:"Q 2:184",h:"<strong>miskiinin</strong>",hm_en:"a poor man",hm_hi:"एक गरीब",hm_ur:"ایک غریب",hm_fa:"یک فقیر",w:"<strong>masakiina</strong>",wm_en:"poor men",wm_hi:"गरीब लोग",wm_ur:"غریب لوگ",wm_fa:"فقیران",d_en:"Singular → plural — affects law",d_hi:"एकवचन → बहुवचन — कानून प्रभावित",d_ur:"واحد ← جمع — قانون متاثر",d_fa:"مفرد ← جمع — قانون متأثر",ref:"[9]"},
    {v:"Q 3:146",h:"<strong>qatala</strong>",hm_en:"fought",hm_hi:"लड़े",hm_ur:"لڑے",hm_fa:"جنگیدند",w:"<strong>qutila</strong>",wm_en:"was killed",wm_hi:"मारे गए",wm_ur:"مارے گئے",wm_fa:"کشته شدند",d_en:"Active → passive",d_hi:"सक्रिय → निष्क्रिय",d_ur:"فاعل ← مفعول",d_fa:"معلوم ← مجهول",ref:"[4]"},
    {v:"Q 21:4",h:"<strong>qaala</strong>",hm_en:"He said",hm_hi:"उसने कहा",hm_ur:"اس نے کہا",hm_fa:"او گفت",w:"<strong>qul</strong>",wm_en:"Say!",wm_hi:"कहो!",wm_ur:"!کہو",wm_fa:"!بگو",d_en:"Statement → command",d_hi:"कथन → आदेश",d_ur:"بیان ← حکم",d_fa:"بیان ← فرمان",ref:"[4]"},
    {v:"Q 43:19",h:"<strong>'ibadu</strong>",hm_en:"slaves of",hm_hi:"के दास",hm_ur:"کے بندے",hm_fa:"بندگان",w:"<strong>'inda</strong>",wm_en:"with",wm_hi:"के साथ",wm_ur:"کے ساتھ",wm_fa:"نزد",d_en:"Completely different meaning",d_hi:"पूरी तरह अलग अर्थ",d_ur:"مکمل مختلف معنی",d_fa:"معنای کاملاً متفاوت",ref:"[4]"},
    {v:"Q 48:17",h:"<strong>nudkhilhu</strong>",hm_en:"We make enter",hm_hi:"हम प्रवेश कराते हैं",hm_ur:"ہم داخل کرتے ہیں",hm_fa:"ما داخل می‌کنیم",w:"<strong>yudkhilhu</strong>",wm_en:"He makes enter",wm_hi:"वह प्रवेश कराता है",wm_ur:"وہ داخل کرتا ہے",wm_fa:"او داخل می‌کند",d_en:"We vs. He",d_hi:"हम बनाम वह",d_ur:"ہم بمقابلہ وہ",d_fa:"ما در برابر او",ref:"[4]"}
  ]
};

var TABLE_I18N = {
  en:{thReading:"Reading",thReader:"Reader (Died)",thOrigin:"Origin",thTrans:"Transmitters",thStatus:"Status",rare:"Rarely used",thVerse:"Verse",thHafs:"Hafs",thWarsh:"Warsh",thDiff:"Difference"},
  hi:{thReading:"पाठ",thReader:"पाठक (मृत्यु)",thOrigin:"उत्पत्ति",thTrans:"संचारक",thStatus:"स्थिति",rare:"शायद ही उपयोग",thVerse:"आयत",thHafs:"हफ़्स",thWarsh:"वर्श",thDiff:"अंतर"},
  ur:{thReading:"قراءت",thReader:"قاری (وفات)",thOrigin:"اصل",thTrans:"راوی",thStatus:"حالت",rare:"شاذ و نادر",thVerse:"آیت",thHafs:"حفص",thWarsh:"ورش",thDiff:"اختلاف"},
  fa:{thReading:"قرائت",thReader:"قاری (درگذشت)",thOrigin:"خاستگاه",thTrans:"راوی",thStatus:"وضعیت",rare:"به ندرت",thVerse:"آیه",thHafs:"حفص",thWarsh:"ورش",thDiff:"تفاوت"}
};

function buildTables(lang) {
  lang = lang || localStorage.getItem('lang') || 'en';
  var t = TABLE_I18N[lang] || TABLE_I18N.en;
  var oKey = 'origin_' + lang;

  // Remaining Five table
  var h = '<div class="tw"><table><thead><tr>';
  h += '<th>'+t.thReading+'</th><th>'+t.thReader+'</th><th>'+t.thOrigin+'</th><th>'+t.thTrans+'</th><th>'+t.thStatus+'</th>';
  h += '</tr></thead><tbody>';
  TABLE_DATA.remaining.forEach(function(r) {
    h += '<tr><td><strong>'+r.name+'</strong></td><td>'+r.died+'</td>';
    h += '<td>'+(r[oKey]||r.origin_en)+'</td>';
    h += '<td>'+r.trans+'</td><td>'+t.rare+'</td></tr>';
  });
  h += '</tbody></table></div>';
  document.getElementById('remaining-five-table').innerHTML = h;

  // Textual differences table
  var d = '<div class="tw"><table><thead><tr>';
  d += '<th>'+t.thVerse+'</th><th>'+t.thHafs+'</th><th>'+t.thWarsh+'</th><th>'+t.thDiff+'</th>';
  d += '</tr></thead><tbody>';
  TABLE_DATA.diffs.forEach(function(r) {
    var hmKey = 'hm_'+lang, wmKey = 'wm_'+lang, dKey = 'd_'+lang;
    d += '<tr><td>'+r.v+'</td>';
    d += '<td>'+r.h+' ('+(r[hmKey]||r.hm_en)+')</td>';
    d += '<td>'+r.w+' ('+(r[wmKey]||r.wm_en)+')</td>';
    d += '<td>'+(r[dKey]||r.d_en)+'<sup>'+r.ref+'</sup></td></tr>';
  });
  d += '</tbody></table></div>';
  document.getElementById('diff-table').innerHTML = d;
}

// Hook into language switching
var _origSetLang3 = window.setLang;
window.setLang = function(lang) {
  _origSetLang3(lang);
  buildTables(lang);
  // Final direction enforcement — absolute last word
  var dirs = {en:'ltr', hi:'ltr', ur:'rtl', fa:'rtl'};
  document.documentElement.setAttribute('dir', dirs[lang] || 'ltr');
};

document.addEventListener('DOMContentLoaded', function(){ buildTables(); });
