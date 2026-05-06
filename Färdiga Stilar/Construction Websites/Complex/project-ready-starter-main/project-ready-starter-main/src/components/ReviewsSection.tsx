import googleStar from "@/assets/google-star.svg";
import verifiedBadge from "@/assets/verified-trustindex.svg";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Ayelen de Prez",
    date: "2018-02-04",
    initial: "A",
    initialBg: "#7B1FA2",
    text: "Excelente atencion y asesoramiento. Gente muy confiable",
  },
  {
    name: "eliezer Otszu avalos",
    date: "2018-01-30",
    initial: "E",
    initialBg: "#43A047",
    text: "muy buen trato con sus empleados",
  },
  {
    name: "Mix Zone",
    date: "2018-01-29",
    initial: "M",
    initialBg: "#1E88E5",
    text: "Los mejores, responsabilidad y confiabilidad al máximo, super recomendables!",
  },
  {
    name: "Hector Gallo",
    date: "2018-01-29",
    initial: "H",
    initialBg: "#E53935",
    text: "Excelente atencion y solucion de inconvenientes al instante. Altamente recomendable",
  },
  {
    name: "Matias Parimbelli",
    date: "2018-01-29",
    initial: "M",
    initialBg: "#FF8F00",
    text: "Excelente. Súper recomendables. Nuestra experiencia fue muy buena. Sobre una idea realizaron el diseño y construccion de una ampliacion en una casa antigua. El trabajo quedó...",
  },
];

const FiveStars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={googleStar} alt="" className="w-[18px] h-[18px]" />
    ))}
  </div>
);

const ReviewsSection = () => {
  const [offset, setOffset] = useState(0);
  const visibleCount = 3;
  const maxOffset = reviews.length - visibleCount;

  const scrollNext = useCallback(() => {
    setOffset((prev) => (prev < maxOffset ? prev + 1 : 0));
  }, [maxOffset]);

  useEffect(() => {
    const interval = setInterval(scrollNext, 4000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <section className="w-full bg-white py-8 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Mobile/Tablet: stack vertically. Desktop: side by side */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Rating summary */}
          <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 lg:min-w-[180px] lg:pt-2">
            <span className="text-lg lg:text-[22px] font-bold text-gray-800 tracking-wide lg:mb-1">EXCELENTE</span>
            <div className="flex items-center gap-0.5 lg:mb-1">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={googleStar} alt="" className="w-5 h-5 lg:w-[30px] lg:h-[30px]" />
              ))}
            </div>
            <p className="text-sm text-gray-600 lg:mb-2">
              Basado en <span className="font-bold text-gray-800">5 reseñas</span>
            </p>
          </div>

          {/* Review cards carousel */}
          <div className="flex-1 overflow-hidden w-full">
            <div
              className="flex gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / visibleCount + 2)}%)` }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] sm:min-w-[calc(50%-8px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-lg shadow-[0_1px_6px_rgba(0,0,0,0.1)] p-5 flex flex-col shrink-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: review.initialBg }}
                    >
                      {review.initial}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <FiveStars />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            className="hidden lg:flex mt-16 w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-50 shrink-0"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Verified badge */}
        <div className="flex justify-center lg:justify-end mt-4">
          <a
            href="https://ar.near-place.com/disant-srl-constructora-juan-xxiii-1551-3-de-febrero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={verifiedBadge} alt="Verificado por Near Place" className="h-[28px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
