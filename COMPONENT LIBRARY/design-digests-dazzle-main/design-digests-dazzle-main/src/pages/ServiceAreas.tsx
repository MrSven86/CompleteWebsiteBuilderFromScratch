import { Link, NavLink } from "react-router-dom";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";

const ServiceAreas = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="px-10 py-6 flex items-center gap-6 border-b border-neutral-800">
        <Link to="/" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">← Home</Link>
        <Link to="/components" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">Components</Link>
        <span className="text-neutral-600 text-sm font-['Outfit']">/ Service Areas</span>
      </nav>

      <div className="flex">
        <aside className="w-64 border-r border-neutral-800 min-h-[calc(100vh-65px)] p-6">
          <p className="text-neutral-500 text-xs uppercase tracking-wider font-['Outfit'] mb-4">Categories</p>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/components/service-areas"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                Service Areas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/faq"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/cta"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                CTA
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components/hero"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${
                    isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`
                }
              >
                Hero
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-10 space-y-16 bg-white text-neutral-900">
          <h2 className="text-3xl font-['DM_Serif_Display'] text-neutral-900">Different Ways to Do Service Area</h2>

          {/* Variant 1 — Full-width map with location card overlay */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #1 — Map with overlay card</p>
            <div className="relative w-full h-[576px] bg-[#E5E3DF] overflow-hidden">
              <img src="/images/service-areas/way1.png" alt="Map" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute right-[110px] top-[82px] w-[473px] h-[374px] bg-white p-[60px]">
                <h3 className="text-[#292145] text-[24px] font-['Cormorant_Infant'] font-medium">Fringe | LES</h3>
                <p className="mt-6 text-[#292145] text-[16px] font-['Onest'] font-light leading-[25.6px]">
                  248 Broome Street,<br />New York, NY 10002
                </p>
                <p className="mt-4 text-[#292145] text-[16px] font-['Onest'] font-light">(212) 674-8383</p>
                <div className="mt-6 inline-flex items-center justify-between gap-3 px-3 py-1.5 rounded-full border border-[#292145] w-[280px]">
                  <span className="text-[#292145] text-[16px] font-['Onest'] font-bold">Thursday</span>
                  <span className="text-[#292145] text-[16px] font-['Onest'] font-light">11:00AM - 5:00PM</span>
                  <ChevronDown className="w-4 h-4 text-[#292145]" />
                </div>
              </div>
            </div>
          </section>

          {/* Variant 2 — Side-by-side map + content with multiple location cards */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #2 — Map left, locations right</p>
            <div className="grid grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)]">
                <img src="/images/service-areas/map.png" alt="Map" className="w-full h-[384px] object-cover" />
              </div>
              <div>
                <p className="text-black text-[20px] font-['Cormorant']">Our Locations</p>
                <h3 className="mt-4 text-[#111827] text-[48px] font-bold leading-[48px] font-['Outfit']">Visit Us in New York</h3>
                <p className="mt-6 text-[#4B5563] text-[20px] font-['Montserrat'] font-semibold">Una Cuestión de Actitud</p>
                <p className="mt-6 text-[#4B5563] text-[16px] font-['Lato'] leading-[26px]">
                  <strong>Fringe Salon</strong> brings our <em>creative</em>, community-focused hair services to some of New York's most vibrant neighborhoods. You can find us in Manhattan, Brooklyn, the Lower East Side, and Gowanus, where our master stylists blend artistry with genuine care.
                </p>
                <button className="mt-8 px-12 py-2.5 rounded-full bg-[#1CAFB9] text-white font-['Montserrat'] font-bold text-sm uppercase">
                  Read more
                </button>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {[
                    { name: "Fringe | LES", addr: "248 Broome Street,\nNew York, NY 10002", phone: "(212) 674-8383", hours: "11:00AM - 5:00PM" },
                    { name: "Fringe | BK", addr: "298 Bond Street,\nBrooklyn, NY 11231", phone: "(718) 624-8383", hours: "11:00AM - 8:00PM" },
                  ].map((loc) => (
                    <div key={loc.name}>
                      <h4 className="text-[#292145] text-[24px] font-['Cormorant_Infant'] font-medium">{loc.name}</h4>
                      <p className="mt-4 text-[#292145] text-[16px] font-['Onest'] font-light leading-[25.6px] whitespace-pre-line">{loc.addr}</p>
                      <p className="mt-3 text-[#292145] text-[16px] font-['Onest'] font-light">{loc.phone}</p>
                      <div className="mt-4 inline-flex items-center justify-between gap-3 px-3 py-1.5 rounded-full border border-[#292145] w-[280px]">
                        <span className="text-[#292145] text-[16px] font-['Onest'] font-bold">Thursday</span>
                        <span className="text-[#292145] text-[16px] font-['Onest'] font-light">{loc.hours}</span>
                        <ChevronDown className="w-4 h-4 text-[#292145]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Variant 3 — Three info cards over background */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #3 — Three cards on dark background</p>
            <div className="relative w-full h-[576px] bg-neutral-800 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/service-areas/way1.png')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative grid grid-cols-3 gap-8 px-12 max-w-[1280px]">
                {/* Card 1 - Kontakt */}
                <div className="bg-white rounded-2xl border border-black p-8 text-center h-[420px] flex flex-col">
                  <h3 className="text-black text-[19.4px] font-['Inter'] font-semibold mb-6">Kontakta oss</h3>
                  <p className="text-black text-[13.7px] font-bold mb-2">Salong Östermalm</p>
                  <p className="text-[#5F5F5F] text-[14.8px] leading-[23.2px]">
                    Tel: <span className="underline">070-993 02 02</span><br />
                    info@sagaharstudio.se
                  </p>
                  <p className="text-black text-[13.2px] font-bold mt-6 mb-2">Salong Kungsholmen</p>
                  <p className="text-[#5F5F5F] text-[14.8px] leading-[23.2px]">
                    Tel: <span className="underline">072-393 02 02</span><br />
                    info@sagaharstudio.se
                  </p>
                  <button className="mt-auto mx-auto bg-[#141413] text-white text-[13.5px] rounded-full px-6 py-3">Boka tid</button>
                </div>

                {/* Card 2 - Öppettider */}
                <div className="bg-white rounded-2xl border border-black p-8 text-center h-[420px]">
                  <h3 className="text-black text-[19.4px] font-['Inter'] font-semibold mb-3">Öppettider</h3>
                  <p className="text-[#5F5F5F] text-[15.8px] leading-[23.2px] mb-4">Det här är våra ordinarie öppettider för våra salonger</p>
                  <p className="text-black text-[13.7px] font-bold mb-2">Salong Östermalm</p>
                  <p className="text-black text-[12.9px] leading-5"><span className="underline">Mån:</span> kl. 10.00 - 18.30</p>
                  <p className="text-black text-[12.7px] leading-5"><span className="underline">Tis - Lör:</span> kl. 10.00 - 19.00</p>
                  <p className="text-black text-[12.8px] leading-5 mb-3"><span className="underline">Sön:</span> kl. 10.00 - 17.00</p>
                  <p className="text-black text-[13.2px] font-bold mb-2">Salong Kungsholmen</p>
                  <p className="text-black text-[13.1px] leading-5"><span className="underline">Mån - Fre:</span> kl. 10.00 - 18.30 (Tor: Stängt)</p>
                  <p className="text-black text-[12.9px] leading-5"><span className="underline">Lör - Sön:</span> kl. 10.00 - 18.00</p>
                </div>

                {/* Card 3 - Hitta till oss */}
                <div className="bg-white rounded-2xl border border-black p-6 text-center h-[420px]">
                  <h3 className="text-black text-[20.1px] font-['Inter'] font-semibold mb-4">Hitta till oss</h3>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="bg-[#FFF5EE] text-[#222] text-[11.4px] rounded-full px-4 py-1.5">Östermalm</span>
                    <span className="bg-[#F2E6DD] text-[#222] text-[10.9px] rounded-full px-4 py-1.5">Kungsholmen</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-[208px]">
                    <img src="/images/service-areas/map3.png" alt="Stockholm" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Variant 4 — Title + chips + wide map */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #4 — Title, city chips, full-width map</p>
            <div className="text-center">
              <h3 className="text-black text-[40px] font-['Outfit'] font-bold leading-[60px]">We Cover 60 Miles Around Torrance, CA</h3>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { label: "Torrance, CA", active: true },
                  { label: "Redondo Beach, CA" },
                  { label: "Manhattan Beach, CA" },
                  { label: "Hermosa Beach, CA" },
                  { label: "Hesperia, CA" },
                ].map((c) => (
                  <span
                    key={c.label}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[16px] font-['Outfit'] ${
                      c.active ? "bg-[#0E70B6] text-white" : "bg-[#E4E4E4] text-black"
                    }`}
                  >
                    <MapPin className="w-3.5 h-4" />
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 w-full h-[450px] bg-[#E5E3DF] overflow-hidden">
                <img src="/images/service-areas/map5.png" alt="Torrance map" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Variant 5 — Teal block: Service Area + Payment Portal with map */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #5 — Teal info panel + map</p>
            <div className="relative w-[1440px] max-w-full h-[665.44px] bg-[#B0F2EF] overflow-hidden">
              <h3 className="absolute left-[230px] top-[54px] text-black text-[38px] font-['Poppins'] font-bold leading-[45.6px]">Service Area</h3>
              <p className="absolute left-[230px] top-[111.59px] w-[402px] text-black text-[14px] font-['Poppins'] font-normal leading-[22.4px]">
                Here is a visual of the service area that we primarily focus<br/>on. However, we have completed jobs as far west as<br/>Worcester, MA. Each job is independently assessed for<br/>feasibility and cleaning crew coverage. Please do not<br/>hesitate to reach out with any jobs you may have at our<br/>phone and email below.
              </p>
              <h3 className="absolute left-[230px] top-[263.03px] text-black text-[38px] font-['Poppins'] font-bold leading-[45.6px]">Payment Portal</h3>
              <p className="absolute left-[233px] top-[328.62px] w-[395px] text-black text-[14px] font-['Poppins'] font-normal leading-[22.4px]">
                To offer convenience to our valued clients, we have a<br/>secure Payment Portal where you can easily manage<br/>your invoices and make payments online. This<br/>streamlined process allows you to spend less time<br/>worrying about bills and more time enjoying the benefits<br/>of a clean and organized space.
              </p>
              <div className="absolute left-[231px] top-[476.06px] w-[51px] h-[51px] bg-[#39DFD9] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="absolute left-[302px] top-[477.06px] text-black text-[16px] font-['Poppins'] leading-[25.6px]">PHONE NO :<br/>1-857-255-9671</p>
              <div className="absolute left-[231px] top-[548.25px] w-[51px] h-[51px] bg-[#39DFD9] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="absolute left-[302px] top-[549.25px] text-black text-[16px] font-['Poppins'] leading-[25.6px]">EMAIL :<br/>hello@purge-polish.com</p>
              <img src="/images/service-areas/boston-pins.png" alt="Boston" className="absolute left-[663px] top-[58px] w-[703px] h-[541px] object-cover" />
            </div>
          </section>

          {/* Variant 6 — FIND US / SERVICE AREA centered with wide map */}
          <section>
            <div className="w-full border-b-[5px] border-[#23B0E6] pt-[60px] pb-[65px] relative">
              <p className="text-center text-[#23B0E6] text-[20px] font-['Poppins'] font-semibold uppercase leading-[26px]">FIND US</p>
              <h3 className="mt-[20px] text-center text-[#9AE214] text-[46px] font-['Poppins'] font-black leading-[52px]">SERVICE AREA</h3>
              <p className="mt-[19px] text-center text-[#3F3F3F] text-[18px] font-['Poppins'] font-medium leading-6">
                The heart of Boston pulses with the rhythm of city life, and BraBos Cleaning covers every bit of it. From the waterfront to<br/>
                Beacon Hill, our map showcases the breadth of our service area. Trust us to bring a harmonious blend of traditional<br/>
                cleanliness and modern efficiency to your doorstep.
              </p>
              <div className="mt-[20px] mx-auto w-[1140px] max-w-full h-[400px] bg-[#E5E3DF] overflow-hidden">
                <img src="/images/service-areas/boston.png" alt="Boston map" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Variant 7 — Service Areas / Central Valley with California map */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #7 — Central Valley list + CA map</p>
            <div className="grid grid-cols-2 gap-0 items-start max-w-[1360px]">
              <div>
                <p className="text-[#C51230] text-[32.1px] font-['Inter'] font-bold leading-[72px]">Service Areas</p>
                <h3 className="mt-[3px] text-[#3D3C51] text-[47.5px] font-['Inter'] font-black leading-[50px]">
                  The Best Interior & Exterior<br/>Painting In The Central<br/>Valley
                </h3>
                <div className="mt-[33px] grid grid-cols-2 gap-x-0 gap-y-[26.5px]">
                  {["Ceres","Manteca","Modesto","Oakdale","Patterson"].map(c => (
                    <p key={c} className="text-[#3D3C51] text-[16px] font-['Inter'] font-medium leading-[27px]"><span className="font-bold mr-2">•</span><span className="underline">{c}</span></p>
                  ))}
                  <span />
                  {["Ripon","Riverbank","Merced","Stockton","Tracy"].map(c => (
                    <p key={c} className="text-[#3D3C51] text-[16px] font-['Inter'] font-medium leading-[27px]"><span className="font-bold mr-2">•</span><span className="underline">{c}</span></p>
                  ))}
                </div>
                <button className="mt-[60px] w-[220px] h-[55px] bg-[#C51230] rounded-[5px] outline outline-2 outline-white -outline-offset-2 text-white text-[15.2px] font-['Inter'] font-medium shadow-[0_3px_11px_rgba(0,0,0,0.25)]">
                  VIEW ALL
                </button>
              </div>
              <div className="flex justify-center">
                <img src="/images/service-areas/california.png" alt="California" className="w-[434px] h-[492px] object-contain rounded-[9.27px]" />
              </div>
            </div>
          </section>

          {/* Variant 8 — Orange pill banner + LA wide map */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #8 — Orange banner + LA map</p>
            <div className="relative">
              <div className="mx-auto max-w-[1536px] h-[60px] bg-[#FF9500] rounded-full flex items-center justify-center">
                <span className="text-white text-[40px] font-['Kanit'] font-bold capitalize leading-[60px]">We Cover 75 Miles Around Los Angeles, CA</span>
              </div>
              <div className="relative mt-[56px] w-full h-[450px] bg-[#E5E3DF] overflow-hidden">
                <img src="/images/service-areas/la.png" alt="LA" className="w-full h-full object-cover" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-[20px] w-[200px] h-[40px] bg-[#FF9500] rounded-full flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white text-[16px] font-['Kanit'] leading-6">Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </section>

          {/* Variant 9 — Helping Homeowners Across Brooklyn & Queens */}
          <section>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #9 — Brooklyn & Queens list</p>
            <div className="w-full bg-[#E7E7E7] py-[30px] px-[238px]">
              <p className="text-center text-[#7A7A7A] text-[20px] font-['Open_Sans'] font-semibold uppercase tracking-[0.8px] leading-6">Service Areas</p>
              <h3 className="mt-[34px] text-center text-black text-[50px] font-['Bebas_Neue'] tracking-[2px] leading-[60px]">Helping Homeowners Across Brooklyn & Queens</h3>
              <div className="mt-[70px] grid grid-cols-2 gap-x-[140px]">
                {[
                  { city: "Brooklyn", areas: ["Williamsburg","Brooklyn Heights","Park Slope","Greenpoint","bushwick","Flatbush","Prospect Heights","Bay Ridge","Bedford-Stuyvesant","Crown Heights"] },
                  { city: "Queens", areas: ["Astoria","Long Island City","Flushing","Jamaica","forest hills","Rego Park","Bayside","Rockaway Beach","Elmhurst","Richmond Hill"] },
                ].map(col => (
                  <div key={col.city}>
                    <div className="flex items-center justify-center gap-3 mb-[20px]">
                      <MapPin className="w-[31px] h-[44px] text-black" fill="black" />
                      <h4 className="text-black text-[50px] font-['Bebas_Neue'] tracking-[2px] leading-[60px] capitalize">{col.city}</h4>
                    </div>
                    {col.areas.map((a, i) => (
                      <div key={a} className={`text-center py-[10px] ${i < col.areas.length - 1 ? "border-b-2 border-black" : ""}`}>
                        <span className="text-black text-[30px] font-['Bebas_Neue'] tracking-[2px] leading-9">{a}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============== EXTRA BONUS SERVICE AREAS ============== */}
          <div className="pt-16 mt-16 border-t border-neutral-300">
            <h2 className="text-3xl font-['DM_Serif_Display'] text-neutral-900 mb-2">Extra Bonus Service Areas</h2>
            <p className="text-sm text-neutral-500 font-['Outfit'] mb-12">Additional variants</p>

            {/* Variant #10 — Pasadena red banner + map + tabs */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #10 — Red banner with map and city tabs</p>
              <div className="w-full max-w-[1600px] mx-auto">
                {/* Red banner — narrower with side margins */}
                <div className="mx-[180px] bg-[#DA1F22] rounded-t-full h-[60px] flex items-center justify-center">
                  <span className="text-white text-[40px] font-['Outfit'] font-bold leading-[60px]">We Cover 50 Miles Around Pasadena, CA</span>
                </div>
                {/* Map — full width, taller */}
                <div className="relative w-full h-[550px] overflow-hidden">
                  <img src="/images/service-areas/pasadena.png" alt="Pasadena map" className="w-full h-full object-cover" />
                  {/* City tabs overlapping the bottom of the map */}
                  <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-px mx-[180px]">
                    <div className="bg-[#DA1F22] border-t-2 border-white rounded-t-full px-8 py-[10px] flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white" />
                      <span className="text-white text-[16px] font-['Outfit'] leading-6">Pasadena, CA</span>
                    </div>
                    <div className="bg-[#BA1C1C] border-t-2 border-white rounded-t-full px-8 py-[10px] flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white" />
                      <span className="text-white text-[16px] font-['Outfit'] leading-6">San Marino, CA</span>
                    </div>
                    <div className="bg-[#BA1C1C] border-t-2 border-white rounded-t-full px-8 py-[10px] flex items-center gap-3">
                      <Phone className="w-4 h-4 text-white" />
                      <span className="text-white text-[16px] font-['Outfit'] leading-6">La Cañada Flintridge, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Variant #11 — Proudly serving these areas (Figtree) */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #11 — Figtree city cards</p>
              <div className="w-[1200px] max-w-full mx-auto">
                <h3 className="text-center text-black text-[55px] font-['Figtree'] font-semibold leading-[63.25px] mb-[75px]">
                  Proudly serving these<br />areas
                </h3>
                <div className="grid grid-cols-3 gap-x-[26px] gap-y-[30px]">
                  {["Agoura Hills","Thousand Oaks","Westlake Village","Calabasas","Moorpark","Simi Valley"].map((city) => (
                    <div key={city}>
                      <div className="w-[382.66px] max-w-full h-[150px] rounded-[15px] overflow-hidden shadow-[0px_10px_26px_-3px_rgba(0,0,0,0.10)] bg-neutral-200" />
                      <p className="mt-[30px] text-black text-[20px] font-['Figtree'] font-semibold leading-8">{city}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Variant #12 — Minnesota & Colorado with green CTA */}
            <section className="mb-20 -mx-10 px-10 py-[150px] bg-[#F1F1F1]">
              <div className="w-[1670px] max-w-full mx-auto flex gap-[100px] relative">
                <div className="w-[735px] flex-shrink-0 h-[550px] rounded-[30px] overflow-hidden shadow-[0px_10px_20px_rgba(0,0,0,0.25)]">
                  <img src="/images/service-areas/minneapolis.png" alt="Minneapolis map" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[#189B49] text-[24px] font-['Liberation_Sans'] font-bold uppercase leading-6">Our Service Areas</p>
                  <h3 className="mt-[16px] text-black text-[55.5px] font-['Inter'] leading-[80px]">Serving Communities in<br />Minnesota & Colorado</h3>
                  <p className="mt-[20px] text-[24px] font-['Liberation_Sans'] leading-9">
                    <span className="text-[#818181]">With teams based in </span>
                    <span className="text-black font-bold">Brooklyn Park, MN,</span>
                    <span className="text-[#818181]"> and </span>
                    <span className="text-black font-bold">Aurora, CO, </span>
                    <span className="text-[#818181]">Roof Ninja Services proudly delivers expert roofing and restoration services to homeowners and businesses across the region.</span>
                  </p>
                  <p className="mt-[37px] text-black text-[24px] font-['Liberation_Sans'] font-bold leading-9">Not sure if you're in our service area?</p>
                  <div className="mt-[32px] bg-[#189B49] rounded-[30px] h-[108px] flex items-center justify-center gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.10)]">
                    <span className="text-white text-[24px] font-['Liberation_Sans']">Give us a call at</span>
                    <Phone className="w-[36px] h-[36px] text-white" />
                    <span className="text-white text-[24px] font-['Liberation_Sans'] font-bold border-b-2 border-white pb-1">(763) 999-4953</span>
                    <span className="text-white text-[24px] font-['Liberation_Sans']">we're happy to help!</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Variant #13 — Maryland chips on light blue */}
            <section className="mb-20 -mx-10 px-10 py-[110px] bg-[#E5F0F3]">
              <div className="w-[1139px] max-w-full mx-auto">
                <p className="text-center text-black text-[20px] font-['Inter'] font-medium leading-[22px] mb-[30px] w-fit">Service Areas</p>
                <h3 className="text-black text-[46px] font-['Inter'] font-semibold uppercase leading-[55.2px]">Our Service Areas</h3>
                <p className="mt-[20px] text-black text-[22px] font-['Inter'] font-bold uppercase leading-[24.2px]">Serving Communities Across Maryland</p>
                <p className="mt-[34px] text-[#696969] text-[20px] font-['Inter'] leading-[30px]">We proudly offer our expert roofing and exterior renovation services in the following areas:</p>
                <div className="mt-[35px] w-full h-[450px] overflow-hidden">
                  <img src="/images/service-areas/maryland.png" alt="Maryland map" className="w-full h-full object-cover" />
                </div>
                <div className="mt-[20px] grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                  {["Anne Arundel County, Maryland","Baltimore County, Maryland","Centreville, Maryland","Chevy Chase, Maryland","Kent Island, Maryland","Laurel, Maryland","Potomac, Maryland","Queen Anne's County, Maryland","Queenstown, Maryland","Rockville, Maryland","Silver Spring, Maryland","Upper Marlboro, Maryland"].map((area) => (
                    <div key={area} className="h-[52px] rounded-[100px] border border-[#2CBCDE] flex items-center px-[52px]">
                      <span className="text-black text-[18px] font-['Inter'] font-bold leading-[21.6px]">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Variant #14 — Michigan dark/purple */}
            <section className="mb-20 -mx-10 px-10 py-[150px] bg-[#191919] relative">
              <img src="/images/service-areas/roof.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-difference" />
              <div className="relative w-[1670px] max-w-full mx-auto grid grid-cols-2 gap-[100px]">
                <div>
                  <div className="inline-block bg-[rgba(112,55,150,0.55)] px-2 py-2">
                    <span className="text-white text-[17px] font-['Inter'] font-semibold uppercase leading-[17px]">Service areas</span>
                  </div>
                  <h3 className="mt-[13px] text-[50px] font-['Satoshi'] font-black uppercase leading-[60px]">
                    <span className="text-[#703796]">Serving The Entire</span><br />
                    <span className="text-white">State Of Michigan!</span>
                  </h3>
                  <div className="mt-[78px] grid grid-cols-2 gap-x-[162px]">
                    {[["Battle Creek","Sister Lakes"],["Kalamazoo","Bronson"],["Hartford","Lawrence"],["Cadillac","Grand Rapids"],["Dowagiac","Hastings"],["Decatur","Middleville"],["St. Joseph","Caledonia"],["Benton Harbor","Baldwin"],["Lake City","Watervliet"]].flat().map((c, i) => (
                      <div key={i} className={`h-[67px] flex items-center gap-6 ${i < 2 ? "border-t border-[#D9D9D9]" : ""} border-b border-[#D9D9D9]`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-white text-[24px] font-['Inter'] font-semibold leading-[33.6px]">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <p className="text-white text-[18px] font-['Inter'] leading-[25.2px]">Rapid Response provides exceptional roof restoration services across a wide range of areas. From urban to rural, residential to commercial, we've got you covered. Check out our service areas page to see if we cover your location and schedule your roof restoration project with us today!</p>
                  <div className="mt-[131px] h-[80px] flex items-center justify-center gap-3 bg-gradient-to-b from-[#703796] to-[#AD7DB7]">
                    <Phone className="w-6 h-6 text-white" />
                    <span className="text-white text-[18px] font-['Inter'] font-extrabold leading-[18px]">CALL US NOW</span>
                  </div>
                  <img src="/images/service-areas/truck.png" alt="Rapid Response Roofing truck" className="mt-[30px] w-[595px] max-w-full ml-auto" />
                </div>
              </div>
            </section>

            {/* Variant #15 — Maryland compact (map + chips side by side) */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #15 — Compact map + chips</p>
              <div className="w-[1670px] max-w-full mx-auto grid grid-cols-[755px_1fr] gap-[80px]">
                <div className="w-[755px] h-[500px] overflow-hidden">
                  <img src="/images/service-areas/maryland2.png" alt="Maryland map compact" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-black text-[20px] font-['Inter'] font-medium leading-[22px]">Service Areas</p>
                  <h3 className="mt-[40px] text-black text-[46px] font-['Inter'] font-semibold uppercase leading-[55.2px]">Our Service Areas</h3>
                  <p className="mt-[20px] text-black text-[22px] font-['Inter'] font-bold uppercase leading-[24.2px]">Serving Communities Across Maryland</p>
                  <p className="mt-[37px] text-[#696969] text-[20px] font-['Inter'] leading-[30px]">We proudly offer our expert roofing and exterior renovation services in the following areas:</p>
                  <div className="mt-[37px] grid grid-cols-2 gap-[20px]">
                    {["Anne Arundel County, Maryland","Baltimore County, Maryland","Centreville, Maryland","Chevy Chase, Maryland","Kent Island, Maryland","Laurel, Maryland"].map((area) => (
                      <div key={area} className="h-[52px] rounded-[100px] border border-[#2CBCDE] flex items-center px-[52px]">
                        <span className="text-black text-[18px] font-['Inter'] font-bold leading-[21.6px]">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Variant #16 — San Luis Obispo dark green hero with yellow city pills */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #16 — Dark green hero, yellow city pills</p>
              <div className="bg-[#0A2520] py-[70px] px-10">
                <div className="max-w-[900px] mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-[#E8F0E0] px-4 py-1.5 rounded mb-6">
                    <span className="text-[#0A2520]">📍</span>
                    <span className="text-[#0A2520] font-['Inter'] font-bold text-[12px] uppercase tracking-wider">Proudly serving the Central Coast</span>
                  </div>
                  <h3 className="text-white font-['Playfair_Display'] font-bold text-[36px] leading-[44px] mb-8">San Luis Obispo Home Painters Based In<br />Atascadero, CA Serving Central Coast<br />Communities</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {["San Luis Obispo, CA","Atascadero, CA","Templeton, CA","Paso Robles, CA","Morro Bay, CA","Cayucos, CA","Cambria, CA","Pismo Beach, CA","Arroyo Grande, CA","Shell Beach, CA","Nipomo, CA","Santa Maria, CA","Orcutt, CA"].map((city) => (
                      <span key={city} className="inline-flex items-center gap-2 bg-[#F4B526] text-[#0A2520] font-['Inter'] font-bold text-[12px] uppercase tracking-wider px-4 py-2 rounded">
                        📍 {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Variant #17 — Bay Area checkmark list + Google map */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #17 — Bay Area checkmark list + map</p>
              <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-[1fr_1.4fr] gap-12 mb-10">
                  <div>
                    <p className="text-neutral-700 font-['Inter'] text-[13px] mb-3">Serving Bay Area & Surrounding Areas</p>
                    <h3 className="font-['Inter'] font-bold text-[#16174F] text-[34px] leading-[40px] mb-6">Local, Personalized, Friendly Painting Services</h3>
                    <p className="text-neutral-700 font-['Inter'] text-[13px] leading-[22px] mb-3">At <strong>Antigua Superior Painting</strong>, we proudly serve clients throughout the Bay Area. From Alameda to Vallejo, our professional team is dedicated to delivering high-quality painting services tailored to your needs.</p>
                    <p className="text-neutral-700 font-['Inter'] text-[13px] leading-[22px]">As a locally rooted business, we understand the unique character of each community we serve. Our commitment to excellence, attention to detail, and friendly approach ensure that every project reflects the vibrant spirit of our neighborhoods.</p>
                  </div>
                  <div className="grid grid-cols-4 gap-x-6 gap-y-3 text-[13px] font-['Inter'] text-neutral-800">
                    {[
                      ["Alameda","Belmont","Benicia","Berkeley","Burlingame","Castro Valley","Cupertino","Daly City","East Palo Alto","El Cerrito"],
                      ["Emeryville","Foster City","Fremont","Hayward","Hercules","Menlo Park","Millbrae","Milpitas","Mountain View","Newark"],
                      ["Novato","Oakland","Palo Alto","Pinole","Redwood City","Richmond","San Bruno","San Carlos","San Francisco","San Jose"],
                      ["San Leandro","San Mateo","San Pablo","San Rafael","Sausalito","Santa Clara","South SF","Sunnyvale","Tiburon","Vallejo"],
                    ].map((col, ci) => (
                      <div key={ci} className="space-y-2">
                        {col.map((city) => {
                          const bold = ["Burlingame","Millbrae","San Bruno","San Carlos","San Francisco","Palo Alto","Menlo Park","San Mateo","Tiburon"].includes(city);
                          return (
                            <div key={city} className="flex items-center gap-2">
                              <span className="text-[#16174F]">✓</span>
                              <span className={bold ? "font-bold text-[#16174F]" : ""}>{city}</span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
                <img src="/images/service-areas/sf-bay.png" alt="Bay Area service map" className="w-full h-auto rounded" />
              </div>
            </section>

            {/* Variant #18 — Orange County dark navy city pills */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #18 — Orange County navy pills</p>
              <div className="max-w-[700px] mx-auto text-center py-10">
                <p className="text-[#E0813A] font-['Inter'] font-semibold text-[12px] uppercase tracking-[2px] mb-2">Orange County Painting Contractor</p>
                <h3 className="font-['Playfair_Display'] font-bold text-[#16174F] text-[28px] mb-3">Serving All of Orange County, CA</h3>
                <p className="text-neutral-600 font-['Inter'] text-[13px] leading-[20px] mb-8 max-w-[480px] mx-auto">From Huntington Beach to Irvine and everywhere in between, we bring professional painting and carpentry services to homeowners across Orange County.</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {["Huntington Beach","Newport Beach","Costa Mesa","Fountain Valley","Irvine","Norco","Garden Grove","Santa Ana","Orange","Tustin","Seal Beach","Rossmoor / Los Alamitos"].map((city) => (
                    <div key={city} className="border border-[#16174F] text-[#16174F] rounded-full px-4 py-2 text-[12px] font-['Inter'] flex items-center gap-2">
                      <span>📍</span>
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-600 font-['Inter'] text-[12px]">Don't see your city? We likely serve your area too!</p>
                <p className="text-[#E0813A] font-['Inter'] text-[12px] mt-1">Check if we serve your area → or <span className="underline">Call</span> (714) 225-5925</p>
              </div>
            </section>

            {/* Variant #19 — Our clinics map with overlay info card */}
            <section className="mb-20">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-['Outfit']">Variant #19 — Clinics map + info overlay card</p>
              <div className="max-w-[1100px] mx-auto">
                <h3 className="font-['Inter'] text-[#002856] text-[36px] mb-6">Our clinics</h3>
                <div className="relative">
                  <img src="/images/service-areas/moscow.png" alt="Clinics map" className="w-full h-[480px] object-cover rounded" />
                  <div className="absolute right-6 top-6 bottom-6 w-[340px] bg-[#002856] text-white p-7 rounded">
                    <h4 className="font-['Inter'] font-bold text-[18px] mb-1">K+31 on Lobachevskogo</h4>
                    <p className="font-['Inter'] text-white/70 text-[13px] mb-4">st. Lobachevskogo, 42/4</p>
                    <p className="font-['Inter'] font-bold text-[16px] mb-5">+7 499 999-31-31</p>
                    <p className="font-['Inter'] font-bold text-[14px] mb-1">Subway</p>
                    <p className="font-['Inter'] text-white/80 text-[13px] mb-4">🚇 🚇 Prospekt Vernadsky Station</p>
                    <p className="font-['Inter'] font-bold text-[14px] mb-1">By a car</p>
                    <p className="font-['Inter'] text-white/70 text-[12px] leading-[18px] mb-4">Lobachevsky, we pass the first barrier (security post of the City Clinical Hospital No. 31), turn right at the second barrier (security post K+31)</p>
                    <p className="font-['Inter'] text-white/80 text-[13px] mb-4">Parking pass</p>
                    <p className="font-['Inter'] font-bold text-[14px] mb-1">Opening hours</p>
                    <p className="font-['Inter'] text-white/80 text-[13px]">Mon–Fri 08:00 – 21:00</p>
                    <p className="font-['Inter'] text-white/80 text-[13px] mb-3">Weekends 09:00 – 19:00</p>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-full border border-white/40" />
                      <div className="w-7 h-7 rounded-full border border-white/40" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceAreas;
