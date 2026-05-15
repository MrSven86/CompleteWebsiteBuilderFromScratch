import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import googleLogo from "@/assets/google_logo.png";
import mapImg from "@/assets/map.png";
import phoneIcon from "@/assets/phone_icon.png";
import { SERVICES } from "./services.$slug";
import { AREAS } from "./service-areas.$area";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Service Areas — MyLogo" },
      { name: "description", content: "Areas we service — see where we provide our professional services." },
      { property: "og:title", content: "Service Areas — MyLogo" },
      { property: "og:description", content: "Areas we service — see where we provide our professional services." },
    ],
  }),
  component: ServiceAreasPage,
});

const O = "Outfit, sans-serif";
const R = "Roboto, sans-serif";
const RC = "'Roboto Condensed', sans-serif";
const OS = "'Open Sans', sans-serif";
const LA = "Lato, sans-serif";
const NS = "'Noto Sans', sans-serif";

function Star({ size = 24, color = "#FC7C35" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12 19.64 9.05L14.81 8.64L12.92 4.18C12.58 3.37 11.42 3.37 11.08 4.18L9.19 8.63L4.36 9.04C3.48 9.11 3.12 10.21 3.79 10.79L7.46 13.97L6.36 18.69C6.16 19.55 7.09 20.23 7.85 19.77L12 17.27Z" fill={color}/>
    </svg>
  );
}

function PhoneSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 31 29" fill="none">
      <path d="M26.15 19.76C27.32 20.93 28.29 22.12 29.12 23.6C29.27 23.86 29.63 23.91 29.85 23.7C30.94 22.6 31.04 21.14 30.43 20.07C29.34 18.18 27.77 16.6 25.88 15.52C24.74 14.87 23.28 15.07 22.34 16.01C22.07 16.39 22.13 16.7 22.37 16.83C23.85 17.67 25 18.61 26.15 19.76Z" fill="#2B2B2B"/>
      <path d="M25.28 20.63C24.01 19.37 22.73 18.35 20.99 17.5C20.87 17.44 20.74 17.44 20.62 17.49C17.16 18.85 11.95 13.67 13.31 10.19C13.36 10.07 13.36 9.93 13.3 9.82C11.75 6.72 9.2 4.22 6.28 2.54C6.07 2.42 5.8 2.48 5.67 2.68C-1.93 13.98 16.74 32.71 28.09 25.15C28.28 25.02 28.35 24.76 28.24 24.55C27.42 23.02 26.46 21.81 25.28 20.63Z" fill="#2B2B2B"/>
    </svg>
  );
}

function useScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScale(w >= 1920 ? 1 : w / 1920);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

function ServicesNavDropdown({ left }: { left: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: "absolute", left: left - 16, top: 0, width: 180, height: 130, paddingLeft: 16, paddingRight: 16, color: "#020202", fontSize: 20, fontFamily: R, textTransform: "uppercase", cursor: "pointer", zIndex: 40 }}
    >
      <span style={{ position: "absolute", left: 16, top: 67, whiteSpace: "nowrap" }}>Services ▾</span>
      {open && (
        <div style={{ position: "absolute", top: 130, left: 0, background: "white", boxShadow: "0px 4px 16px rgba(0,0,0,0.18)", borderRadius: 6, padding: "8px 0", minWidth: 240, zIndex: 50 }}>
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} style={{ display: "block", padding: "12px 20px", color: "#020202", fontSize: 16, fontFamily: R, textTransform: "none", textDecoration: "none" }}>
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceAreasNavDropdown({ left }: { left: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: "absolute", left: left - 16, top: 0, width: 220, height: 130, paddingLeft: 16, paddingRight: 16, color: "#020202", fontSize: 20, fontFamily: R, textTransform: "uppercase", cursor: "pointer", zIndex: 40 }}
    >
      <Link to="/service-areas" style={{ position: "absolute", left: 16, top: 67, whiteSpace: "nowrap", color: "#020202", textDecoration: "none" }}>Service Areas ▾</Link>
      {open && (
        <div style={{ position: "absolute", top: 130, left: 0, background: "white", boxShadow: "0px 4px 16px rgba(0,0,0,0.18)", borderRadius: 6, padding: "8px 0", minWidth: 240, zIndex: 50 }}>
          {AREAS.map((a) => (
            <Link key={a.slug} to="/service-areas/$area" params={{ area: a.slug }} style={{ display: "block", padding: "12px 20px", color: "#020202", fontSize: 16, fontFamily: R, textTransform: "none", textDecoration: "none" }}>
              {a.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FaqItem({ q, defaultOpen = false }: { q: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ width: 1024, borderBottom: "1px solid #E5E5E5", background: "white" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", height: 64, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", cursor: "pointer", fontFamily: O, fontSize: 18, fontWeight: 600, color: "#111", textAlign: "left" }}>
        <span>{q}</span>
        <span style={{ fontSize: 24 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px", color: "#4B5563", fontSize: 16, fontFamily: O, lineHeight: "26px" }}>
          [Answer text expanding on this question for SEO and customer reassurance.]
        </div>
      )}
    </div>
  );
}

function ServiceAreasPage() {
  const scale = useScale();
  const canvasH = 5400;
  const wrapHeight = canvasH * scale;

  return (
    <div className="canvas-1920-wrap" style={{ width: "100%", height: wrapHeight, overflow: "hidden", background: "white" }}>
      <div className="canvas-1920" style={{ height: canvasH, background: "white", transform: `scale(${scale})` }}>
        {/* TOP BAR */}
        <div style={{ width: 1920, height: 36, left: 0, top: 0, position: "absolute", background: "linear-gradient(90deg, #001F2B 0%, #006991 100%)" }}>
          <div style={{ position: "absolute", left: 50, top: 8.5, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 15, height: 15, background: "#008000", borderRadius: 7.5 }} />
            <div style={{ color: "white", fontSize: 18, fontFamily: O, lineHeight: "30px" }}>
              02:59 PM | We are currently <span style={{ fontWeight: 600 }}>open!</span>
            </div>
          </div>
          <div style={{ position: "absolute", left: 1600, top: 9, color: "white", fontSize: 14, fontFamily: O, lineHeight: "30px" }}>
            Emergency? Call: 11-XXXX-XXXX
          </div>
        </div>

        {/* MENU BAR */}
        <div style={{ width: 1920, height: 130, left: 0, top: 33, position: "absolute", background: "#EDEDED", boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.20)", zIndex: 100 }}>
          <Link to="/"><img src={logo} alt="MyLogo" style={{ position: "absolute", left: 168, top: 25, height: 50 }} /></Link>
          <ServicesNavDropdown left={416} />
          <Link to="/about" style={{ position: "absolute", left: 639, top: 66, color: "#020202", fontSize: 20, fontFamily: R, textTransform: "uppercase", textDecoration: "none" }}>
            ABOUT US
          </Link>
          <ServiceAreasNavDropdown left={967} />
          <Link to="/contact" style={{ position: "absolute", left: 1207, top: 67, color: "#020202", fontSize: 20, fontFamily: R, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}>
            Contact
          </Link>
          <div style={{ width: 180, height: 44, left: 1408, top: 57, position: "absolute", borderRadius: 21, outline: "1px #00AFEF solid", outlineOffset: -1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <PhoneSvg />
            <div style={{ color: "#2B2B2B", fontSize: 20, fontFamily: RC }}>11-XXXX-XXXX</div>
          </div>
          <button style={{ width: 230, height: 64, left: 1645, top: 48, position: "absolute", background: "#757575", borderRadius: 10, border: "none", color: "white", fontSize: 16, fontFamily: R, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, cursor: "pointer" }}>
            Request a FREE Quote
          </button>
        </div>

        {/* DARK HERO */}
        <div style={{ width: 1920, height: 320, left: 0, top: 163, position: "absolute", background: "#27272A", overflow: "hidden" }}>
          <Link to="/" style={{ position: "absolute", left: 120, top: 17, color: "white", fontSize: 14, fontFamily: NS, textDecoration: "none" }}>Home</Link>
          <div style={{ position: "absolute", left: 173, top: 22, color: "white", fontFamily: NS }}>›</div>
          <div style={{ position: "absolute", left: 192, top: 14, color: "white", fontSize: 14, fontFamily: NS, fontWeight: 600 }}>Service Areas</div>

          <div style={{ width: 1069, position: "absolute", left: 116, top: 92, color: "white", fontSize: 60, fontFamily: O, fontWeight: 700, lineHeight: "60px" }}>
            Area + Service
          </div>
          <div style={{ width: 1049, position: "absolute", left: 116, top: 187, color: "white", fontSize: 20, fontFamily: O, lineHeight: "32px" }}>
            Detail about service area
          </div>
        </div>

        {/* SECTION 1 — Headline + map */}
        <div style={{ position: "absolute", left: 270, top: 600, color: "black", fontSize: 16, fontFamily: O, textTransform: "uppercase", lineHeight: "22.5px" }}>
          [SEO OPPORTUNITY]
        </div>
        <div style={{ width: 752, position: "absolute", left: 270, top: 638, color: "black", fontSize: 40, fontFamily: O, fontWeight: 700, lineHeight: "48px" }}>
          A headline about what we<br />provide and where
        </div>
        <div style={{ width: 700, position: "absolute", left: 270, top: 770, color: "black", fontSize: 16, fontFamily: O, lineHeight: "26px" }}>
          [SEO text describing the service area and the services. It could be a couple of rows long but no longer than four rows - nobody is gonna read this but for SEO purposes.]
        </div>
        <div style={{ position: "absolute", left: 270, top: 920, color: "black", fontSize: 22, fontFamily: O, fontWeight: 700 }}>We offer</div>
        <div style={{ position: "absolute", left: 270, top: 970, display: "flex", flexDirection: "column", gap: 10, color: "#1F2937", fontSize: 16, fontFamily: O }}>
          {["Service #1", "Service #2", "Service #3", "Service #4"].map((s) => (
            <div key={s}>{s}</div>
          ))}
        </div>
        <div style={{ width: 538, height: 460, left: 1139, top: 620, position: "absolute", background: "#D4D4D8", display: "flex", alignItems: "center", justifyContent: "center", color: "black", fontSize: 24, fontFamily: O }}>
          Relevant pic
        </div>

        {/* SECTION 2 — More text + map */}
        <div style={{ position: "absolute", left: 270, top: 1280, color: "black", fontSize: 16, fontFamily: O, textTransform: "uppercase", lineHeight: "22.5px" }}>
          [SEO OPPORTUNITY]
        </div>
        <div style={{ width: 752, position: "absolute", left: 270, top: 1318, color: "black", fontSize: 40, fontFamily: O, fontWeight: 700, lineHeight: "48px" }}>
          More text about service area
        </div>
        <div style={{ width: 700, position: "absolute", left: 270, top: 1410, color: "black", fontSize: 16, fontFamily: O, lineHeight: "26px" }}>
          [SEO text describing the service area and the services. It could be a couple of rows long but no longer than four rows - nobody is gonna read this but for SEO purposes.]
        </div>
        <div style={{ position: "absolute", left: 270, top: 1560, color: "black", fontSize: 22, fontFamily: O, fontWeight: 700 }}>Service areas</div>
        <div style={{ position: "absolute", left: 270, top: 1610, display: "flex", flexDirection: "column", gap: 10, color: "#1F2937", fontSize: 16, fontFamily: O }}>
          {AREAS.map((a) => (
            <Link key={a.slug} to="/service-areas/$area" params={{ area: a.slug }} style={{ color: "#1F2937", textDecoration: "none" }}>{a.name}</Link>
          ))}
        </div>
        <img src={mapImg} alt="Service area map" style={{ width: 538, height: 460, left: 1139, top: 1300, position: "absolute", objectFit: "cover", background: "#D4D4D8" }} />

        {/* REVIEWS */}
        <div style={{ width: 1920, height: 320, left: 0, top: 1900, position: "absolute", background: "white" }}>
          <div style={{ width: 1385, height: 218.25, left: 260, top: 40, position: "absolute" }}>
            <div style={{ position: "absolute", left: 24, top: 0, width: 180 }}>
              <div style={{ position: "absolute", left: 22, top: 8, color: "#1F2937", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>
                EXCELLENT
              </div>
              <div style={{ position: "absolute", left: 11, top: 45, display: "flex", gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} style={{ width: 30, height: 30, background: "#F6BB06", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Star size={22} color="white" />
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", left: 23, top: 81, fontSize: 14, fontFamily: O }}>
                <span style={{ color: "#4B5563" }}>Based on </span>
                <span style={{ color: "#1F2937", fontWeight: 700 }}>14 reviews</span>
              </div>
              <img src={googleLogo} alt="Google" style={{ position: "absolute", left: 42, top: 107, width: 94, height: 30, objectFit: "contain" }} />
            </div>
            {[
              { name: "Dennis Moody", date: "2025-03-31", initial: "D", color: "#7B1FA2", text: "Very prompt and professional! The guys were in and out with care and consideration for protecting..." },
              { name: "Carol Gilbert", date: "2024-12-13", initial: "C", color: "#1976D2", text: "The Escalantes guys were prompt, kept the house clean using drop cloths, did a beautiful job patching crack..." },
              { name: "Roberta Nemitz", date: "2024-10-25", initial: "R", color: "#2E7D32", text: "I hired Escalante's painting to paint the exterior of my house. They explained the entire process to me. The..." },
            ].map((r, idx) => (
              <div key={idx} style={{ width: 325, height: 218.25, left: 236 + idx * 364, top: 0, position: "absolute", background: "white", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.10)", borderRadius: 6 }}>
                <div style={{ width: 40, height: 40, left: 20, top: 20, position: "absolute", background: r.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontFamily: O }}>{r.initial}</div>
                <div style={{ position: "absolute", left: 72, top: 22, color: "#111827", fontSize: 14, fontFamily: O, fontWeight: 700 }}>{r.name}</div>
                <div style={{ position: "absolute", left: 72, top: 42, color: "#9CA3AF", fontSize: 12, fontFamily: O }}>{r.date}</div>
                <div style={{ position: "absolute", left: 20, top: 72, display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} color="#F6BB06" />)}
                </div>
                <div style={{ width: 296, position: "absolute", left: 20, top: 105, color: "#374151", fontSize: 14, fontFamily: O, lineHeight: "22.75px" }}>{r.text}</div>
                <div style={{ position: "absolute", left: 20, top: 178, color: "#6B7280", fontSize: 14, fontFamily: O }}>Read more</div>
              </div>
            ))}
            <div style={{ width: 190.61, height: 28, left: 1430.39, top: 274.25, position: "absolute", background: "#157351", color: "white", fontFamily: O, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              Review us on Google
            </div>
          </div>
        </div>

        {/* GREY CTA STRIP */}
        <div style={{ width: 1920, height: 160, left: 0, top: 2280, position: "absolute", background: "#D4D4D4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <div style={{ color: "white", fontSize: 32, fontFamily: O, fontWeight: 700 }}>Ready to schedule your free estimate?</div>
          <div style={{ color: "white", fontSize: 20, fontFamily: O }}>Call us today at: <span style={{ fontWeight: 700 }}>11-XXXX-XXXX</span></div>
        </div>

        {/* FAQ */}
        <div style={{ position: "absolute", left: 0, top: 2520, width: 1920, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ color: "black", fontSize: 16, fontFamily: O, textTransform: "uppercase" }}>[SEO OPPORTUNITY]</div>
          <div style={{ color: "black", fontSize: 48, fontFamily: O, fontWeight: 700 }}>[FAQ]</div>
          <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E5E5E5" }}>
            <FaqItem q="FAQ Question 1" defaultOpen />
            <FaqItem q="FAQ Question 2" />
            <FaqItem q="FAQ Question 3" />
          </div>
        </div>

        {/* CTA / CONTACT FORM */}
        <div style={{ width: 1786, height: 971, left: 31, top: 3260, position: "absolute" }}>
          <div style={{ position: "absolute", left: 130, top: 0, color: "black", fontSize: 16, fontFamily: O, textTransform: "uppercase", lineHeight: "22.5px" }}>
            GET IT TOUCH WITH US
          </div>
          <div style={{ width: 752, position: "absolute", left: 119, top: 38, color: "black", fontSize: 48.82, fontFamily: O, fontWeight: 700, lineHeight: "60px" }}>
            Need Any Urgent help?<br />Hire Us now!
          </div>
          <div style={{ width: 673, position: "absolute", left: 119, top: 205, color: "#78736D", fontSize: 20, fontFamily: O, lineHeight: "28px" }}>
            Contact us today for a free consultation and discover the difference our<br />professional team can make.
          </div>
          <div style={{ width: 619.81, height: 773.39, left: 1068, top: 86, position: "absolute", background: "linear-gradient(180deg, #CECECE 0%, #888888 100%)" }}>
            <div style={{ width: 525.21, position: "absolute", top: 72.37, left: (619.81 - 525.21) / 2, textAlign: "center", color: "white", fontSize: 35.2, fontFamily: OS, fontWeight: 700, textTransform: "capitalize", lineHeight: "38.72px" }}>
              SET UP YOUR SCHEDULE HERE!
            </div>
            <form style={{ position: "absolute", left: 20, top: 130, width: 579.81, display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Name <span style={{ color: "#D63637", fontWeight: 400 }}>*</span></label>
                <div style={{ display: "flex", gap: 23, marginTop: 12 }}>
                  <div style={{ flex: 1 }}>
                    <input style={{ width: "100%", height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
                    <div style={{ color: "#FF6000", fontSize: 14, fontFamily: LA, marginTop: 6 }}>First</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <input style={{ width: "100%", height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
                    <div style={{ color: "#FF6000", fontSize: 14, fontFamily: LA, marginTop: 6 }}>Last</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Email <span style={{ color: "#D63637", fontWeight: 400 }}>*</span></label>
                <input type="email" style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
              </div>
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Phone Number <span style={{ color: "#D63637", fontWeight: 400 }}>*</span></label>
                <input type="tel" style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
              </div>
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>What Services Do You Need? <span style={{ color: "#D63637", fontWeight: 400 }}>*</span></label>
                <input style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
              </div>
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Comment or Message</label>
                <textarea style={{ display: "block", marginTop: 12, width: 577.81, height: 118.39, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: 10, fontFamily: LA, resize: "none" }} />
              </div>
              <button type="submit" style={{ width: 82.63, height: 41, background: "#74100E", borderRadius: 3, border: "none", color: "white", fontSize: 17, fontFamily: LA, cursor: "pointer", marginTop: 4 }}>Submit</button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ width: 1920, height: 928, left: 0, top: 4376, position: "absolute", background: "#525252" }}>
          <img src={logo} alt="MyLogo" style={{ position: "absolute", left: 155, top: 130, height: 50 }} />
          <div style={{ position: "absolute", left: 159, top: 210, color: "rgba(255,255,255,0.68)", fontSize: 16, fontFamily: O, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>The Company Name</div>
          <div style={{ position: "absolute", left: 159, top: 260, color: "white", fontSize: 16, fontFamily: O, fontWeight: 700 }}>CITY</div>
          <div style={{ position: "absolute", left: 159, top: 300, color: "white", fontSize: 16, fontFamily: O, lineHeight: "24px" }}>Street name Nr,<br />Area code City</div>
          <img src={mapImg} alt="Location map" style={{ width: 482, height: 307, left: 159, top: 396, position: "absolute", objectFit: "cover", borderRadius: 2 }} />

          <div style={{ position: "absolute", left: 757, top: 236, color: "rgba(255,255,255,0.68)", fontSize: 16, fontFamily: O, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>Contact information</div>
          <img src={phoneIcon} alt="phone" style={{ width: 78, height: 78, left: 749, top: 336, position: "absolute" }} />
          <div style={{ position: "absolute", left: 757, top: 300, color: "white", fontSize: 20, fontFamily: O }}>Have A Question ?</div>
          <div style={{ position: "absolute", left: 834, top: 361, color: "white", fontSize: 24, fontFamily: O }}>(323) 742-8448</div>
          <div style={{ position: "absolute", left: 765, top: 433, color: "white", fontSize: 20, fontFamily: O, fontWeight: 700 }}>Opening Hours:</div>
          <div style={{ position: "absolute", left: 768, top: 463, color: "#FBFBFB", fontSize: 20, fontFamily: O, fontWeight: 700, lineHeight: "28px" }}>Mon: <br />Tue:<br />Wed:<br />Thur:<br />Fri:</div>

          <div style={{ position: "absolute", left: 1190, top: 236, color: "rgba(255,255,255,0.30)", fontSize: 16, fontFamily: O, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>Om oss</div>
          <div style={{ position: "absolute", left: 1190, top: 276, display: "flex", flexDirection: "column", gap: 16 }}>
            {["Page link #1", "Page link #2", "Page link #3", "Page link #4"].map((p) => (
              <div key={p} style={{ color: "white", fontSize: 16, fontFamily: O }}>{p}</div>
            ))}
          </div>

          <div style={{ position: "absolute", left: 1432, top: 238, color: "rgba(255,255,255,0.30)", fontSize: 16, fontFamily: O, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>Service Areas</div>
          <div style={{ position: "absolute", left: 1432, top: 278, display: "flex", flexDirection: "column", gap: 16 }}>
            {["Page link #1", "Page link #2", "Page link #3", "Page link #4"].map((p) => (
              <div key={p} style={{ color: "white", fontSize: 16, fontFamily: O }}>{p}</div>
            ))}
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div style={{ width: 1920, height: 96, left: 0, top: 5304, position: "absolute", background: "#262626" }}>
          {[1273, 1329, 1385, 1441].map((left, i) => (
            <div key={i} style={{ width: 40, height: 40, left, top: 28, position: "absolute", background: "#404040", borderRadius: 64, display: "flex", alignItems: "center", justifyContent: "center", color: "#E5E5E5", fontSize: 18, cursor: "pointer" }}>
              {["f", "in", "X", "ig"][i]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
