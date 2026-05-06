import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  phone1?: string;
}

export function CTASection({
  title = "¿Listo para Su Proyecto de Construcción?",
  description = "Solicite una evaluación gratuita con análisis detallado de su proyecto. Atendemos proyectos comerciales, industriales y residenciales en Buenos Aires y zonas aledañas.",
  primaryCta = { text: "Solicitar Evaluación Gratuita", href: "#" },
  phone1 = "54 11 4544-3760",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
            >
              <Link to={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            <div className="text-primary-foreground/90">
              <p className="text-sm">O llámenos directamente:</p>
              <a href={`tel:+541145443760`} className="font-semibold hover:text-card transition-colors">
                {phone1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
