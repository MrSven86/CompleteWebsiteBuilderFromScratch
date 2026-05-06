import womanHero from "@/assets/woman-hero.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 top-0 bg-secondary sm:top-[23px]" />

      <div className="relative mx-auto grid max-w-[1920px] items-start gap-10 px-4 pb-0 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,451px)] lg:px-16 lg:pt-16 xl:min-h-[683px] xl:px-[266px] xl:pt-[23px]">
        <div className="flex max-w-[475px] flex-col justify-start pb-2 lg:pb-16 lg:pt-12 xl:pb-0 xl:pt-20">
          <h1
            className="m-0 uppercase text-foreground"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 36px)',
              letterSpacing: '3.2px',
              lineHeight: '1.42',
            }}
          >
            Elevate your beauty
          </h1>

          <p
            className="mt-6 text-foreground"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 2vw, 20px)',
              lineHeight: '32px',
              marginBottom: 0,
            }}
          >
            Med effektive, kompromisløse og dokumenterede
            <br />
            behandlinger af højeste standard.
          </p>

          <a
            href="#behandlinger"
            className="mt-10 inline-flex h-14 w-fit min-w-[208px] items-center rounded-md no-underline transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'hsl(240 6% 6%)',
              padding: '0 19px',
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: '20px',
                color: 'hsl(0 0% 100%)',
                letterSpacing: '0.025em',
              }}
            >
              Se behandlinger
            </span>
          </a>
        </div>

        <img
          src={womanHero}
          alt="Beauty treatment"
          className="mx-auto w-full max-w-[451px] self-end lg:mx-0 lg:justify-self-end"
          style={{
            aspectRatio: '451 / 683',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
