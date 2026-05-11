import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import googleLogo from "@/assets/google-logo.png";
import reviewCharacter from "@/assets/review-character.png";
import reviewMockup from "@/assets/review-mockup.png";
import playButton from "@/assets/play-button.png";

const ReviewSection = () => {
  const { t } = useLanguage();
  const [videoOpen, setVideoOpen] = useState(false);

  const circularText = t("Ver video explicativo", "Watch explainer video");

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {/* Left content */}
          <div className="w-full lg:w-[55%] relative">
            {/* "Nunca más una mala reseña!" */}
            <p
              className="font-outfit font-extralight text-[18px] md:text-[21px] leading-[40px] text-black mb-2"
              style={{ transform: "rotate(-4deg)", transformOrigin: "top left" }}
            >
              {t("Nunca más una mala reseña!", "Never a bad review again!")}
            </p>

            {/* Google logo + stars + title row */}
            <div className="flex items-center gap-4 mb-2">
              <img
                src={googleLogo}
                alt="Google"
                className="w-[100px] h-[96px] md:w-[130px] md:h-[124px] object-contain"
              />
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="#FFF600"
                    >
                      <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.86 10,15.2 4.18,18.86 6,12.14 0.49,7.64 7.41,7.36" />
                    </svg>
                  ))}
                </div>
                {/* Title */}
                <h2 className="font-outfit font-bold text-[28px] md:text-[36px] leading-[40px] text-[#21232C]">
                  {t("Sistema de Reseñas 5 Estrellas", "5-Star Review System")}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="font-outfit font-extralight text-[20px] md:text-[26px] leading-[40px] text-black mt-8 max-w-[823px]">
              {t(
                "Conseguí más reseñas de 4 y 5 estrellas — más visibilidad, más confianza, y más clientes nuevos. Con nuestra app, solo las buenas llegan a Google. Las malas te llegan a vos primero. Una calificación alta en Google Maps significa aparecer antes que tu competencia — y ganarte la confianza del cliente antes de que te llame.",
                "Get more 4 and 5 star reviews — more visibility, more trust, and more new customers. With our app, only the good ones reach Google. The bad ones reach you first. A high rating on Google Maps means appearing before your competition — and earning customer trust before they call."
              )}
            </p>

            {/* Bottom row: video button + checkmarks */}
            <div className="flex items-center gap-8 mt-10 flex-wrap">
              {/* Rotating text around play button */}
              <button
                onClick={() => setVideoOpen(true)}
                className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] flex-shrink-0 group cursor-pointer"
                aria-label={t("Ver video explicativo", "Watch explainer video")}
              >
                {/* Rotating text */}
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    className="fill-black font-outfit"
                    style={{ fontSize: "21px", fontWeight: 300, letterSpacing: "3px" }}
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      {circularText} • {circularText} •
                    </textPath>
                  </text>
                </svg>
                {/* Play button image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={playButton}
                    alt="Play"
                    className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </button>

              {/* Checkmarks */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#038C8C] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <span
                    className="font-outfit font-extralight text-[18px] md:text-[21px] leading-[40px] text-black"
                    style={{ transform: "rotate(-1deg)" }}
                  >
                    {t("Incluido en todos los sitios multipágina", "Included in all multi-page sites")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#038C8C] flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-outfit font-extralight text-[18px] md:text-[21px] leading-[40px] text-black">
                    {t("¡Solo reseñas de 4 y 5 estrellas!", "Only 4 and 5 star reviews!")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: character + mockup */}
          <div className="hidden lg:block w-[45%] relative min-h-[600px]">
            {/* Phone mockup */}
            <img
              src={reviewMockup}
              alt="Google Maps mockup"
              className="absolute right-0 bottom-0 w-[420px] object-contain"
              style={{ transform: "rotate(0deg)" }}
            />
            {/* Character */}
            <img
              src={reviewCharacter}
              alt="Character sweeping"
              className="absolute right-[80px] top-0 w-[380px] object-contain z-10"
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-none rounded-2xl overflow-hidden">
          <video
            src="/videos/video1review.mp4"
            controls
            autoPlay
            className="w-full h-auto max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReviewSection;
