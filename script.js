const WHATSAPP_NUMBER = "32472738307";
const whatsappLink = document.getElementById("whatsapp-link");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
fr: {
navPortfolio:"Portfolio",navApproach:"L'approche",navContact:"Contact",navCta:"PARLONS DE VOTRE PROJET",eyebrow:"MARIAGE · MARIÉE · ZIANA",
heroTitle:"Pour les instants<br>qui <em>deviennent</em> éternels.",heroIntro:"Des émotions sincères. Des détails précieux. Des images qui vous ressemblent — capturées avec intention en Belgique et ailleurs.",heroLink:"DÉCOUVRIR LE PORTFOLIO",imageNote:"UNE HISTOIRE, RACONTÉE AVEC ÉLÉGANCE.",based:"BASÉ EN BELGIQUE",available:"DISPONIBLE AILLEURS",approachLabel:"UNE APPROCHE ATTENTIONNÉE",introTitle:"Votre histoire,<br><em>dans sa propre lumière.</em>",introP1:"Des détails subtils d'une tenue de mariée à l'énergie d'un jour de mariage, je photographie autant les émotions que les images.",introP2:"Mon approche est naturelle, réfléchie et éditoriale : elle laisse de la place aux émotions, aux gestes spontanés et aux détails qui rendent votre histoire unique.",introLink:"PARLONS DE VOTRE JOURNÉE",selected:"HISTOIRES CHOISIES",portfolioTitle:"Faits pour <em>rester.</em>",portfolioNote:"Célébrations, portraits<br>et instants entre les deux.",gallery1Title:"L'amour en mouvement",gallery2Title:"Chaque détail compte",gallery3Title:"Son moment de briller",demoNote:"Images de démonstration pour prévisualiser le design. Remplacez-les par vos propres photos avant la publication.",quoteLabel:"LE RESSENTI EST ESSENTIEL",quote:"« Pas seulement l'apparence.<br><em>Mais ce que l'on ressent.</em> »",servicesLabel:"NOS POSSIBILITÉS",service1Title:"Photographie de mariage",service1Text:"Des détails les plus précieux aux instants imprévus.",service2Title:"Mariée & Ziana",service2Text:"Des portraits raffinés qui célèbrent le style, le savoir-faire et la personnalité.",service3Title:"Collaborations créatives",service3Text:"Des histoires visuelles pour créateurs, artistes et professionnels du mariage.",contactLabel:"VOTRE HISTOIRE COMMENCE ICI",contactTitle:"Créons quelque chose<br>qui <em>reste.</em>",contactIntro:"Parlez-moi de votre projet. Je vous répondrai pour discuter des détails et des disponibilités.",contactInstagram:"Écrivez-moi sur Instagram",labelName:"Votre nom *",labelEmail:"Adresse e-mail *",labelEvent:"Quel est votre projet ? *",choose:"Choisir une occasion",optWedding:"Mariage",optZiana:"Portfolio mariée / Ziana",optEngagement:"Fiançailles",optCollab:"Collaboration créative",optOther:"Autre",labelDate:"Date (si connue)",labelLocation:"Lieu",labelMessage:"Parlez-moi de votre projet *",submit:"ENVOYER LA DEMANDE VIA WHATSAPP",formHelp:"Votre demande sera préparée dans WhatsApp. Vous pourrez la vérifier et l'envoyer.",footerTag:"PHOTOGRAPHIE DES MOMENTS QUI COMPTENT.",rights:"Tous droits réservés.",placeholderName:"Nom complet",placeholderLocation:"Ville / lieu",placeholderMessage:"Votre projet, vos envies, les détails importants…",placeholderEmail:"vous@exemple.com",menuLabel:"Ouvrir le menu",waIntro:"Bonjour ANFA Weddings, j'aimerais demander des informations sur une prestation photo."
},
nl: {
navPortfolio:"Portfolio",navApproach:"Werkwijze",navContact:"Contact",navCta:"VERTEL ME OVER JE PLANNEN",eyebrow:"HUWELIJK · BRUID · ZIANA",
heroTitle:"Voor momenten<br>die <em>voor altijd</em> blijven.",heroIntro:"Echte emoties. Betekenisvolle details. Beelden die bij jullie passen — met aandacht vastgelegd in België en daarbuiten.",heroLink:"ONTDEK HET PORTFOLIO",imageNote:"EEN VERHAAL, STIJLVOL VERTELD.",based:"GEVESTIGD IN BELGIË",available:"OOK INTERNATIONAAL",approachLabel:"EEN PERSOONLIJKE AANPAK",introTitle:"Jullie verhaal,<br><em>in eigen licht.</em>",introP1:"Van de fijne details van een bruidslook tot de energie van een huwelijksdag: ik leg niet alleen beelden vast, maar ook gevoel.",introP2:"Mijn aanpak is ontspannen, doordacht en editorial — met ruimte voor echte emoties, spontane gebaren en details die jullie verhaal uniek maken.",introLink:"VERTEL ME OVER JULLIE DAG",selected:"GEMAAKTE VERHALEN",portfolioTitle:"Gemaakt om <em>te blijven.</em>",portfolioNote:"Vieringen, portretten<br>en alles daartussen.",gallery1Title:"Liefde in beweging",gallery2Title:"Elk detail telt",gallery3Title:"Haar moment om te stralen",demoNote:"Voorbeeldbeelden om het ontwerp te tonen. Vervang ze vóór publicatie door je eigen foto's.",quoteLabel:"HET GEVOEL TELT",quote:"“Niet alleen hoe het eruitzag.<br><em>Maar hoe het voelde.</em>”",servicesLabel:"WAT IK AANBIED",service1Title:"Huwelijksfotografie",service1Text:"Van betekenisvolle details tot onverwachte momenten.",service2Title:"Bruidsfotografie & Ziana",service2Text:"Verfijnde portretten die stijl, vakmanschap en persoonlijkheid vieren.",service3Title:"Creatieve samenwerkingen",service3Text:"Visuele verhalen voor ontwerpers, artiesten en trouwprofessionals.",contactLabel:"JULLIE VERHAAL BEGINT HIER",contactTitle:"Laten we iets maken<br>dat <em>blijft.</em>",contactIntro:"Vertel me wat jullie plannen zijn. Ik neem contact op om details en beschikbaarheid te bespreken.",contactInstagram:"Stuur me een bericht op Instagram",labelName:"Je naam *",labelEmail:"E-mailadres *",labelEvent:"Waarvoor zoek je fotografie? *",choose:"Kies een gelegenheid",optWedding:"Huwelijk",optZiana:"Bruids- / Ziana-portfolio",optEngagement:"Verloving",optCollab:"Creatieve samenwerking",optOther:"Andere",labelDate:"Datum (indien bekend)",labelLocation:"Locatie",labelMessage:"Vertel me meer *",submit:"AANVRAAG VERSTUREN VIA WHATSAPP",formHelp:"Je aanvraag wordt klaargezet in WhatsApp. Je kunt ze controleren en verzenden.",footerTag:"FOTOGRAFIE VAN MOMENTEN DIE ERTOE DOEN.",rights:"Alle rechten voorbehouden.",placeholderName:"Volledige naam",placeholderLocation:"Stad / locatie",placeholderMessage:"Jullie plannen, wensen en belangrijke details…",placeholderEmail:"jij@voorbeeld.be",menuLabel:"Menu openen",waIntro:"Hallo ANFA Weddings, ik wil graag meer informatie over een fotoshoot."
},
en: {
navPortfolio:"Portfolio",navApproach:"The approach",navContact:"Contact",navCta:"LET'S TALK ABOUT YOUR PLANS",eyebrow:"WEDDING · BRIDAL · ZIANA",
heroTitle:"For the moments<br>that <em>become</em> forever.",heroIntro:"Honest emotion. Meaningful details. Images that feel like you — captured with intention in Belgium and beyond.",heroLink:"DISCOVER THE PORTFOLIO",imageNote:"A STORY, BEAUTIFULLY TOLD.",based:"BASED IN BELGIUM",available:"AVAILABLE WORLDWIDE",approachLabel:"A THOUGHTFUL APPROACH",introTitle:"Your story,<br><em>in its own light.</em>",introP1:"From the quiet details of a bridal look to the energy of a wedding day, I photograph the feeling as much as the image.",introP2:"My approach is relaxed, considered and editorial — leaving room for real emotion, spontaneous gestures and the details that make your story yours.",introLink:"TELL ME ABOUT YOUR DAY",selected:"SELECTED STORIES",portfolioTitle:"Made to be <em>remembered.</em>",portfolioNote:"Celebrations, portraits<br>and moments in between.",gallery1Title:"Love, in motion",gallery2Title:"Every little detail",gallery3Title:"Her moment to shine",demoNote:"Sample imagery shown to preview the design. Replace it with your own photos before publishing.",quoteLabel:"THE FEELING IS THE WHOLE POINT",quote:"“Not just how it looked.<br><em>How it felt.</em>”",servicesLabel:"HOW WE CAN WORK TOGETHER",service1Title:"Wedding photography",service1Text:"From meaningful details to the moments you never planned.",service2Title:"Bridal & Ziana",service2Text:"Refined portraits celebrating style, craft and personality.",service3Title:"Creative collaborations",service3Text:"Visual stories for designers, artists and wedding professionals.",contactLabel:"YOUR STORY STARTS HERE",contactTitle:"Let's make<br>something <em>lasting.</em>",contactIntro:"Tell me a little about your plans. I'll get back to you to discuss the details and availability.",contactInstagram:"Message me on Instagram",labelName:"Your name *",labelEmail:"Email address *",labelEvent:"What are you planning? *",choose:"Select an occasion",optWedding:"Wedding",optZiana:"Bridal / Ziana portfolio",optEngagement:"Engagement",optCollab:"Creative collaboration",optOther:"Other",labelDate:"Date (if known)",labelLocation:"Location",labelMessage:"Tell me more *",submit:"SEND INQUIRY VIA WHATSAPP",formHelp:"Your enquiry will be prepared in WhatsApp, where you can review and send it.",footerTag:"PHOTOGRAPHY FOR THE MOMENTS THAT MATTER.",rights:"All rights reserved.",placeholderName:"Full name",placeholderLocation:"City / venue",placeholderMessage:"Your plans, the feeling you're dreaming of, anything important…",placeholderEmail:"you@example.com",menuLabel:"Open menu",waIntro:"Hello ANFA Weddings, I'd love to enquire about a photography session."
}
};
function setLanguage(lang) {
 const t = translations[lang] || translations.fr;
 document.documentElement.lang = lang;
 document.querySelectorAll("[data-i18n]").forEach(el => {
   const key = el.dataset.i18n;
   if (t[key] !== undefined) el.innerHTML = t[key];
 });
 document.querySelectorAll("[data-lang]").forEach(btn => {
   const active = btn.dataset.lang === lang;
   btn.classList.toggle("active", active);
   btn.setAttribute("aria-pressed", String(active));
 });
 document.querySelector('input[name="name"]').placeholder = t.placeholderName;
 document.querySelector('input[name="email"]').placeholder = t.placeholderEmail;
 document.querySelector('input[name="location"]').placeholder = t.placeholderLocation;
 document.querySelector('textarea[name="message"]').placeholder = t.placeholderMessage;
 menuToggle.setAttribute("aria-label", t.menuLabel);
 whatsappLink.href = waUrl(t.waIntro);
 try { localStorage.setItem("anfa-language", lang); } catch (e) {}
}
function currentT() { return translations[document.documentElement.lang] || translations.fr; }
function waUrl(message) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
function clean(label) { return label.replace(" *", ""); }
function optionText(select) { const o = select.options[select.selectedIndex]; return o ? o.textContent : ""; }

document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
const savedLang = (() => { try { return localStorage.getItem("anfa-language") || "fr"; } catch (e) { return "fr"; } })();
setLanguage(savedLang);

menuToggle.addEventListener("click", () => {
 const open = nav.classList.toggle("open");
 menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
 nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));

// Quick inquiry in the first viewport: occasion + date, straight to WhatsApp.
document.getElementById("quick-form").addEventListener("submit", event => {
 event.preventDefault();
 const f = event.currentTarget, t = currentT();
 const message = [
  t.waIntro, "",
  `${clean(t.labelEvent)}: ${optionText(f.event)}`,
  `${t.labelDate}: ${f.date.value || "—"}`
 ].join("\n");
 window.open(waUrl(message), "_blank", "noopener,noreferrer");
});

document.getElementById("inquiry-form").addEventListener("submit", event => {
 event.preventDefault();
 const f = event.currentTarget, d = new FormData(f), t = currentT();
 const message = [
  t.waIntro, "",
  `${clean(t.labelName)}: ${d.get("name")}`,
  `${clean(t.labelEmail)}: ${d.get("email")}`,
  `${clean(t.labelEvent)}: ${optionText(f.event)}`,
  `${t.labelDate}: ${d.get("date") || "—"}`,
  `${t.labelLocation}: ${d.get("location") || "—"}`,
  "", `${clean(t.labelMessage)}: ${d.get("message")}`
 ].join("\n");
 window.open(waUrl(message), "_blank", "noopener,noreferrer");
});

// Header turns solid once the camera leaves the opening shot.
const header = document.querySelector(".site-header");
const onScrollHeader = () => header.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.6);
window.addEventListener("scroll", onScrollHeader, { passive: true });
onScrollHeader();

// Multiplane camera: each plane travels at its own depth; focus racks to the shot nearest centre.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const wide = window.matchMedia("(min-width: 761px)");
const hero = document.querySelector(".hero");
const planes = {
 far: document.querySelector('[data-depth="far"]'),
 mistA: document.querySelector('[data-depth="mistA"]'),
 mistB: document.querySelector('[data-depth="mistB"]'),
 cels: document.querySelectorAll('.hero [data-depth="cel"]'),
 veil: document.querySelector(".veil")
};
const farImg = planes.far.querySelector("img");
const drifts = document.querySelectorAll('[data-depth="drift"]');
const shots = [...document.querySelectorAll("[data-focus]")].map(el => ({ el, img: el.querySelector("img") }));
const shotDepth = { shot1: 0.07, shot2: -0.03, shot3: 0.16 };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const MIST_TILE = 1400;

function frame(now) {
 const vh = window.innerHeight, sy = window.scrollY, s = now / 1000;
 const travel = Math.max(1, hero.offsetHeight - vh);
 const p = clamp(sy / travel, 0, 1);
 if (sy < hero.offsetHeight) {
  planes.far.style.transform = `translate3d(0,${-4 * p}vh,0) scale(${1 + 0.1 * p})`;
  farImg.style.filter = wide.matches && p > 0.45 ? `blur(${((p - 0.45) * 12).toFixed(2)}px)` : "";
  planes.mistA.style.transform = `translate3d(${-((s * 14 + p * 520) % MIST_TILE)}px,${-26 * p}vh,0)`;
  planes.mistB.style.transform = `translate3d(${-MIST_TILE + ((s * 9 + p * 260) % MIST_TILE)}px,${-12 * p}vh,0)`;
  const lift = -16 * p, fade = clamp(1 - Math.max(0, p - 0.38) * 2.4, 0, 1);
  planes.cels.forEach(c => { c.style.transform = `translate3d(0,${lift}vh,0)`; c.style.opacity = fade; });
  planes.veil.style.setProperty("--rack", clamp((p - 0.5) * 1.8, 0, 0.92).toFixed(3));
 }
 drifts.forEach((el, i) => {
  const r = el.parentElement.getBoundingClientRect();
  if (r.bottom < 0 || r.top > vh) return;
  el.style.transform = `translate3d(${-((s * (8 + i * 4)) % MIST_TILE)}px,${(r.top / vh) * -6}vh,0)`;
 });
 shots.forEach(({ el, img }) => {
  const r = el.getBoundingClientRect();
  if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return;
  const d = (r.top + r.height / 2 - vh / 2) / vh;
  const k = wide.matches ? shotDepth[el.dataset.depth] : 0.04;
  el.style.transform = `translate3d(0,${(-d * k * 100).toFixed(2)}vh,0)`;
  img.style.filter = wide.matches ? `blur(${Math.min(2, Math.max(0, Math.abs(d) - 0.28) * 3).toFixed(2)}px)` : "";
 });
 requestAnimationFrame(frame);
}
if (!reduceMotion.matches) requestAnimationFrame(frame);
