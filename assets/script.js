        // ═══════════════ TREATMENT DATA ═══════════════
    var T = {
      'hydrafacial': { bc: 'HydraFacial', title: 'HydraFacial', sub: 'Deep cleanse, extract, and hydrate for an instant luminous glow.', tag: '✦ Skin Treatment', h2: 'HydraFacial —<br>The <em>Signature Glow</em> Treatment.', p1: 'HydraFacial is a multi-step medical-grade facial that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. It uses a patented vortex-fusion delivery system for immediate, visible results.', p2: 'Dr. Shivangi customises each session to your specific skin concerns — dullness, congested pores, fine lines, or uneven texture. Result: radiant, glass-skin glow after the very first session.', benefits: ['Deep pore cleansing without discomfort', 'Instant hydration with hyaluronic acid', 'Reduces fine lines and improves texture', 'Safe for all skin types including sensitive', 'Zero downtime — perfect before events'], price: '₹3,500', faqs: [{ q: 'How long does a session take?', a: 'A standard session takes 30–45 minutes. Dr. Shivangi may extend this with personalised add-ons.' }, { q: 'How many sessions do I need?', a: 'Many see results after one session. For lasting improvement, a course of 4–6 monthly sessions is recommended.' }, { q: 'Is there any downtime?', a: 'None at all. You can resume normal activities and wear makeup immediately after.' }, { q: 'What concerns does it address?', a: 'Dullness, enlarged pores, oily skin, congestion, fine lines, dehydration, and uneven skin tone.' }] },
      'botox': { bc: 'Botox', title: 'Botox', sub: 'Smooth fine lines and restore youthful freshness with precision injectables.', tag: '✦ Aesthetic Treatment', h2: 'Botox —<br>Precision <em>Anti-Aging</em> Artistry.', p1: 'Botox is one of the most studied, safe, and effective treatments in aesthetic medicine. Dr. Shivangi uses micro-dosing techniques to relax targeted facial muscles — smoothing expression lines while preserving your natural expressions.', p2: "The goal is never a frozen or unnatural appearance. Dr. Shivangi's philosophy is refreshed, not retouched — results that make you look well-rested and naturally radiant.", benefits: ['Smooths forehead lines, frown lines & crow\'s feet', 'Preserves natural facial expressions', 'Results visible in 3–7 days', 'Lasts 4–6 months', 'No downtime required'], price: '₹8,000', faqs: [{ q: 'Does Botox hurt?', a: 'Most describe it as a minor pinch. Ultra-fine needles and topical numbing ensure maximum comfort.' }, { q: 'How long do results last?', a: 'Typically 4–6 months. With regular treatment, many patients need less product over time.' }, { q: 'What\'s the recovery like?', a: 'Minimal to none. Mild redness or swelling at injection sites resolves within hours.' }, { q: 'Can I combine Botox with fillers?', a: 'Yes — a combination approach often delivers the most balanced, natural result.' }] },
      'prp': { bc: 'PRP Therapy', title: 'PRP Hair Therapy', sub: 'Harness your own biology to reverse hair loss and restore density.', tag: '✦ Hair Treatment', h2: 'PRP Therapy —<br><em>Biological Hair</em> Restoration.', p1: 'Platelet-Rich Plasma therapy uses your body\'s own growth factors to stimulate dormant hair follicles and reverse hair thinning. Dr. Shivangi prepares a concentrated PRP solution from your blood and precisely injects it into the scalp.', p2: 'PRP is clinically proven, completely natural, and delivers visible results in density, thickness, and scalp health within 3–4 months of starting treatment.', benefits: ['Uses your own blood — completely natural', 'Stimulates dormant follicles to regrow', 'Improves hair density and thickness', 'Effective for male and female pattern loss', 'Zero risk of allergic reaction'], price: '₹6,000', faqs: [{ q: 'How many PRP sessions are needed?', a: 'Typically 3–4 sessions spaced 4 weeks apart, followed by maintenance every 4–6 months.' }, { q: 'Who is a good candidate?', a: 'PRP works best for early to mid stages of hair loss. Consultation determines suitability.' }, { q: 'When will I see results?', a: 'Initial results from 2–3 months; optimal results at 6 months after completing a course.' }, { q: 'Is the procedure painful?', a: 'A topical anaesthetic is applied before the session, making treatment very comfortable.' }] },
      'chemical-peel': { bc: 'Chemical Peel', title: 'Chemical Peel', sub: 'Resurface, brighten, and renew your skin with a medically-guided peel.', tag: '✦ Skin Treatment', h2: 'Chemical Peel —<br><em>Resurfaced, Renewed</em> Radiance.', p1: 'Medical-grade peels use carefully selected acids to exfoliate the skin\'s surface layers, revealing fresher, brighter skin beneath. Dr. Shivangi selects from a range of peel strengths based on your skin type and concerns.', p2: 'Chemical peels dramatically improve acne, pigmentation, fine lines, dullness, and uneven texture. As an aesthetic physician, Dr. Shivangi can prescribe peels significantly more effective than spa-grade alternatives.', benefits: ['Brightens dull, tired complexion', 'Reduces acne and post-acne marks', 'Fades pigmentation and sun damage', 'Smooths fine lines and skin texture', 'Stimulates collagen production'], price: '₹2,500', faqs: [{ q: 'Is it safe for Indian skin?', a: 'Yes, when prescribed and performed by a qualified physician specialising in melanin-rich skin.' }, { q: 'How much downtime?', a: 'Superficial peels: 1–3 days. Medium peels: 5–7 days. Dr. Shivangi advises based on your peel.' }, { q: 'Can I wear makeup after?', a: 'Avoid makeup for 24–48 hours post-treatment to allow skin to breathe and heal.' }, { q: 'How many sessions?', a: 'A series of 4–6 peels spaced 2–4 weeks apart delivers the best results.' }] },
      'acne': { bc: 'Acne Treatment', title: 'Acne Treatment', sub: 'Medically-targeted protocols to clear, control and prevent acne.', tag: '✦ Skin Treatment', h2: 'Acne Treatment —<br><em>Clear Skin,</em> Restored Confidence.', p1: 'Acne is a complex medical condition requiring a multi-modal approach. Dr. Shivangi combines in-clinic treatments — chemical peels, laser therapy, and extractions — with personalised skincare and lifestyle protocols.', p2: 'Whether you\'re dealing with active acne, post-acne marks, or deep scars, Dr. Shivangi creates a targeted plan addressing the root cause rather than surface symptoms.', benefits: ['Treats active acne & prevents new breakouts', 'Reduces post-acne hyperpigmentation', 'Improves acne scar texture', 'Safe for all acne grades', 'Prescription-strength solutions'], price: '₹3,000', faqs: [{ q: 'How long to see results?', a: 'Improvement seen within 4–6 weeks. Full clearance may take 3–6 months depending on severity.' }, { q: 'Can adult acne be treated?', a: 'Absolutely. Adult hormonal acne responds well to targeted aesthetic medicine approaches.' }, { q: 'Will it make skin dry?', a: 'Dr. Shivangi tailors protocols to minimise side effects, incorporating barrier-repair products.' }, { q: 'Do I need to avoid sun?', a: 'SPF 50 is essential throughout treatment. Sun exposure can worsen pigmentation.' }] },
      'pigmentation': { bc: 'Pigmentation', title: 'Pigmentation Treatment', sub: 'Target dark spots, melasma and uneven tone for luminous clarity.', tag: '✦ Skin Treatment', h2: 'Pigmentation —<br><em>Even Tone,</em> Luminous Clarity.', p1: 'Pigmentation requires a precision-guided treatment approach. Dr. Shivangi combines chemical peels, laser therapy, and targeted topicals to achieve progressive, lasting results.', p2: "Treating pigmentation in Indian skin tones requires special care and expertise. Dr. Shivangi's deep understanding of melanin-rich skin ensures safe, effective brightening without risk.", benefits: ['Fades dark spots, melasma and sun damage', 'Specialist protocols for Indian skin', 'Combination approach for superior results', 'Progressive, lasting improvement', 'Safe for all skin types'], price: '₹4,000', faqs: [{ q: 'Can melasma be permanently cured?', a: 'Melasma is a chronic condition that can be well-controlled. Dr. Shivangi creates a long-term management plan.' }, { q: 'How many sessions to see results?', a: 'Visible improvement after 2–3 sessions. A full course of 6 delivers the best, most lasting results.' }, { q: 'Is laser safe for dark skin tones?', a: 'Yes, with the right laser settings. Dr. Shivangi specialises in pigmentation for Indian and South Asian skin.' }, { q: 'What maintenance is needed?', a: 'Daily SPF 50+, a prescribed skincare routine, and periodic follow-up sessions ensure long-lasting results.' }] },
      'anti-aging': { bc: 'Anti-Aging', title: 'Anti-Aging Treatment', sub: 'Turn back the clock with science-backed rejuvenation protocols.', tag: '✦ Aesthetic Treatment', h2: 'Anti-Aging —<br><em>Timeless</em> Rejuvenation.', p1: "Ageing is inevitable — but how you age is a choice. Dr. Shivangi's anti-aging protocols combine Botox, fillers, skin boosters, energy-based devices, and medical skincare to comprehensively restore youth.", p2: 'The goal is never to look different — it\'s to look like the best, most refreshed version of yourself. Every treatment is calibrated to your unique facial anatomy.', benefits: ['Smooths fine lines and deep wrinkles', 'Restores lost facial volume naturally', 'Improves skin texture and radiance', 'Lifts and tightens skin non-surgically', 'Comprehensive, personalised plans'], price: '₹6,000', faqs: [{ q: 'When should I start anti-aging treatments?', a: 'Prevention is most effective. Many start in their late 20s or 30s with skin boosters and medical skincare.' }, { q: 'Are results natural-looking?', a: "Absolutely. Dr. Shivangi's approach is based on subtle enhancement — refreshed, not altered." }, { q: 'How long do results last?', a: 'Botox: 4–6 months; fillers: 12–18 months; skin boosters: 6–9 months.' }, { q: 'Are treatments safe?', a: 'All treatments offered are FDA-approved and extensively clinically tested.' }] },
      'fillers': { bc: 'Dermal Fillers', title: 'Dermal Fillers', sub: 'Restore volume, sculpt contours and enhance features with expert precision.', tag: '✦ Aesthetic Treatment', h2: 'Dermal Fillers —<br><em>Sculpted, Restored</em> Elegance.', p1: "Dermal fillers use hyaluronic acid — a naturally occurring substance in your body — to restore volume, smooth folds, and enhance facial contours. In Dr. Shivangi's hands, fillers are a precise sculptural tool.", p2: "From cheek contouring to jawline definition to under-eye rejuvenation, Dr. Shivangi's filler artistry produces results that are universally noticed but never identified as cosmetic.", benefits: ['Restores youthful facial volume', 'Enhances cheeks, jaw, and chin contour', 'Smooths nasolabial folds naturally', 'Results last 12–18 months', 'Reversible with hyaluronidase'], price: '₹12,000', faqs: [{ q: 'Do fillers hurt?', a: 'Fillers contain lidocaine. Most patients experience minimal discomfort. Numbing cream is applied beforehand.' }, { q: 'How long do fillers last?', a: 'Hyaluronic acid fillers typically last 12–18 months depending on area and metabolism.' }, { q: 'Can fillers be dissolved?', a: 'Yes — hyaluronic acid fillers can be completely dissolved with hyaluronidase enzyme.' }, { q: 'What areas can be treated?', a: 'Cheeks, jawline, chin, lips, under-eyes, temples, and nasolabial folds.' }] },
      'laser': { bc: 'Laser Treatments', title: 'Laser Treatments', sub: 'Precision light-based therapy for skin resurfacing, pigmentation and rejuvenation.', tag: '✦ Laser Treatment', h2: 'Laser —<br><em>Light-Powered</em> Transformation.', p1: 'Laser treatments use targeted light energy to address a wide range of skin concerns — pigmentation, acne scars, hair removal, and skin resurfacing. Dr. Shivangi is certified in multiple laser modalities.', p2: "Medical-grade lasers at Dr. Shivangi's clinic include fractional resurfacing, Q-switched Nd:YAG, and diode laser platforms — delivering measurable results safely for Indian skin tones.", benefits: ['Treats pigmentation, scars, and texture', 'Safe laser hair reduction for all skin types', 'Skin resurfacing for visible rejuvenation', 'Carbon laser peel for instant glow', 'USFDA-approved technology'], price: '₹5,000', faqs: [{ q: 'How many sessions are needed?', a: 'Typically 4–6 sessions depending on concern. Hair reduction requires 6–8 sessions.' }, { q: 'Is laser safe for dark skin?', a: 'Yes, with correct laser selection. Dr. Shivangi specialises in laser for Indian skin types.' }, { q: 'What is the downtime?', a: 'Superficial laser facials: zero. Resurfacing treatments: 3–5 days of social downtime.' }, { q: 'Is it painful?', a: 'Most describe it as a warm snapping sensation. Topical anaesthetic is applied for intensive treatments.' }] },
      'lip': { bc: 'Lip Enhancement', title: 'Lip Enhancement', sub: 'Natural lip definition, volume and symmetry crafted with artistic precision.', tag: '✦ Aesthetic Treatment', h2: 'Lip Enhancement —<br><em>Natural Fullness,</em> Perfect Symmetry.', p1: 'Lip enhancement at Dr. Shivangi\'s clinic is about artistry and restraint. Using ultra-fine cannulas and hyaluronic acid fillers, Dr. Shivangi creates lips that look naturally defined and proportionate — never overdone.', p2: 'Whether you desire subtle definition, added volume, or improved symmetry, the approach is always guided by your facial anatomy. The result is you — but with lips you\'ve always wanted.', benefits: ['Natural-looking volume and definition', 'Improves lip symmetry and border clarity', 'Russian lip technique available', 'Same-day results with minimal swelling', 'Results last 9–12 months'], price: '₹10,000', faqs: [{ q: 'Will my lips look natural?', a: "Yes — Dr. Shivangi's philosophy prioritises natural results. Overfilled, artificial-looking lips are never the goal." }, { q: 'How long does swelling last?', a: 'Initial swelling resolves within 24–72 hours. Final results are visible after 1–2 weeks.' }, { q: 'Can I eat normally after?', a: 'Avoid very hot drinks for 24 hours, but normal eating is fine immediately.' }, { q: 'How often do I need to repeat?', a: 'Lip fillers typically last 9–12 months. A maintenance touch-up once or twice a year is recommended.' }] },
      'hair-regrowth': { bc: 'Hair Regrowth', title: 'Hair Regrowth Therapy', sub: 'Advanced protocols to stimulate and accelerate natural hair growth.', tag: '✦ Hair Treatment', h2: 'Hair Regrowth —<br><em>Revived Density,</em> Renewed Confidence.', p1: 'Hair regrowth therapy combines PRP, mesotherapy, growth factor infusions, and prescription treatments into a personalised protocol designed to maximise hair density and growth speed.', p2: 'Dr. Shivangi analyses your specific type of hair loss and creates a multi-modal plan addressing root causes including hormonal imbalance, nutritional deficiency, and follicular miniaturisation.', benefits: ['Stimulates dormant follicles', 'Increases hair density and coverage', 'Addresses multiple causes of hair loss', 'Combines PRP, mesotherapy, and topicals', 'Visible results within 2–3 months'], price: '₹5,500', faqs: [{ q: 'Is hair regrowth therapy permanent?', a: 'Treatments significantly slow and reverse hair loss. Maintenance sessions sustain long-term results.' }, { q: 'How is it different from PRP alone?', a: 'Combination therapy is more comprehensive — addressing more aspects and delivering faster results.' }, { q: 'Is there pain?', a: 'Topical anaesthetic ensures a comfortable experience.' }, { q: 'Are results guaranteed?', a: 'Most patients see significant improvement. Dr. Shivangi will be honest about expected outcomes during consultation.' }] },
      'hair-fall': { bc: 'Hair Fall', title: 'Hair Fall Treatment', sub: 'Diagnose and treat the root cause of excessive hair fall.', tag: '✦ Hair Treatment', h2: 'Hair Fall —<br><em>Diagnosis,</em> Control & Prevention.', p1: 'Hair fall can have many causes — stress, hormones, nutrition, thyroid disorders, or genetic predisposition. Dr. Shivangi takes a thorough diagnostic approach before recommending any treatment.', p2: 'A combination of blood tests, scalp analysis, and medical history review helps identify the exact cause, allowing for a highly targeted and effective treatment protocol.', benefits: ['Comprehensive root-cause diagnosis', 'Targeted treatment for your specific cause', 'Combines medical and aesthetic approaches', 'Scalp health optimisation', 'Prevents further progression'], price: '₹3,500', faqs: [{ q: 'What causes excessive hair fall?', a: 'Common causes: stress, hormonal imbalance, nutritional deficiencies, scalp conditions, and genetics.' }, { q: 'Do I need blood tests?', a: 'Often yes — blood tests help identify treatable causes like thyroid dysfunction or nutritional deficiencies.' }, { q: 'How soon can hair fall be controlled?', a: 'With the right treatment, most patients see significant reduction within 6–8 weeks.' }, { q: 'Can diet affect hair fall?', a: 'Yes — iron, Vitamin D, B12, and protein deficiencies are common contributors. Dietary guidance is provided.' }] },
      'scalp-detox': { bc: 'Scalp Detox', title: 'Scalp Detox Treatment', sub: 'Deep cleanse and revitalise your scalp for healthier hair.', tag: '✦ Hair Treatment', h2: 'Scalp Detox —<br><em>Clean Foundation</em> for Healthy Hair.', p1: 'A healthy scalp is the foundation of healthy hair. Scalp detox removes build-up, excess sebum, dead skin cells, and product residue that clog follicles and inhibit healthy hair growth.', p2: "Dr. Shivangi's scalp detox protocol combines medical-grade exfoliants, anti-inflammatory agents, and nourishing treatments to restore the scalp's optimal pH and microbiome balance.", benefits: ['Removes follicle-clogging build-up', 'Reduces scalp oiliness and dandruff', 'Creates optimal environment for hair growth', 'Relaxing, spa-like experience', 'Immediately improves scalp comfort'], price: '₹2,500', faqs: [{ q: 'How often should I get a scalp detox?', a: 'Once every 4–6 weeks for most patients. More frequent for oily scalps.' }, { q: 'Is it suitable for sensitive scalps?', a: 'Yes — Dr. Shivangi selects gentle formulations and adjusts protocol accordingly.' }, { q: 'Can it be combined with PRP?', a: 'Absolutely — scalp detox before PRP enhances absorption and efficacy of growth factors.' }, { q: 'Will hair fall temporarily after treatment?', a: 'Some shedding of loose hair during detox is normal — it\'s a sign the treatment is working.' }] },
      'skin-tightening': { bc: 'Skin Tightening', title: 'Skin Tightening', sub: 'Non-surgical lifting and firming for a youthful, contoured appearance.', tag: '✦ Aesthetic Treatment', h2: 'Skin Tightening —<br><em>Non-Surgical Lift,</em> Natural Firmness.', p1: 'Dr. Shivangi offers a range of non-surgical skin tightening technologies including radiofrequency, HIFU, and thread-based treatments for visible lifting and contouring.', p2: 'Results develop progressively as collagen and elastin production is stimulated, with visible lifting effects that continue to improve over 3–6 months post-treatment.', benefits: ['Visibly lifts and tightens loose skin', 'Stimulates long-term collagen production', 'No surgery, no anaesthesia, no scars', 'Results improve progressively over months', 'Suitable for face, neck, and body'], price: '₹8,000', faqs: [{ q: 'What technology is used?', a: 'FDA-cleared radiofrequency and HIFU (High-Intensity Focused Ultrasound) devices.' }, { q: 'How many sessions are needed?', a: 'Many see results from a single session. 2–3 sessions spaced 4–8 weeks apart is optimal.' }, { q: 'Is there any downtime?', a: 'Minimal. Some mild redness or swelling may occur for a few hours.' }, { q: 'How long do results last?', a: 'Results can last 1–2 years. Maintenance sessions help sustain the lifting effect.' }] },
      'skin-brightening': { bc: 'Skin Brightening', title: 'Skin Brightening', sub: 'Reveal your most luminous complexion with targeted brightening protocols.', tag: '✦ Skin Treatment', h2: 'Skin Brightening —<br><em>Luminous Glow,</em> Inside Out.', p1: 'Skin brightening addresses the underlying causes of dullness — dead cell accumulation, oxidative stress, poor circulation, and subclinical inflammation.', p2: 'Dr. Shivangi combines medical-grade brightening peels, Vitamin C infusions, glow facials, and personalised skincare to reveal the naturally radiant complexion beneath.', benefits: ['Immediate and cumulative brightening effect', 'Reduces dullness, uneven tone, and grey cast', 'Infuses skin with antioxidants and hydration', 'Safe for all Indian skin tones', 'No downtime required for most protocols'], price: '₹2,500', faqs: [{ q: 'How quickly will I see results?', a: 'Most notice visible brightening immediately after the first session.' }, { q: 'Is it the same as skin lightening?', a: 'No. Brightening enhances your natural glow without altering your skin\'s natural colour.' }, { q: 'What ingredients are used?', a: 'Vitamin C, niacinamide, alpha-arbutin, kojic acid, and antioxidant complexes.' }, { q: 'Can I combine it with other treatments?', a: 'Yes — pairs beautifully with HydraFacial, chemical peels, and laser treatments.' }] }
    };
 // ═══════════════ FAQ ═══════════════
document.addEventListener('click',function(e){
  var q=e.target.closest('.faq-q');
  if(!q)return;
  var item=q.closest('.faq-item');
  var open=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});
  if(!open)item.classList.add('open');
});



// ═══════════════ SCROLL ANIMATIONS ═══════════════
var revEls = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
function checkReveal() {
  revEls.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 80) el.classList.add("visible");
  });
}
window.addEventListener("scroll", checkReveal, { passive: true });
checkReveal();

// ═══════════════ PARTICLES ═══════════════
(function () {
  var c = document.getElementById("particles");
  if (!c) return;
  for (var i = 0; i < 20; i++) {
    var p = document.createElement("div");
    p.className = "hero-particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.bottom = Math.random() * 40 + "%";
    p.style.animationDuration = 6 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 6 + "s";
    p.style.width = p.style.height = 1 + Math.random() * 2 + "px";
    c.appendChild(p);
  }
})();

// ═══════════════ NAVBAR ═══════════════
var currentPage = "home";
window.addEventListener(
  "scroll",
  function () {
    var nb = document.getElementById("navbar");
    if (currentPage === "home" && window.scrollY < 60)
      nb.classList.remove("scrolled");
    else nb.classList.add("scrolled");
  },
  { passive: true },
);

// ═══════════════ PAGES ═══════════════
function showPage(id) {
  document.querySelectorAll(".page").forEach(function (p) {
    p.classList.remove("active");
  });
  var pg = document.getElementById("page-" + id);
  if (!pg) return;
  pg.classList.add("active");
  currentPage = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
  var nb = document.getElementById("navbar");
  if (id === "home" && window.scrollY < 60) nb.classList.remove("scrolled");
  else nb.classList.add("scrolled");
  setTimeout(checkReveal, 100);
  closeMob();
}

// ═══════════════ MOBILE MENU ═══════════════
function toggleMob() {
  var m = document.getElementById("mobMenu");
  var h = document.getElementById("ham");
  m.classList.toggle("open");
  h.classList.toggle("open");
  document.body.style.overflow = m.classList.contains("open") ? "hidden" : "";
}
function closeMob() {
  document.getElementById("mobMenu").classList.remove("open");
  document.getElementById("ham").classList.remove("open");
  document.body.style.overflow = "";
}
function toggleMobSub(id) {
  var el = document.getElementById(id);
  el.classList.toggle("open");
}

// ═══════════════ MODAL ═══════════════
function openModal() {
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// ═══════════════ TOAST ═══════════════
function showToast(msg) {
  var t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.style.display = "block";
  setTimeout(function () {
    t.style.display = "none";
  }, 3800);
}

// ═══════════════ FORMS ═══════════════
function submitHeroForm() {
  if (
    !document.getElementById("hf-name").value ||
    !document.getElementById("hf-phone").value ||
    !document.getElementById("hf-service").value
  ) {
    showToast("Please fill all required fields.");
    return;
  }
  var name = document.getElementById("hf-name").value;
  var phone = document.getElementById("hf-phone").value;
  var svc = document.getElementById("hf-service").value;
  // WhatsApp redirect with pre-filled message
  var msg =
    "Hi Dr. Shivangi! I would like to book an appointment.%0AName: " +
    encodeURIComponent(name) +
    "%0APhone: " +
    encodeURIComponent(phone) +
    "%0ATreatment: " +
    encodeURIComponent(svc);
  window.open("https://wa.me/919800000000?text=" + msg, "_blank");
  showToast("Redirecting to WhatsApp booking...");
}
function submitBookingForm() {
  if (
    !document.getElementById("bf-name").value ||
    !document.getElementById("bf-phone").value
  ) {
    showToast("Please fill required fields.");
    return;
  }
  var name = document.getElementById("bf-name").value;
  var phone = document.getElementById("bf-phone").value;
  var svc = document.getElementById("bf-service").value;
  var msg =
    "Hi Dr. Shivangi! I would like to book a consultation.%0AName: " +
    encodeURIComponent(name) +
    "%0APhone: " +
    encodeURIComponent(phone) +
    "%0ATreatment: " +
    encodeURIComponent(svc);
  window.open("https://wa.me/919800000000?text=" + msg, "_blank");
  showToast("Booking sent! We'll confirm shortly.");
}
function submitModal() {
  if (
    !document.getElementById("m-name").value ||
    !document.getElementById("m-phone").value
  ) {
    showToast("Please fill required fields.");
    return;
  }
  var name = document.getElementById("m-name").value;
  var phone = document.getElementById("m-phone").value;
  var svc = document.getElementById("m-svc").value;
  var date = document.getElementById("m-date").value;
  var time = document.getElementById("m-time").value;
  var msg =
    "Hi Dr. Shivangi! I would like to book a consultation.%0AName: " +
    encodeURIComponent(name) +
    "%0APhone: " +
    encodeURIComponent(phone) +
    "%0ATreatment: " +
    encodeURIComponent(svc) +
    "%0ADate: " +
    encodeURIComponent(date) +
    "%0ATime: " +
    encodeURIComponent(time);
  closeModal();
  window.open("https://wa.me/919800000000?text=" + msg, "_blank");
  showToast("Booking confirmed! Opening WhatsApp...");
}
function submitContactForm() {
  if (
    !document.getElementById("cf-fn").value ||
    !document.getElementById("cf-phone").value
  ) {
    showToast("Please fill required fields.");
    return;
  }
  var name =
    document.getElementById("cf-fn").value +
    " " +
    document.getElementById("cf-ln").value;
  var phone = document.getElementById("cf-phone").value;
  var svc = document.getElementById("cf-svc").value;
  var msg = document.getElementById("cf-msg").value;
  var waMsg =
    "Hi Dr. Shivangi!%0AName: " +
    encodeURIComponent(name) +
    "%0APhone: " +
    encodeURIComponent(phone) +
    "%0ATreatment: " +
    encodeURIComponent(svc) +
    "%0AMessage: " +
    encodeURIComponent(msg);
  window.open("https://wa.me/919800000000?text=" + waMsg, "_blank");
  showToast("Message sent! Opening WhatsApp...");
}

/* =========================
   BEFORE AFTER DATA
========================= */

const baImages = {
  "Skin Glow": {
    before: "assets/images/before-1.png",
    after: "assets/images/after-1.jpg",
  },

  "Hair Growth": {
    before: "assets/images/hair-before.png",
    after: "assets/images/hair-after.png",
  },

  "Anti-Aging": {
    before: "assets/images/anti-before.jpg",
    after: "assets/images/anti-after.jpg",
  },

  Pigmentation: {
    before: "assets/images/pigment-before.jpg",
    after: "assets/images/pigment-after.jpg",
  },
};

/* ELEMENTS */
const wrap = document.getElementById("baWrap");
const line = document.getElementById("baDivLine");
const knob = document.getElementById("baKnob");
const before = document.getElementById("baBefore");
const after = document.getElementById("baAfter");

/* IMAGES */
const beforeImg = before.querySelector("img");
const afterImg = after.querySelector("img");

/* =========================
   SLIDER
========================= */

let dragging = false;

function setPos(x) {
  const r = wrap.getBoundingClientRect();

  let p = ((x - r.left) / r.width) * 100;

  p = Math.max(10, Math.min(90, p));

  line.style.left = p + "%";

  knob.style.left = p + "%";

  before.style.width = p + "%";

  after.style.left = p + "%";

  after.style.width = 100 - p + "%";
}

/* MOUSE */
wrap.addEventListener("mousedown", function (e) {
  dragging = true;

  setPos(e.clientX);
});

document.addEventListener("mousemove", function (e) {
  if (dragging) {
    setPos(e.clientX);
  }
});

document.addEventListener("mouseup", function () {
  dragging = false;
});

/* TOUCH */
wrap.addEventListener(
  "touchstart",
  function (e) {
    dragging = true;

    setPos(e.touches[0].clientX);
  },
  { passive: true },
);

document.addEventListener(
  "touchmove",
  function (e) {
    if (dragging) {
      setPos(e.touches[0].clientX);
    }
  },
  { passive: true },
);

document.addEventListener("touchend", function () {
  dragging = false;
});

/* =========================
   TAB CHANGE
========================= */

function setBATab(el) {
  /* ACTIVE BUTTON */
  document.querySelectorAll(".ba-tab").forEach(function (t) {
    t.classList.remove("active");
  });

  el.classList.add("active");

  /* TAB NAME */
  const tabName = el.innerText.trim();

  /* CHANGE IMAGES */
  beforeImg.src = baImages[tabName].before;

  afterImg.src = baImages[tabName].after;

  /* RESET SLIDER POSITION */
  line.style.left = "50%";

  knob.style.left = "50%";

  before.style.width = "50%";

  after.style.left = "50%";

  after.style.width = "50%";
}
// ═══════════════ SCROLL TO TREATMENTS ═══════════════
function scrollToTreatments() {
  var el = document.getElementById("treatments-anchor");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ═══════════════ GALLERY FILTER ═══════════════
function filterG(btn, cat) {
  document.querySelectorAll(".gf-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
  document.querySelectorAll(".gp-item").forEach(function (el) {
    el.style.display =
      cat === "all" || el.dataset.cat === cat ? "flex" : "none";
  });
}

// ═══════════════ FAQ ═══════════════
// document.addEventListener("click", function (e) {
//   console.log("ummama 232 =>",e.target);
//   var q = e.target.closest(".faq-q");
//   if (!q) return;
//   var item = q.closest(".faq-item");
//   var open = item.classList.contains("open");
//   document.querySelectorAll(".faq-item").forEach(function (i) {
//     i.classList.remove("open");
//   });
//   if (!open) item.classList.add("open");
// });

function showTreatment(key) {
  console.log("umama");
  var t = T[key];
  if (!t) {
    showPage("home");
    return;
  }
  document.getElementById("t-bc").textContent = t.bc;
  document.getElementById("t-hero-title").innerHTML = t.title;
  document.getElementById("t-hero-sub").textContent = t.sub;
  document.getElementById("t-tag").textContent = t.tag;
  document.getElementById("t-h2").innerHTML = t.h2;
  document.getElementById("t-p1").textContent = t.p1;
  document.getElementById("t-p2").textContent = t.p2;
  document.getElementById("t-price").textContent = t.price;
  var bl = document.getElementById("t-benefits");
  bl.innerHTML = "";
  t.benefits.forEach(function (b) {
    var li = document.createElement("li");
    li.textContent = b;
    bl.appendChild(li);
  });
  var fl = document.getElementById("t-faqs");
  fl.innerHTML = "";
  t.faqs.forEach(function (f) {
    fl.innerHTML +=
      '<div class="faq-item"><div class="faq-q">' +
      f.q +
      '<span class="faq-icon">+</span></div><div class="faq-a">' +
      f.a +
      "</div></div>";
  });
  showPage("treatment");
}
// function showTreatment(key) {
//   console.log("Clicked Treatment:", key);

//   // Check if T object exists
//   if (typeof T === "undefined") {
//     console.error("T object not found");
//     return;
//   }

//   // Check if treatment exists
//   if (!T[key]) {
//     console.error("Treatment not found:", key);
//     showPage("home");
//     return;
//   }

//   // Get treatment data
//   const t = T[key];

//   // Hero Content
//   document.getElementById("t-bc").textContent = t.bc;
//   document.getElementById("t-hero-title").innerHTML = t.title;
//   document.getElementById("t-hero-sub").textContent = t.sub;
//   document.getElementById("t-tag").textContent = t.tag;
//   document.getElementById("t-h2").innerHTML = t.h2;
//   document.getElementById("t-p1").textContent = t.p1;
//   document.getElementById("t-p2").textContent = t.p2;
//   document.getElementById("t-price").textContent = t.price;

//   // Benefits
//   const bl = document.getElementById("t-benefits");
//   bl.innerHTML = "";

//   t.benefits.forEach(function (b) {
//     const li = document.createElement("li");
//     li.textContent = b;

//     bl.appendChild(li);
//   });

//   // FAQs
//   const fl = document.getElementById("t-faqs");
//   fl.innerHTML = "";

//   t.faqs.forEach(function (f) {
//     fl.innerHTML += `
//       <div class="faq-item">

//         <div class="faq-q">
//           ${f.q}
//           <span class="faq-icon">+</span>
//         </div>

//         <div class="faq-a">
//           ${f.a}
//         </div>

//       </div>
//     `;
//   });

//   // Open treatment page
//   showPage("treatment");

//   // Scroll top
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
// ═══════════════ BLOG ARTICLES ═══════════════

var articles = {
  "botox-science": {
    bc: "Botox Science",
    title: "The Science Behind Botox",
    meta: "By Dr. Shivangi · May 2025 · 5 min read",
    cat: "Anti-Aging",
    body: '<h2>What Is Botox, Really?</h2><p>Botox — short for botulinum toxin type A — is a highly purified neurotoxic protein produced by Clostridium botulinum. While the word "toxin" might sound alarming, in the microscopic doses used in aesthetic medicine, it is extraordinarily safe and has been used clinically for over 30 years.</p><h2>How Does It Work?</h2><p>When injected into a muscle, Botox blocks the release of acetylcholine — the neurotransmitter that signals muscles to contract. Without this signal, the targeted muscle relaxes, causing the overlying skin to smooth out.</p><p>The key is precision. Dr. Shivangi targets only the muscles responsible for expression lines — forehead lines, frown lines (glabella), and crow\'s feet — while leaving surrounding muscles completely unaffected.</p><h2>The Artistry of Micro-Dosing</h2><p>The difference between natural-looking Botox and the "frozen face" look lies entirely in technique and dosing. Dr. Shivangi uses micro-dosing — injecting smaller amounts at multiple precise points — which preserves natural movement while softening lines.</p><h3>What to Expect After Treatment</h3><ul><li>Results begin appearing within 3–5 days</li><li>Full effect visible at 10–14 days</li><li>Results last 4–6 months on average</li><li>Minimal to no downtime</li></ul><h2>Is Botox Safe?</h2><p>When administered by a qualified medical professional using FDA-approved products, Botox has an excellent safety record. Dr. Shivangi uses only pharmaceutical-grade Botox and follows strict injection protocols.</p><p>The most common side effects are mild redness or slight bruising at the injection site, which typically resolve within a few hours to a day.</p>',
  },
  "prp-vs-minoxidil": {
    bc: "PRP vs Minoxidil",
    title: "PRP vs. Minoxidil for Hair Loss",
    meta: "By Dr. Shivangi · April 2025 · 6 min read",
    cat: "Hair Care",
    body: "<h2>The Hair Loss Dilemma</h2><p>When hair starts to thin, the first question most people ask is: what actually works? Today, two treatments dominate the conversation — PRP therapy and Minoxidil. Both have clinical evidence behind them, but they work in fundamentally different ways.</p><h2>What is Minoxidil?</h2><p>Minoxidil is a topical (and now oral) medication originally developed as a blood pressure drug. It was noticed to cause hair growth as a side effect, and has since become one of the most widely used hair loss treatments globally.</p><p>It works by extending the hair growth phase (anagen) and increasing blood flow to follicles. It must be applied daily and indefinitely — stopping treatment typically reverses gains within months.</p><h2>What is PRP Therapy?</h2><p>Platelet-Rich Plasma therapy uses your own blood's growth factors to directly stimulate hair follicles. Blood is drawn, centrifuged to concentrate the platelets, and injected into the scalp at follicular level.</p><p>PRP contains multiple growth factors including VEGF, PDGF, and IGF-1 that directly activate dormant follicles and extend the growth cycle.</p><h3>The Comparison</h3><ul><li><strong>Minoxidil:</strong> Daily application, lifelong commitment, modest results, good for maintenance</li><li><strong>PRP:</strong> In-clinic sessions every 4–6 weeks initially, uses your own biology, stronger density improvement, more durable results with maintenance</li></ul><h2>Dr. Shivangi's Recommendation</h2><p>For most patients, a combination approach delivers the best results: PRP for follicle activation and density improvement, with topical treatments for maintenance. The right protocol depends entirely on your type and stage of hair loss, which is why a consultation is essential.</p>",
  },
  "spf-guide": {
    bc: "SPF Guide",
    title: "SPF 50 vs SPF 30: The Truth",
    meta: "By Dr. Shivangi · April 2025 · 4 min read",
    cat: "Skincare",
    body: "<h2>The SPF Confusion</h2><p>Walk into any pharmacy and you'll find sunscreens ranging from SPF 15 to SPF 100+. The marketing suggests that higher is always better. But what does the science actually say?</p><h2>What Does SPF Actually Mean?</h2><p>SPF stands for Sun Protection Factor. SPF 30 blocks approximately 97% of UVB rays. SPF 50 blocks approximately 98%. SPF 100 blocks approximately 99%. The difference between SPF 30 and SPF 50 is just 1% — but that 1% matters, especially if you have pigmentation-prone skin.</p><h2>What Dr. Shivangi Actually Uses</h2><p>As an aesthetic physician who performs skin resurfacing and pigmentation treatments, daily SPF 50 PA+++ is non-negotiable in Dr. Shivangi's routine. The PA+++ rating indicates high UVA protection — which is responsible for pigmentation, premature ageing, and DNA damage.</p><h3>Key Recommendations</h3><ul><li>Use SPF 50 PA+++ daily, even indoors (UV penetrates glass)</li><li>Reapply every 2 hours when outdoors</li><li>Apply 2 finger lengths of sunscreen for face and neck</li><li>Use broad-spectrum formulas that cover both UVA and UVB</li><li>For Indian skin, mineral sunscreens (zinc oxide, titanium dioxide) are less likely to cause breakouts</li></ul><h2>The Bottom Line</h2><p>For everyday use, SPF 50 PA+++ broad-spectrum is the gold standard recommended by Dr. Shivangi. It's the single most effective anti-aging and anti-pigmentation product you can use — and it costs under ₹500.</p>",
  },
  "natural-fillers": {
    bc: "Natural Fillers",
    title: "The Art of Natural Fillers",
    meta: "By Dr. Shivangi · March 2025 · 5 min read",
    cat: "Aesthetic",
    body: '<h2>The Era of "Too Much" Is Over</h2><p>For a decade, overfilled lips, pillow cheeks, and stretched faces dominated aesthetic medicine. Today\'s patients — and today\'s best practitioners — have moved firmly in the opposite direction.</p><h2>What Makes Fillers Look Unnatural?</h2><p>Overfilling is the most common culprit. When too much product is placed in one area, it distorts natural facial proportions. The face has ideal volumetric ratios — when these are disrupted, it looks "done."</p><p>The second factor is placement. Fillers placed in the wrong plane (too superficial, or in the wrong anatomical layer) create lumps, distortion, or an unnatural heaviness.</p><h2>The Modern Philosophy: Addition by Subtraction</h2><p>Dr. Shivangi\'s approach to fillers is guided by a simple principle: what is the minimum intervention that delivers the maximum natural improvement? Sometimes a single 0.5ml of product placed precisely delivers more impact than 2ml placed carelessly.</p><h3>The Technical Principles</h3><ul><li>Always assess the face as a whole, not individual features</li><li>Restore what was lost — don\'t add what was never there</li><li>Work with natural anatomy, never against it</li><li>Less product, more sessions — allows for gradual, refined results</li><li>Respect the "danger zones" — areas requiring ultra-precise technique</li></ul><h2>The Result Nobody Can Quite Identify</h2><p>The highest compliment a filler patient can receive is: "You look amazing — have you been on holiday?" Not: "Have you had something done?" That is the art of natural aesthetics — visible improvement, invisible intervention.</p>',
  },
  "indian-skin-pigmentation": {
    bc: "Indian Skin",
    title: "Pigmentation in Indian Skin",
    meta: "By Dr. Shivangi · February 2025 · 5 min read",
    cat: "Pigmentation",
    body: "<h2>Why Indian Skin is Different</h2><p>Indian and South Asian skin (Fitzpatrick Types III–V) has a higher melanin content than lighter skin types. Melanin is the pigment that gives skin its colour — and it's the same pigment responsible for dark spots, melasma, and post-inflammatory hyperpigmentation (PIH).</p><h2>The Risk of Generic Protocols</h2><p>Treatments designed for Caucasian skin — particularly aggressive chemical peels and certain laser wavelengths — can cause severe post-inflammatory hyperpigmentation in darker skin tones. This is why it's critical to see a physician who has specific expertise in treating melanin-rich skin.</p><h2>What Causes Pigmentation in Indian Skin?</h2><ul><li><strong>Melasma:</strong> Hormonally triggered, worsened by UV and heat. Extremely common in Indian women.</li><li><strong>Post-Inflammatory Hyperpigmentation (PIH):</strong> Dark marks left behind by acne, rashes, or injury.</li><li><strong>Sun Damage:</strong> UV exposure triggers excess melanin production.</li><li><strong>Periorbital Hyperpigmentation:</strong> Dark circles under the eyes — genetic, lifestyle, or vascular.</li></ul><h2>The Right Treatment Approach</h2><p>Dr. Shivangi uses a carefully calibrated combination of low-strength chemical peels (mandelic, kojic, lactic acid), Q-switched Nd:YAG laser (the gold standard for Indian skin), and prescribed brightening skincare to safely and progressively clear pigmentation.</p><p>The key word is progressive. Rushing pigmentation treatment in dark skin almost always causes rebound. Slow, consistent, medically guided treatment delivers lasting results without risk.</p>",
  },
  "hydrafacial-vs-facial": {
    bc: "HydraFacial vs Facial",
    title: "HydraFacial vs Traditional Facial",
    meta: "By Dr. Shivangi · February 2025 · 4 min read",
    cat: "Skin Care",
    body: "<h2>The Classic Spa Facial</h2><p>A traditional facial typically involves cleansing, steam, manual extraction, a mask, and moisturiser. Done well, it leaves skin feeling refreshed. But the results are largely superficial and temporary — typically lasting a few days to a week.</p><h2>What Makes HydraFacial Different?</h2><p>HydraFacial is a medical-grade treatment that uses patented Vortex-Fusion technology to simultaneously cleanse, exfoliate, extract, and infuse the skin with targeted serums. The process is controlled, measurable, and reproducible.</p><h3>The Four Step Difference</h3><ul><li><strong>Step 1 — Cleanse & Peel:</strong> Gentle resurfacing removes dead skin cells</li><li><strong>Step 2 — Extract & Hydrate:</strong> Painless suction removes blackheads and congestion while delivering hyaluronic acid</li><li><strong>Step 3 — Fuse & Protect:</strong> Antioxidants, peptides, and growth factors are infused</li><li><strong>Step 4 — Targeted Boosters:</strong> Customised serums for your specific skin concern</li></ul><h2>Is the Price Worth It?</h2><p>A HydraFacial costs 3–5x more than a standard facial. The results, however, are measurably different: immediate pore reduction, improved hydration levels, and visible glow that lasts 4–6 weeks rather than 4–6 days.</p><p>For patients with specific skin concerns — congestion, pigmentation, fine lines, or dehydration — a course of HydraFacials delivers clinical-level improvement without any downtime. For most patients, Dr. Shivangi's answer is: yes, the price difference is absolutely worth it.</p>",
  },
};

function showBlogArticle(key) {
  var a = articles[key];
  if (!a) return;
  document.getElementById("art-bc").textContent = a.bc;
  document.getElementById("art-title").textContent = a.title;
  document.getElementById("art-meta").textContent = a.meta;
  document.getElementById("art-cat").textContent = a.cat;
  document.getElementById("art-body").innerHTML = a.body;
  showPage("blog-article");
}

/* =========================
   AUTO SLIDER
========================= */

const slides = document.querySelectorAll(".ba-slide");

let current = 0;

/* SHOW SLIDE */
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

/* AUTO CHANGE */
setInterval(() => {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
}, 2000);

/* =========================
   TOUCH / SWIPE
========================= */

const slider = document.getElementById("baCarousel");

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  /* LEFT SWIPE */
  if (startX - endX > 50) {
    current++;

    if (current >= slides.length) {
      current = 0;
    }

    showSlide(current);
  }

  /* RIGHT SWIPE */
  if (endX - startX > 50) {
    current--;

    if (current < 0) {
      current = slides.length - 1;
    }

    showSlide(current);
  }
});

/* =========================
   AUTO CAROUSEL FIX
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".ba-slide");

  let current = 0;

  /* SHOW SLIDE */
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
  }

  /* AUTO SLIDER */
  setInterval(() => {
    current++;

    if (current >= slides.length) {
      current = 0;
    }

    showSlide(current);
  }, 2000);

  /* =========================
     MOBILE SWIPE
  ========================= */

  const slider = document.getElementById("baCarousel");

  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    /* LEFT SWIPE */
    if (startX - endX > 50) {
      current++;

      if (current >= slides.length) {
        current = 0;
      }

      showSlide(current);
    }

    /* RIGHT SWIPE */
    if (endX - startX > 50) {
      current--;

      if (current < 0) {
        current = slides.length - 1;
      }

      showSlide(current);
    }
  });
});

/* =========================
   AUTO IMAGE SLIDER
========================= */

window.addEventListener("load", function () {
  const slides = document.querySelectorAll(".beauty-slide");

  let current = 0;

  /* SHOW */
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
  }

  /* AUTO PLAY */
  setInterval(function () {
    current++;

    if (current >= slides.length) {
      current = 0;
    }

    showSlide(current);
  }, 2000);

  /* =========================
     TOUCH SWIPE
  ========================= */

  const slider = document.getElementById("beautySlider");

  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;

    /* NEXT */
    if (startX - endX > 50) {
      current++;

      if (current >= slides.length) {
        current = 0;
      }

      showSlide(current);
    }

    /* PREV */
    if (endX - startX > 50) {
      current--;

      if (current < 0) {
        current = slides.length - 1;
      }

      showSlide(current);
    }
  });
});
