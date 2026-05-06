import urgencyTexture from "@/assets/urgency-texture.png";
import checkIcon from "@/assets/icon-check-blue.svg";
import whatsappWhite from "@/assets/icon-whatsapp-white.svg";
import phoneIcon from "@/assets/phone.svg";

const services = [
  "Cloacas tapadas",
  "Pérdidas de agua",
  "Cañerías rotas",
  "Pérdida de gas",
  "Termotanque sin agua caliente",
  "Destapaciones urgentes",
];

export function UrgencyBar() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...services, ...services];

  return (
    <section className="w-full">
      {/* Top dark blue band */}
      <div className="relative w-full overflow-hidden bg-[#122746]">
        {/* Texture overlay — above blue, below text/icons */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${urgencyTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "soft-light",
            opacity: 0.43,
          }}
        />

        <div className="relative mx-auto flex max-w-[1920px] flex-col gap-6 px-6 py-6 md:px-12 lg:flex-row lg:items-start lg:gap-8 lg:px-[170px] lg:py-[21px]">
          {/* Left: heading + CTAs + tagline (tagline sits next to WhatsApp button) */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <h2 className="font-shantell text-[32px] font-bold leading-[1.2] text-[#00AFEF] md:text-[40px] lg:text-[48px]">
                ¿Tenés una urgencia ahora?
              </h2>

              <a
                href="tel:11XXXXXXXX"
                className="inline-flex h-[44px] items-center gap-2 rounded-full border border-[#00AFEF] pl-3 pr-4 font-roboto-condensed text-[20px] text-[#00AFEF] transition-colors hover:bg-[#00AFEF]/10"
              >
                <img src={phoneIcon} alt="" className="h-[32px] w-[32px] shrink-0" />
                11-XXXX-XXXX
              </a>

              <a
                href="#"
                className="inline-flex h-[44px] items-center gap-2 rounded-full bg-[#00AFEF] px-5 font-roboto-condensed text-[20px] text-white transition-colors hover:bg-[#0099d4]"
              >
                <img src={whatsappWhite} alt="" className="h-5 w-5" />
                [WhatsApp]
              </a>

              <p className="font-outfit text-[20px] font-bold leading-[1.33] text-white md:text-[24px] lg:max-w-[314px]">
                Llamanos o escribinos — te atendemos ya
              </p>
            </div>

            <h3 className="font-outfit text-[32px] font-bold leading-[1.2] text-white md:text-[40px] lg:text-[48px]">
              Plomero en tu casa en menos de 1 hora
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom black marquee bar */}
      <div className="w-full overflow-hidden bg-black">
        <div className="flex animate-marquee whitespace-nowrap py-[12px]">
          {loop.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-3 px-8"
            >
              <img src={checkIcon} alt="" className="h-4 w-[14px]" />
              <span className="font-outfit text-[20px] font-medium leading-[32px] text-white md:text-[24px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
