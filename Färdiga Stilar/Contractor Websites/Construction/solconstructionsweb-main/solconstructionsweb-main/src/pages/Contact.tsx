import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

import heroMain from "@/assets/hero-main.png";

const contactSteps = [
  { step: 1, description: "Nos contactaremos dentro de 1 día hábil para discutir su proyecto y coordinar una evaluación gratuita." },
  { step: 2, description: "Visitamos su propiedad para evaluar el alcance del trabajo y discutir sus necesidades específicas." },
  { step: 3, description: "Recibirá un presupuesto detallado con precios claros y cronograma del proyecto." },
  { step: 4, description: "Una vez aprobado, programamos su proyecto con fechas específicas de inicio y finalización." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", zone: "capital-federal", serviceNeeded: "montaje-industrial", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "¡Solicitud Enviada!", description: "Nos contactaremos dentro de 1 día hábil." });
    setFormData({ name: "", phone: "", email: "", zone: "capital-federal", serviceNeeded: "montaje-industrial", message: "" });
  };

  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroMain})` }}>
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative z-10 py-20 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
            Contacte a S.O.L. Construcciones
          </h1>
          <p className="text-lg md:text-xl text-card/90 max-w-2xl mx-auto">
            Solicite una evaluación gratuita o llámenos directamente para su proyecto de instalación industrial o construcción comercial.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h2 className="font-display text-2xl font-semibold mb-2">Solicite su Evaluación Gratuita</h2>
            <p className="text-muted-foreground text-sm mb-6">Complete el formulario y nos contactaremos para evaluar su proyecto de instalación industrial o construcción comercial.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Su nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono *</label>
                <Input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="11 1234-5678" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                  <select className="w-full h-11 px-3 rounded-lg border border-input bg-background" value={formData.serviceNeeded} onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}>
                    <option value="montaje-industrial">Montaje Industrial</option>
                    <option value="sistemas-ventilacion">Sistemas de Ventilación</option>
                    <option value="construccion-comercial">Construcción Comercial</option>
                    <option value="construccion-prefabricada">Construcción Prefabricada</option>
                    <option value="renovacion-fachadas">Renovación de Fachadas</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Zona</label>
                  <select className="w-full h-11 px-3 rounded-lg border border-input bg-background" value={formData.zone} onChange={(e) => setFormData({ ...formData, zone: e.target.value })}>
                    <option value="capital-federal">Capital Federal</option>
                    <option value="gran-buenos-aires">Gran Buenos Aires</option>
                    <option value="zonas-circundantes">Zonas Circundantes</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Descripción del Proyecto</label>
                <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Cuéntenos sobre su proyecto..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">Enviar Solicitud</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-background-alt rounded-xl p-8">
              <h2 className="font-display text-2xl font-semibold mb-6">Contacto Directo</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold">Llámenos:</p>
                    <a href="tel:+541145443760" className="text-secondary hover:underline block">54 11 4544-3760</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:info@sol-construcciones.com.ar" className="text-secondary hover:underline break-all">info@sol-construcciones.com.ar</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold">Dirección:</p>
                    <p className="text-muted-foreground">Crisólogo Larralde 5456<br />C1431APP CABA<br />Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold">Horario:</p>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 - 18:00<br />Sábados: 8:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader title="¿Qué Sigue?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactSteps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg mx-auto mb-4">{item.step}</div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
