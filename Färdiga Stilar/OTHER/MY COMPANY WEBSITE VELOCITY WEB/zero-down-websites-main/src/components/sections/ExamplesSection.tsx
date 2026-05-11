import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, X } from "lucide-react";
import characterLifting from "@/assets/character-lifting.png";
import exAfra from "@/assets/example-afra.png";
import exConstructora from "@/assets/example-constructora.png";
import exDraNorma from "@/assets/example-dranorma.png";
import exScala from "@/assets/example-scala.png";
import exAvant from "@/assets/example-avant.png";
import arrowLeft from "@/assets/arrow-left.png";
import arrowRight from "@/assets/arrow-right.png";

const websites = [
  { src: exDraNorma, alt: "Dra. Norma", catEs: "Consultorios odontológicos", catEn: "Dental clinics", nameEs: "Dra. Norma", nameEn: "Dra. Norma", descEs: "Odontóloga en Belgrano", descEn: "Dentist in Belgrano", link: "https://consultorioodontolgicoenbelgrano.lovable.app/" },
  { src: exConstructora, alt: "Grupo Árbol Construcciones", catEs: "Construcción y remodelación", catEn: "Construction & remodeling", nameEs: "Grupo Árbol Construcciones", nameEn: "Grupo Árbol Construcciones", descEs: "Construcción y remodelación llave en mano", descEn: "Turnkey construction & remodeling", link: "https://endless-canvas-play.lovable.app/" },
  { src: exAfra, alt: "Afra Peluquería", catEs: "Peluquerías y salones", catEn: "Hair salons", nameEs: "Afra Peluquería", nameEn: "Afra Hair Salon", descEs: "Salón de belleza con estilo", descEn: "Stylish beauty salon", link: "https://afra-peluquer-a.vercel.app/?_vercel_share=TcQHnUm1f0gr37pk6hV7Qt7zAXyZHF0O" },
  { src: exScala, alt: "Grupo Scala", catEs: "Desarrollos inmobiliarios", catEn: "Real estate", nameEs: "Grupo Scala Construcciones", nameEn: "Grupo Scala Construcciones", descEs: "Departamentos en Caballito con garantía de entrega", descEn: "Apartments in Caballito with delivery guarantee", link: "https://scalanuevositioclicaqui.lovable.app/" },
  { src: exAvant, alt: "Disant SRL Constructora", catEs: "Construcción y remodelación", catEn: "Construction & remodeling", nameEs: "Disant SRL Constructora", nameEn: "Disant SRL Constructora", descEs: "Construcción y remodelación en CABA", descEn: "Construction & remodeling in CABA", link: "https://project-ready-starter.lovable.app/" },
];

const ExamplesSection = () => {
  const { t } = useLanguage();
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  // Touch swipe state
  const touchStartRef = useRef<number | null>(null);
  const touchScrollStartRef = useRef<number>(0);

  const normalizePosition = useCallback((value: number, loopWidth: number) => {
    if (!loopWidth) return 0;
    return ((value % loopWidth) + loopWidth) % loopWidth;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const inner = el?.querySelector("[data-marquee]") as HTMLElement | null;

    if (!el || !inner) return;

    const pixelsPerSecond = 30;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const loopWidth = inner.scrollWidth / 2;
      const delta = now - lastTime;
      lastTime = now;

      if (!isPausedRef.current && loopWidth > 0) {
        positionRef.current = normalizePosition(
          positionRef.current + (delta * pixelsPerSecond) / 1000,
          loopWidth,
        );
        el.scrollLeft = positionRef.current;
      }

      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);

    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    };
  }, [normalizePosition]);

  const handleViewSite = (link: string) => {
    if (link) setIframeUrl(link);
  };

  const handleArrowClick = useCallback((dir: number) => {
    const el = scrollRef.current;
    const inner = el?.querySelector("[data-marquee]") as HTMLElement | null;

    if (!el || !inner) return;

    const loopWidth = inner.scrollWidth / 2;
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);

    positionRef.current = normalizePosition(positionRef.current + dir * 420, loopWidth);
    el.scrollTo({ left: positionRef.current, behavior: "smooth" });

    pauseTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 450);
  }, [normalizePosition]);

  // Touch handlers for swipe on iPad/mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    touchScrollStartRef.current = positionRef.current;
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const el = scrollRef.current;
    const inner = el?.querySelector("[data-marquee]") as HTMLElement | null;
    if (!el || !inner) return;

    const loopWidth = inner.scrollWidth / 2;
    const diff = touchStartRef.current - e.touches[0].clientX;
    positionRef.current = normalizePosition(touchScrollStartRef.current + diff, loopWidth);
    el.scrollLeft = positionRef.current;
  }, [normalizePosition]);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    pauseTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 1000);
  }, []);

  return (
    <>
      <section className="py-24 bg-muted/50" style={{ overflow: 'visible' }}>
        <div className="container mx-auto px-4 relative">
          <img
            src={characterLifting}
            alt=""
            className="absolute right-[40px] hidden md:block z-10"
            style={{ height: '240px', top: '-120px' }}
          />
          <div className="mb-3">
            <h2 className="text-section-h2 text-center">
              {t("Mirá lo que hacemos", "See what we do")}
            </h2>
          </div>
          <p className="text-section-body text-center mb-4">
            {t(
              "Estos son sitios que construimos para negocios como el tuyo",
              "These are sites we built for businesses like yours"
            )}
          </p>
          <p className="font-dm-sans text-sm text-muted-foreground text-center mb-16 italic">
            {t(
              "Haz clic en cada sitio web para ver más detalles.",
              "Click on each website to see more details."
            )}
          </p>
        </div>

        <div
          className="relative overflow-hidden scrollbar-hide touch-pan-x"
          ref={scrollRef}
          style={{ overflowX: 'auto' }}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 w-max" data-marquee>
            {[...websites, ...websites].map((site, i) => (
              <div key={i} className="flex-shrink-0 relative group cursor-pointer">
                <img
                  src={site.src}
                  alt={site.alt}
                  className="h-[280px] md:h-[340px] w-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute top-[5%] left-[12.5%] right-[12.5%] bottom-[13.5%] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[3px] overflow-hidden">
                  <div className="absolute inset-0 bg-[rgba(255,255,255,0.97)]" />
                  <div className="relative z-10 text-center px-6">
                    <span className="font-dm-sans font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                      {t(site.catEs, site.catEn)}
                    </span>
                    <h3 className="font-space-grotesk font-bold text-lg text-foreground mt-1">
                      {t(site.nameEs, site.nameEn)}
                    </h3>
                    <p className="font-dm-sans text-sm text-muted-foreground mt-1">
                      {t(site.descEs, site.descEn)}
                    </p>
                    {site.link && (
                      <button
                        onClick={() => handleViewSite(site.link)}
                        className="inline-flex items-center gap-1 font-dm-sans font-semibold text-sm text-primary mt-3 hover:underline pointer-events-auto"
                      >
                        {t("Ver sitio", "View site")} <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button onClick={() => handleArrowClick(-1)} className="transition-transform hover:scale-110 active:scale-95" aria-label="Previous">
            <img src={arrowLeft} alt="" className="w-16 h-16" />
          </button>
          <button onClick={() => handleArrowClick(1)} className="transition-transform hover:scale-110 active:scale-95" aria-label="Next">
            <img src={arrowRight} alt="" className="w-16 h-16" />
          </button>
        </div>
      </section>

      {/* Iframe modal */}
      {iframeUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIframeUrl(null)}
        >
          <div
            className="relative w-[90vw] h-[90vh] bg-card rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIframeUrl(null)}
              className="absolute top-3 right-3 z-10 bg-foreground/80 hover:bg-foreground text-background rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={iframeUrl}
              className="w-full h-full border-0"
              title="Demo site preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExamplesSection;
