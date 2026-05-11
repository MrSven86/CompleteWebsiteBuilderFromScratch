import { useLanguage } from "@/context/LanguageContext";
import bellCharacter from "@/assets/bell-character.png";
import onlineSurvey from "@/assets/online-survey.png";

const SmartFormSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Left side: bell character + survey icon */}
          <div className="hidden lg:block w-[45%] relative min-h-[500px]">
            {/* Bell character */}
            <img
              src={bellCharacter}
              alt="Notification bell character"
              className="absolute left-0 top-[50%] -translate-y-[50%] w-[340px] object-contain z-10"
            />
            {/* Survey/form icon */}
            <img
              src={onlineSurvey}
              alt="Online survey form"
              className="absolute left-[220px] top-[20px] w-[200px] object-contain z-20"
            />
          </div>

          {/* Right content */}
          <div className="w-full lg:w-[55%]">
            {/* Title with green underline */}
            <div className="mb-2">
              <h2 className="font-outfit font-bold text-[28px] md:text-[36px] leading-[40px] text-[#21232C] inline">
                {t("Formulario de contacto inteligente", "Smart Contact Form")}
              </h2>
              <div className="w-full max-w-[511px] h-[3px] bg-[#1BA057] mt-2" />
            </div>

            {/* Subtitle */}
            <p className="font-outfit font-extralight text-[18px] md:text-[21px] leading-[40px] text-black mt-2 text-right max-w-[511px]">
              {t(
                "Con notificación automática por WhatsApp!",
                "With automatic WhatsApp notification!"
              )}
            </p>

            {/* Description */}
            <p className="font-outfit font-extralight text-[20px] md:text-[26px] leading-[40px] text-black mt-8 max-w-[600px]">
              {t(
                "Cada vez que alguien completa tu formulario de contacto, dos cosas pasan al instante: el cliente recibe un email de confirmación con tu marca, y vos recibís una notificación por WhatsApp con todos sus datos. Nunca más perdés un lead.",
                "Every time someone fills out your contact form, two things happen instantly: the client receives a branded confirmation email, and you get a WhatsApp notification with all their data. Never lose a lead again."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFormSection;
