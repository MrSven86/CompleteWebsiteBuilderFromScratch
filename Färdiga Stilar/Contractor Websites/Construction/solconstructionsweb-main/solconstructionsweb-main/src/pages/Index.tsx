import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { CheckCircle, ChevronRight } from "lucide-react";
import wrenchIcon from "@/assets/icon-wrench-new.svg";
import iconBuilding from "@/assets/icon-building.svg";
import iconCapacity from "@/assets/icon-capacity.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroHeader from "@/assets/hero-header.png";
import commercialExterior from "@/assets/commercial-exterior.jpg";
import experienceRenovation from "@/assets/experience-renovation.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceVentilation from "@/assets/service-ventilation.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

const services = [
  {
    image: serviceIndustrial,
    title: "Montaje Industrial",
    description: "Instalaciones industriales especializadas para edificios comerciales, laboratorios y proyectos técnicos. Coordinamos fabricación, instalación y puesta en marcha de sistemas complejos incluyendo ventilación y conductos para edificios de múltiples pisos.",
    href: "#",
  },
  {
    image: serviceVentilation,
    title: "Sistemas de Ventilación",
    description: "Fabricación e instalación de conductos de ventilación para edificios comerciales de altura. Experiencia comprobada con proyectos de hasta 300 metros de conductos en edificios de 14 pisos en Capital Federal, garantizando sistemas eficientes y conformes a normativas.",
    href: "#",
  },
  {
    image: serviceRenovation,
    title: "Construcción y Renovación",
    description: "Desde construcción prefabricada hasta renovación de fachadas comerciales. Capacidad para proyectos residenciales y comerciales, con experiencia en oficinas, laboratorios y viviendas en Buenos Aires y zonas aledañas.",
    href: "#",
  },
];

const trustFeatures = [
  {
    iconSrc: wrenchIcon,
    title: "Montaje Industrial Especializado",
    description: "Capacidad técnica para instalaciones industriales complejas incluyendo sistemas de ventilación, con experiencia en laboratorios y edificios comerciales.",
  },
  {
    iconSrc: iconBuilding,
    title: "Proyectos Comerciales de Altura",
    description: "Experiencia comprobada en edificios de múltiples pisos en Capital Federal, con logística y coordinación para proyectos verticales complejos.",
  },
  {
    iconSrc: iconCapacity,
    title: "Capacidad de Gran Escala",
    description: "Recursos para emprendimientos de envergadura considerable, con proyectos completados de hasta 300 metros de instalaciones en un solo edificio.",
  },
];

// Icon Section with scroll-linked animation
const IconSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 180]);

  return (
    <section ref={sectionRef} className="py-16 text-center overflow-hidden">
      <div className="container max-w-3xl">
        <motion.div
          className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
          style={{ rotate }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={wrenchIcon} alt="" className="w-8 h-8" />
        </motion.div>
        <motion.h2 
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Un Especialista. Instalaciones Completas. Control Total del Proyecto.
        </motion.h2>
        <motion.p 
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Cuando su proyecto comercial o industrial requiere instalaciones técnicas especializadas, necesita un contratista con la capacidad y experiencia para coordinar todos los aspectos. Desde la fabricación hasta la instalación final, manejamos proyectos de ventilación, montaje industrial y construcción con el profesionalismo que su emprendimiento merece.
        </motion.p>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        preHeadline="MONTAJE INDUSTRIAL Y CONSTRUCCIÓN COMERCIAL EN BUENOS AIRES"
        title="Instalación Industrial Profesional para Proyectos Comerciales"
        headline="Montaje industrial especializado y sistemas de ventilación para edificios de múltiples pisos en Capital Federal"
        subHeadline="Desde sistemas de ventilación en edificios comerciales de altura hasta instalaciones industriales complejas, ofrecemos capacidad técnica comprobada para proyectos de gran escala en Buenos Aires."
        backgroundImage={heroHeader}
        primaryCta={{ text: "Solicitar Evaluación Gratuita", href: "#" }}
        secondaryCta={{ text: "Ver Proyectos", href: "#gallery" }}
      />

      {/* Trust & Credibility Section - Three Value Boxes */}
      <section className="relative -mt-8 z-20 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => {
              return (
                <div 
                  key={index} 
                  className="bg-white/[0.97] rounded-xl p-8 shadow-lg text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <img src={feature.iconSrc} alt="" className="w-7 h-7" style={{ filter: "invert(36%) sepia(77%) saturate(1000%) hue-rotate(3deg) brightness(97%) contrast(95%)" }} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* One Contractor Section */}
      <IconSection />

      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios especializados de montaje industrial, fabricación e instalación de sistemas de ventilación, y construcción para proyectos comerciales, industriales y residenciales en Buenos Aires.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Ver Más
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Slideshow Section */}
      <section id="gallery" className="py-20">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Algunos ejemplos de nuestro trabajo en instalaciones industriales, sistemas de ventilación y construcción comercial en Buenos Aires.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experiencia en Proyectos Comerciales e Industriales en Buenos Aires
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  S.O.L. Construcciones se especializa en montaje industrial con experiencia comprobada en proyectos comerciales de múltiples pisos en Capital Federal. Hemos completado instalaciones de gran escala incluyendo sistemas de ventilación de hasta 300 metros en edificios de altura.
                </p>
                <p>
                  Nuestra capacidad incluye coordinación con empresas especializadas para ofrecer soluciones completas en instalaciones industriales. Desde laboratorios técnicos hasta edificios comerciales, manejamos proyectos que requieren precisión, coordinación y capacidad técnica especializada.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src={experienceRenovation} 
                alt="S.O.L. Construcciones proyecto comercial" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Atendemos Buenos Aires y Zonas Aledañas
            </h2>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
              <span>Capital Federal</span>
              <span className="w-1 h-1 bg-primary-foreground rounded-full" />
              <span>Gran Buenos Aires</span>
              <span className="w-1 h-1 bg-primary-foreground rounded-full" />
              <span>Zonas Circundantes</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Capital Federal</h3>
              <p className="text-muted-foreground text-sm">Proyectos comerciales e industriales en CABA, incluyendo edificios de múltiples pisos y instalaciones técnicas especializadas.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Gran Buenos Aires</h3>
              <p className="text-muted-foreground text-sm">Servicios de construcción y montaje industrial para empresas y proyectos comerciales en toda el área metropolitana.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">Zonas Aledañas</h3>
              <p className="text-muted-foreground text-sm">Capacidad para proyectos en zonas circundantes incluyendo construcción prefabricada y renovaciones comerciales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Contact Form Section */}
      <section className="relative py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={experienceRenovation} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Why Choose Us */}
            <div className="text-white pt-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Por Qué Elegir<br />S.O.L. Construcciones
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Especialización en montaje industrial</strong> – Capacidad técnica específica para instalaciones industriales complejas y sistemas de ventilación</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Experiencia en edificios de altura</strong> – Proyectos comprobados en edificios de múltiples pisos con coordinación logística para construcción vertical</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Capacidad de gran escala</strong> – Recursos para proyectos de envergadura considerable con instalaciones de hasta 300 metros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Proyectos comerciales e industriales</strong> – Experiencia en laboratorios, oficinas y edificios comerciales en Capital Federal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Red de colaboración</strong> – Trabajo coordinado con empresas especializadas para soluciones completas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span><strong>Ubicación en CABA</strong> – Presencia establecida en Capital Federal para respuesta y servicio eficiente</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Solicite su Evaluación Gratuita
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Complete el formulario y nos contactaremos para evaluar su proyecto de instalación industrial o construcción comercial.
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
