import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "./services.$slug";
import { ServiceAreasNavDropdown } from "./service-areas.$area";
import logo from "@/assets/logo.png";
import googleLogo from "@/assets/google_logo.png";
import mapImg from "@/assets/map.png";
import phoneIcon from "@/assets/phone_icon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyLogo — Professional Painting Services in Los Angeles" },
      {
        name: "description",
        content:
          "MyLogo delivers premium painting and decorating services across Los Angeles. Get a free quote today.",
      },
      { property: "og:title", content: "MyLogo — Professional Painting Services" },
      {
        property: "og:description",
        content: "Premium painting and decorating services in Los Angeles.",
      },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */
const O = "Outfit, sans-serif";
const R = "Roboto, sans-serif";
const RC = "'Roboto Condensed', sans-serif";
const OS = "'Open Sans', sans-serif";
const LA = "Lato, sans-serif";
const MO = "Montserrat, sans-serif";
const IN = "Inter, sans-serif";
const BAU = "'Bauhaus 93', 'Bowlby One', Impact, sans-serif";

function Star({ size = 24, color = "#FC7C35" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
        fill={color}
      />
    </svg>
  );
}

function PhoneSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.1475 19.7558C27.3212 20.9285 28.2861 22.1245 29.1168 23.5964C29.2674 23.8634 29.6313 23.9136 29.8476 23.6964C30.9407 22.5988 31.0387 21.1365 30.4271 20.0706C29.3441 18.1767 27.7731 16.6049 25.883 15.5242C24.7391 14.8705 23.2838 15.0702 22.3441 16.0098C22.2932 16.0607 22.2672 16.1023 22.2235 16.1645C22.0658 16.3882 22.1348 16.6998 22.3733 16.834C23.8531 17.6664 24.9983 18.6073 26.1475 19.7558Z" fill="#2B2B2B"/>
      <path d="M25.2765 20.6282C24.0135 19.3664 22.725 18.3482 20.9903 17.4988C20.8735 17.4416 20.7378 17.4389 20.6168 17.4866C17.159 18.8487 11.9518 13.6689 13.3105 10.1923C13.3582 10.0701 13.355 9.93329 13.2962 9.81597C11.7472 6.72251 9.19661 4.21874 6.28253 2.54456C6.07317 2.42431 5.80453 2.48397 5.66979 2.68431C-1.92869 13.9839 16.743 32.7118 28.0855 25.1521C28.2816 25.0213 28.3459 24.7611 28.2353 24.553C27.4213 23.021 26.4589 21.8099 25.2765 20.6282Z" fill="#2B2B2B"/>
      <path d="M13.9568 8.43664C14.0931 8.67544 14.4045 8.74597 14.6281 8.5861C14.6999 8.53476 14.7516 8.49884 14.788 8.46246C15.7299 7.51972 15.9319 6.06283 15.2774 4.91891C14.1975 3.02881 12.6258 1.45784 10.7318 0.374808C9.68076 -0.226832 8.22133 -0.148823 7.12473 0.936288C6.90959 1.14919 6.95561 1.50679 7.21523 1.66234C9.90785 3.27633 12.3331 5.59108 13.9568 8.43664Z" fill="#2B2B2B"/>
      <path d="M14.2994 25.9406C14.1381 25.8527 13.9413 25.8674 13.7948 25.9784C11.9307 27.3895 9.33246 27.5086 7.48191 26.6134C8.18646 25.9359 8.63277 25.0695 8.68134 24.1576C8.81215 21.6623 6.69396 20.7679 5.23568 21.7063C3.80292 22.6284 3.77348 24.9008 5.29812 26.5325C5.14549 26.5865 4.98824 26.6319 4.82637 26.6666C4.09484 26.8247 2.27257 26.9611 1.16411 24.8236C1.00763 24.5214 0.635311 24.4035 0.333142 24.5599C0.0309724 24.7172 -0.087737 25.0887 0.0695143 25.3917C1.10938 27.3982 2.98483 28.3255 5.08691 27.8722C5.54402 27.7736 5.97646 27.6148 6.3719 27.4082C8.64696 28.8278 12.1556 28.8409 14.6583 26.8634C14.9189 26.6574 14.8807 26.2484 14.5865 26.0941C14.4906 26.0438 14.3949 25.9926 14.2994 25.9406ZM7.44953 24.0921C7.41408 24.7627 7.02095 25.4164 6.41815 25.9074C5.8354 25.3794 5.47079 24.7234 5.39987 24.0119C5.2787 22.7965 6.28672 22.3321 6.9138 22.6984C7.29537 22.9197 7.48499 23.4145 7.44953 24.0921Z" fill="#2B2B2B"/>
    </svg>
  );
}

/* responsive scaling: scale 1920px canvas to viewport width */
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

function Index() {
  const scale = useScale();
  const wrapRef = useRef<HTMLDivElement>(null);
  // canvas height = 8698.45 * scale
  const wrapHeight = 8698.45 * scale;

  return (
    <div
      className="canvas-1920-wrap"
      ref={wrapRef}
      style={{ width: "100%", height: wrapHeight, overflow: "hidden", background: "white" }}
    >
      <div
        className="canvas-1920"
        style={{
          height: 8698.45,
          background: "white",
          transform: `scale(${scale})`,
        }}
      >
        {/* ===================== TOP BAR ===================== */}
        <div
          style={{
            width: 1920,
            height: 36,
            left: 0,
            top: 0,
            position: "absolute",
            background: "linear-gradient(90deg, #001F2B 0%, #006991 100%)",
          }}
        >
          <div style={{ position: "absolute", left: 50, top: 8.5, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 15, height: 15, background: "#008000", borderRadius: 7.5 }} />
            <div style={{ color: "white", fontSize: 18, fontFamily: O, fontWeight: 400, lineHeight: "30px" }}>
              02:59 PM | We are currently <span style={{ fontWeight: 600 }}>open!</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: 1600,
              top: 9,
              color: "white",
              fontSize: 14,
              fontFamily: O,
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            Emergency? Call: 11-XXXX-XXXX
          </div>
        </div>

        {/* ===================== MENU BAR ===================== */}
        <div
          style={{
            width: 1920,
            height: 130,
            left: 0,
            top: 33,
            position: "absolute",
            background: "#EDEDED",
            boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.20)",
            zIndex: 100,
          }}
        >
          {/* Logo */}
          <img src={logo} alt="MyLogo" style={{ position: "absolute", left: 168, top: 25, height: 50, width: "auto" }} />

          {/* Nav links */}
          <ServicesNavDropdown left={416} />

          <Link
            to="/about"
            style={{
              position: "absolute",
              left: 639,
              top: 66,
              color: "#020202",
              fontSize: 20,
              fontFamily: R,
              fontWeight: 400,
              textTransform: "uppercase",
              lineHeight: "22.5px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            ABOUT US
          </Link>
          <ServiceAreasNavDropdown left={967} />
          <Link
            to="/contact"
            style={{
              position: "absolute",
              left: 1207,
              top: 66,
              color: "#020202",
              fontSize: 20,
              fontFamily: R,
              fontWeight: 500,
              textTransform: "uppercase",
              lineHeight: "22.5px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>

          {/* Phone pill */}
          <div
            style={{
              width: 180,
              height: 44,
              left: 1408,
              top: 57,
              position: "absolute",
              borderRadius: 21,
              outline: "1px #00AFEF solid",
              outlineOffset: -1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <PhoneSvg />
            <div style={{ color: "#2B2B2B", fontSize: 20, fontFamily: RC, fontWeight: 400 }}>11-XXXX-XXXX</div>
          </div>

          {/* CTA */}
          <button
            style={{
              width: 230.19,
              height: 64,
              left: 1645.09,
              top: 48,
              position: "absolute",
              background: "#757575",
              borderRadius: 10,
              border: "none",
              color: "white",
              fontSize: 16,
              fontFamily: R,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              cursor: "pointer",
            }}
          >
            Request a FREE Quote
          </button>
        </div>

        {/* ===================== HERO ===================== */}
        {/* SEO opportunity small label */}
        <div
          style={{
            position: "absolute",
            left: 123,
            top: 237,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
          }}
        >
          [SERVICE] in [CITY]
        </div>

        {/* H1 */}
        <div
          style={{
            width: 1069,
            position: "absolute",
            left: 114,
            top: 282,
            color: "#050505",
            fontSize: 61.03,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          [Juicy Adjective] from [differentiated competitor with USP]
        </div>

        {/* Sub header */}
        <div
          style={{
            width: 1049,
            position: "absolute",
            left: 115,
            top: 441,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "40.6px",
          }}
        >
          [Sub header that expands on the differentiated value proposition from the headline in a conversational tone
          creating enough anticipation to keep scrolling]
        </div>

        {/* Bullet 1 */}
        <div
          style={{
            position: "absolute",
            left: 115,
            top: 530,
            color: "black",
            fontSize: 31.25,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "40.6px",
          }}
        >
          Bullet point 1
        </div>
        <div
          style={{
            position: "absolute",
            left: 115,
            top: 570,
            color: "black",
            fontSize: 20,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          Optional Sub header for the bullet point
        </div>

        {/* Bullet 2 */}
        <div
          style={{
            position: "absolute",
            left: 113,
            top: 614,
            color: "black",
            fontSize: 31.25,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "40.6px",
          }}
        >
          Bullet point 2
        </div>
        <div
          style={{
            position: "absolute",
            left: 115,
            top: 654,
            color: "black",
            fontSize: 20,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          Optional Sub header for the bullet point
        </div>

        {/* Hero CTA */}
        <button
          style={{
            position: "absolute",
            left: 113,
            top: 723,
            padding: "14px 25px 15.39px",
            background: "#A8A8A8",
            borderRadius: 30,
            border: "1px solid #A8A8A8",
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "22.4px",
            cursor: "pointer",
          }}
        >
          Get a Free Consultation
        </button>

        {/* Hero placeholder picture */}
        <div
          style={{
            width: 538,
            height: 460,
            left: 1248,
            top: 248,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 285,
            position: "absolute",
            left: 1367,
            top: 412,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          Picture that gives a hint of your future should you employ our service
        </div>

        {/* Hero stat groups (stars + labels) */}
        {[
          { left: 1268, top: 742, label: "REVIEWS" },
          { left: 1453, top: 740, label: "YEARS IN BUSINESS" },
          { left: 1638, top: 738, label: "CERTIFICATIONS" },
        ].map((s) => (
          <div key={s.label} style={{ position: "absolute", left: s.left, top: s.top, display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ display: "flex" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <div style={{ color: "#5E5E5E", fontSize: 13, fontFamily: O, fontWeight: 400, lineHeight: "22.4px" }}>
              {s.label}
            </div>
          </div>
        ))}

        {/* ===================== FRIENDLY H1 (Value Prop) ===================== */}
        <div
          style={{
            position: "absolute",
            left: 327,
            top: 998,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
          }}
        >
          [SEO OPPORTUNITY]
        </div>
        <div
          style={{
            width: 752,
            position: "absolute",
            left: 327,
            top: 1039,
            color: "#050505",
            fontSize: 48.82,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          [Friendly tonality - expanding on Value Proposition]
        </div>
        <div
          style={{
            width: 738,
            position: "absolute",
            left: 325,
            top: 1185,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "40.6px",
          }}
        >
          [Sub header that expands on the differentiated value proposition from the headline in a conversational tone
          creating enough anticipation to keep scrolling]
        </div>
        {/* Bullet point 1 of friendly section */}
        <div
          style={{
            position: "absolute",
            left: 327,
            top: 1354,
            color: "black",
            fontSize: 31.25,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "40.6px",
          }}
        >
          Bullet point 1
        </div>
        <div
          style={{
            position: "absolute",
            left: 327,
            top: 1395,
            color: "black",
            fontSize: 20,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          Optional Sub header for the bullet point
        </div>
        <button
          style={{
            position: "absolute",
            left: 318,
            top: 1458,
            padding: "14px 25px 15.39px",
            background: "#A8A8A8",
            borderRadius: 30,
            border: "1px solid #A8A8A8",
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          Get a Free Consultation
        </button>

        {/* Friendly section grey placeholder pic */}
        <div
          style={{
            width: 538,
            height: 460,
            left: 1164,
            top: 1015,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 285,
            position: "absolute",
            left: 1299,
            top: 1179,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          UNIQE PIC OF COMPANY
        </div>

        {/* ===================== SERVICES ===================== */}
        <div style={{ width: 1920, height: 1074.3, left: 0, top: 1677, position: "absolute", background: "white" }}>
          <div style={{ width: 1400, height: 914.3, left: 260, top: 80, position: "absolute" }}>
            {/* SEO label */}
            <div
              style={{
                position: "absolute",
                left: 595,
                top: -51,
                color: "black",
                fontSize: 16,
                fontFamily: O,
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: "22.5px",
              }}
            >
              [SEO OPPORTUNITY]
            </div>
            {/* Title */}
            <div
              style={{
                width: 1327,
                position: "absolute",
                left: 17,
                top: 0,
                textAlign: "center",
                color: "#050505",
                fontSize: 61.03,
                fontFamily: O,
                fontWeight: 700,
                lineHeight: "60px",
              }}
            >
              [OUR SERVICES]
            </div>
            <div
              style={{
                width: 673.53,
                position: "absolute",
                left: 329,
                top: 87,
                textAlign: "center",
                color: "#78736D",
                fontSize: 16,
                fontFamily: O,
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              [A text easing the visitor in to what they can expect to see in this section, explaining how there are 6
              ways we can help you with Y in a conversational tone]
            </div>

            {/* Service cards row 1 */}
            {[
              { left: 32, top: 212.3 },
              { left: 488, top: 212.3 },
              { left: 944, top: 212.3 },
            ].map((c, i) => (
              <ServiceCard key={`r1-${i}`} left={c.left} top={c.top} />
            ))}
          </div>

          {/* Service cards row 2 (positioned in outer container) */}
          {[
            { left: 288, top: 942 },
            { left: 744, top: 942 },
            { left: 1200, top: 942 },
          ].map((c, i) => (
            <ServiceCard key={`r2-${i}`} left={c.left} top={c.top} />
          ))}

          {/* CTA below services */}
          <button
            style={{
              position: "absolute",
              left: 846,
              top: 1609,
              padding: "14px 25px 15.39px",
              background: "#A8A8A8",
              borderRadius: 30,
              border: "1px solid #A8A8A8",
              color: "black",
              fontSize: 16,
              fontFamily: O,
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Get a Free Consultation
          </button>
        </div>

        {/* ===================== ABOUT ===================== */}
        <div
          style={{
            position: "absolute",
            left: 279,
            top: 3540,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
          }}
        >
          [SEO OPPORTUNITY]
        </div>
        <div
          style={{
            width: 752,
            position: "absolute",
            left: 274,
            top: 3576,
            color: "#050505",
            fontSize: 48.82,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          [ABOUT]
        </div>
        <div
          style={{
            width: 738,
            position: "absolute",
            left: 274,
            top: 3649,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "40.6px",
          }}
        >
          [OUR UNIQUE history, our unique way of helping you solve problems]
        </div>
        <button
          style={{
            position: "absolute",
            left: 265,
            top: 3812,
            padding: "14px 25px 15.39px",
            background: "#A8A8A8",
            borderRadius: 30,
            border: "1px solid #A8A8A8",
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          Read more about us
        </button>
        <div
          style={{
            width: 538,
            height: 380,
            left: 1111,
            top: 3522,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 285,
            position: "absolute",
            left: 1246,
            top: 3657,
            color: "black",
            fontSize: 25,
            fontFamily: O,
            fontWeight: 400,
            lineHeight: "30px",
          }}
        >
          UNIQE PIC OF COMPANY
        </div>

        {/* ===================== REVIEWS ===================== */}
        <div style={{ width: 1905, height: 342, left: 0, top: 4007, position: "absolute", background: "white" }}>
          <div style={{ width: 1385, height: 218.25, left: 260, top: 40, position: "absolute" }}>
            {/* Trustpilot-style summary */}
            <div style={{ width: 180, position: "absolute", left: 24, top: 0 }}>
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  top: 8,
                  color: "#1F2937",
                  fontSize: 20,
                  fontFamily: O,
                  fontWeight: 700,
                  letterSpacing: 0.55,
                }}
              >
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

            {/* Three review cards */}
            {[
              { name: "Dennis Moody", date: "2025-03-31", initial: "D", color: "#7B1FA2", text: "Very prompt and professional! The guys were in and out with care and consideration for protecting..." },
              { name: "Carol Gilbert", date: "2024-12-13", initial: "C", color: "#1976D2", text: "Excellent service from start to finish. The team was punctual, courteous, and the quality was outstanding..." },
              { name: "Marcus Lee", date: "2024-11-02", initial: "M", color: "#2E7D32", text: "I hired Escalante's painting to paint the exterior of my house. They explained the entire process to me. The..." },
            ].map((r, idx) => (
              <div
                key={idx}
                style={{
                  width: 325,
                  height: 218.25,
                  left: 236 + idx * 364,
                  top: 0,
                  position: "absolute",
                  background: "white",
                  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.10)",
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    left: 20,
                    top: 20,
                    position: "absolute",
                    background: r.color,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontFamily: O,
                  }}
                >
                  {r.initial}
                </div>
                <div style={{ position: "absolute", left: 72, top: 22, color: "#111827", fontSize: 14, fontFamily: O, fontWeight: 700 }}>
                  {r.name}
                </div>
                <div style={{ position: "absolute", left: 72, top: 42, color: "#9CA3AF", fontSize: 12, fontFamily: O }}>
                  {r.date}
                </div>
                <div style={{ position: "absolute", left: 20, top: 72, display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} color="#F6BB06" />
                  ))}
                </div>
                <div
                  style={{
                    width: 296,
                    position: "absolute",
                    left: 20,
                    top: 105,
                    color: "#374151",
                    fontSize: 14,
                    fontFamily: O,
                    lineHeight: "22.75px",
                  }}
                >
                  {r.text}
                </div>
                <div style={{ position: "absolute", left: 20, top: 178, color: "#6B7280", fontSize: 14, fontFamily: O }}>
                  Read more
                </div>
              </div>
            ))}

            {/* arrow circle */}
            <div
              style={{
                width: 40,
                height: 40,
                left: 1336,
                top: 64,
                position: "absolute",
                borderRadius: "50%",
                outline: "1px #E5E7EB solid",
                outlineOffset: -1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4B5563",
                fontSize: 16,
              }}
            >
              ›
            </div>
            {/* "Review us on Google" green chip */}
            <div
              style={{
                width: 190.61,
                height: 28,
                left: 1430.39,
                top: 274.25,
                position: "absolute",
                background: "#157351",
                color: "white",
                fontFamily: O,
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              Review us on Google
            </div>
          </div>
        </div>

        {/* ===================== GALLERY ===================== */}
        <div
          style={{
            width: 273,
            position: "absolute",
            left: 799,
            top: 4556,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
            textAlign: "center",
          }}
        >
          See why our customers love us
        </div>
        <div
          style={{
            width: 752,
            position: "absolute",
            left: 580,
            top: 4579,
            textAlign: "center",
            color: "#050505",
            fontSize: 48.82,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          Our Best Work
        </div>
        {[135, 492.38, 849.75, 1207.13, 1564.5].map((left, i) => (
          <div
            key={i}
            style={{
              width: 325.38,
              height: 185.92,
              left,
              top: 4709,
              position: "absolute",
              background: "#D9D9D9",
            }}
          />
        ))}

        {/* ===================== SECONDARY CTA ===================== */}
        <div
          style={{
            width: 1920,
            height: 110,
            left: 0,
            top: 4960,
            position: "absolute",
            background: "#A8A8A8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <div style={{ color: "white", fontSize: 28, fontFamily: O, fontWeight: 700 }}>
            Ready to schedule your free estimate?
          </div>
          <div style={{ color: "white", fontSize: 16, fontFamily: O }}>
            Contact Us Now Or Reach Us At XXXXXXX &nbsp;›
          </div>
        </div>

        {/* ===================== PROCESS ===================== */}
        <div
          style={{
            position: "absolute",
            left: 447,
            top: 5329,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
          }}
        >
          [SEO OPPORTUNITY]
        </div>
        <div
          style={{
            width: 752,
            position: "absolute",
            left: 447,
            top: 5352,
            color: "#050505",
            fontSize: 48.82,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          [OUR PROCESS]
        </div>
        <div style={{ width: 1140, height: 435.39, left: 419, top: 5412, position: "absolute" }}>
          {[
            { left: 50, iconLeft: 137.3, icon: "🏠", title: "PROJECT PLANNING", body: "Bran Painting and Decorating will draw a plan that fits exactly your wants and needs, and handle expedite permits, so any construction complies with state and local building codes. We will be following your project and assuring every detail along the process." },
            { left: 451, iconLeft: 519.98, icon: "🛠", title: "CONSTRUCTION", body: "We offer a complete service for the construction process, that covers every aspect of demolition, building, design and final touches so you can enjoy your space. We only partner with the best suppliers to ensure the quality of our works." },
            { left: 839.64, iconLeft: 908.92, icon: "🏡", title: "FINISHING TOUCHES", body: "Final inspections, paint touch-ups, and a thorough clean-up to ensure your space looks flawless. We hand over the keys with confidence that every detail is exactly as expected." },
          ].map((step, i) => (
            <div key={i}>
              <div
                style={{
                  position: "absolute",
                  left: step.iconLeft,
                  top: 85,
                  fontSize: 80,
                  color: "#4D4D4D",
                  textAlign: "center",
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  width: i === 1 ? 262 : i === 2 ? 251.45 : 250.94,
                  position: "absolute",
                  left: step.left,
                  top: 207,
                  textAlign: "center",
                  color: "black",
                  fontSize: 30,
                  fontFamily: O,
                  fontWeight: 700,
                  lineHeight: "45px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  width: i === 0 ? 342.23 : i === 1 ? 339.59 : 339.59,
                  position: "absolute",
                  left: i === 0 ? 4 : i === 1 ? 399 : 800,
                  top: i === 0 ? 280 : 271,
                  textAlign: "center",
                  color: "black",
                  fontSize: 16,
                  fontFamily: O,
                  fontWeight: 400,
                  lineHeight: "28.8px",
                }}
              >
                {step.body}
              </div>
            </div>
          ))}
        </div>

        {/* ===================== FAQ ===================== */}
        <div
          style={{
            position: "absolute",
            left: 488,
            top: 5930,
            color: "black",
            fontSize: 16,
            fontFamily: O,
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "22.5px",
          }}
        >
          Got Questions? We&rsquo;ve Got Answers!
        </div>
        <div
          style={{
            width: 752,
            position: "absolute",
            left: 488,
            top: 5953,
            color: "#050505",
            fontSize: 48.82,
            fontFamily: O,
            fontWeight: 700,
            lineHeight: "60px",
          }}
        >
          [FAQ]
        </div>
        <div style={{ width: 1000, left: 489, top: 6079, position: "absolute" }}>
          {/* FAQ 1 expanded */}
          <div
            style={{
              width: 1000,
              height: 62.39,
              position: "absolute",
              left: 0,
              top: 0,
              background: "#F4F5F8",
              borderRadius: 2,
              outline: "2px #222326 solid",
              outlineOffset: -2,
            }}
          >
            <div style={{ position: "absolute", left: 18, top: 21, color: "black", fontSize: 16, fontFamily: O, fontWeight: 700, lineHeight: "26.4px" }}>
              FAQ QUESTION 1
            </div>
            <div style={{ position: "absolute", right: 22, top: 27, width: 13, height: 3, background: "#030303" }} />
          </div>
          <div
            style={{
              width: 1000,
              height: 91.5,
              position: "absolute",
              left: 0,
              top: 62.39,
              borderLeft: "2px #222326 solid",
              borderRight: "2px #222326 solid",
              borderBottom: "2px #222326 solid",
              background: "#F4F5F8",
            }}
          >
            <div style={{ position: "absolute", left: 18, top: 18, color: "black", fontSize: 16, fontFamily: O, lineHeight: "24.75px", letterSpacing: 1.4 }}>
              SEO optimized answer to FAQ question 1
            </div>
          </div>
          {/* FAQ 2 */}
          <div
            style={{
              width: 1000,
              height: 62.39,
              position: "absolute",
              left: 0,
              top: 160.28,
              background: "white",
              borderRadius: 2,
              outline: "2px #222326 solid",
              outlineOffset: -2,
            }}
          >
            <div style={{ position: "absolute", left: 22, top: 21.72, color: "black", fontSize: 16, fontFamily: O, fontWeight: 700 }}>
              FAQ QUESTION 2
            </div>
            <div style={{ position: "absolute", right: 22, top: 24, width: 13, height: 13, background: "black" }} />
          </div>
          {/* FAQ 3 */}
          <div
            style={{
              width: 1000,
              height: 62.39,
              position: "absolute",
              left: 0,
              top: 229.06,
              background: "white",
              borderRadius: 2,
              outline: "2px #222326 solid",
              outlineOffset: -2,
            }}
          >
            <div style={{ position: "absolute", left: 20, top: 20.94, color: "black", fontSize: 16, fontFamily: O, fontWeight: 700 }}>
              FAQ QUESTION 3
            </div>
            <div style={{ position: "absolute", right: 22, top: 24, width: 13, height: 13, background: "black" }} />
          </div>
        </div>

        {/* ===================== CTA / CONTACT ===================== */}
        <div style={{ width: 1786, height: 971, left: 46, top: 6533, position: "absolute" }}>
          <div
            style={{
              position: "absolute",
              left: 130,
              top: 0,
              color: "black",
              fontSize: 16,
              fontFamily: O,
              textTransform: "uppercase",
              lineHeight: "22.5px",
            }}
          >
            GET IT TOUCH WITH US
          </div>
          <div
            style={{
              width: 752,
              position: "absolute",
              left: 119,
              top: 38,
              color: "#050505",
              fontSize: 48.82,
              fontFamily: O,
              fontWeight: 700,
              lineHeight: "60px",
            }}
          >
            Need Any Urgent help?
            <br />
            Hire Us now!
          </div>
          <div
            style={{
              width: 673.53,
              position: "absolute",
              left: 119,
              top: 205,
              color: "#78736D",
              fontSize: 20,
              fontFamily: O,
              lineHeight: "28px",
            }}
          >
            Contact us today for a free consultation and discover the difference our
            <br />
            professional painters can make in your Los Angeles home!
          </div>

          {/* Form panel */}
          <div
            style={{
              width: 619.81,
              height: 773.39,
              left: 1068,
              top: 86,
              position: "absolute",
              background: "linear-gradient(180deg, #CECECE 0%, #888888 100%)",
            }}
          >
            <div
              style={{
                width: 525.21,
                position: "absolute",
                top: 72.37,
                left: (619.81 - 525.21) / 2,
                textAlign: "center",
                color: "white",
                fontSize: 35.2,
                fontFamily: OS,
                fontWeight: 700,
                textTransform: "capitalize",
                lineHeight: "38.72px",
              }}
            >
              SET UP YOUR SCHEDULE HERE!
            </div>
            <form style={{ position: "absolute", left: 20, top: 130, width: 579.81, display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name */}
              <div>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>
                  Name <span style={{ color: "#D63637", fontWeight: 400 }}>*</span>
                </label>
                <div style={{ display: "flex", gap: 23, marginTop: 12 }}>
                  <div style={{ flex: 1 }}>
                    <input
                      style={{ width: "100%", height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }}
                    />
                    <div style={{ color: "#FF6000", fontSize: 14, fontFamily: LA, marginTop: 6 }}>First</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      style={{ width: "100%", height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }}
                    />
                    <div style={{ color: "#FF6000", fontSize: 14, fontFamily: LA, marginTop: 6 }}>Last</div>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>
                  Email <span style={{ color: "#D63637", fontWeight: 400 }}>*</span>
                </label>
                <input
                  type="email"
                  style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }}
                />
              </div>
              {/* Phone */}
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>
                  Phone Number <span style={{ color: "#D63637", fontWeight: 400 }}>*</span>
                </label>
                <input
                  type="tel"
                  style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }}
                />
              </div>
              {/* Service */}
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>
                  What Services Do You Need? <span style={{ color: "#D63637", fontWeight: 400 }}>*</span>
                </label>
                <input
                  style={{ display: "block", marginTop: 12, width: 577.81, height: 41, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: "0 10px", fontFamily: LA }}
                />
              </div>
              {/* Message */}
              <div style={{ marginTop: 6 }}>
                <label style={{ color: "white", fontSize: 16, fontFamily: LA, fontWeight: 700 }}>Comment or Message</label>
                <textarea
                  style={{ display: "block", marginTop: 12, width: 577.81, height: 118.39, background: "white", borderRadius: 3, border: "1px solid rgba(0,0,0,0.25)", padding: 10, fontFamily: LA, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: 82.63,
                  height: 41,
                  background: "#74100E",
                  borderRadius: 3,
                  border: "none",
                  color: "white",
                  fontSize: 17,
                  fontFamily: LA,
                  cursor: "pointer",
                  marginTop: 4,
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ===================== FOOTER ===================== */}
        <div style={{ width: 1920, height: 927.9, left: 0, top: 7668, position: "absolute", background: "#555555" }}>
          {/* Logo */}
          <img src={logo} alt="MyLogo" style={{ position: "absolute", left: 155, top: 130, height: 50, width: "auto" }} />

          {/* Company column */}
          <div
            style={{
              position: "absolute",
              left: 159,
              top: 210,
              color: "rgba(255,255,255,0.68)",
              fontSize: 16,
              fontFamily: O,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            The Company Name
          </div>
          <div style={{ position: "absolute", left: 159, top: 260, color: "white", fontSize: 16, fontFamily: O, fontWeight: 700 }}>
            CITY
          </div>
          <div style={{ position: "absolute", left: 159, top: 300, color: "white", fontSize: 16, fontFamily: O, lineHeight: "24px" }}>
            Street name Nr,
            <br />
            Area code City
          </div>

          {/* Map */}
          <img src={mapImg} alt="Location map" style={{ width: 482, height: 307, left: 159, top: 396, position: "absolute", objectFit: "cover", borderRadius: 2 }} />

          {/* Contact info column */}
          <div
            style={{
              position: "absolute",
              left: 757,
              top: 236,
              color: "rgba(255,255,255,0.68)",
              fontSize: 16,
              fontFamily: O,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Contact information
          </div>
          <img src={phoneIcon} alt="phone" style={{ width: 78, height: 78, left: 749, top: 336, position: "absolute" }} />
          <div style={{ position: "absolute", left: 757, top: 300, color: "white", fontSize: 20, fontFamily: O }}>
            Have A Question ?
          </div>
          <div style={{ position: "absolute", left: 834, top: 361, color: "white", fontSize: 25, fontFamily: O }}>
            (323) 742-8448
          </div>
          <div style={{ position: "absolute", left: 765, top: 433, color: "white", fontSize: 20, fontFamily: O, fontWeight: 700 }}>
            Opening Hours:
          </div>
          <div style={{ position: "absolute", left: 768, top: 463, color: "#FBFBFB", fontSize: 20, fontFamily: O, fontWeight: 700, lineHeight: "28px" }}>
            Mon: <br />
            Tue:
            <br />
            Wed:
            <br />
            Thur:
            <br />
            Fri:
          </div>

          {/* Om oss / page links */}
          <div
            style={{
              position: "absolute",
              left: 1190,
              top: 236,
              color: "rgba(255,255,255,0.30)",
              fontSize: 16,
              fontFamily: O,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Om oss
          </div>
          <div style={{ position: "absolute", left: 1190, top: 276, display: "flex", flexDirection: "column", gap: 16 }}>
            {["Page link #1", "Page link #2", "Page link #3", "Page link #4"].map((p) => (
              <div key={p} style={{ color: "white", fontSize: 16, fontFamily: O }}>
                {p}
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div
            style={{
              position: "absolute",
              left: 1432,
              top: 238,
              color: "rgba(255,255,255,0.30)",
              fontSize: 16,
              fontFamily: O,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Service Areas
          </div>
          <div style={{ position: "absolute", left: 1432, top: 278, display: "flex", flexDirection: "column", gap: 16 }}>
            {["Page link #1", "Page link #2", "Page link #3", "Page link #4"].map((p) => (
              <div key={p} style={{ color: "white", fontSize: 16, fontFamily: O }}>
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* ===================== FOOTER BOTTOM (socials) ===================== */}
        <div style={{ width: 1920, height: 102.1, left: 0, top: 8595.9, position: "absolute", background: "#272727" }}>
          {[1273, 1329, 1385, 1441].map((left, i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: 40,
                left,
                top: 37.1,
                position: "absolute",
                background: "#3C3C3C",
                borderRadius: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E5E5E5",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              {["f", "in", "X", "ig"][i]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Service Card component ---------- */
function ServiceCard({ left, top }: { left: number; top: number }) {
  return (
    <div
      style={{
        width: 424,
        height: 602,
        left,
        top,
        position: "absolute",
        background: "white",
        overflow: "hidden",
        borderRadius: 6,
        outline: "1px #E5E7EB solid",
        outlineOffset: -1,
      }}
    >
      <div style={{ width: 422, height: 280, left: 1, top: 1, position: "absolute", background: "#D9D9D9" }} />
      <div
        style={{
          width: 304,
          position: "absolute",
          left: 33,
          top: 300.7,
          color: "#262626",
          fontSize: 31.25,
          fontFamily: O,
          fontWeight: 700,
          textDecoration: "underline",
          lineHeight: "28px",
        }}
      >
        Service Title
      </div>
      <div
        style={{
          width: 349,
          position: "absolute",
          left: 33,
          top: 370.7,
          color: "#78736D",
          fontSize: 16,
          fontFamily: O,
          fontWeight: 400,
          lineHeight: "28px",
        }}
      >
        A text talking persuasively about this product or service etc and detailing unique apects of how this specific
        company can solve this service and unique aspects of this service showing tecnical expertize.
      </div>
      <div style={{ position: "absolute", left: 33, top: 537, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#4C6FA4", fontSize: 14, fontFamily: O, fontWeight: 700 }}>Learn More</span>
        <span style={{ color: "#4C6FA4", fontSize: 14, fontWeight: 700 }}>→</span>
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
      style={{
        position: "absolute",
        left: left - 16,
        top: 0,
        width: 180,
        height: 130,
        paddingLeft: 16,
        paddingRight: 16,
        color: "#020202",
        fontSize: 20,
        fontFamily: R,
        fontWeight: 400,
        textTransform: "uppercase",
        lineHeight: "22.5px",
        cursor: "pointer",
        zIndex: 40,
      }}
    >
      <span style={{ position: "absolute", left: 16, top: 66, whiteSpace: "nowrap" }}>Services ▾</span>
      {open && (
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 0,
            background: "white",
            boxShadow: "0px 4px 16px rgba(0,0,0,0.18)",
            borderRadius: 6,
            padding: "8px 0",
            minWidth: 240,
            zIndex: 50,
          }}
        >
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              style={{
                display: "block",
                padding: "12px 20px",
                color: "#020202",
                fontSize: 16,
                fontFamily: R,
                textTransform: "none",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
