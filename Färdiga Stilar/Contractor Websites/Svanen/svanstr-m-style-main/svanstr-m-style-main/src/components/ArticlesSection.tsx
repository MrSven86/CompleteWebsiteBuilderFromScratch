const articles = [
  {
    title: "Cómo elegir el color perfecto para tu hogar",
    excerpt:
      "Elegir el color adecuado para cada ambiente es más que una cuestión estética. Descubrí cómo los colores afectan el ánimo y [...]",
    image: "/images/artikel-energiklass.jpg",
  },
  {
    title: "Preparación de superficies: la clave del éxito",
    excerpt:
      "Una buena preparación es fundamental para que la pintura dure años. Conocé los pasos esenciales antes de empezar a pintar [...]",
    image: "/images/artikel-kronkoppling.jpg",
  },
  {
    title: "Pintura exterior: protección y estética para tu propiedad",
    excerpt:
      "La pintura exterior no solo embellece tu propiedad sino que la protege de las inclemencias del clima. Descubrí los mejores [...]",
    image: "/images/artikel-sparkoppling.jpg",
  },
];

const ArticlesSection = () => {
  return (
    <section className="svan-section svan-bg-blue py-16">
      <div className="svan-container">
        <h2 className="text-3xl font-bold svan-text-white mb-4">
          Últimos artículos sobre pintura
        </h2>
        <p className="svan-text-white opacity-80 mb-10 max-w-3xl">
          ¿Querés profundizar en consejos, trucos y soluciones inteligentes?
          Seguí leyendo para obtener conocimiento práctico de nuestros pintores
          profesionales.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group block rounded-lg overflow-hidden bg-background"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold svan-text-body mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm svan-text-body opacity-70 mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                <p className="text-sm font-semibold" style={{ color: "hsl(240 100% 20%)" }}>
                  Leer artículo
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
