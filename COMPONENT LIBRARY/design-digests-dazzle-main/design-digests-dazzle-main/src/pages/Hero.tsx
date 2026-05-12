import { Link, NavLink } from "react-router-dom";

type TypeRow = {
  label: string;
  text: string;
  font: string;
  size: string;
  weight: string;
  color: string;
};

type HeroSpec = {
  id: number;
  title: string;
  brand: string;
  image: string;
  rows: TypeRow[];
};

const heroSpecs: HeroSpec[] = [
  {
    id: 1,
    title: "Hero 01",
    brand: "La Pelu — Style & Nail Studio",
    image: "/images/hero/reference/hero-1.png",
    rows: [
      { label: "Top bar", text: "SÍGUENOS EN INSTAGRAM", font: "Poppins", size: "13px", weight: "500", color: "#FFFFFF" },
      { label: "Nav links", text: "INICIO / SERVICIOS / NUESTRO EQUIPO / GIFT CARDS / CONTACTO", font: "Poppins", size: "14px", weight: "600", color: "#FFFFFF" },
      { label: "CTA button", text: "RESERVÁ TU TURNO", font: "Poppins", size: "14px", weight: "700", color: "#FFFFFF / bg #111111" },
      { label: "Rating", text: "4.9 | 78 reviews", font: "Poppins", size: "16px", weight: "500", color: "#FFFFFF" },
      { label: "Headline", text: "TU SALÓN DE BELLEZA INTEGRAL EN BELGRANO", font: "Poppins", size: "46px", weight: "700", color: "#FFFFFF" },
      { label: "Subheading", text: "TU EQUIPO DE BELLEZA EN BELGRANO, CON 4.9 DE CALIFICACIÓN Y CASI 78 RESEÑAS", font: "Poppins", size: "16px", weight: "500", color: "#FFFFFF" },
      { label: "WhatsApp CTA", text: "Agendá tu turno por WhatsApp", font: "Poppins", size: "18px", weight: "700", color: "#FFFFFF / bg #111111" },
      { label: "Footnote", text: "RESPONDEMOS EN MINUTOS. 15% DE DESCUENTO EN TU PRIMERA VISITA.", font: "Poppins", size: "12px", weight: "500", color: "#FFFFFF" },
    ],
  },
  {
    id: 2,
    title: "Hero 02",
    brand: "Cerix",
    image: "/images/hero/reference/hero-2.png",
    rows: [
      { label: "Trust strip", text: "REGISTRERET HOS STYRELSEN FOR PATIENTSIKKERHED  /  150.000+ BEHANDLINGER UDFØRT", font: "Futura PT", size: "13px", weight: "500", color: "#222222" },
      { label: "Phone", text: "+45 61 61 61 17", font: "Futura PT", size: "15px", weight: "500", color: "#222222" },
      { label: "Review chip", text: "Fremragende  ★★★★★  Google", font: "Futura PT", size: "14px", weight: "500", color: "#222222" },
      { label: "Nav", text: "Behandlinger / Priser / Medlemsklub", font: "Futura PT", size: "16px", weight: "500", color: "#222222" },
      { label: "Logo wordmark", text: "cerix", font: "DM Serif Display (italic-style serif)", size: "40px", weight: "400", color: "#1A1A1A" },
      { label: "Book button", text: "Book →", font: "Futura PT", size: "16px", weight: "500", color: "#FFFFFF / bg #111111" },
      { label: "Headline", text: "ELEVATE YOUR BEAUTY", font: "Futura PT Medium", size: "41px", weight: "500", color: "#222222", },
      { label: "Subheading", text: "Med effektive, kompromisløse og dokumenterede behandlinger af højeste standard.", font: "Futura PT Book", size: "20px", weight: "400", color: "#222222" },
      { label: "CTA button", text: "Se behandlinger", font: "Futura PT", size: "16px", weight: "500", color: "#FFFFFF / bg #111111" },
    ],
  },
  {
    id: 3,
    title: "Hero 03",
    brand: "Nordiska Kliniken",
    image: "/images/hero/reference/hero-3.png",
    rows: [
      { label: "Logo wordmark", text: "NORDISKA KLINIKEN", font: "Cormorant Garamond", size: "60px", weight: "400", color: "#000000" },
      { label: "Headline", text: "Bröstförstoring", font: "Inter", size: "34.7px", weight: "300", color: "#000000" },
      { label: "Subheading", text: "Bröstförstoring i Stockholm och Göteborg med unik innovation och exceptionella resultat", font: "Inter", size: "18px", weight: "300", color: "#000000" },
      { label: "CTA button", text: "Boka konsultation", font: "Inter", size: "16px", weight: "400", color: "#000000 / bg #FFFFFF" },
    ],
  },
  {
    id: 4,
    title: "Hero 04",
    brand: "Beautyculture by Janine — Uppsala",
    image: "/images/hero/reference/hero-4.png",
    rows: [
      { label: "Nav link", text: "Boka behandling", font: "Inter", size: "15px", weight: "500", color: "#FFFFFF" },
      { label: "Menu label", text: "Meny", font: "Inter", size: "15px", weight: "500", color: "#FFFFFF" },
      { label: "Eyebrow", text: "Skönhetssalong Uppsala", font: "Inter", size: "14px", weight: "600", color: "#FFFFFF" },
      { label: "Headline", text: "Hitta ditt bästa jag med oss.", font: "DM Serif Display", size: "75px", weight: "400", color: "#FFFFFF" },
      { label: "Subheading", text: "Beautyculture by Janine är en skönhetssalong i Uppsala och experter inom medicinska och estetiska behandlingar.", font: "Inter", size: "16px", weight: "400", color: "#FFFFFF" },
      { label: "CTA button", text: "Boka tid", font: "Inter", size: "16px", weight: "600", color: "#FFFFFF / bg #C8536A" },
    ],
  },
  {
    id: 5,
    title: "Hero 05",
    brand: "Drybar",
    image: "/images/hero/reference/hero-5.png",
    rows: [
      { label: "Promo bar", text: "EXCLUSIVE: FREE GIFT WITH DETOX JUMBO PURCHASE  Shop Now", font: "Korolev", size: "14px", weight: "600", color: "#000000 / bg #59C5C7" },
      { label: "Nav", text: "Hair Products / Hair Tools / Benefits / Gifts & Sets / Rewards", font: "Korolev", size: "16px", weight: "700", color: "#282728" },
      { label: "Book button", text: "Book", font: "Korolev", size: "16px", weight: "600", color: "#282728 / border #282728" },
      { label: "Headline", text: "THE REVIEWS ARE IN", font: "Korolev", size: "81.1px", weight: "900", color: "#282728" },
      { label: "Shop button", text: "SHOP NOW", font: "Korolev", size: "14px", weight: "700", color: "#FFFFFF / bg #282728" },
      { label: "Review quote", text: "\"The best dry shampoo out there!\"", font: "Korolev", size: "26px", weight: "500", color: "#282728" },
      { label: "Review attribution", text: "– Kelly", font: "Korolev", size: "22px", weight: "700", color: "#282728" },
      { label: "Stars", text: "★★★★★", font: "—", size: "24px", weight: "—", color: "#59C5C7" },
    ],
  },
  {
    id: 6,
    title: "Hero 06",
    brand: "Green Helping (Psychologist Center)",
    image: "/images/hero/reference/hero-6.png",
    rows: [
      { label: "Headline", text: "We're Helping You Start A New Life", font: "Castoro", size: "67px", weight: "400", color: "#FFFFFF" },
      { label: "Body", text: "A psychologist center, often known as a psychology or mental health center, is a facility or organization where licensed psychologists and mental health.", font: "Lexend", size: "16px", weight: "400", color: "#FFFFFF" },
      { label: "Primary button", text: "Get Start", font: "Lexend", size: "15px", weight: "500", color: "#0B2A23 / bg #FFFFFF" },
      { label: "Secondary link", text: "About Us →", font: "Lexend", size: "15px", weight: "500", color: "#FFFFFF" },
    ],
  },
  {
    id: 7,
    title: "Hero 07",
    brand: "Virginia Center for Psychological Services",
    image: "/images/hero/reference/hero-7.png",
    rows: [
      { label: "Logo wordmark", text: "VIRGINIA CENTER for Psychological Services", font: "Cormorant Garamond", size: "30px", weight: "500", color: "#A56A45" },
      { label: "Top links", text: "CONTACT US  |  REQUEST AN APPOINTMENT", font: "Inter", size: "14px", weight: "500", color: "#3A2A1F" },
      { label: "Headline", text: "Helping You Navigate Life's Challenges with Compassionate Support", font: "Milyuna", size: "84.5px", weight: "400", color: "#FFFCF5" },
      { label: "Tagline (italic)", text: "Therapy & Psychiatry  |  Ashburn ~ Reston ~ Telehealth", font: "Milyuna Italic", size: "32px", weight: "400", color: "#FFFCF5" },
      { label: "Body", text: "Welcome to the Virginia Center for Psychological Services (VCPS), where compassionate care meets evidence-based treatment…", font: "Inter", size: "15px", weight: "400", color: "#FFFCF5" },
      { label: "CTA button", text: "START YOUR HEALING TODAY!", font: "Inter", size: "14px", weight: "600", color: "#FFFFFF / bg #C77A4A" },
    ],
  },
  {
    id: 8,
    title: "Hero 08",
    brand: "Psicólogos Princesa",
    image: "/images/hero/reference/hero-8.png",
    rows: [
      { label: "Logo wordmark", text: "Psicólogos Princesa", font: "Source Serif 4", size: "22px", weight: "600", color: "#000000" },
      { label: "Top nav", text: "Quiénes Somos / El Blog / Entre Divanes: El Podcast", font: "Source Serif 4", size: "16px", weight: "400", color: "#000000" },
      { label: "Pill — Escuela", text: "Escuela de Psicología", font: "Source Serif 4", size: "16px", weight: "500", color: "#000000 / bg #C8E6E1" },
      { label: "Pill — Consultas", text: "Consultas", font: "Source Serif 4", size: "16px", weight: "500", color: "#000000 / bg #D7E89A" },
      { label: "Pill — Compromiso", text: "Compromiso Social", font: "Source Serif 4", size: "16px", weight: "500", color: "#FFFFFF / bg #04283A" },
      { label: "Pill — Estamos", text: "Estamos AQUÍ", font: "Source Serif 4", size: "16px", weight: "500", color: "#000000 / border #000000" },
    ],
  },
  {
    id: 9,
    title: "Hero 09",
    brand: "Shift Collab",
    image: "/images/hero/reference/hero-9.png",
    rows: [
      { label: "Top bar", text: "HELLO@SHIFTCOLLAB.COM  /  TALK TO A REAL PERSON  /  CURRENT CLIENT? BOOK NOW", font: "Inter", size: "13px", weight: "500", color: "#16434A / bg #F1EEE8" },
      { label: "Logo wordmark", text: "SHIFT", font: "Cormorant Garamond", size: "36px", weight: "500", color: "#FFFFFF / bg #16434A" },
      { label: "Nav", text: "OUR THERAPISTS / SESSION TYPES / THE ADHD CLINIC / ABOUT / REFER", font: "Inter", size: "13px", weight: "600", color: "#FFFFFF" },
      { label: "Get Started button", text: "GET STARTED", font: "Inter", size: "13px", weight: "700", color: "#16434A / bg #F0A878" },
      { label: "Headline (regular)", text: "Therapy", font: "Cormorant Garamond", size: "64px", weight: "400", color: "#16434A" },
      { label: "Headline (italic accent)", text: "so good,", font: "Cormorant Garamond Italic", size: "64px", weight: "300", color: "#839794" },
      { label: "Headline (continued)", text: "you'll actually want to talk.", font: "Cormorant Garamond", size: "64px", weight: "400", color: "#16434A" },
      { label: "Subheading", text: "WE HELP CANADIANS BUILD THE LIVES THEY WANT — ONE SESSION AT A TIME", font: "Inter", size: "15px", weight: "600", color: "#16434A" },
      { label: "CTA button", text: "START YOUR THERAPY JOURNEY", font: "Inter", size: "14px", weight: "700", color: "#16434A / bg #F0A878" },
      { label: "Caption", text: "Valia Tseliou, Shift Collab Therapist", font: "Cormorant Garamond Italic", size: "14px", weight: "400", color: "#16434A" },
    ],
  },
  {
    id: 10,
    title: "Hero 10",
    brand: "Pasadena Villa",
    image: "/images/hero/reference/hero-10.png",
    rows: [
      { label: "Top bar links", text: "Verify Your Insurance / Admissions / Resources", font: "Inter", size: "13px", weight: "500", color: "#FFFFFF / bg #0B1F4A" },
      { label: "Logo wordmark", text: "Pasadena Villa", font: "Allura (script)", size: "32px", weight: "400", color: "#0B1F4A" },
      { label: "Logo subtitle", text: "Psychiatric Treatment Network", font: "Inter", size: "11px", weight: "500", color: "#0B1F4A" },
      { label: "Nav", text: "Locations / Levels of Care / Treatment / About Us / Outcomes", font: "Inter", size: "14px", weight: "600", color: "#0B1F4A" },
      { label: "CTA button", text: "CONTACT A FACILITY", font: "Inter", size: "13px", weight: "700", color: "#FFFFFF / bg #2A4A8B" },
      { label: "Headline", text: "Evidence-Based Mental Health Treatment for Adults", font: "Inter", size: "41.7px", weight: "600", color: "#FFFFFF" },
      { label: "Subheading", text: "A distinctive approach to residential + outpatient care", font: "Inter", size: "22px", weight: "400", color: "#FFFFFF" },
      { label: "Body", text: "Pasadena Villa provides individualized, evidence-based treatment for adults with complex mental health conditions…", font: "Inter", size: "16px", weight: "400", color: "#FFFFFF" },
      { label: "Section labels", text: "WHAT WE DO / OUR LOCATIONS", font: "Inter", size: "14px", weight: "700", color: "#FFFFFF (with #B5D17A accent bar)" },
    ],
  },
];

type HvacRow = { label: string; font: string; size: string; weight: string; color: string };
type HvacSpec = { id: number; title: string; image: string; rows: HvacRow[] };

const hvacSpecs: HvacSpec[] = [
  {
    id: 1,
    title: "HVAC 01",
    image: "/images/hero/hvac/hvac-1.png",
    rows: [
      { label: "Eyebrow",    font: "Libre Baskerville", size: "30px", weight: "400", color: "#DC2626" },
      { label: "Headline",   font: "Inter",             size: "48px", weight: "800", color: "#FFFFFF" },
      { label: "Subheading", font: "Libre Baskerville", size: "16px", weight: "400", color: "#F4F4F5" },
      { label: "Primary CTA",font: "Inter",             size: "16px", weight: "400", color: "#FFFFFF / bg #DC2626" },
      { label: "Phone CTA",  font: "Inter",             size: "16px", weight: "400", color: "#FFFFFF / bg #0369A1" },
      { label: "Trust strip",font: "Inter",             size: "16px", weight: "300", color: "#FFFFFF" },
    ],
  },
  {
    id: 2,
    title: "HVAC 02",
    image: "/images/hero/hvac/hvac-2.png",
    rows: [
      { label: "Top bar",     font: "Inter", size: "13px", weight: "500", color: "#FFFFFF / bg #0F172A" },
      { label: "Nav",         font: "Inter", size: "14px", weight: "600", color: "#0F172A" },
      { label: "Headline",    font: "Inter", size: "36px", weight: "800", color: "#FFFFFF" },
      { label: "Subheading",  font: "Inter", size: "15px", weight: "400", color: "#E5E7EB" },
      { label: "Primary CTA", font: "Inter", size: "14px", weight: "700", color: "#FFFFFF / bg #DC2626" },
      { label: "Form card",   font: "Inter", size: "14px", weight: "500", color: "#0F172A / bg #16A34A" },
      { label: "Form CTA",    font: "Inter", size: "14px", weight: "700", color: "#0F172A / bg #FACC15" },
    ],
  },
  {
    id: 3,
    title: "HVAC 03",
    image: "/images/hero/hvac/hvac-3.png",
    rows: [
      { label: "Eyebrow",     font: "Inter",             size: "12px", weight: "700", color: "#7C3AED" },
      { label: "Headline",    font: "DM Serif Display",  size: "32px", weight: "400", color: "#0F172A" },
      { label: "Body",        font: "Inter",             size: "14px", weight: "400", color: "#475569" },
      { label: "Primary CTA", font: "Inter",             size: "14px", weight: "600", color: "#FFFFFF / bg #7C3AED" },
      { label: "Secondary",   font: "Inter",             size: "14px", weight: "600", color: "#7C3AED / border #7C3AED" },
    ],
  },
  {
    id: 4,
    title: "HVAC 04",
    image: "/images/hero/hvac/hvac-4.png",
    rows: [
      { label: "Nav",         font: "Inter", size: "14px", weight: "600", color: "#0F172A" },
      { label: "Headline",    font: "Inter", size: "34px", weight: "700", color: "#1E40AF" },
      { label: "Subheading",  font: "Inter", size: "14px", weight: "400", color: "#475569" },
      { label: "Primary CTA", font: "Inter", size: "14px", weight: "600", color: "#FFFFFF / bg #2563EB" },
      { label: "Secondary",   font: "Inter", size: "14px", weight: "600", color: "#2563EB / border #2563EB" },
    ],
  },
  {
    id: 5,
    title: "HVAC 05",
    image: "/images/hero/hvac/hvac-5.png",
    rows: [
      { label: "Logo wordmark", font: "Playfair Display", size: "28px", weight: "700", color: "#B91C1C" },
      { label: "Top bar",       font: "Inter",            size: "12px", weight: "500", color: "#FFFFFF / bg #1F2937" },
      { label: "Nav",           font: "Inter",            size: "13px", weight: "700", color: "#FFFFFF / bg #B91C1C" },
    ],
  },
  {
    id: 6,
    title: "HVAC 06",
    image: "/images/hero/hvac/hvac-6.png",
    rows: [
      { label: "Eyebrow",     font: "Inter",            size: "12px", weight: "700", color: "#DC2626" },
      { label: "Headline",    font: "DM Serif Display", size: "30px", weight: "400", color: "#0F172A" },
      { label: "Body",        font: "Inter",            size: "13px", weight: "400", color: "#475569" },
      { label: "Primary CTA", font: "Inter",            size: "13px", weight: "600", color: "#FFFFFF / bg #DC2626" },
    ],
  },
  {
    id: 7,
    title: "HVAC 07",
    image: "/images/hero/hvac/hvac-7.png",
    rows: [
      { label: "Top bar",     font: "Inter", size: "13px", weight: "500", color: "#FFFFFF / bg #B91C1C" },
      { label: "Nav",         font: "Inter", size: "14px", weight: "600", color: "#FFFFFF / bg #1F2937" },
      { label: "Headline",    font: "Inter", size: "34px", weight: "700", color: "#FFFFFF" },
      { label: "Subheading",  font: "Inter", size: "14px", weight: "400", color: "#E5E7EB" },
    ],
  },
  {
    id: 8,
    title: "HVAC 08",
    image: "/images/hero/hvac/hvac-8.png",
    rows: [
      { label: "Top bar",     font: "Inter", size: "13px", weight: "500", color: "#FFFFFF / bg #DC2626" },
      { label: "Nav",         font: "Inter", size: "14px", weight: "600", color: "#0F172A" },
      { label: "Eyebrow",     font: "Inter", size: "12px", weight: "700", color: "#FACC15" },
      { label: "Headline",    font: "Inter", size: "40px", weight: "800", color: "#FFFFFF" },
      { label: "Body",        font: "Inter", size: "14px", weight: "400", color: "#E5E7EB" },
      { label: "Primary CTA", font: "Inter", size: "14px", weight: "700", color: "#0F172A / bg #16A34A" },
    ],
  },
  {
    id: 9,
    title: "HVAC 09",
    image: "/images/hero/hvac/hvac-9.png",
    rows: [
      { label: "Top bar",     font: "Inter", size: "13px", weight: "500", color: "#FFFFFF / bg #1F2937" },
      { label: "Headline",    font: "Inter", size: "30px", weight: "700", color: "#FFFFFF" },
      { label: "Subheading",  font: "Inter", size: "14px", weight: "400", color: "#E5E7EB" },
      { label: "Primary CTA", font: "Inter", size: "13px", weight: "700", color: "#FFFFFF / bg #16A34A" },
    ],
  },
  {
    id: 10,
    title: "HVAC 10",
    image: "/images/hero/hvac/hvac-10.png",
    rows: [
      { label: "Top bar",     font: "Inter",            size: "12px", weight: "500", color: "#1E3A8A / bg #FACC15" },
      { label: "Nav",         font: "Inter",            size: "13px", weight: "600", color: "#FFFFFF / bg #1E3A8A" },
      { label: "Headline",    font: "Playfair Display", size: "32px", weight: "700", color: "#FFFFFF" },
      { label: "Body",        font: "Inter",            size: "14px", weight: "400", color: "#E5E7EB" },
      { label: "Primary CTA", font: "Inter",            size: "13px", weight: "700", color: "#1E3A8A / bg #FACC15" },
    ],
  },
];

const Sidebar = () => (
  <aside className="w-64 border-r border-neutral-800 min-h-[calc(100vh-65px)] p-6">
    <p className="mb-4 font-['Outfit'] text-xs uppercase tracking-wider text-neutral-500">Categories</p>
    <ul className="space-y-2">
      {[
        { to: "/components/service-areas", label: "Service Areas" },
        { to: "/components/faq", label: "FAQ" },
        { to: "/components/cta", label: "CTA" },
        { to: "/components/hero", label: "Hero" },
      ].map((l) => (
        <li key={l.to}>
          <NavLink
            to={l.to}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm font-['Outfit'] transition-colors ${
                isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              }`
            }
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </aside>
);

const Hero = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="flex items-center gap-6 border-b border-neutral-800 px-10 py-6">
        <Link to="/components" className="font-['Outfit'] text-sm text-neutral-400 hover:text-white">
          ← Components
        </Link>
        <h1 className="font-['Outfit'] text-sm text-neutral-400">Hero</h1>
      </nav>

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 p-10">
          <div className="space-y-12">
            <section className="space-y-3">
              <div className="flex items-baseline justify-between">
                <p className="font-['Outfit'] text-xs uppercase tracking-[0.24em] text-neutral-500">Painting 01</p>
                <p className="font-['Outfit'] text-xs text-neutral-500">Fresh Paint Painting</p>
              </div>
              <div className="overflow-x-auto rounded-md border border-neutral-800 bg-white">
                <img src="/images/hero/hero-extra-1.png" alt="Painting hero reference" className="block h-auto max-w-none" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                <table className="w-full text-left font-['Outfit'] text-sm">
                  <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-500">
                    <tr>
                      <th className="px-4 py-3">Element</th>
                      <th className="px-4 py-3">Font</th>
                      <th className="px-4 py-3">Size</th>
                      <th className="px-4 py-3">Weight</th>
                      <th className="px-4 py-3">Color</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 text-neutral-200">
                    {[
                      { label: "Logo wordmark", font: "Brush Script (script)", size: "32px", weight: "400", color: "#FFFFFF + #E11B22" },
                      { label: "Nav links", font: "Montserrat", size: "16px", weight: "800", color: "#FFFFFF" },
                      { label: "CTA button (Get Free Quote)", font: "Montserrat", size: "16px", weight: "800", color: "#FFFFFF / bg #E11B22" },
                      { label: "Phone button", font: "Montserrat", size: "16px", weight: "800", color: "#E11B22 / bg #FFFFFF" },
                      { label: "Headline", font: "Montserrat", size: "64px", weight: "900", color: "#FFFFFF" },
                      { label: "Body copy", font: "Montserrat", size: "18px", weight: "500", color: "#FFFFFF" },
                      { label: "Financing button", font: "Montserrat", size: "20px", weight: "800", color: "#FFFFFF / bg #E11B22" },
                      { label: "Form heading (GET A FREE QUOTE)", font: "Montserrat", size: "32px", weight: "900", color: "#FFFFFF / bg #1E1E6F" },
                      { label: "Field labels", font: "Montserrat", size: "14px", weight: "700", color: "#FFFFFF" },
                      { label: "Field placeholder", font: "Montserrat", size: "14px", weight: "400", color: "#9CA3AF" },
                      { label: "Consent text", font: "Montserrat", size: "13px", weight: "500", color: "#FFFFFF" },
                      { label: "Consent link (terms)", font: "Montserrat", size: "13px", weight: "700", color: "#E11B22" },
                      { label: "SEND button", font: "Montserrat", size: "20px", weight: "900", color: "#FFFFFF / bg #E11B22" },
                    ].map((r, i) => (
                      <tr key={i} className="align-top">
                        <td className="px-4 py-3 text-neutral-400">{r.label}</td>
                        <td className="px-4 py-3">{r.font}</td>
                        <td className="px-4 py-3">{r.size}</td>
                        <td className="px-4 py-3">{r.weight}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.color}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-3">
              <div className="flex items-baseline justify-between">
                <p className="font-['Outfit'] text-xs uppercase tracking-[0.24em] text-neutral-500">Painting 02</p>
                <p className="font-['Outfit'] text-xs text-neutral-500">Homecure Plumbers</p>
              </div>
              <div className="overflow-x-auto rounded-md border border-neutral-800 bg-white">
                <img src="/images/hero/hero-extra-2.png" alt="Homecure hero reference" className="block h-auto max-w-none" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                <table className="w-full text-left font-['Outfit'] text-sm">
                  <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-500">
                    <tr>
                      <th className="px-4 py-3">Element</th>
                      <th className="px-4 py-3">Font</th>
                      <th className="px-4 py-3">Size</th>
                      <th className="px-4 py-3">Weight</th>
                      <th className="px-4 py-3">Color</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 text-neutral-200">
                    {[
                      { label: "Nav links (Plumbing, Boilers...)", font: "Poppins", size: "17.2px", weight: "400", color: "#04123B" },
                      { label: "Header CTA label (Call us on:)", font: "Poppins", size: "14.4px", weight: "400", color: "#FFFFFF / bg #CE0000" },
                      { label: "Header phone number", font: "Poppins", size: "25.6px", weight: "400", color: "#FFFFFF / bg #CE0000" },
                      { label: "Trust strip items", font: "Poppins", size: "14.4px", weight: "400", color: "#FFFFFF / bg #04123B" },
                      { label: "Rating text", font: "Poppins", size: "19.2px", weight: "500", color: "#04123B" },
                      { label: "Headline", font: "Poppins", size: "44.8px", weight: "700", color: "#04123B" },
                      { label: "Body copy", font: "Poppins", size: "19.2px", weight: "400", color: "#000000" },
                      { label: "Primary button (Request call back)", font: "Poppins", size: "16px", weight: "400", color: "#FFFFFF / bg #CE0000" },
                      { label: "Secondary button (phone)", font: "Poppins", size: "16px", weight: "400", color: "#CE0000 / border #CE0000" },
                      { label: "Video pill (About Homecure)", font: "Poppins", size: "17.5px", weight: "500", color: "#FFFFFF / bg #CE0000" },
                      { label: "Video pill subtext (Watch video)", font: "Poppins", size: "17.5px", weight: "300", color: "#FFFFFF / bg #CE0000" },
                      { label: "We are featured in", font: "Poppins", size: "19.2px", weight: "400", color: "#000000" },
                      { label: "Background", font: "—", size: "—", weight: "—", color: "#EEEFEF" },
                      { label: "Star color", font: "—", size: "—", weight: "—", color: "#FFCC15 on #061B5D" },
                    ].map((r, i) => (
                      <tr key={i} className="align-top">
                        <td className="px-4 py-3 text-neutral-400">{r.label}</td>
                        <td className="px-4 py-3">{r.font}</td>
                        <td className="px-4 py-3">{r.size}</td>
                        <td className="px-4 py-3">{r.weight}</td>
                        <td className="px-4 py-3 font-mono text-xs">{r.color}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            {heroSpecs.map((hero) => (
              <section key={hero.id} className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-['Outfit'] text-xs uppercase tracking-[0.24em] text-neutral-500">{hero.title}</p>
                  <p className="font-['Outfit'] text-xs text-neutral-500">{hero.brand}</p>
                </div>
                <div className="overflow-x-auto rounded-md border border-neutral-800 bg-white">
                  <img
                    src={hero.image}
                    alt={`${hero.title} reference`}
                    className="block h-auto max-w-none"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                  <table className="w-full text-left font-['Outfit'] text-sm">
                    <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-500">
                      <tr>
                        <th className="px-4 py-3">Element</th>
                        <th className="px-4 py-3">Text</th>
                        <th className="px-4 py-3">Font</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Weight</th>
                        <th className="px-4 py-3">Color</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800 text-neutral-200">
                      {hero.rows.map((r, i) => (
                        <tr key={i} className="align-top">
                          <td className="px-4 py-3 text-neutral-400">{r.label}</td>
                          <td className="px-4 py-3">{r.text}</td>
                          <td className="px-4 py-3">{r.font}</td>
                          <td className="px-4 py-3">{r.size}</td>
                          <td className="px-4 py-3">{r.weight}</td>
                          <td className="px-4 py-3 font-mono text-xs">{r.color}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}

            <div className="pt-8">
              <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-white">HVAC</h2>
            </div>

            {hvacSpecs.map((hero) => (
              <section key={`hvac-${hero.id}`} className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <p className="font-['Outfit'] text-xs uppercase tracking-[0.24em] text-neutral-500">{hero.title}</p>
                </div>
                <div className="overflow-x-auto rounded-md border border-neutral-800 bg-white">
                  <img
                    src={hero.image}
                    alt={`${hero.title} reference`}
                    className="block h-auto max-w-none"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                  <table className="w-full text-left font-['Outfit'] text-sm">
                    <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-neutral-500">
                      <tr>
                        <th className="px-4 py-3">Element</th>
                        <th className="px-4 py-3">Font</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Weight</th>
                        <th className="px-4 py-3">Color</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800 text-neutral-200">
                      {hero.rows.map((r, i) => (
                        <tr key={i} className="align-top">
                          <td className="px-4 py-3 text-neutral-400">{r.label}</td>
                          <td className="px-4 py-3">{r.font}</td>
                          <td className="px-4 py-3">{r.size}</td>
                          <td className="px-4 py-3">{r.weight}</td>
                          <td className="px-4 py-3 font-mono text-xs">{r.color}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
