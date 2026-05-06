import brandsImg from "@/assets/brands.png";

const BrandsBar = () => (
  <section className="bg-background py-10 px-[258px]">
    <p className="text-center text-foreground/70 text-xl font-gibson mb-8">
      Orgullosos de trabajar con las mejores marcas del mercado:
    </p>
    <div className="flex items-center justify-center">
      <img
        src={brandsImg}
        alt="Marcas de confianza asociadas"
        className="max-w-[900px] w-full h-auto object-contain"
      />
    </div>
  </section>
);

export default BrandsBar;
