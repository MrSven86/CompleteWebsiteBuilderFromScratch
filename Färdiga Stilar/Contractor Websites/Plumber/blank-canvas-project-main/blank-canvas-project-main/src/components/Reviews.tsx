import { useEffect, useRef, useState } from "react";
import googleIcon from "@/assets/icon-google-color.svg";
import starIcon from "@/assets/icon-star.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import dotIcon from "@/assets/dot.svg";
import textureNoise from "@/assets/texture-noise.png";

type Review = {
  name: string;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Martín G.",
    date: "2024-11-12",
    text: "Tenía una pérdida en el baño que arruinaba el techo del vecino de abajo. Vinieron en menos de una hora y lo solucionaron al toque. Súper recomendables. 👌",
  },
  {
    name: "Lucía P.",
    date: "2024-10-28",
    text: "Me destaparon la cocina que estaba imposible. Trabajo prolijo, dejaron todo limpio y el precio fue el que me pasaron por WhatsApp. Sin sorpresas.",
  },
  {
    name: "Federico R.",
    date: "2024-10-15",
    text: "Excelente atención. Cambiaron toda la instalación de gas del departamento en Palermo y quedó impecable. Matriculados y muy profesionales.",
  },
  {
    name: "Carolina M.",
    date: "2024-09-30",
    text: "Llamé un domingo a la noche por una pérdida y vinieron igual. Salvaron el fin de semana. Muy agradecida con el equipo.",
  },
  {
    name: "Diego S.",
    date: "2024-09-18",
    text: "Hicieron el cambio de termotanque en mi PH de Palermo Soho. Rápido, limpio y a buen precio. Ya los recomendé a varios vecinos del barrio.",
  },
  {
    name: "Sofía L.",
    date: "2024-09-05",
    text: "Atención de 10. Me explicaron todo antes de empezar y respetaron el presupuesto. Por fin un plomero confiable en Capital.",
  },
  {
    name: "Ramiro T.",
    date: "2024-08-22",
    text: "Vinieron a destapar un caño en el local de Av. Santa Fe. Trabajo rápido para no cortar la atención al público. Muy considerados.",
  },
  {
    name: "Valentina C.",
    date: "2024-08-10",
    text: "Buscaba un gasista matriculado para la habilitación y fueron una maravilla. Me entregaron toda la documentación al día. Gracias!",
  },
  {
    name: "Joaquín B.",
    date: "2024-07-28",
    text: "Reemplazaron toda la cañería del baño en un día. Dejaron todo impecable y el presupuesto fue exactamente el acordado.",
  },
  {
    name: "Mariana E.",
    date: "2024-07-14",
    text: "Vinieron por una pérdida en la cocina y aprovecharon para revisar todo. Honestos y muy prolijos. Los recomiendo 100%.",
  },
  {
    name: "Tomás A.",
    date: "2024-06-30",
    text: "Me arreglaron el calefón el mismo día que llamé. Excelente trato y precio justo. Encontré mi plomero de confianza.",
  },
  {
    name: "Florencia N.",
    date: "2024-06-12",
    text: "Trabajo impecable en el departamento de Palermo. Llegaron puntuales, explicaron todo y limpiaron al terminar. Muy profesionales.",
  },
];

export function Reviews() {
  const perPage = 3;
  const pages = Math.max(1, Math.ceil(reviews.length / perPage));
  const [page, setPage] = useState(0);
  const pausedRef = useRef(false);

  const goTo = (next: number) => {
    setPage(((next % pages) + pages) % pages);
  };

  const go = (dir: 1 | -1) => goTo(page + dir);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pausedRef.current) goTo(page + 1);
    }, 3500);
    return () => window.clearInterval(id);
  }, [page, pages]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#112442]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <img
        src={textureNoise}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-soft-light select-none"
        style={{ filter: "opacity(0.73)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1920px] px-6 py-16 md:px-12 lg:px-[36px] lg:py-20">
        <div className="text-center">
          <h2 className="font-outfit text-[42px] font-bold leading-[1.1] text-white md:text-[60px]">
            Lo que dicen{" "}
            <span className="font-shantell text-[#00AFEF] font-bold">
              nuestros vecinos en Palermo
            </span>
          </h2>
          <p className="mt-6 font-outfit text-[20px] leading-[30px] text-white md:text-[28px]">
            Reseñas reales de Google. Verificá vos mismo.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `${pages * 100}%`,
              transform: `translateX(-${page * (100 / pages)}%)`,
            }}
          >
            {Array.from({ length: pages }).map((_, p) => {
              const slice = reviews.slice(p * perPage, p * perPage + perPage);
              return (
                <div
                  key={p}
                  className="grid shrink-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                  style={{ width: `${100 / pages}%` }}
                >
                  {slice.map((r, i) => (
                    <article
                      key={`${p}-${i}`}
                      className="rounded-[8px] bg-white p-6 md:p-8"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#43A047] font-inter text-[18px] font-bold text-white">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-inter text-[23px] font-bold leading-[36px] text-black">
                              {r.name}
                            </div>
                            <div className="font-inter text-[12px] leading-[16px] text-[#9CA3AF]">
                              {r.date}
                            </div>
                          </div>
                        </div>
                        <img src={googleIcon} alt="Google" className="h-[45px] w-[45px]" />
                      </div>

                      <div className="mt-3 flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <img key={s} src={starIcon} alt="" className="h-4 w-4" />
                        ))}
                      </div>

                      <p className="mt-5 font-inter text-[14px] leading-[21px] text-black">
                        {r.text}
                      </p>

                      <button className="mt-4 font-inter text-[14px] leading-[20px] text-[#6B7280] hover:underline">
                        Read more
                      </button>
                    </article>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a página ${i + 1}`}
              className="transition-opacity"
              style={{ opacity: i === page ? 1 : 0.5 }}
            >
              <img src={dotIcon} alt="" className="h-[15px] w-[15px]" />
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="transition-opacity hover:opacity-80"
          >
            <img src={arrowLeft} alt="" className="h-[60px] w-[60px]" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="transition-opacity hover:opacity-80"
          >
            <img src={arrowRight} alt="" className="h-[60px] w-[60px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
