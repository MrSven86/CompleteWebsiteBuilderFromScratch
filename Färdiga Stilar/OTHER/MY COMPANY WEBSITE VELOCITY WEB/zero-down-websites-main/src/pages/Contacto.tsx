import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const Contacto = () => {
  const { t } = useLanguage();
  useSEO({
    title: "Contacto | Agencia de Diseño Web en Buenos Aires — Velocity Web",
    description: "Escribinos por WhatsApp o completá el formulario. Te respondemos en menos de 24 horas. Sin compromiso.",
  });
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", whatsapp: "", negocio: "", rubro: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("¡Gracias! Te contactamos pronto.", "Thanks! We'll contact you soon."));
  };

  return (
    <main className="pt-24">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-section-h2 text-4xl md:text-5xl text-center mb-4">
            {t("Hablá con nosotros", "Talk to us")}
          </h1>
          <p className="text-section-body text-center max-w-2xl mx-auto mb-16">
            {t(
              "¿Tenés preguntas, o estás listo para ver tu diseño? Completá el formulario o escribinos por WhatsApp — te respondemos en menos de 24 horas.",
              "Have questions, or ready to see your design? Fill out the form or message us on WhatsApp — we respond within 24 hours."
            )}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">{t("Nombre", "First name")}</label>
                  <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none" />
                </div>
                <div>
                  <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">{t("Apellido", "Last name")}</label>
                  <input type="text" value={form.apellido} onChange={(e) => setForm({ ...form, apellido: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none" />
                </div>
                <div>
                  <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">WhatsApp</label>
                  <input type="text" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none" />
                </div>
              </div>
              {[
                { key: "negocio", labelEs: "Nombre de tu negocio", labelEn: "Business name" },
                { key: "rubro", labelEs: "Rubro (ej: peluquería, odontología)", labelEn: "Industry (e.g. salon, dentistry)" },
              ].map((f) => (
                <div key={f.key} className="mb-4">
                  <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">{t(f.labelEs, f.labelEn)}</label>
                  <input type="text" value={(form as any)[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none" />
                </div>
              ))}
              <div className="mb-4">
                <label className="font-dm-sans text-sm text-muted-foreground mb-1 block">{t("Contanos brevemente sobre tu negocio", "Tell us about your business")}</label>
                <textarea value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-dm-sans text-sm focus:ring-2 focus:ring-accent outline-none resize-none" />
              </div>
              <button type="submit" className="w-full btn-primary">{t("Enviar", "Send")}</button>
              <p className="text-center text-xs text-muted-foreground font-dm-sans mt-3">{t("Te contactamos en menos de 24 horas. No compartimos tu información.", "We contact you within 24 hours. We don't share your info.")}</p>
            </form>

            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-foreground">WhatsApp</p>
                    <p className="text-box-body">{t("Respondemos en el día. Sin compromiso.", "We respond same day. No commitment.")}</p>
                  </div>
                </div>
                <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-foreground">Email</p>
                    <p className="text-box-body">hola@velocityweb.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 bg-muted/50 rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <p className="text-box-body">
              {t("¿Todavía tenés dudas? Visitá nuestras ", "Still have questions? Visit our ")}
              <Link to="/faq" className="text-primary font-semibold hover:underline">{t("preguntas frecuentes", "FAQ")}</Link>
              {t(" o escribinos por WhatsApp.", " or message us on WhatsApp.")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
