import destapaciones from "@/assets/service-destapaciones.png";
import gasista from "@/assets/service-gasista.png";
import urgencias from "@/assets/service-urgencias.png";
import perdida from "@/assets/service-perdida.png";

const services = [
  { title: "Destapaciones", img: destapaciones },
  { title: "Plomero Gasista", img: gasista },
  { title: "Urgencias 24hs", img: urgencias },
  { title: "Pérdida de agua", img: perdida },
];

export function Services() {
  return (
    <section className="relative z-10 w-full">
      <div className="mx-auto max-w-[1920px] px-6 py-16 md:px-12 lg:px-[180px] lg:py-24">
        <div className="text-center">
          <h2 className="font-outfit text-[42px] font-bold leading-[1.1] text-[#131313] md:text-[60px]">
            Servicios{" "}
            <span className="font-shantell text-[#00AFEF] font-bold">
              que ofrecemos .
            </span>
          </h2>
          <p className="mt-4 font-outfit text-[18px] leading-[30px] text-[#676767] md:text-[20px]">
            Lo que resolvemos en Palermo, todos los días.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative aspect-[389/450] overflow-hidden rounded-[10px] bg-white cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Blue hover overlay */}
              <div className="absolute inset-0 bg-[#00AFEF]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-outfit text-[26px] font-bold leading-[1.1] text-white md:text-[32px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
