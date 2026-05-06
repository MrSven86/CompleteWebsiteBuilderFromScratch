import { Star } from "lucide-react";
import handyman from "@/assets/handyman.png";
import scratch from "@/assets/scratch-texture.png";
import iconPipe from "@/assets/icon-pipe.svg";
import iconClock from "@/assets/icon-clock.svg";
import iconQuote from "@/assets/icon-quote.svg";
import iconGoogle from "@/assets/icon-google.svg";
import iconFacebook from "@/assets/icon-facebook.svg";

const features = [
  {
    icon: iconPipe,
    title: "Plomero matriculado",
    desc: "Trabajamos con registro oficial. Tu obra queda en regla.",
  },
  {
    icon: iconClock,
    title: "Urgente 24hs",
    desc: "Respondemos a cualquier hora, cualquier día. Incluso feriados.",
  },
  {
    icon: iconQuote,
    title: "Presupuesto gratis",
    desc: "Te cotizamos antes de tocar nada. Sin compromiso.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-6 w-6 fill-[#FFC107] text-[#FFC107]" />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-10 px-6 py-12 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-[180px] lg:py-20">
        {/* Left column */}
        <div className="flex flex-col">
          <h1 className="font-outfit text-[40px] font-bold leading-[1.05] text-[#060606] md:text-[52px] lg:text-[60px]">
            Tu plomero de confianza en{" "}
            <span className="font-shantell text-[#00AFEF] font-bold">
              Palermo
            </span>
          </h1>

          <p className="mt-6 max-w-[575px] font-outfit text-[18px] font-normal leading-[30px] text-[#060606]">
            Somos tu equipo de plomeros en Palermo. Destapaciones, gasista
            matriculado y urgencias 24hs. Llegamos en 30-60 minutos con
            presupuesto gratis antes de empezar.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5">
                <img
                  src={f.icon}
                  alt=""
                  className="h-[46px] w-[46px] shrink-0"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-outfit text-[28px] font-bold leading-[1.1] text-[#060606] md:text-[32px]">
                    {f.title}
                  </h3>
                  <p className="font-outfit text-[18px] leading-[30px] text-[#060606]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-10">
          <div className="relative w-full overflow-hidden rounded-[29px]">
            <img
              src={handyman}
              alt="Plomero trabajando bajo una pileta"
              className="block h-auto w-full object-cover"
            />
            <img
              src={scratch}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-80"
            />
          </div>

          {/* Reviews row */}
          <div className="flex flex-wrap items-center justify-end gap-8">
            <p className="max-w-[245px] text-right font-shantell text-[20px] font-bold leading-[28px] text-black md:text-[24px]">
              [+XX reseñas X.X estrellas en Google]
            </p>
            <div className="flex items-center gap-3">
              <img src={iconGoogle} alt="Google" className="h-[57px] w-[57px]" />
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[21px] text-[#060606]">
                  Reviews
                </span>
                <Stars />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconFacebook} alt="Facebook" className="h-[52px] w-[52px]" />
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[21px] text-[#060606]">
                  Reviews
                </span>
                <Stars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
