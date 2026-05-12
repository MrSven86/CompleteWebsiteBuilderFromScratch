import { Link, NavLink } from "react-router-dom";

// === Icon components matching the uploaded SVGs ===
const PlusCircleRed = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="#AE312D"/>
    <path d="M31 23H25V17a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2Z" fill="#F1F1F1"/>
  </svg>
);
const PlusCircleGreen = ({ open = false }: { open?: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill={open ? "rgba(255,255,255,0.25)" : "#189B49"}/>
    {open ? (
      <path d="M16 16l16 16M32 16L16 32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    ) : (
      <path d="M31 23H25V17a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2Z" fill="#fff"/>
    )}
  </svg>
);
const MinusBar = ({ color = "#000" }: { color?: string }) => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
    <rect y="6.1" width="13.13" height="2.81" rx="0.94" fill={color}/>
  </svg>
);
const PlusYellowCircle = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#FFC129"/>
    <path d="M14 8h4v6h6v4h-6v6h-4v-6H8v-4h6V8Z" fill="#0A2520"/>
  </svg>
);
const XYellowCircle = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#FFC129"/>
    <path d="M11 11l10 10M21 11L11 21" stroke="#0A2520" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const PlusRed = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M14 7h4v8h8v4h-8v8h-4v-8H7v-4h7V7Z" fill="#F10B03"/>
  </svg>
);
const PlusTealCircle = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <rect width="25" height="25" rx="12.5" fill="#6EC1E4"/>
    <path d="M11 6h3v5h5v3h-5v5h-3v-5H6v-3h5V6Z" fill="#fff"/>
  </svg>
);
const PlusBorderCircle = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#070515"/>
    <path d="M15 9h2v6h6v2h-6v6h-2v-6H9v-2h6V9Z" fill="#070515"/>
  </svg>
);
const ChevronDown = ({ color = "#031A4A", size = 14 }: { color?: string; size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 18 10" fill="none">
    <path d="M1 1l8 8 8-8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const PlusMinusToggle = ({ color = "#000" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="6.5" width="2" height="15" rx="1" fill={color}/>
    <rect y="6.5" width="15" height="2" rx="1" fill={color}/>
  </svg>
);
const PlusGradient = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 17 17" fill="none">
    <defs>
      <linearGradient id="ggrad" x1="0" y1="0" x2="17" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B7E4F5"/><stop offset="1" stopColor="#99F6E4"/>
      </linearGradient>
    </defs>
    <path d="M7.5 0h2v7h7v2h-7v7h-2V9h-7V7h7V0Z" fill="url(#ggrad)"/>
  </svg>
);
const SmallPlus = ({ color = "#112E65" }: { color?: string }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M7.5 0h2v7h7v2h-7v7h-2V9h-7V7h7V0Z" fill={color}/>
  </svg>
);
const YellowPlus = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M9.5 0h3v9h9v3h-9v9h-3v-9h-9V9h9V0Z" fill="#F5CB53"/>
  </svg>
);

const Variant17 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #17 — Mere information om behandlingen (Playfair + Outfit)</p>
    <div className="mx-auto grid grid-cols-[610px_670px] gap-[60px]" style={{ width: 1340 }}>
      <div>
        <h2 className="text-[#282828] font-['Playfair_Display'] text-[32px] leading-[44px]">Mere information om behandlingen</h2>
        <p className="text-[#282828] font-['Outfit'] font-light text-[18px] leading-[28px] mt-6">Kontakt os endelig, hvis du ikke finder<br/>svar på dit spørgsmål her.</p>
        <img src="/images/faq/filler.png" alt="Behandling med filler" className="mt-10 w-[610px] h-[380px] object-cover rounded-md" />
      </div>
      <div>
        {[
          "Hvordan foregår en behandling med filler?",
          "Hvor længe holder effekten af filler?",
          "Før behandlingen med filler",
          "Efter behandlingen med filler",
          "Hvilke alternativer findes der til filler behandling?",
        ].map((q, i) => (
          <div key={i} className="border-t border-[#F4F3F0] flex items-center justify-between h-[70px]">
            <div className="text-[#282828] font-['Outfit'] font-medium text-[20px] leading-[32px]">{q}</div>
            <button className="w-8 h-8 rounded-full bg-[#F4F3F0] flex items-center justify-center text-[#282828]">
              <span className="relative w-4 h-4">
                <span className="absolute left-0 top-[7px] w-4 h-[2px] bg-[#282828]" />
                <span className="absolute left-[7px] top-0 w-[2px] h-4 bg-[#282828]" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant1 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #1 — King Contractor</p>
    <div className="bg-[#1A1717] mx-auto" style={{ width: 1670, padding: "60px 0" }}>
      <div className="text-center mb-16">
        <div className="font-['Inter'] font-semibold text-[#F1F1F1] uppercase leading-[80px] text-[65.9px]">Frequently</div>
        <div className="font-['Inter'] font-semibold leading-[80px]">
          <span className="text-[#F1F1F1] text-[72.8px] uppercase">Asked </span>
          <span className="text-[#EEB644] font-black uppercase text-[65px]">Questions</span>
        </div>
      </div>
      <div className="px-[90px] space-y-[30px]">
        {[
          ["How Does the Website Design Process Work with King Contractor Agency?", true],
          ["How Long Does It Take to Design a Website?", false],
          ["Can You Help Me Update My Existing Website?", false],
          ["Do You Offer Website Hosting Services?", false],
          ["How Do You Ensure My Website Is Optimized for Search Engines?", true],
          ["How Do I Get Started with King Contractor Agency?", false],
        ].map(([q, tall], i) => (
          <div key={i} className="bg-[rgba(217,217,217,0.30)] backdrop-blur-sm border border-[#F1F1F1] border-t-0 rounded-[24px] flex items-center justify-between px-[41px]" style={{ height: tall ? 125 : 93 }}>
            <div className="text-[#F1F1F1] font-['Inter'] font-extrabold text-[32px] uppercase leading-[32px]">{q as string}</div>
            <PlusCircleRed />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant2 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #2 — Roofing Green</p>
    <div className="mx-auto" style={{ width: 1140 }}>
      <h2 className="text-black font-['Inter'] font-normal text-[43.1px] leading-[60px] mb-[30px]">Frequently Asked Questions</h2>
      <div className="bg-[#189B49] rounded-[20px] shadow-[0_5px_10px_rgba(0,0,0,0.10)] flex items-center justify-between px-6" style={{ height: 72 }}>
        <div className="text-white font-['Liberation_Sans'] font-bold uppercase text-[22px]">How do I know if my home needs a roof repair or full replacement?</div>
        <PlusCircleGreen open />
      </div>
      <div className="border-x-2 border-b-2 border-[#189B49] rounded-b-[20px] p-6">
        <p className="text-[#818181] font-['Liberation_Sans'] text-[20px] leading-[30px]">
          Common indicators include missing or curling shingles, interior water stains, sagging rooflines, or recurring leaks after storms. If your roof is over 20 years old or has required frequent patch jobs, a full replacement may be more cost-effective in the long run. Our team offers thorough inspections and honest guidance so you can make the best choice for your home's safety and value.
        </p>
      </div>
      <div className="mt-8 space-y-[30px]">
        {[
          "What type of siding is best for protecting Minnesota homes from extreme weather?",
          "Can new windows really improve my home's energy efficiency?",
          "What's included in your roofing and exterior inspections?",
          "Do you offer services for both modern and historic homes?",
        ].map((q, i) => (
          <div key={i} className="bg-white shadow-[0_5px_10px_rgba(0,0,0,0.10)] rounded-[20px] flex items-center justify-between px-6" style={{ height: 72 }}>
            <div className="text-[#333333] font-['Liberation_Sans'] font-bold uppercase text-[22px]">{q}</div>
            <PlusCircleGreen />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant3 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #3 — FTR Renovation</p>
    <div className="mx-auto" style={{ width: 1160 }}>
      <div className="bg-[#1BAB77] rounded-[10px] flex items-center justify-between px-5" style={{ height: 82 }}>
        <div className="text-white font-['Outfit'] font-bold text-[31.5px] leading-[33px]">What is the cost of using FTR Renovation & Build services?</div>
        <div className="w-[42px] h-[42px] flex items-center justify-center"><MinusBar color="#fff" /></div>
      </div>
      <div className="px-[62px] py-5 space-y-4 text-black font-['Outfit'] text-[21px] leading-[27px]">
        <p>The cost depends on a variety of different factors that will be covered and analyzed in depth during the first steps of working with FTR!</p>
        <p>Average project costs can go from $50,000 to $600,000+</p>
        <p>FTR Prides itself on taking on all projects regardless of the previous challenges. We work for a 100% completion rate!</p>
      </div>
      <div className="mt-3 space-y-[13px]">
        {[
          "How does FTR Renovation & Build stand out from other contractors?",
          "What types of projects are ideal for FTR Renovation & Build?",
          "Which regions are covered by FTR Renovation & Build?",
          "How can FTR Renovation & Build assist with my property upgrade?",
          "Is a garage conversion worth it?",
          "How much is a garage conversion in 2023?",
          "What is the cheapest way to convert a garage?",
          "How much should a garage conversion cost?",
          "How to apply for ADU in Los Angeles?",
        ].map((q, i) => (
          <div key={i} className="bg-[#F6FEFB] rounded-[10px] flex items-center justify-between px-5" style={{ height: 82 }}>
            <div className="text-black font-['Outfit'] font-bold text-[31.5px] leading-[33px]">{q}</div>
            <div className="w-[42px] h-[42px] flex items-center justify-center"><MinusBar color="#000" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant4 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #4 — Peek Painting</p>
    <div className="mx-auto" style={{ width: 1300 }}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 border border-[#FFC129] px-3 py-1">
          <div className="w-4 h-4 rounded-full bg-[#FFC129]" />
          <span className="text-[#0E4E3D] font-['Inter'] font-bold text-[14.9px] uppercase tracking-wide">Answers You Can Trust</span>
        </div>
        <h2 className="text-[#0A2520] font-['Inter'] font-bold text-[45.8px] leading-[48px] capitalize mt-4">Frequently Asked Painting Questions</h2>
        <button className="mt-6 bg-[#FFC129] px-8 py-4 text-[#0A2520] font-['Inter'] font-black text-[15.9px] uppercase">Get a Free Quote</button>
      </div>
      <div className="bg-white shadow-[0_24px_24px_rgba(0,0,0,0.08)] outline outline-1 outline-[rgba(11,36,52,0.16)] mt-10">
        <div className="flex items-center justify-between px-6" style={{ height: 82 }}>
          <div className="text-[#0A2520] font-['Inter'] font-bold text-[19.5px]">How long does a typical house painting project take on the Central Coast?</div>
          <XYellowCircle />
        </div>
        <div className="px-6 pb-6 text-[#52615E] font-['Inter'] text-[15.6px] leading-[24px]">
          Most residential painting projects take between a few days to a week, depending on the size, surface preparation, and weather conditions. Our team focuses on efficient scheduling, professional painters, and clear communication throughout every step. Whether it's interior painting or exterior work, we always provide a detailed timeline before starting your project so you can plan with confidence. Peek Painting keeps every painting service on track while ensuring top-notch results and a perfect finish. <span className="text-[#171CEF]">Contact our house painters Central Coast team today for a free estimate.</span>
        </div>
      </div>
      {[
        "Do you offer both interior and exterior painting services?",
        "What kind of paint and materials do you use?",
        "How do you prepare surfaces before painting?",
        "Do you offer commercial painting for offices or buildings?",
        "How soon can I expect my quote after contacting Peek Painting?",
        "Are your painters licensed and insured?",
        "What if I'm not satisfied with the finished paint job?",
      ].map((q, i) => (
        <div key={i} className="bg-white shadow-[0_24px_24px_rgba(0,0,0,0.08)] outline outline-1 outline-[rgba(11,36,52,0.16)] flex items-center justify-between px-6 mt-5" style={{ height: 82 }}>
          <div className="text-[#0A2520] font-['Inter'] font-bold text-[19.5px]">{q}</div>
          <PlusYellowCircle />
        </div>
      ))}
    </div>
  </section>
);

const Variant5 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #5 — Roof Replacement Purple</p>
    <div className="bg-[#622DD4] mx-auto py-24" style={{ width: 1440 }}>
      <div className="text-center">
        <div className="inline-block border border-[#F4F5F8] px-4 py-2">
          <span className="text-[#F4F5F8] font-['Inter'] font-medium text-[12px] uppercase tracking-[1.4px]">Got Questions? We've Got Answers!</span>
        </div>
        <h2 className="text-[#F4F5F8] font-['Inter'] font-black text-[33px] uppercase mt-6">Roof Replacement Services FAQ</h2>
      </div>
      <div className="mx-auto mt-12 space-y-[7px]" style={{ width: 1000 }}>
        <div className="bg-[#F4F5F8] outline outline-2 outline-[#222326] flex items-center justify-between px-[18px]" style={{ height: 62 }}>
          <div className="text-[#622DD4] font-['Inter'] font-bold text-[16px]">How do I know if I need a roof replacement or just repairs?</div>
          <div className="w-3 h-1 bg-[#622DD4]" />
        </div>
        <div className="border-x-2 border-b-2 border-[#222326] bg-[#622DD4] px-[18px] py-4 text-[#F4F5F8] font-['Inter'] font-medium text-[15px] leading-[24.75px] tracking-[1.4px]">
          If your roof is over 20 years old, or if you notice significant damage like missing shingles, leaks, or sagging, it's likely time for a replacement. Our team can <span className="text-white font-['Montserrat']">inspect your roof</span> and provide recommendations.
        </div>
        {["How long does a roof replacement take?", "What roofing materials do you offer to replace my roof?"].map((q, i) => (
          <div key={i} className="bg-white outline outline-2 outline-[#222326] flex items-center justify-between px-[18px]" style={{ height: 62 }}>
            <div className="text-[#222326] font-['Inter'] font-bold text-[16px]">{q}</div>
            <SmallPlus color="#622DD4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant6 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #6 — Frequent Questions Dark</p>
    <div className="bg-[#131313] mx-auto py-32 px-10" style={{ width: 1440 }}>
      <div className="text-center mb-20">
        <h2 className="font-['Oswald'] font-bold text-[65px] uppercase leading-[78px]">
          <span className="text-white">Frequent </span>
          <span className="text-[#F10B03]">Questions</span>
        </h2>
        <p className="text-white font-['Arial'] text-[20px] leading-[33px] mt-2">Check out our most common questions and answers.</p>
      </div>
      <div className="space-y-4">
        {[
          "How can a homeowner or business owner recognize when a roof has problems?",
          "My roof leaks. Do i need to have it totally replaced?",
          "Can't i just do the work myself?",
          "How can i determine my annual cost?",
          "What should I do to prepare before my roofing work begins?",
          "Do you have any maintenance tips for my new roof?",
          "What happens if it rains during my roofing project?",
          "Do you have emergency roof repair solutions",
          "Do you do roofing inspections or offer estimates",
          "Do you dispose of old roofing materials.",
        ].map((q, i) => (
          <div key={i} className="bg-[#222222] flex items-center justify-between px-6" style={{ height: 75 }}>
            <div className="text-white font-['Arial'] font-bold text-[18.8px] leading-[33px]">{q}</div>
            <PlusRed />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant7 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #7 — Roof Repair Green</p>
    <div className="bg-[#AFD366] mx-auto py-24 px-[160px]" style={{ width: 1440 }}>
      <h2 className="text-white text-center font-['Liberation_Sans'] font-bold text-[46px] mb-12">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-[13px]">
        {[
          "How do I know if my roof needs repair?",
          "How long do roof repairs take?",
          "Is roof repair cheaper than replacement?",
          "How much does roof repair cost?",
          "Can you repair both residential and commercial roofs?",
          "Will I need to leave my home during roof repairs?",
        ].map((q, i) => (
          <div key={i} className="bg-[#024784] flex items-center px-8" style={{ height: 57 }}>
            <div className="text-[#AFD366] text-[25px] font-bold mr-6">+</div>
            <div className="flex-1 text-white font-['Liberation_Sans'] font-bold text-[24px]">{q}</div>
            <ChevronDown color="#fff" size={16} />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#024784] text-white font-['Poppins'] text-[19px] capitalize tracking-[0.9px] px-8 py-4 rounded-[3px]">Have More Questions? Ask Us Here</button>
      </div>
    </div>
  </section>
);

const Variant8 = () => (
  <section className="py-20 px-10 bg-[#F7F7F7]">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #8 — Plus/Minus FAQ</p>
    <div className="mx-auto" style={{ width: 1200 }}>
      <h2 className="text-center text-black font-['Poppins'] font-extrabold text-[50px] leading-[60px] mb-8">FAQ</h2>
      <div className="space-y-0">
        {[
          "What type of licenses does your organization hold?",
          "Who will oversee the projections and manage day-to-day work?",
          "What types of materials do you use on your projects?",
          "What warranties do you offer on work?",
          "Are you able to provide references?",
          "How soon do you usually start your projects?",
        ].map((q, i) => (
          <div key={i} className="border-b border-black/20 flex items-center justify-between py-5">
            <div className="text-black font-['Poppins'] font-semibold text-[21px] leading-[30px]">{q}</div>
            <div className="relative w-[15px] h-[15px] opacity-80">
              <div className="absolute top-0 left-[6.5px] w-[2px] h-[15px] bg-black rounded-[3px]" />
              <div className="absolute left-0 top-[6.5px] w-[15px] h-[2px] bg-black rounded-[3px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant9 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #9 — BraBos Cleaning</p>
    <div className="mx-auto" style={{ width: 1140 }}>
      <div className="text-center mb-10">
        <p className="text-[#23B0E6] font-['Poppins'] font-semibold text-[20px] uppercase">FAQ</p>
        <h2 className="text-[#9AE214] font-['Poppins'] font-black text-[46px] leading-[52px] mt-2">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-[#3F3F3F] font-['Poppins'] font-semibold text-[20px] uppercase mt-2">Answering Your Questions About Cleaning Services</p>
      </div>
      <div className="space-y-5">
        {[
          "What types of properties does BraBos Cleaning service in Downtown Boston?",
          "How does BraBos Cleaning contribute to a greener Downtown Boston?",
          "Can BraBos Cleaning handle the unique cleaning needs of downtown commercial spaces?",
        ].map((q, i) => (
          <div key={i} className="bg-white border border-[#E8E8F6] rounded-[5px] flex items-center px-5" style={{ height: 57 }}>
            <div className="mr-4"><PlusTealCircle /></div>
            <div className="text-[#3F3F3F] font-['Poppins'] font-semibold text-[20px]">{q}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant10 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #10 — Maid Service Bricolage</p>
    <div className="mx-auto grid grid-cols-[519px_1fr] gap-[119px]" style={{ width: 1251 }}>
      <div className="bg-neutral-200 rounded-[8px] self-end" style={{ height: 634 }} />
      <div>
        <p className="text-[#707784] font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px]">Let's put your mind at ease</p>
        <h2 className="text-[#07193B] font-['Bricolage_Grotesque'] font-extrabold text-[48px] leading-[54px] mt-3">Frequently Asked<br/>Questions</h2>
        <div className="mt-10">
          {[
            "What's included in a maid service cleaning?",
            "What time do you offer cleaning services?",
            "Will I always get the same cleaner?",
            "Are the cleaning supplies included?",
            "Is your cleaning supplies and products child and pet friendly?",
            "What forms of payments do you accept?",
            "What is a deep clean?",
            "How much does it cost to clean my home?",
            "Do I have to be home for the cleaning?",
            "How can I book online?",
            "How long does it take to clean my house?",
          ].map((q, i) => (
            <div key={i} className="border-b border-[#EBECED] flex items-center justify-between py-5">
              <div className="text-[#07193B] font-['Bricolage_Grotesque'] font-extrabold text-[16px] leading-[24px]">{q}</div>
              <SmallPlus />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Variant11 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #11 — Vanliga frågor (Swedish)</p>
    <div className="bg-[#F8F8F8] mx-auto py-[110px] px-[260px] grid grid-cols-2 gap-[260px]" style={{ width: 1920 }}>
      <div>
        <h2 className="text-[#393939] font-['Inter'] font-semibold text-[47.8px] leading-[66px]">Vanliga frågor</h2>
      </div>
      <div className="space-y-0">
        {[
          "Vad kostar en tandläkarundersökning?",
          "Hur bokar eller avbokar jag en tid?",
          "Jag vill lista mig hos er, hur gör jag?",
          "Kan jag delbetala hos er?",
          "Hur arbetar ni med tandvårdrädsla?",
          "Tar ni emot barn?",
          "Gäller tandvårdsstödet hos er?",
        ].map((q, i) => (
          <div key={i} className="flex items-center justify-between py-[12px]" style={{ height: 50 }}>
            <div className="text-[#393939] font-['Satoshi'] font-medium text-[20px] leading-[23px]">{q}</div>
            <YellowPlus />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant12 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #12 — VANLIGA FRÅGOR (Dark Teal)</p>
    <div className="bg-[#07242F] mx-auto py-24 px-[352px]" style={{ width: 1920 }}>
      <h2 className="text-white font-['IBM_Plex_Mono'] font-medium text-[36px] leading-[40px] mb-12">VANLIGA FRÅGOR</h2>
      <div className="grid grid-cols-2 gap-[112px]">
        <div className="space-y-4">
          {[
            ["Vad kostar det?", 96],
            ["Vad ingår?", 96],
            ["Finns det någon\nuppstartskostnad?", 128],
            ["Finns det någon bindningstid?", 96],
          ].map(([q, h], i) => (
            <div key={i} className="bg-[#0A3748] flex items-start px-8 py-8" style={{ height: h as number }}>
              <div className="mt-2 mr-4 shrink-0"><PlusGradient /></div>
              <div className="flex-1 text-white font-['IBM_Plex_Mono'] font-medium text-[24px] leading-[32px] whitespace-pre-line">{q as string}</div>
              <div className="mt-2 ml-4"><ChevronDown color="#fff" size={20} /></div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {[
            ["Finns det en gratis\nprovperiod?", 128],
            ["Hur fungerar onboarding?", 96],
            ["Kan jag skräddarsy\nintegrationer?", 128],
            ["Hur mycket kostar anpassad\nutrustning?", 128],
          ].map(([q, h], i) => (
            <div key={i} className="bg-[#0A3748] flex items-start px-8 py-8" style={{ height: h as number }}>
              <div className="mt-2 mr-4 shrink-0"><PlusGradient /></div>
              <div className="flex-1 text-white font-['IBM_Plex_Mono'] font-medium text-[24px] leading-[32px] whitespace-pre-line">{q as string}</div>
              <div className="mt-2 ml-4"><ChevronDown color="#fff" size={20} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Variant13 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #13 — Frequently asked questions! (Yellow CTA)</p>
    <div className="mx-auto grid grid-cols-[370px_1fr] gap-[150px]" style={{ width: 1326 }}>
      <div>
        <p className="text-[#191E26] font-['Outfit'] font-medium text-[14px] uppercase">FaQ</p>
        <h2 className="text-[#191E26] font-['Outfit'] font-medium text-[48px] leading-[58px] capitalize mt-2">Frequently asked<br/>questions!</h2>
        <p className="text-[#191E26]/70 font-['Outfit'] text-[16px] leading-[24px] mt-6">Our clients' satisfaction is at the heart of everything we do. We take pride delivering communication.</p>
        <button className="bg-[#FEEA00] rounded-full px-6 py-2.5 mt-8 text-[#191E26] font-['Outfit'] font-medium text-[16px] capitalize">Know more</button>
      </div>
      <div className="space-y-4">
        {[
          "What is VOIP, and how does it work?",
          "How is VOIP better than traditional phone systems?",
          "Can I keep my existing phone number with ZaiVOIP?",
          "Is VOIP secure for business communication?",
          "What is VOIP, and how does it work?",
          "What kind of support does ZaiVOIP provide?",
        ].map((q, i) => (
          <div key={i} className="bg-white border border-[#191E26]/10 rounded-2xl flex items-center justify-between px-10" style={{ height: 74 }}>
            <div className="text-[#191E26] font-['Outfit'] font-medium text-[18px]">{q}</div>
            <ChevronDown color="#191E26" size={18} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant14 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #14 — Plus Jakarta Sans Underline</p>
    <div className="mx-auto grid grid-cols-[371px_1fr] gap-[151px]" style={{ width: 1330 }}>
      <h2 className="text-black font-['Plus_Jakarta_Sans'] font-medium text-[50px] leading-[60px]">Frequently<br/>asked questions</h2>
      <div>
        {[
          "How fast can you get to my location?",
          "How much does towing cost?",
          "Do you offer roadside assistance, or just towing?",
          "What areas do you serve?",
          "Is AutoTowing available 24/7?",
        ].map((q, i) => (
          <div key={i} className="border-b border-[#E6E6E6] flex items-center justify-between py-4">
            <div className="text-[#9A9A9A] font-['Plus_Jakarta_Sans'] font-medium text-[28px] leading-[36px]">{q}</div>
            <div className="opacity-50"><SmallPlus color="#222222" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant15 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #15 — Outfit Centered</p>
    <div className="mx-auto" style={{ width: 792 }}>
      <h2 className="text-center text-[#011813] font-['Outfit'] font-semibold text-[48px] leading-[57px]">Frequently Asked Questions</h2>
      <p className="text-center text-[#4E5255] font-['Outfit'] text-[16px] leading-[24px] mt-4">Frequently Asked Questions offers quick answers to common queries, guiding users through features and functionalities effortlessly.</p>
      <div className="space-y-6 mt-14">
        {[
          "Can I Track My Assignments and Grades?",
          "Does the LMS support video lessons and live classes?",
          "How can I communicate with my instructor?",
          "What support is available for students and instructors?",
          "Are there interactive features for students?",
        ].map((q, i) => (
          <div key={i} className="bg-white border border-[#E7E7E8] rounded-lg flex items-center justify-between px-6" style={{ height: 75 }}>
            <div className="text-[#011813] font-['Outfit'] font-medium text-[24px] leading-[32px]">{q}</div>
            <PlusMinusToggle color="#011813" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Variant16 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #16 — EVERYTHING YOU NEED TO KNOW (Anton)</p>
    <div className="mx-auto grid grid-cols-[419px_1fr] gap-[101px]" style={{ width: 1320 }}>
      <div>
        <p className="text-[#FF5F2E] font-['Geist'] text-[16px] leading-[24px]">Faq</p>
        <h2 className="text-[#070515] font-['Anton'] text-[72px] uppercase leading-[79px] mt-7">Everything You<br/>Need to Know</h2>
      </div>
      <div className="space-y-5">
        {[
          "What services do you offer?",
          "How do I know which plan is right for me?",
          "How soon can I expect results?",
          "Do you offer custom packages?",
          "Will I get regular updates or reports?",
        ].map((q, i) => (
          <div key={i} className="bg-[#F8F8F8] rounded-xl flex items-center justify-between px-5" style={{ height: 92 }}>
            <div className="text-[#0A0A0A] font-['Anton'] text-[20px] uppercase leading-[30px]">{q}</div>
            <PlusBorderCircle />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="px-10 py-6 flex items-center gap-6 border-b border-neutral-800">
        <Link to="/" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">← Home</Link>
        <Link to="/components" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">Components</Link>
        <h1 className="text-white text-sm font-['Outfit']">/ FAQ</h1>
      </nav>
      <div className="flex">
        <aside className="w-64 border-r border-neutral-800 min-h-[calc(100vh-65px)] p-6">
          <p className="text-neutral-500 text-xs uppercase tracking-wider font-['Outfit'] mb-4">Categories</p>
          <ul className="space-y-2">
            <li>
              <NavLink to="/components/service-areas" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>Service Areas</NavLink>
            </li>
            <li>
              <NavLink to="/components/faq" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/components/cta" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>CTA</NavLink>
              <NavLink to="/components/hero" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>Hero</NavLink>
            </li>
          </ul>
        </aside>
        <main className="flex-1 bg-white">
          <Variant1 />
          <Variant2 />
          <Variant3 />
          <Variant4 />
          <Variant5 />
          <Variant6 />
          <Variant7 />
          <Variant8 />
          <Variant9 />
          <Variant10 />

          <div className="border-t-4 border-neutral-900 bg-neutral-100 py-12 text-center">
            <h2 className="font-['DM_Serif_Display'] text-5xl text-neutral-900">OTHER</h2>
          </div>

          <Variant11 />
          <Variant12 />
          <Variant13 />
          <Variant14 />
          <Variant15 />
          <Variant16 />
          <Variant17 />
        </main>
      </div>
    </div>
  );
};

export default FAQ;
