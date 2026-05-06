const certs = [
  {
    image: "/images/sakervatten.jpg",
    alt: "Certificación de calidad",
    title: "Certificación ISO 9001",
    desc: "Nuestros procesos están certificados bajo la norma ISO 9001 de gestión de calidad.",
  },
  {
    image: "/images/het-arbeten.png",
    alt: "Seguridad laboral",
    title: "Certificados en Seguridad Laboral",
    desc: "Todo nuestro personal cuenta con certificaciones de seguridad e higiene en el trabajo.",
  },
  {
    image: "/images/bas-p-bas-u.webp",
    alt: "Medio ambiente",
    title: "Pinturas Ecológicas Certificadas",
    desc: "Utilizamos pinturas y productos certificados como ecológicos y de bajo impacto ambiental.",
  },
];

const CertificatesSection = () => {
  return (
    <section className="svan-section py-16">
      <div className="svan-container">
        <h2 className="text-3xl font-bold svan-text-body text-center mb-4">
          Certificaciones y garantías
        </h2>
        <p className="text-center svan-text-body opacity-80 max-w-2xl mx-auto mb-12">
          Acme Painting Company cuenta con múltiples certificaciones que
          garantizan la calidad y seguridad de nuestros trabajos.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {certs.map((cert) => (
            <div key={cert.title} className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              <h3 className="text-lg font-bold svan-text-body mb-2">
                {cert.title}
              </h3>
              <p className="text-sm svan-text-body opacity-70">{cert.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="svan-btn-outline">
            Ver todas las certificaciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
