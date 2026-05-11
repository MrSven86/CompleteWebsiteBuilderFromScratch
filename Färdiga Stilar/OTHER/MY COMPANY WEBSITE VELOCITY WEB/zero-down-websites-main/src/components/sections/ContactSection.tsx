import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import birdMailbox from "@/assets/bird-mailbox.png";
import brunoPhoto from "@/assets/bruno.png";
import quoteSvg from "@/assets/quote.svg";
import dustTexture from "@/assets/light-dust-texture.png";
import circleImg from "@/assets/circle.png";

const ContactSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", negocio: "", rubro: "", mensaje: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const combinedMessage = [
        form.negocio && `Negocio: ${form.negocio}`,
        form.rubro && `Rubro: ${form.rubro}`,
        form.mensaje,
      ].filter(Boolean).join('\n');

      const res = await fetch('https://velocity-contact-form-api.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nombre,
          email: form.email,
          phone: form.whatsapp,
          message: combinedMessage,
          website: '',
          clientEmail: 'tomas@velocityweb.org',
          clientWhatsapp: '+46734609747',
          clientName: 'Velocity Web',
        }),
      });

      if (!res.ok) throw new Error('Failed to send');
      alert(t("¡Gracias! Te contactamos pronto.", "Thanks! We'll contact you soon."));
      setForm({ nombre: "", email: "", whatsapp: "", negocio: "", rubro: "", mensaje: "" });
    } catch {
      alert(t("Hubo un error. Intentá de nuevo.", "There was an error. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#091734' }}>
      {/* Layer 0: Circle — rendered first, sits at the very back */}
      <img
        src={circleImg}
        alt=""
        className="hidden lg:block absolute pointer-events-none select-none"
        style={{
          right: '3%',
          top: '10%',
          width: '500px',
          height: '500px',
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Layer 1: Dark blue gradient — on top of circle, semi-transparent to reveal it */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(9,23,52,0.85) 0%, rgba(9,23,52,0.80) 50%, rgba(9,23,52,0.70) 100%)',
          zIndex: 2,
        }}
      />

      {/* Layer 2: Dust texture — blend mode screen */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${dustTexture})`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'screen',
          zIndex: 3,
        }}
      />

      {/* Bruno — 30% smaller: was h-[85%], now h-[60%] */}
      <img
        src={brunoPhoto}
        alt="Bruno - Velocity Web"
        className="hidden lg:block absolute bottom-0 right-[5%] xl:right-[8%] w-auto object-contain object-bottom pointer-events-none select-none"
        style={{ height: '60%', zIndex: 5 }}
      />

      {/* Quote — moved down, positioned closer to Bruno */}
      <div
        className="hidden lg:flex absolute items-start gap-3"
        style={{
          top: '35%',
          right: '4%',
          width: '340px',
          zIndex: 5,
        }}
      >
        <img src={quoteSvg} alt="" className="w-10 h-7 flex-shrink-0 mt-1" />
        <div>
          <p className="text-white font-dm-sans text-sm leading-relaxed text-center">
            {t(
              "Nuestro objetivo no es solo entregarte un sitio web. Es asegurarnos de que ese sitio realmente trabaje para tu negocio — que genere confianza, atraiga clientes, y te represente como corresponde.",
              "Our goal isn't just to deliver a website. It's to make sure that website truly works for your business — building trust, attracting clients, and representing you the right way."
            )}
          </p>
          <p className="text-white font-outfit font-bold text-sm mt-3 text-center">
            — Bruno, Velocity Web
          </p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Bird + Headline row */}
        <div className="flex items-end gap-4 mb-3 max-w-2xl">
          <img
            src={birdMailbox}
            alt="Bird with mailbox"
            className="w-28 h-28 md:w-36 md:h-36 object-contain flex-shrink-0 -mb-2"
          />
          <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-[42px] text-white leading-tight">
            {t("¿Querés ver cómo quedaría tu sitio web?", "Want to see how your website would look?")}
          </h2>
        </div>

        {/* Sub-headline */}
        <p className="text-white/80 font-dm-sans text-base md:text-lg ml-0 md:ml-40 mb-10 max-w-xl">
          {t(
            "Completá tus datos y en 72 horas tenés un diseño listo. Sin costo, sin compromiso. El diseño es tuyo.",
            "Fill in your details and in 72 hours you'll have a ready design. No cost, no commitment. The design is yours."
          )}
        </p>

        {/* Form card */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl max-w-lg mx-auto lg:mx-0 lg:ml-8">
          <div className="space-y-4">
            {[
              { key: "nombre", labelEs: "Nombre", labelEn: "Name" },
              { key: "email", labelEs: "Email", labelEn: "Email", type: "email" },
              { key: "whatsapp", labelEs: "WhatsApp", labelEn: "WhatsApp" },
              { key: "negocio", labelEs: "Nombre del negocio", labelEn: "Business name" },
              { key: "rubro", labelEs: "Rubro (ej: peluquería, clínica)", labelEn: "Industry (e.g. salon, clinic)" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">
                  {t(field.labelEs, field.labelEn)}
                </label>
                <input
                  type={field.type || "text"}
                  value={(form as any)[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                />
              </div>
            ))}
            <div>
              <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">
                {t("Contanos brevemente sobre tu negocio", "Tell us briefly about your business")}
              </label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-none"
              />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50">
              {loading ? t("Enviando...", "Sending...") : t("Quiero mi diseño gratis", "I want my free design")}
            </button>
            <p className="text-center text-xs text-muted-foreground font-dm-sans">
              {t("Te contactamos en menos de 24 horas. No compartimos tu información.", "We contact you within 24 hours. We don't share your info.")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
