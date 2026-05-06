import iconWhatsapp from "@/assets/process-whatsapp.svg";
import iconPlumber from "@/assets/process-plumber.svg";
import iconCertificate from "@/assets/process-certificate.svg";
import iconCleanpipe from "@/assets/process-cleanpipe.svg";
import blob from "@/assets/process-blob.svg";

const steps = [
  {
    icon: iconWhatsapp,
    title: "Nos escribís",
    desc: "Por WhatsApp o teléfono. Respondemos en menos de 15 minutos.",
  },
  {
    icon: iconPlumber,
    title: "Vamos a verlo",
    desc: "Coordinamos visita el mismo día. Diagnóstico sin cargo.",
  },
  {
    icon: iconCertificate,
    title: "Te pasamos presupuesto",
    desc: "Por escrito, antes de tocar nada. Vos decidís.",
  },
  {
    icon: iconCleanpipe,
    title: "Resolvemos y limpiamos",
    desc: "Trabajo terminado, todo limpio, garantía escrita.",
  },
];

export function Process() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={blob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-[-300px] h-auto w-[1322px] max-w-none select-none"
      />

      <div className="relative mx-auto max-w-[1920px] px-6 py-16 md:px-12 lg:px-[100px] lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-outfit text-[40px] font-bold leading-[1.1] text-[#131313] md:text-[60px] md:leading-[72px]">
            Cómo trabajamos{" "}
            <span className="font-shantell text-[#00AFEF] font-bold">
              (claro y sin sorpresas)
            </span>
          </h2>
          <p className="mt-4 font-outfit text-[20px] leading-[30px] text-[#676767] md:text-[28px]">
            Desde que nos escribís hasta que dejamos todo limpio.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <img
                src={s.icon}
                alt=""
                className="h-[84px] w-[84px] shrink-0"
              />
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-outfit text-[24px] font-bold leading-[1.2] text-[#060606] md:text-[28px]">
                  {s.title}
                </h3>
                <p className="font-outfit text-[16px] leading-[24px] text-[#060606]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
