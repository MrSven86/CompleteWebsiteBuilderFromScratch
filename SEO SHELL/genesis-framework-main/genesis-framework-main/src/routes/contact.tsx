import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import mapImg from "@/assets/map.png";
import phoneIcon from "@/assets/phone_icon.png";
import { SERVICES } from "./services.$slug";
import { ServiceAreasNavDropdown } from "./service-areas.$area";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Company — MyLogo" },
      { name: "description", content: "Get in touch — call, email, or send us a message. We'll be happy to help." },
      { property: "og:title", content: "Contact Company — MyLogo" },
      { property: "og:description", content: "Different ways to contact us." },
    ],
  }),
  component: ContactPage,
});

const O = "Outfit, sans-serif";
const R = "Roboto, sans-serif";
const RC = "'Roboto Condensed', sans-serif";
const OS = "'Open Sans', sans-serif";
const LA = "Lato, sans-serif";
const NS = "'Noto Sans', sans-serif";

function PhoneSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 31 29" fill="none">
      <path d="M26.15 19.76C27.32 20.93 28.29 22.12 29.12 23.6C29.27 23.86 29.63 23.91 29.85 23.7C30.94 22.6 31.04 21.14 30.43 20.07C29.34 18.18 27.77 16.6 25.88 15.52C24.74 14.87 23.28 15.07 22.34 16.01C22.07 16.39 22.13 16.7 22.37 16.83C23.85 17.67 25 18.61 26.15 19.76Z" fill="#2B2B2B"/>
      <path d="M25.28 20.63C24.01 19.37 22.73 18.35 20.99 17.5C20.87 17.44 20.74 17.44 20.62 17.49C17.16 18.85 11.95 13.67 13.31 10.19C13.36 10.07 13.36 9.93 13.3 9.82C11.75 6.72 9.2 4.22 6.28 2.54C6.07 2.42 5.8 2.48 5.67 2.68C-1.93 13.98 16.74 32.71 28.09 25.15C28.28 25.02 28.35 24.76 28.24 24.55C27.42 23.02 26.46 21.81 25.28 20.63Z" fill="#2B2B2B"/>
    </svg>
  );
}

function BluePhoneSvg() {
  return (
    <svg width="32" height="32" viewBox="0 0 31 29" fill="none">
      <path d="M26.15 19.76C27.32 20.93 28.29 22.12 29.12 23.6C29.27 23.86 29.63 23.91 29.85 23.7C30.94 22.6 31.04 21.14 30.43 20.07C29.34 18.18 27.77 16.6 25.88 15.52C24.74 14.87 23.28 15.07 22.34 16.01C22.07 16.39 22.13 16.7 22.37 16.83C23.85 17.67 25 18.61 26.15 19.76Z" fill="#075A78"/>
      <path d="M25.28 20.63C24.01 19.37 22.73 18.35 20.99 17.5C20.87 17.44 20.74 17.44 20.62 17.49C17.16 18.85 11.95 13.67 13.31 10.19C13.36 10.07 13.36 9.93 13.3 9.82C11.75 6.72 9.2 4.22 6.28 2.54C6.07 2.42 5.8 2.48 5.67 2.68C-1.93 13.98 16.74 32.71 28.09 25.15C28.28 25.02 28.35 24.76 28.24 24.55C27.42 23.02 26.46 21.81 25.28 20.63Z" fill="#075A78"/>
    </svg>
  );
}

function PinSvg() {
  return (
    <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
      <path d="M10.97 25.34C11.88 24.22 13 22.72 14.32 20.82C15.64 18.96 16.83 17.03 17.88 15.03C18.89 13.03 19.43 11.27 19.5 9.75C19.43 6.97 18.48 4.67 16.66 2.84C14.83 1.02 12.53 0.07 9.75 0C6.97 0.07 4.67 1.02 2.84 2.84C1.02 4.67 0.07 6.97 0 9.75C0.07 11.27 0.61 13.03 1.63 15.03C2.67 17.03 3.86 18.96 5.18 20.82C6.5 22.72 7.62 24.22 8.53 25.34C8.87 25.75 9.28 25.95 9.75 25.95C10.22 25.95 10.63 25.75 10.97 25.34ZM9.75 6.5C10.97 6.53 11.9 7.08 12.54 8.13C13.15 9.21 13.15 10.29 12.54 11.38C11.9 12.42 10.97 12.97 9.75 13C8.53 12.97 7.6 12.42 6.96 11.38C6.35 10.29 6.35 9.21 6.96 8.13C7.6 7.08 8.53 6.53 9.75 6.5Z" fill="#00A9E2"/>
    </svg>
  );
}

function MailSvg() {
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none">
      <path d="M2.44 3.8C1.76 3.83 1.18 4.07 0.71 4.51C0.27 4.99 0.03 5.56 0 6.24C0.03 7.05 0.36 7.69 0.96 8.17L12.04 16.5C12.68 16.9 13.32 16.9 13.96 16.5L25.04 8.17C25.64 7.69 25.97 7.05 26 6.24C25.97 5.56 25.73 4.99 25.29 4.51C24.82 4.07 24.24 3.83 23.56 3.8H2.44ZM0 9.49V20.05C0.03 20.96 0.36 21.73 0.96 22.34C1.57 22.95 2.34 23.27 3.25 23.3H22.75C23.66 23.27 24.43 22.95 25.04 22.34C25.64 21.73 25.97 20.96 26 20.05V9.49L14.93 17.77C14.35 18.21 13.71 18.43 13 18.43C12.29 18.43 11.65 18.21 11.07 17.77L0 9.49Z" fill="#00A9E2"/>
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

function ContactPage() {
  const scale = useScale();
  const canvasH = 3428;
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
          <img src={logo} alt="MyLogo" style={{ position: "absolute", left: 168, top: 25, height: 50 }} />
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
        <div style={{ width: 1920, height: 480, left: 0, top: 163, position: "absolute", background: "#27272A", overflow: "hidden" }}>
          <Link to="/" style={{ position: "absolute", left: 120, top: 17, color: "white", fontSize: 14, fontFamily: NS, textDecoration: "none" }}>Home</Link>
          <div style={{ position: "absolute", left: 173, top: 22, color: "white", fontFamily: NS }}>›</div>
          <div style={{ position: "absolute", left: 192, top: 14, color: "white", fontSize: 14, fontFamily: NS, fontWeight: 600 }}>Contact</div>

          <div style={{ width: 1069, position: "absolute", left: 116, top: 112, color: "white", fontSize: 60, fontFamily: O, fontWeight: 700, lineHeight: "60px" }}>
            Contact Company
          </div>
          <div style={{ width: 1049, position: "absolute", left: 116, top: 207, color: "white", fontSize: 24, fontFamily: O, lineHeight: "40px" }}>
            A friendly here&rsquo;s the different ways you can contact us text
          </div>
        </div>

        {/* CONTACT INFO + FORM */}
        {/* Left info column */}
        <div style={{ position: "absolute", left: 324, top: 802 }}>
          <PinSvg />
        </div>
        <div style={{ position: "absolute", left: 367, top: 793, color: "#27272A", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>Located</div>
        <div style={{ position: "absolute", left: 367, top: 826, color: "#525252", fontSize: 16, fontFamily: O, lineHeight: "28px" }}>Full adress</div>

        <div style={{ position: "absolute", left: 321, top: 902 }}><BluePhoneSvg /></div>
        <div style={{ position: "absolute", left: 367, top: 900, color: "#27272A", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>Give Us A Call</div>
        <div style={{ position: "absolute", left: 367, top: 938, color: "#525252", fontSize: 16, fontFamily: O, lineHeight: "28px" }}>(562) xxxxxxx</div>

        <div style={{ position: "absolute", left: 321, top: 1010 }}><MailSvg /></div>
        <div style={{ position: "absolute", left: 367, top: 1006, color: "#27272A", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>Email Us</div>
        <div style={{ position: "absolute", left: 367, top: 1042, color: "#525252", fontSize: 16, fontFamily: O, lineHeight: "28px" }}>email@email.com</div>

        <div style={{ position: "absolute", left: 367, top: 1117, color: "#27272A", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>Business Hours</div>
        <div style={{ position: "absolute", left: 367, top: 1150, color: "#525252", fontSize: 16, fontFamily: O, lineHeight: "28px" }}>Call us to set up an appointment</div>

        <div style={{ position: "absolute", left: 367, top: 1223, color: "#27272A", fontSize: 20, fontFamily: O, fontWeight: 700, letterSpacing: 0.55 }}>Fully Licensed &amp; Registered</div>
        <div style={{ position: "absolute", left: 367, top: 1256, color: "#525252", fontSize: 16, fontFamily: O, lineHeight: "28px" }}>License ID: xxxxxx (C-33 Painting)</div>

        {/* Form */}
        <div style={{ width: 619.81, height: 773.39, left: 900, top: 770, position: "absolute", background: "linear-gradient(180deg, #CECECE 0%, #888888 100%)" }}>
          <form style={{ position: "absolute", left: 20, top: 30, width: 579.81, display: "flex", flexDirection: "column", gap: 18 }}>
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
              <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>What Services Do You Need?</label>
              <input style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }} />
            </div>
            <div style={{ marginTop: 6 }}>
              <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Comment or Message</label>
              <textarea style={{ display: "block", marginTop: 12, width: 577.81, height: 118.39, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: 10, fontFamily: LA, resize: "none" }} />
            </div>
            <button type="submit" style={{ width: 82.63, height: 41, background: "#74100E", borderRadius: 3, border: "none", color: "white", fontSize: 17, fontFamily: OS, cursor: "pointer", marginTop: 4 }}>Submit</button>
          </form>
        </div>

        {/* MAP */}
        <img src={mapImg} alt="Service area map" style={{ width: 1440, height: 384, left: 240, top: 1670, position: "absolute", objectFit: "cover" }} />

        {/* FOOTER */}
        <div style={{ width: 1920, height: 928, left: 0, top: 2200, position: "absolute", background: "#525252" }}>
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
        <div style={{ width: 1920, height: 96, left: 0, top: 3128, position: "absolute", background: "#262626" }}>
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

/* ---------- Services Nav Dropdown ---------- */
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
