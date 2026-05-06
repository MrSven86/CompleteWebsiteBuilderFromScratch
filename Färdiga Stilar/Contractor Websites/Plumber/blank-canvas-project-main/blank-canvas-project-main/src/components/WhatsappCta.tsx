import { useState } from "react";
import van from "@/assets/van.png";
import whatsappIcon from "@/assets/whatsapp-cta.svg";
import ctaTexture from "@/assets/cta-texture.png";

export function WhatsappCta() {
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[640px] lg:min-h-[670px]">
        <div className="absolute inset-x-0 top-0 h-[470px] bg-[#003057]" />
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-white" />

        <div className="relative mx-auto w-full max-w-[1940px] px-0">
          <div className="relative mx-auto px-4 pt-6 sm:px-6 lg:px-0 lg:pt-0">
            <div className="relative mx-auto h-[360px] w-full max-w-[1780px] overflow-hidden rounded-[8px] bg-[#00294A] lg:top-[49px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[8px]"
                style={{
                  backgroundImage: `url(${ctaTexture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mixBlendMode: "soft-light",
                  opacity: 0.45,
                }}
              />
              <div className="relative grid h-full grid-cols-1 lg:grid-cols-[1120px_1fr]">
                <div className="hidden lg:block" />

                <div className="relative px-8 pt-10 lg:px-[56px] lg:pt-[34px]">
                  <div className="flex items-start gap-3">
                    <h2 className="font-outfit text-[40px] font-bold leading-[42px] text-white lg:text-[42px]">
                      ¿Sin tiempo ahora?
                    </h2>
                    <img
                      src={whatsappIcon}
                      alt=""
                      aria-hidden
                      className="-mt-7 h-[90px] w-[90px] shrink-0"
                    />
                  </div>

                  <p className="mt-2 max-w-[605px] font-outfit text-[20px] font-normal leading-[28px] text-white">
                    Dejanos tu WhatsApp y te escribimos en menos de 15 minutos.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex w-full max-w-[576px] overflow-hidden rounded-[8px]"
                  >
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="[WhatsApp*]"
                      className="h-[52px] min-w-0 flex-1 bg-[#F3F4F6] px-[42px] font-outfit text-[14px] font-normal text-[#111827] placeholder:text-[#6B7280] outline outline-1 outline-[#D1D5DB] outline-offset-[-1px]"
                    />
                    <button
                      type="submit"
                      className="h-[52px] w-[214px] shrink-0 bg-[#10B981] px-6 font-outfit text-[16px] font-normal leading-[24px] text-white transition-colors hover:bg-[#0ea371]"
                    >
                      Que me escriban
                    </button>
                  </form>

                  <p className="mt-6 font-outfit text-[24px] font-bold leading-[30px] text-white">
                    O llamanos al 11-XXXX-XXXX
                  </p>
                </div>
              </div>
            </div>

            <img
              src={van}
              alt="Camioneta de plomería"
              className="relative z-10 mt-6 w-[94%] max-w-[1095px] lg:absolute lg:left-[12px] lg:top-[92px] lg:mt-0 lg:w-[1033px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}