
var pitch = 1; 
var rate = 1; 
var volume=1;

let tts = new SpeechSynthesisUtterance(); 
let voices = []; 
let requiredLanguages =["af-ZA", "ar-AE", "ar-AR", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER",
"ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS",
"ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "az-AZ", "be-BY", "bg-BG",
"bn-IN", "bs-BA", "ca-AD", "ca-ES", "cs-CZ", "cs-SK", "cy-GB", "da-DK", "da-FO", "da-GL", "de-AT", 
"de-BE", "de-CH", "de-DE", "de-LI", "de-LU", "de-NA", "el-CY", "el-GR", "en-AG", "en-AI", "en-AS", 
"en-AU", "en-BB", "en-BD", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CK", "en-CM", "en-CW", 
"en-DM", "en-ER", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM",
"en-GU", "en-GY", "en-HK", "en-IE", "en-IM", "en-IN", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", 
"en-KY", "en-LC", "en-LK", "en-LR", "en-LS", "en-MH", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW",
"en-MY", "en-NA", "en-NG", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PI", "en-PK", "en-PN",
"en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SG", "en-SH", "en-SL", "en-SO", "en-SS", 
"en-SZ", "en-TC", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UD", "en-UG", "en-US", "en-VC", "en-VG", 
"en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "eo-EO", "es-AR", "es-BO", "es-CL", "es-CO", 
"es-CR", "es-CU", "es-DO", "es-EC", "es-ES", "es-GI", "es-GQ", "es-GT", "es-HN", "es-LA", "es-MX", 
"es-NI", "es-PA", "es-PE", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "et-EE", "eu-ES", 
"fa-IR", "fb-LT", "fi-FI", "fo-FO", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-CA", "fr-CD", "fr-CF", 
"fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-FR", "fr-GA", "fr-GD", "fr-GF", "fr-GN", "fr-GP", 
"fr-GQ", "fr-HT", "fr-KM", "fr-LC", "fr-LU", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MU",
"fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-TD", "fr-TG", "fr-VU", 
"fr-WF", "fr-YT", "fy-NL", "ga-GB", "ga-IE", "gl-ES", "he-IL", "hi-FJ", "hi-IN", "hi-PK", "hr-BA", 
"hr-HR", "hu-HU", "hy-AM", "id-ID", "is-IS", "it-CH", "it-IT", "it-SM", "it-VA", "ja-JP", "ja-PW", 
"ka-GE", "km-KH", "ko-KP", "ko-KR", "ku-TR", "la-VA", "lt-LT", "lv-LV", "mk-MK", "ml-IN", "ms-BN",
"ms-ID", "ms-MY", "ms-SG", "mt-MT", "nb-NO", "ne-NP", "nl-AN", "nl-AW", "nl-BE", "nl-CW", "nl-NL",
"nl-SR", "nl-SX", "nn-NO", "no-NO", "pa-IN", "pl-PL", "ps-AF", "pt-AO", "pt-BR", "pt-CV", "pt-GQ", 
"pt-GW", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "ro-MD", "ro-RO", "ru-BY", "ru-KG", "ru-KZ",
"ru-RU", "ru-TJ", "sk-CZ", "sk-SK", "sl-SI", "sq-AL", "sq-KS", "sr-BA", "sr-ME", "sr-RS", "sv-FI", 
"sv-SE", "sw-KE", "ta-IN", "te-IN", "th-TH", "tl-PH", "tr-CY", "tr-TR", "uk-UA", "vi-VN", "zh-CN",
"zh-HK", "zh-MO", "zh-SG", "zh-TW" ]; 
//let requiredLanguages =['en-US', 'en-GB', 'en-IN', "ar-DZ",'']; 


$("#pitch").change(function(){ 
    pitch = parseFloat($(this).val());
     $("#pitchOutput").text(pitch); 
}); 
$("#rate").change(function(){ 
    rate = parseFloat($(this).val()); 
    $("#rateOutput").text(rate);
 }); 
 $("#volume").change(function(){ 
    volume = parseFloat($(this).val()); 
    $("#volumeOutput").text(volume);
 }); 



 //----------------------------------------------------
// Load Voices 
window.speechSynthesis.onvoiceschanged = () => { 
voices = window.speechSynthesis.getVoices();
voices.forEach((voice, i)=> { 
if (requiredLanguages.includes(voice.lang)){ 
    $("#sel1").append(new Option(voice.name, i)); 
} });
// Set default voice
 tts.voice=voices [0]; 
 $("#sel1").val(0);
 } 
$("#convert").click(function(e) { 
    e.preventDefault(); 

// Set parameters 
tts.rate=rate; 
tts.pitch=pitch;
tts.volume=volume;
tts.text=$("#Area1").val(); 
// Cancel if any speeking in progress 
window.speechSynthesis.cancel(); 
// Speech convert 
window.speechSynthesis.speak(tts);
}); 
$("#sel1").change(function(){
var voiceIndex = parseInt($(this).val());
tts.voice=voices[voiceIndex]; 
});

