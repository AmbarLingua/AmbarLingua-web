// ── SCROLL REVEAL ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('v'), i * 65);
  });
}, { threshold: 0.07 });
document.querySelectorAll('.r').forEach(el => obs.observe(el));

// ── NAV ACTIVE STATE ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--terra)' : '';
  });
});

// ── MOBILE NAV TOGGLE ──
const burger = document.getElementById('navBurger');
const navMenu = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// ── LIGHTBOX — AVATAR NAV ──
const avatarTrigger = document.getElementById('navAvatarTrigger');
const avatarLightbox = document.getElementById('avatarLightbox');
const lightboxClose  = document.getElementById('lightboxClose');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

if (avatarTrigger && avatarLightbox) {
  avatarTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    avatarLightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  lightboxClose.addEventListener('click', () => {
    avatarLightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
  lightboxBackdrop.addEventListener('click', () => {
    avatarLightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      avatarLightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ── COUNTRY DATA (bundled — no fetch needed, works offline / file://) ──
// Top 3 pinned, then full list alphabetical (Spanish names)
const COUNTRIES = [
  // ── PINNED TOP 3 ──
  { code: '+1',    flag: '🇨🇦', name: 'Canadá',              pin: true },
  { code: '+52',   flag: '🇲🇽', name: 'México',              pin: true },
  { code: '+1',    flag: '🇺🇸', name: 'EE.UU.',              pin: true },
  // ── A ──
  { code: '+93',   flag: '🇦🇫', name: 'Afganistán' },
  { code: '+355',  flag: '🇦🇱', name: 'Albania' },
  { code: '+213',  flag: '🇩🇿', name: 'Argelia' },
  { code: '+376',  flag: '🇦🇩', name: 'Andorra' },
  { code: '+244',  flag: '🇦🇴', name: 'Angola' },
  { code: '+54',   flag: '🇦🇷', name: 'Argentina' },
  { code: '+374',  flag: '🇦🇲', name: 'Armenia' },
  { code: '+61',   flag: '🇦🇺', name: 'Australia' },
  { code: '+43',   flag: '🇦🇹', name: 'Austria' },
  { code: '+994',  flag: '🇦🇿', name: 'Azerbaiyán' },
  // ── B ──
  { code: '+1242', flag: '🇧🇸', name: 'Bahamas' },
  { code: '+973',  flag: '🇧🇭', name: 'Bahrein' },
  { code: '+880',  flag: '🇧🇩', name: 'Bangladés' },
  { code: '+1246', flag: '🇧🇧', name: 'Barbados' },
  { code: '+375',  flag: '🇧🇾', name: 'Bielorrusia' },
  { code: '+32',   flag: '🇧🇪', name: 'Bélgica' },
  { code: '+501',  flag: '🇧🇿', name: 'Belice' },
  { code: '+229',  flag: '🇧🇯', name: 'Benín' },
  { code: '+975',  flag: '🇧🇹', name: 'Bután' },
  { code: '+591',  flag: '🇧🇴', name: 'Bolivia' },
  { code: '+387',  flag: '🇧🇦', name: 'Bosnia y Herzegovina' },
  { code: '+267',  flag: '🇧🇼', name: 'Botsuana' },
  { code: '+55',   flag: '🇧🇷', name: 'Brasil' },
  { code: '+673',  flag: '🇧🇳', name: 'Brunéi' },
  { code: '+359',  flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+226',  flag: '🇧🇫', name: 'Burkina Faso' },
  { code: '+257',  flag: '🇧🇮', name: 'Burundi' },
  // ── C ──
  { code: '+238',  flag: '🇨🇻', name: 'Cabo Verde' },
  { code: '+855',  flag: '🇰🇭', name: 'Camboya' },
  { code: '+237',  flag: '🇨🇲', name: 'Camerún' },
  { code: '+236',  flag: '🇨🇫', name: 'República Centroafricana' },
  { code: '+235',  flag: '🇹🇩', name: 'Chad' },
  { code: '+56',   flag: '🇨🇱', name: 'Chile' },
  { code: '+86',   flag: '🇨🇳', name: 'China' },
  { code: '+357',  flag: '🇨🇾', name: 'Chipre' },
  { code: '+57',   flag: '🇨🇴', name: 'Colombia' },
  { code: '+269',  flag: '🇰🇲', name: 'Comoras' },
  { code: '+242',  flag: '🇨🇬', name: 'Congo' },
  { code: '+243',  flag: '🇨🇩', name: 'Congo (RDC)' },
  { code: '+506',  flag: '🇨🇷', name: 'Costa Rica' },
  { code: '+385',  flag: '🇭🇷', name: 'Croacia' },
  { code: '+53',   flag: '🇨🇺', name: 'Cuba' },
  // ── D ──
  { code: '+45',   flag: '🇩🇰', name: 'Dinamarca' },
  { code: '+253',  flag: '🇩🇯', name: 'Yibuti' },
  { code: '+1767', flag: '🇩🇲', name: 'Dominica' },
  // ── E ──
  { code: '+593',  flag: '🇪🇨', name: 'Ecuador' },
  { code: '+20',   flag: '🇪🇬', name: 'Egipto' },
  { code: '+503',  flag: '🇸🇻', name: 'El Salvador' },
  { code: '+971',  flag: '🇦🇪', name: 'Emiratos Árabes Unidos' },
  { code: '+291',  flag: '🇪🇷', name: 'Eritrea' },
  { code: '+421',  flag: '🇸🇰', name: 'Eslovaquia' },
  { code: '+386',  flag: '🇸🇮', name: 'Eslovenia' },
  { code: '+34',   flag: '🇪🇸', name: 'España' },
  { code: '+268',  flag: '🇸🇿', name: 'Esuatini' },
  { code: '+251',  flag: '🇪🇹', name: 'Etiopía' },
  // ── F ──
  { code: '+679',  flag: '🇫🇯', name: 'Fiyi' },
  { code: '+63',   flag: '🇵🇭', name: 'Filipinas' },
  { code: '+358',  flag: '🇫🇮', name: 'Finlandia' },
  { code: '+33',   flag: '🇫🇷', name: 'Francia' },
  // ── G ──
  { code: '+241',  flag: '🇬🇦', name: 'Gabón' },
  { code: '+220',  flag: '🇬🇲', name: 'Gambia' },
  { code: '+995',  flag: '🇬🇪', name: 'Georgia' },
  { code: '+233',  flag: '🇬🇭', name: 'Ghana' },
  { code: '+350',  flag: '🇬🇮', name: 'Gibraltar' },
  { code: '+30',   flag: '🇬🇷', name: 'Grecia' },
  { code: '+1473', flag: '🇬🇩', name: 'Granada' },
  { code: '+502',  flag: '🇬🇹', name: 'Guatemala' },
  { code: '+224',  flag: '🇬🇳', name: 'Guinea' },
  { code: '+240',  flag: '🇬🇶', name: 'Guinea Ecuatorial' },
  { code: '+245',  flag: '🇬🇼', name: 'Guinea-Bisáu' },
  { code: '+592',  flag: '🇬🇾', name: 'Guyana' },
  // ── H ──
  { code: '+509',  flag: '🇭🇹', name: 'Haití' },
  { code: '+504',  flag: '🇭🇳', name: 'Honduras' },
  { code: '+36',   flag: '🇭🇺', name: 'Hungría' },
  // ── I ──
  { code: '+91',   flag: '🇮🇳', name: 'India' },
  { code: '+62',   flag: '🇮🇩', name: 'Indonesia' },
  { code: '+964',  flag: '🇮🇶', name: 'Irak' },
  { code: '+98',   flag: '🇮🇷', name: 'Irán' },
  { code: '+353',  flag: '🇮🇪', name: 'Irlanda' },
  { code: '+354',  flag: '🇮🇸', name: 'Islandia' },
  { code: '+972',  flag: '🇮🇱', name: 'Israel' },
  { code: '+39',   flag: '🇮🇹', name: 'Italia' },
  // ── J ──
  { code: '+1876', flag: '🇯🇲', name: 'Jamaica' },
  { code: '+81',   flag: '🇯🇵', name: 'Japón' },
  { code: '+962',  flag: '🇯🇴', name: 'Jordania' },
  // ── K ──
  { code: '+7',    flag: '🇰🇿', name: 'Kazajistán' },
  { code: '+254',  flag: '🇰🇪', name: 'Kenia' },
  { code: '+996',  flag: '🇰🇬', name: 'Kirguistán' },
  { code: '+686',  flag: '🇰🇮', name: 'Kiribati' },
  { code: '+965',  flag: '🇰🇼', name: 'Kuwait' },
  // ── L ──
  { code: '+856',  flag: '🇱🇦', name: 'Laos' },
  { code: '+266',  flag: '🇱🇸', name: 'Lesoto' },
  { code: '+371',  flag: '🇱🇻', name: 'Letonia' },
  { code: '+961',  flag: '🇱🇧', name: 'Líbano' },
  { code: '+231',  flag: '🇱🇷', name: 'Liberia' },
  { code: '+218',  flag: '🇱🇾', name: 'Libia' },
  { code: '+423',  flag: '🇱🇮', name: 'Liechtenstein' },
  { code: '+370',  flag: '🇱🇹', name: 'Lituania' },
  { code: '+352',  flag: '🇱🇺', name: 'Luxemburgo' },
  // ── M ──
  { code: '+261',  flag: '🇲🇬', name: 'Madagascar' },
  { code: '+265',  flag: '🇲🇼', name: 'Malaui' },
  { code: '+60',   flag: '🇲🇾', name: 'Malasia' },
  { code: '+960',  flag: '🇲🇻', name: 'Maldivas' },
  { code: '+223',  flag: '🇲🇱', name: 'Malí' },
  { code: '+356',  flag: '🇲🇹', name: 'Malta' },
  { code: '+212',  flag: '🇲🇦', name: 'Marruecos' },
  { code: '+222',  flag: '🇲🇷', name: 'Mauritania' },
  { code: '+230',  flag: '🇲🇺', name: 'Mauricio' },
  { code: '+691',  flag: '🇫🇲', name: 'Micronesia' },
  { code: '+373',  flag: '🇲🇩', name: 'Moldavia' },
  { code: '+377',  flag: '🇲🇨', name: 'Mónaco' },
  { code: '+976',  flag: '🇲🇳', name: 'Mongolia' },
  { code: '+382',  flag: '🇲🇪', name: 'Montenegro' },
  { code: '+258',  flag: '🇲🇿', name: 'Mozambique' },
  { code: '+95',   flag: '🇲🇲', name: 'Myanmar' },
  // ── N ──
  { code: '+264',  flag: '🇳🇦', name: 'Namibia' },
  { code: '+674',  flag: '🇳🇷', name: 'Nauru' },
  { code: '+977',  flag: '🇳🇵', name: 'Nepal' },
  { code: '+505',  flag: '🇳🇮', name: 'Nicaragua' },
  { code: '+227',  flag: '🇳🇪', name: 'Níger' },
  { code: '+234',  flag: '🇳🇬', name: 'Nigeria' },
  { code: '+47',   flag: '🇳🇴', name: 'Noruega' },
  { code: '+64',   flag: '🇳🇿', name: 'Nueva Zelanda' },
  // ── O ──
  { code: '+968',  flag: '🇴🇲', name: 'Omán' },
  // ── P ──
  { code: '+92',   flag: '🇵🇰', name: 'Pakistán' },
  { code: '+680',  flag: '🇵🇼', name: 'Palaos' },
  { code: '+970',  flag: '🇵🇸', name: 'Palestina' },
  { code: '+507',  flag: '🇵🇦', name: 'Panamá' },
  { code: '+675',  flag: '🇵🇬', name: 'Papúa Nueva Guinea' },
  { code: '+595',  flag: '🇵🇾', name: 'Paraguay' },
  { code: '+51',   flag: '🇵🇪', name: 'Perú' },
  { code: '+48',   flag: '🇵🇱', name: 'Polonia' },
  { code: '+351',  flag: '🇵🇹', name: 'Portugal' },
  // ── Q ──
  { code: '+974',  flag: '🇶🇦', name: 'Catar' },
  // ── R ──
  { code: '+44',   flag: '🇬🇧', name: 'Reino Unido' },
  { code: '+236',  flag: '🇨🇫', name: 'República Centroafricana' },
  { code: '+1809', flag: '🇩🇴', name: 'República Dominicana' },
  { code: '+40',   flag: '🇷🇴', name: 'Rumanía' },
  { code: '+7',    flag: '🇷🇺', name: 'Rusia' },
  { code: '+250',  flag: '🇷🇼', name: 'Ruanda' },
  // ── S ──
  { code: '+685',  flag: '🇼🇸', name: 'Samoa' },
  { code: '+1869', flag: '🇰🇳', name: 'San Cristóbal y Nieves' },
  { code: '+378',  flag: '🇸🇲', name: 'San Marino' },
  { code: '+1784', flag: '🇻🇨', name: 'San Vicente y las Granadinas' },
  { code: '+239',  flag: '🇸🇹', name: 'Santo Tomé y Príncipe' },
  { code: '+966',  flag: '🇸🇦', name: 'Arabia Saudita' },
  { code: '+221',  flag: '🇸🇳', name: 'Senegal' },
  { code: '+381',  flag: '🇷🇸', name: 'Serbia' },
  { code: '+248',  flag: '🇸🇨', name: 'Seychelles' },
  { code: '+232',  flag: '🇸🇱', name: 'Sierra Leona' },
  { code: '+65',   flag: '🇸🇬', name: 'Singapur' },
  { code: '+963',  flag: '🇸🇾', name: 'Siria' },
  { code: '+252',  flag: '🇸🇴', name: 'Somalia' },
  { code: '+94',   flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+27',   flag: '🇿🇦', name: 'Sudáfrica' },
  { code: '+249',  flag: '🇸🇩', name: 'Sudán' },
  { code: '+211',  flag: '🇸🇸', name: 'Sudán del Sur' },
  { code: '+46',   flag: '🇸🇪', name: 'Suecia' },
  { code: '+41',   flag: '🇨🇭', name: 'Suiza' },
  { code: '+597',  flag: '🇸🇷', name: 'Surinam' },
  // ── T ──
  { code: '+992',  flag: '🇹🇯', name: 'Tayikistán' },
  { code: '+66',   flag: '🇹🇭', name: 'Tailandia' },
  { code: '+255',  flag: '🇹🇿', name: 'Tanzania' },
  { code: '+670',  flag: '🇹🇱', name: 'Timor Oriental' },
  { code: '+228',  flag: '🇹🇬', name: 'Togo' },
  { code: '+676',  flag: '🇹🇴', name: 'Tonga' },
  { code: '+1868', flag: '🇹🇹', name: 'Trinidad y Tobago' },
  { code: '+216',  flag: '🇹🇳', name: 'Túnez' },
  { code: '+993',  flag: '🇹🇲', name: 'Turkmenistán' },
  { code: '+90',   flag: '🇹🇷', name: 'Turquía' },
  // ── U ──
  { code: '+256',  flag: '🇺🇬', name: 'Uganda' },
  { code: '+380',  flag: '🇺🇦', name: 'Ucrania' },
  { code: '+598',  flag: '🇺🇾', name: 'Uruguay' },
  { code: '+998',  flag: '🇺🇿', name: 'Uzbekistán' },
  // ── V ──
  { code: '+678',  flag: '🇻🇺', name: 'Vanuatu' },
  { code: '+379',  flag: '🇻🇦', name: 'Vaticano' },
  { code: '+58',   flag: '🇻🇪', name: 'Venezuela' },
  { code: '+84',   flag: '🇻🇳', name: 'Vietnam' },
  // ── Y ──
  { code: '+967',  flag: '🇾🇪', name: 'Yemen' },
  // ── Z ──
  { code: '+260',  flag: '🇿🇲', name: 'Zambia' },
  { code: '+263',  flag: '🇿🇼', name: 'Zimbabue' },
];

// ── BUILD PHONE SELECT (native <select>, no dependencies) ──
function buildPhoneSelect() {
  const sel = document.getElementById('phoneCode');
  if (!sel) return;

  COUNTRIES.forEach(({ code, flag, name, pin }, i) => {
    // Insert divider after the 3 pinned countries
    if (i === 3) {
      const sep = document.createElement('option');
      sep.disabled = true;
      sep.textContent = '─────────────────────';
      sel.appendChild(sep);
    }
    const opt = document.createElement('option');
    opt.value = code + '||' + name;
    opt.textContent = `${flag} ${code}  ${name}`;
    if (i === 0) opt.selected = true; // Canada default
    sel.appendChild(opt);
  });
}
// ── TOGGLE WhatsApp ↔ Email ──
const btnWa    = document.getElementById('btnWhatsapp');
const btnEmail = document.getElementById('btnEmail');
const fieldWa  = document.getElementById('fieldWhatsapp');
const fieldEm  = document.getElementById('fieldEmail');

function activateWhatsapp() {
  btnWa.classList.add('active');
  btnWa.setAttribute('aria-pressed', 'true');
  btnEmail.classList.remove('active');
  btnEmail.setAttribute('aria-pressed', 'false');
  fieldWa.classList.remove('hidden');
  fieldEm.classList.add('hidden');
  clearError(document.getElementById('emailInput'));
}

function activateEmail() {
  btnEmail.classList.add('active');
  btnEmail.setAttribute('aria-pressed', 'true');
  btnWa.classList.remove('active');
  btnWa.setAttribute('aria-pressed', 'false');
  fieldEm.classList.remove('hidden');
  fieldWa.classList.add('hidden');
  clearError(document.getElementById('phoneNumber'));
}

if (btnWa)    btnWa.addEventListener('click', activateWhatsapp);
if (btnEmail) btnEmail.addEventListener('click', activateEmail);

// ── VALIDATION HELPERS ──
function setError(input, msgId) {
  let el = input;
  while (el && !el.classList.contains('form-group')) el = el.parentElement;
  if (el) el.classList.add('has-error');
  const msg = document.getElementById(msgId);
  if (msg) msg.style.display = 'block';
}

function clearError(input) {
  if (!input) return;
  let el = input;
  while (el && !el.classList.contains('form-group')) el = el.parentElement;
  if (el) el.classList.remove('has-error');
}

function clearErrorById(id) {
  const el = document.getElementById(id);
  if (!el) return;
  let parent = el;
  while (parent && !parent.classList.contains('form-group')) parent = parent.parentElement;
  if (parent) parent.classList.remove('has-error');
  el.style.display = 'none';
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());
}

function isValidPhone(val) {
  return /^\d{6,15}$/.test(val.replace(/[\s\-().]/g, ''));
}

// ── Real-time clear on input ──
function clearSubmitError() {
  const submitErr = document.getElementById('submitError');
  if (submitErr) submitErr.classList.remove('visible');
}

['contactNombre', 'phoneNumber', 'emailInput', 'contactInteres'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => { clearError(el); clearSubmitError(); });
});
document.getElementById('contactInteres')?.addEventListener('change', () => {
  clearErrorById('errorInteres');
  clearSubmitError();
});

// ── TOAST ──
function showToast() {
  const toast = document.getElementById('msgToast');
  if (!toast) return;
  toast.classList.add('show');

  // Close on click anywhere
  function dismissToast(e) {
    toast.classList.remove('show');
    document.removeEventListener('click', dismissToast);
  }
  // Delay adding listener so the submit click doesn't immediately dismiss it
  setTimeout(() => document.addEventListener('click', dismissToast), 50);
}

// ── FORM RESET ──
function resetContactForm() {
  const f = document.getElementById('contactoForm');
  if (!f) return;

  // Text / textarea / email / tel
  f.querySelectorAll('input, textarea').forEach(el => { el.value = ''; });

  // Selects back to first option (placeholder)
  f.querySelectorAll('select').forEach(sel => { sel.selectedIndex = 0; });

  // Clear all error states
  f.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
  f.querySelectorAll('.form-error').forEach(e => { e.style.display = 'none'; });
  const submitErr = document.getElementById('submitError');
  if (submitErr) submitErr.classList.remove('visible');

  // Reset toggle back to WhatsApp (the default)
  activateWhatsapp();
}

// ── FORM SUBMIT ──
const form = document.getElementById('contactoForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    ['errorNombre', 'errorWhatsapp', 'errorEmail', 'errorInteres'].forEach(clearErrorById);

    // 1. Nombre
    const nombre = document.getElementById('contactNombre');
    if (!nombre.value.trim()) {
      setError(nombre, 'errorNombre');
      valid = false;
    }

    // 2. Contact method
    const isWa = btnWa.classList.contains('active');
    if (isWa) {
      const phone = document.getElementById('phoneNumber');
      if (!isValidPhone(phone.value)) {
        const grp = document.getElementById('fieldWhatsapp').closest('.form-group');
        if (grp) grp.classList.add('has-error');
        const err = document.getElementById('errorWhatsapp');
        if (err) err.style.display = 'block';
        valid = false;
      }
    } else {
      const email = document.getElementById('emailInput');
      if (!isValidEmail(email.value)) {
        const grp = document.getElementById('fieldEmail').closest('.form-group');
        if (grp) grp.classList.add('has-error');
        const err = document.getElementById('errorEmail');
        if (err) err.style.display = 'block';
        valid = false;
      }
    }

    // 3. ¿Qué te interesa?
    const interes = document.getElementById('contactInteres');
    if (!interes.value) {
      const grp = interes.closest('.form-group');
      if (grp) grp.classList.add('has-error');
      const err = document.getElementById('errorInteres');
      if (err) err.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      // Show summary error below the button
      const submitErr = document.getElementById('submitError');
      if (submitErr) {
        submitErr.textContent = 'Por favor completa los campos obligatorios marcados en rojo.';
        submitErr.classList.add('visible');
      }
      const firstErr = form.querySelector('.form-group.has-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Hide submit error if all good
    const submitErr = document.getElementById('submitError');
    if (submitErr) submitErr.classList.remove('visible');

    // ── Build WhatsApp message ──
    const phoneCodeRaw  = document.getElementById('phoneCode')?.value || '';
    const phoneCode     = phoneCodeRaw.split('||')[0];
    const phoneNum      = document.getElementById('phoneNumber')?.value || '';
    const emailVal      = document.getElementById('emailInput')?.value || '';
    const nivel         = document.getElementById('contactNivel')?.value || '';
    const mensaje       = document.getElementById('contactMensaje')?.value || '';
    const nombreVal     = nombre.value.trim();
    const interesText   = interes.options[interes.selectedIndex].text;

    if (isWa) {
      // ── WhatsApp path ──
      const waText = encodeURIComponent(
        `Hola Ambar yo soy ${nombreVal}. Me gustaria informaciones por favor.\n` +
        `Interés: ${interesText}` +
        (nivel ? ` | Nivel: ${nivel}` : '') +
        (mensaje.trim() ? ` | Mensaje: ${mensaje.trim()}` : '')
      );

      window.open(`https://wa.me/14378919298?text=${waText}`, '_blank');
      showToast();
      resetContactForm();
    } else {
      // ── Email path ──
      const submitBtn = form.querySelector('.form-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      emailjs.send('ambarlingua_gmail_js', 'template_bxrfnou', {
        nombre:  nombreVal,
        email:   emailVal,
        interes: interesText,
        nivel:   nivel || '—',
        mensaje: mensaje.trim() || '—'
      })
      .then(() => {
        showToast();
        resetContactForm();
      })
      .catch((err) => {
        console.error('EmailJS error status:', err?.status);
        console.error('EmailJS error text:', err?.text);
        console.error('EmailJS full error:', JSON.stringify(err));
        const submitErr = document.getElementById('submitError');
        if (submitErr) {
          submitErr.textContent = `Error: ${err?.text || err?.status || 'desconocido'}. Intenta de nuevo.`;
          submitErr.classList.add('visible');
        }
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar y empezar →';
      });
    }
  });
}

// ── INIT ──
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildPhoneSelect);
} else {
  buildPhoneSelect();
}
// ── TESTIMONIOS CAROUSEL ──
(function () {
  const track    = document.getElementById('tcTrack');
  const dotsWrap = document.getElementById('tcDots');
  const btnPrev  = document.getElementById('tcPrev');
  const btnNext  = document.getElementById('tcNext');
  if (!track || !dotsWrap || !btnPrev || !btnNext) return;

  const slides = Array.from(track.querySelectorAll('.tc-slide'));
  const total  = slides.length;

  function visibleCount() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  // Max index before empty slots appear (circular wraps around this)
  function maxIndex() {
    return total - visibleCount();
  }

  let current = 0;

  // ── Build dots (one per "page", i.e. per starting position) ──
  // For simplicity keep one dot per card — active dot = current card
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'tc-dot';
    dot.setAttribute('aria-label', 'Testimonio ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.querySelectorAll('.tc-dot'));

  // ── Render ──
  function render(animated) {
    const cardW  = slides[0].offsetWidth;
    const gap    = 16;
    const offset = current * (cardW + gap);

    track.style.transition = animated === false
      ? 'none'
      : 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = 'translateX(-' + offset + 'px)';

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  // ── Navigate — wraps at maxIndex so no empty slots ever show ──
  function step(dir) {
    const max = maxIndex();
    if (dir > 0) {
      // Going right: if we're at the last full group, wrap to 0
      current = current >= max ? 0 : current + 1;
    } else {
      // Going left: if we're at 0, wrap to max
      current = current <= 0 ? max : current - 1;
    }
    render(true);
  }

  function goTo(idx) {
    const max = maxIndex();
    current = Math.min(Math.max(0, idx), max);
    render(true);
  }

  btnPrev.addEventListener('click', () => step(-1));
  btnNext.addEventListener('click', () => step(+1));

  // ── Touch/swipe ──
  let touchStartX = null;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });

  // ── Keyboard ──
  document.addEventListener('keydown', e => {
    const section = document.getElementById('testimonios');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(+1);
  });

  // ── Resize — recalculate without animation ──
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Clamp current to new maxIndex after resize
      current = Math.min(current, maxIndex());
      render(false);
    }, 120);
  });

  // ── Init ──
  render(false);
})();
