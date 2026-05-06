import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import commercialExterior from "@/assets/commercial-exterior.jpg";

interface EstimateSectionProps {
  title?: string;
}

const benefits = [
  { bold: "Especialización en montaje industrial", text: "Capacidad técnica específica para instalaciones industriales complejas y sistemas de ventilación" },
  { bold: "Experiencia en edificios de altura", text: "Proyectos comprobados en edificios de múltiples pisos con coordinación logística" },
  { bold: "Capacidad de gran escala", text: "Recursos para proyectos de envergadura con instalaciones de hasta 300 metros" },
  { bold: "Proyectos comerciales e industriales", text: "Experiencia en laboratorios, oficinas y edificios comerciales en Capital Federal" },
  { bold: "Red de colaboración", text: "Trabajo coordinado con empresas especializadas para soluciones completas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function EstimateSection({ title = "Por Qué Elegir\nS.O.L. Construcciones:" }: EstimateSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={commercialExterior} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="text-white pt-12"
            variants={containerVariants}
          >
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold mb-8 whitespace-pre-line"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" as const }
                },
              }}
            >
              {title}
            </motion.h2>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>{benefit.bold}</strong> – {benefit.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.7, 
                  ease: "easeOut" as const,
                }
              },
            }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Solicite su Evaluación Gratuita
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Complete el formulario y nos contactaremos para evaluar su proyecto.
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
                  <input 
                    type="text" 
                    placeholder="Su nombre completo"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input 
                    type="email" 
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Teléfono *</label>
                <input 
                  type="tel" 
                  placeholder="11 1234-5678"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Tipo de Proyecto</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>Montaje Industrial</option>
                    <option>Sistemas de Ventilación</option>
                    <option>Construcción Comercial</option>
                    <option>Construcción Prefabricada</option>
                    <option>Renovación de Fachadas</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Zona</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                    <option>Capital Federal</option>
                    <option>Gran Buenos Aires</option>
                    <option>Zonas Circundantes</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Descripción del Proyecto</label>
                <textarea 
                  rows={3}
                  placeholder="Cuéntenos sobre su proyecto..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar Solicitud
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
