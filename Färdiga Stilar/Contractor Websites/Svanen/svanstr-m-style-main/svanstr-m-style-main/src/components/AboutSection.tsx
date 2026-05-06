const AboutSection = () => {
  return (
    <section className="svan-section py-16">
      <div className="svan-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold svan-text-body mb-4">
            Nos importa hacer las cosas bien
          </h2>
          <p className="svan-text-body opacity-80 mb-6">
            Nuestro fundador es un apasionado del oficio y referente en el
            sector de la pintura profesional. Con años de experiencia, lidera
            un equipo comprometido con la excelencia y la satisfacción del
            cliente en cada proyecto.
          </p>
          <a href="#" className="svan-btn-outline">
            Sobre Acme Painting
          </a>
        </div>
        <div>
          <img
            src="/images/erfarenhet.jpg"
            alt="Experiencia y compromiso"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
