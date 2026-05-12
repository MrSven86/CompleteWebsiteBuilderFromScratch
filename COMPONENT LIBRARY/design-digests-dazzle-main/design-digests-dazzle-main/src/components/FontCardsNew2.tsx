const FontCardsNew2 = () => {
  return (
    <>
      {/* Card 24: Relocate - Geist Modern Consultancy */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Very nice modern high end like a consultancy service
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[164px] py-[40px]">
          <div className="flex items-center gap-2 mb-[16px]">
            <div className="w-2 h-2 bg-orange-500 rounded" />
            <span className="text-stone-900 text-base font-medium font-['Geist']">New Country. New Life.</span>
          </div>
          <div className="text-stone-900 text-6xl font-semibold font-['Geist'] leading-[61.60px] mb-[16px]">
            Relocate with<br/>confidence. Settle<br/>with ease.
          </div>
          <div className="text-stone-900 text-lg font-normal font-['Geist'] leading-6 mb-[24px]">
            Personalized support for individuals, families, and<br/>
            professionals moving abroad.
          </div>
          <div className="flex items-start gap-7">
            <div className="px-6 pt-3.5 pb-4 bg-indigo-500 rounded-[30px] inline-flex items-center">
              <span className="text-center text-stone-50 text-base font-normal font-['Geist'] leading-6">Get a Free Consultation</span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="flex items-center gap-0">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-400" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                  </div>
                ))}
              </div>
              <span className="text-zinc-600 text-base font-normal font-['Geist'] leading-6">5-Star Client Experience</span>
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Geist</span></span>
          <span>Colors: <span className="text-orange-500">■</span> orange-500 · <span className="text-indigo-500">■</span> indigo-500 · stone-900 · white bg</span>
        </div>
      </section>

      {/* Card 25: Space Grotesk + IBM Plex Serif - White Collar */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Fits almost anything — like a white collar anything. Notice the IBM Plex Serif
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="mb-[20px]">
            <span className="text-slate-700 text-6xl font-bold font-['Space_Grotesk'] leading-[64.40px]">We bring </span>
            <span className="text-indigo-700 text-6xl font-semibold font-['IBM_Plex_Serif'] leading-[64.40px]">solutions</span>
          </div>
          <div className="text-slate-700 text-5xl font-bold font-['Space_Grotesk'] leading-[64.40px] max-w-[480px] mb-[20px]">
            to make life easier<br/>for our customers.
          </div>
          <div className="text-gray-500 text-2xl font-normal font-['Space_Grotesk'] leading-9 mb-[20px]">
            We have considered our solutions to<br/>support every stage of your growth.
          </div>
          <div className="px-7 pt-4 pb-3.5 bg-indigo-700 rounded-lg inline-flex">
            <span className="text-center text-white text-lg font-bold font-['Space_Grotesk'] leading-8">Get Started</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Space Grotesk</span> · <span className="text-neutral-300">IBM Plex Serif</span></span>
          <span>Colors: <span className="text-indigo-700">■</span> indigo-700 · slate-700 · gray-500 · white bg</span>
        </div>
      </section>

      {/* Card 26: Building Futures - Outfit Education */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Classic web template fits white collar like a school or whatever
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[91px] py-[40px]">
          <div className="flex justify-center mb-[12px]">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-gray-950 text-base font-medium font-['Outfit'] leading-6">Learn From the Top Experts</span>
            </div>
          </div>
          <div className="text-center text-gray-950 text-7xl font-semibold font-['Outfit'] leading-[86.40px] mb-[16px]">
            Building Futures Together<br/>By Empowering Minds
          </div>
          <div className="text-center text-neutral-600 text-lg font-normal font-['Outfit'] leading-7 max-w-[615px] mx-auto">
            Join us in shaping a brighter future by nurturing potential, empowering minds,<br/>
            and fostering growth through education and collaboration.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Outfit</span></span>
          <span>Colors: gray-950 · neutral-600 · white bg</span>
        </div>
      </section>

      {/* Card 27: NVJ Painting - Fraunces + Manrope */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Sophisticated some extra styling for say a painter
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[139px] py-[40px]">
          <div className="text-red-600 text-lg font-medium font-['Manrope'] uppercase leading-5 tracking-widest mb-[12px]">
            NVJ Painting
          </div>
          <div className="text-black text-5xl font-bold font-['Fraunces'] leading-[53.70px] max-w-[621px] mb-[18px]">
            Interior Painting for Los Angeles Homes
          </div>
          <div className="text-black text-base font-normal font-['Manrope'] leading-8 max-w-[567px] mb-[16px]">
            Transform your home's interior with professional painting services. We handle everything from single rooms to complete home interiors.
          </div>
          <div className="flex flex-col gap-[6px] max-w-[560px] mb-[20px]">
            {[
              'Living rooms, dining rooms, family rooms',
              'Bedrooms and hallways',
              'Kitchens and bathrooms',
              'Trim, baseboards, crown molding',
              'Doors, door frames, window casings',
              'Ceilings',
              'Cabinets and built-ins'
            ].map((item, i) => (
              <div key={i} className="text-black text-base font-bold font-['Manrope'] leading-8">
                {item}
              </div>
            ))}
          </div>
          <div className="mb-[24px]">
            <span className="text-black text-xl font-bold font-['Manrope'] leading-8">Our process:<br/></span>
            <span className="text-black text-base font-normal font-['Manrope'] leading-8 max-w-[580px]">
              Professional surface preparation ensures paint adheres properly and lasts. We protect your furniture and floors, prep all surfaces (filling holes, sanding, priming), apply quality paint, and clean up completely.
            </span>
          </div>
          <div className="bg-red-600 rounded-[5px] inline-flex items-center justify-center px-[15px] py-[11px]">
            <span className="text-center text-neutral-50 text-lg font-extrabold font-['Manrope'] uppercase leading-6 tracking-wide">GET A FREE estimate</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Fraunces</span> · <span className="text-neutral-300">Manrope</span></span>
          <span>Colors: <span className="text-red-600">■</span> red-600 · black · white bg</span>
        </div>
      </section>

      {/* Card 28: Colarossi - Lora + Inter */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            High end sophisticated for say a high end house builder
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="text-purple-800 text-lg font-medium font-['Inter'] uppercase leading-5 tracking-widest mb-[10px]">
            RESIDENTIAL & COMMERCIAL
          </div>
          <div className="text-violet-950 text-5xl font-medium font-['Lora'] leading-[55px] max-w-[539px] mb-[20px]">
            Bring New Life & Color to<br/>Your Home!
          </div>
          <div className="max-w-[553px] mb-[16px]">
            <span className="text-violet-950 text-lg font-bold font-['Inter'] leading-8">Colarossi Painting & Rain Gutters</span>
            <span className="text-zinc-500 text-lg font-normal font-['Inter'] leading-8"> has served the South Bay, Los
            Angeles and surrounding areas for over 30 years, delivering the
            highest quality customer service and finished product for your
            home or office. Most of our professional and friendly team have
            been with us over 20 years.</span>
          </div>
          <div className="text-red-500 text-xl font-bold font-['Inter'] leading-8 mb-[20px]">
            Call Today +1 866-941-9770
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-purple-800 inline-flex items-center justify-center px-[47px] py-[27px]">
              <span className="text-center text-white text-lg font-normal font-['Inter'] leading-5">Get a Free Estimate</span>
            </div>
            <div className="outline outline-1 outline-violet-950 inline-flex items-center justify-center px-[47px] py-[27px]">
              <span className="text-center text-violet-950 text-lg font-medium font-['Inter'] leading-5">Learn More</span>
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Lora</span> · <span className="text-neutral-300">Inter</span></span>
          <span>Colors: <span className="text-purple-800">■</span> purple-800 · <span className="text-violet-950">■</span> violet-950 · <span className="text-red-500">■</span> red-500 · white bg</span>
        </div>
      </section>

      {/* Card 29: Urbanist - Metal Fabrication */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            High end construction or aviation engineering or whatever
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="max-w-[894px] mb-[16px]">
            <span className="text-neutral-500 text-5xl font-medium font-['Urbanist'] leading-[62.40px]">We specialize in high-quality </span>
            <span className="text-stone-900 text-5xl font-medium font-['Urbanist'] leading-[62.40px]">metal<br/>fabrication, strength and efficiency</span>
            <span className="text-neutral-500 text-5xl font-medium font-['Urbanist'] leading-[62.40px]">. From<br/>individual parts to complex structures.</span>
          </div>
          <div className="text-neutral-500 text-base font-light font-['Urbanist'] leading-6 max-w-[684px] mb-[20px]">
            Specializing in metal fabrication, custom components, and industrial builds, we bring together<br/>
            experience, precision, and hands-on craftsmanship.
          </div>
          <div className="bg-yellow-200 rounded-[55px] inline-flex items-center px-[27px] py-[18px] gap-2">
            <span className="text-center text-stone-900 text-base font-semibold font-['Urbanist'] leading-5 tracking-tight">About Company</span>
            <span className="text-stone-900">→</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Urbanist</span></span>
          <span>Colors: stone-900 · neutral-500 · <span className="text-yellow-200">■</span> yellow-200 · white bg</span>
        </div>
      </section>

      {/* Card 30: Space Grotesk Standalone - Web Agency */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Fancy like a high end web agency with confidence
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="flex items-center gap-2 mb-[12px]">
            <div className="w-2.5 h-2.5 bg-black rounded-sm" />
            <span className="text-neutral-900 text-base font-bold font-['Space_Grotesk'] leading-5">Populära tjänster</span>
          </div>
          <div className="text-neutral-900 text-5xl font-bold font-['Space_Grotesk'] leading-[50.60px] max-w-[663px] mb-[20px]">
            Skräddarsydda tjänster för<br/>framgångsrik marknadsföring
          </div>
          <div className="text-neutral-900/60 text-lg font-medium font-['Space_Grotesk'] leading-6 max-w-[762px] mb-[24px]">
            På Qase är vi Best Friend Approved™ – din digitala marknadsföringsbyrå som hjälper ditt<br/>
            företag att nå sin digitala potential. Vi gör marknadsföring roligt och effektivt, helt utan<br/>
            bindningstider – bara långsiktiga resultat.
          </div>
          <div className="bg-neutral-900 rounded-[10px] inline-flex items-center justify-center px-[22px] py-[8px]">
            <span className="text-white text-lg font-bold font-['Space_Grotesk'] leading-4">Se alla tjänster</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Space Grotesk</span></span>
          <span>Colors: neutral-900 · white bg</span>
        </div>
      </section>

      {/* Card 31: Coloring Our Community - Montserrat Bold */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Nice corporate bold like american painter
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="text-zinc-800 text-6xl font-black font-['Montserrat'] leading-[66.21px] mb-[16px]">
            Coloring Our<br/>Community
          </div>
          <div className="text-zinc-800 text-2xl font-medium font-['Montserrat'] leading-7 mb-[24px]">
            360° Painting of Wilmington
          </div>
          <div className="bg-rose-700 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.60)] outline outline-2 outline-offset-[-2px] outline-white inline-flex items-center justify-center px-[33px] py-[22px]">
            <span className="text-center text-white text-lg font-bold font-['Montserrat'] uppercase leading-4">Book Your Free Estimate</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Montserrat</span></span>
          <span>Colors: zinc-800 · <span className="text-rose-700">■</span> rose-700 · white bg</span>
        </div>
      </section>

      {/* Card 32: Stephen James - Bebas Neue + Poppins */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Modern can fit say a modern painter or builder
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="text-black text-5xl font-normal font-['Bebas_Neue'] leading-[48px] mb-[18px]">
            about Stephen James Painting
          </div>
          <div className="text-neutral-800 text-base font-normal font-['Poppins'] leading-8 max-w-[660px] mb-[24px]">
            At Stephen James Painting, we specialize in transforming homes and businesses
            with professional interior and exterior painting services. Since 2006, we've built a
            reputation for delivering exceptional craftsmanship, attention to detail, and
            outstanding customer service. Whether it's a fresh coat to brighten up your living
            room or a full exterior repaint, we bring color, quality, and care to every project.
          </div>
          <div className="text-neutral-800 text-base font-normal font-['Poppins'] leading-8 max-w-[660px] mb-[30px]">
            Our team is dedicated to providing stress-free experiences with timely completion
            and guaranteed satisfaction. We believe in building lasting relationships with our
            clients by exceeding expectations and turning houses into homes and businesses
            into standout properties.
          </div>
          <div className="bg-[radial-gradient(ellipse_51.26%_227.14%_at_50.00%_50.00%,_#4089B6_0%,_#26658B_100%)] rounded outline outline-2 outline-offset-[-2px] outline-cyan-600 inline-flex items-center justify-center px-[69px] py-[14px]">
            <span className="text-center text-white text-2xl font-normal font-['Bebas_Neue']">LEARN MORE</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Bebas Neue</span> · <span className="text-neutral-300">Poppins</span></span>
          <span>Colors: black · neutral-800 · <span className="text-cyan-600">■</span> cyan-600 gradient · white bg</span>
        </div>
      </section>

      {/* Card 33: Libre Franklin - Sophisticated Contractor */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Sophisticated nice for say a high end contractor
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[153px] py-[40px]">
          <div className="text-center text-zinc-950 text-5xl font-bold font-['Libre_Franklin'] leading-[56.40px] mb-[20px]">
            Don't Just Take Our Word For It
          </div>
          <div className="text-center text-zinc-950 text-base font-normal font-['Inter'] leading-8 max-w-[700px] mx-auto">
            Five-star painting reviews, our commitment to excellence shines through every project. Join the ranks of satisfied customers who trust Southern California's most
            recommended painting services. Read More Reviews.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Libre Franklin</span> · <span className="text-neutral-300">Inter</span></span>
          <span>Colors: zinc-950 · white bg</span>
        </div>
      </section>
    </>
  );
};

export default FontCardsNew2;
