import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import credentialsCollage from "@/assets/credentials-collage.png";

const CredentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={credentialsCollage}
              alt="Proyecto profesional de calidad"
              className="max-w-full h-auto"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-foreground" />
              <span className="uppercase text-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "19.8px", letterSpacing: "1.8px" }}>
                Por Qué Elegirnos
              </span>
            </div>

            <h2 className="text-foreground mb-6 text-3xl md:text-[40px] md:leading-[50px]" style={{ fontFamily: "'Lora', serif", fontWeight: 500 }}>
              Calidad Respaldada por Credenciales Verificadas
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
              Contratar servicios profesionales no debería ser una apuesta. Somos una empresa con licencia y credenciales verificadas de manera independiente, sirviendo a nuestra comunidad local con los más altos estándares de calidad.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1a9a8a' }}>
                <CheckCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "26px" }}>
                  Contratista con Licencia Profesional
                </h3>
                <p className="text-muted-foreground max-w-lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
                  Contamos con una calificación de 92 sobre 100, ubicándonos en el 32% superior de todos los contratistas con licencia. Nuestra licencia profesional requiere años de experiencia y aprobación de exámenes estatales, garantizando que cumplimos con los estándares profesionales de la industria.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1a9a8a' }}>
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "26px" }}>
                  Operación Local
                </h3>
                <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "26px" }}>
                  Con sede aquí en su comunidad, entendemos las necesidades locales y las condiciones específicas de la zona. Servimos a toda la región con el conocimiento local que proviene de ser parte de esta comunidad.
                </p>
              </div>
            </div>

            <Button className="bg-hero-cta hover:bg-hero-cta/90 text-primary-foreground uppercase tracking-widest px-10 py-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "2px" }}>
              Solicite Su Presupuesto Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;