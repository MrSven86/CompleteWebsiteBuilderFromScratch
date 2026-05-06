const JourSection = () => {
  return (
    <section className="svan-section svan-bg-light py-16">
      <div className="svan-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold svan-text-body mb-4">
            Servicio de urgencia – respuesta rápida garantizada
          </h2>
          <p className="svan-text-body opacity-80 mb-6">
            Acme Painting Company es una de las pocas empresas en Buenos Aires
            que ofrece servicio de emergencia para todo tipo de problemas
            relacionados con pintura y mantenimiento. Nuestro objetivo es estar
            en el lugar lo antes posible. Cuando cada minuto cuenta, puede
            confiar en nosotros.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="svan-btn-outline">Pintura Interior</a>
            <a href="#" className="svan-btn-outline">Pintura Exterior</a>
            <a href="#" className="svan-btn-outline">Impermeabilización</a>
          </div>
        </div>
        <div>
          <img
            src="/images/jourservice.jpg"
            alt="Servicio de urgencia"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default JourSection;
