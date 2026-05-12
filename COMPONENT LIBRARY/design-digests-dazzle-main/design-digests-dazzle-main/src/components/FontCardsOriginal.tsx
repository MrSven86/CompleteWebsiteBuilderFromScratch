import { Link } from "react-router-dom";

const FontCardsOriginal = () => {
  return (
    <>
      {/* Card 1: Armstrong - High-end Painting/Builder */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            High-end Painting / Builder — sophisticated, a notch above the rest
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-gradient-to-b from-black to-neutral-900 px-[180px] py-[45px]">
          <div className="text-amber-400 text-2xl font-semibold font-['Mukta_Malar'] leading-9 mb-[10px]">
            Welcome to Armstrong
          </div>
          <div className="text-white text-6xl font-normal font-['DM_Serif_Display'] leading-[60px] tracking-wider max-w-[1222px] mb-[20px]">
            Upgrading and Protecting Homes Since 1966<br/>
            With Superior Foam Roofing, Painting and<br/>
            Windows Services
          </div>
          <div className="text-white text-xl font-normal font-['Mukta_Malar'] leading-5 mb-[20px]">
            Proudly serving the San Franscisco Bay Area and surroundings!
          </div>
          <div className="bg-amber-400 flex items-center justify-center" style={{ width: 256, height: 48 }}>
            <span className="text-center text-cyan-900 text-base font-medium font-['Mukta_Malar'] leading-4">
              Get Your Free Estimate Today!
            </span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">DM Serif Display</span> · <span className="text-neutral-300">Mukta Malar</span></span>
          <span>Colors: <span className="text-amber-400">■</span> amber-400 · <span className="text-cyan-900">■</span> cyan-900 · white · black</span>
        </div>
      </section>

      {/* Card 2: Barbería - High-end Restaurant/Barber */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            High-end restaurant or barber — very fancy font combination
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-neutral-950 border border-neutral-800 px-[159px] py-[43px]">
          <div className="flex items-center gap-4 mb-[18px]">
            <div className="w-10 h-px bg-amber-400" />
            <div className="text-amber-400 text-xs font-semibold font-['Outfit'] uppercase" style={{ letterSpacing: '6.40px' }}>
              Nuestra Historia
            </div>
          </div>
          <div className="max-w-[654px] mb-[26px]">
            <span className="text-neutral-50 text-6xl font-bold font-['Playfair_Display'] leading-[61.60px]">
              Más que una barbería,{' '}
            </span>
            <span className="text-amber-400 text-6xl font-bold font-['Playfair_Display'] leading-[61.60px]">
              un<br/>estilo de vida
            </span>
          </div>
          <div className="max-w-[640px] mb-[40px]">
            <div className="text-zinc-500 text-lg font-normal font-['Outfit'] leading-8">
              Desde 2015 nos dedicamos a transformar la imagen de nuestros clientes. Creamos
              un espacio único donde, más allá de cambiar tu look, podés relajarte, disfrutar de
              una buena cerveza y encontrarte con amigos.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-[22px] max-w-[700px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-3xl border-2 border-neutral-600 flex items-center justify-center">
                <span className="material-icons text-neutral-600 text-3xl leading-7">content_cut</span>
              </div>
              <span className="text-neutral-50 text-sm font-medium font-['Outfit']">Cortes Clásicos & Modernos</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-3xl border-2 border-neutral-600 flex items-center justify-center">
                <span className="material-icons text-neutral-600 text-3xl leading-7">face_retouching_natural</span>
              </div>
              <span className="text-neutral-50 text-sm font-medium font-['Outfit']">Afeitada Tradicional</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-3xl border-2 border-neutral-600 flex items-center justify-center">
                <span className="material-icons text-neutral-600 text-3xl leading-7">local_bar</span>
              </div>
              <span className="text-neutral-50 text-sm font-medium font-['Outfit']">Bar & Lounge</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-3xl border-2 border-neutral-600 flex items-center justify-center">
                <span className="material-icons text-neutral-600 text-3xl leading-7">child_care</span>
              </div>
              <span className="text-neutral-50 text-sm font-medium font-['Outfit']">Mini BACAN (Niños)</span>
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Playfair Display</span> · <span className="text-neutral-300">Outfit</span></span>
          <span>Colors: <span className="text-amber-400">■</span> amber-400 · <span className="text-neutral-50">■</span> neutral-50 · <span className="text-zinc-500">■</span> zinc-500 · black</span>
        </div>
      </section>

      {/* Card 3: Blog - Friendly/Feminine */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Friendly, highly designed, somewhat feminine — nice blog / news website
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[159px] py-[40px]">
          <div className="mb-[19px]">
            <div className="bg-violet-50 rounded-[100px] inline-flex items-center justify-center px-3" style={{ height: 32 }}>
              <span className="text-indigo-600 text-base font-normal font-['Fraunces'] leading-4 tracking-tight">Marketing</span>
            </div>
          </div>
          <div className="max-w-[320px] mb-[24px]">
            <div className="text-neutral-900 text-4xl font-normal font-['Fraunces'] leading-[56px]">
              5 Best Hair Salon
              Websites of 2026:
              Award-Winning
              Designs & Success
              Stories
            </div>
          </div>
          <div className="max-w-[384px]">
            <div className="text-zinc-600 text-base font-normal font-['Lora'] leading-5">
              Discover the 5 best hair salon websites of 2026, featuring
              award-winning designs, innovative booking systems, and
              proven success stories. Learn what makes these salon
              websites stand out and get inspired for your own salon's
              digital presence.
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Fraunces</span> · <span className="text-neutral-300">Lora</span></span>
          <span>Colors: <span className="text-indigo-600">■</span> indigo-600 · <span className="text-violet-50">■</span> violet-50 · neutral-900 · zinc-600 · white</span>
        </div>
      </section>

      {/* Card 4: GF Finish Coat - Sophisticated Corporate */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Another fancy, sophisticated font combination — high-end Painting or builder, corporate as well
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-zinc-400 px-[154px] py-[23px]">
          <div className="w-32 h-6 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-2 px-[13px] mb-[11px]">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span className="text-red-600 text-[10px] font-bold font-['Montserrat'] uppercase leading-4 tracking-wider">Get In Touch</span>
          </div>
          <div className="mb-[20px]">
            <span className="text-slate-900 text-7xl font-medium font-['Playfair_Display'] leading-[72px]">Start Your<br/></span>
            <span className="text-slate-500 text-7xl font-medium font-['Playfair_Display'] leading-[72px]">Project</span>
          </div>
          <div className="text-slate-900 text-3xl font-normal font-['Playfair_Display'] leading-9 mb-[10px]">
            Request an Estimate
          </div>
          <div className="text-slate-900 text-lg font-light font-['Montserrat'] leading-7 max-w-[384px]">
            We invite you to experience the GF Finish Coat<br/>
            difference. Contact us today for a consultation.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Playfair Display</span> · <span className="text-neutral-300">Montserrat</span></span>
          <span>Colors: <span className="text-red-600">■</span> red-600 · slate-900 · slate-500 · zinc-400 bg</span>
        </div>
      </section>

      {/* Card 5: About Us - Quirky Down to Earth */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Kinda quirky but down to earth approachable plain simple — works for a plumber or any down to earth service
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-zinc-400 px-[199px] py-[40px]">
          <div className="flex items-center gap-8 mb-[32px]">
            <div className="flex flex-col items-center">
              <span className="text-slate-600 text-base font-medium font-['Rubik'] capitalize leading-6">Home</span>
              <div className="w-12 h-0.5 bg-slate-600 mt-2" />
            </div>
            <span className="text-white text-base font-medium font-['Rubik'] capitalize leading-6">About</span>
            <div className="flex items-center gap-1">
              <span className="text-white text-base font-medium font-['Rubik'] capitalize leading-6">Service</span>
              <span className="text-white text-xs">▼</span>
            </div>
            <span className="text-white text-base font-medium font-['Rubik'] capitalize leading-6">Portfolio</span>
            <span className="text-white text-base font-medium font-['Rubik'] capitalize leading-6">Contact</span>
          </div>
          <div className="text-white text-4xl font-bold font-['Rubik'] leading-[48px]">
            About Us
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Rubik</span></span>
          <span>Colors: white · slate-600 · zinc-400 bg</span>
        </div>
      </section>

      {/* Card 6: Hiroshi - Stylized Barber */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            More stylized, chill — like a cool barber
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-zinc-400 px-[173px] py-[40px]">
          <div className="text-black text-5xl font-normal font-['Bowlby_One'] leading-[67px] mb-[20px]">
            About<br/>HIROSHI
          </div>
          <div className="text-black text-lg font-normal font-['Lato'] leading-7 max-w-[806px]">
            In 1978, Hiroshi Kitamura, a source of pride for Kyoto, Japan, embarked on a remarkable journey<br/>
            when he opened the doors to his salon, "Hiroshi Hair Design," nestled on Canon Drive, right in the<br/>
            heart of the enchanting Beverly Hills.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Bowlby One</span> · <span className="text-neutral-300">Lato</span></span>
          <span>Colors: black · zinc-400 bg</span>
        </div>
      </section>

      {/* Card 7: Building Trust - Industrial */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            100% Industrial — high end with attitude cool design
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-zinc-400 px-[50px] py-[40px]">
          <div className="flex items-center gap-8 mb-[26px]">
            <span className="text-white text-xl font-normal font-['Syne']">About</span>
            <span className="text-white text-xl font-normal font-['Syne']">Services</span>
            <span className="text-white text-xl font-normal font-['Syne']">Clients</span>
            <span className="text-white text-xl font-normal font-['Syne']">Contact</span>
          </div>
          <div className="text-center text-white text-7xl font-extrabold font-['Syne'] uppercase leading-[86.40px] [text-shadow:_3px_3px_10px_rgb(0_0_0_/_0.25)] mb-[20px]">
            Building<br/>Trust
          </div>
          <div className="text-center text-white text-2xl font-bold font-['Syne'] leading-10 [text-shadow:_3px_3px_10px_rgb(0_0_0_/_0.25)] max-w-[496px] mx-auto">
            The multi-family housing experts,<br/>
            building with integrity for over 20 years.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Syne</span></span>
          <span>Colors: white · zinc-400 bg</span>
        </div>
      </section>

      {/* Card 8: Porem Barbershop - Confident, clean */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Nice, confident, good design font — fits many services, hairdresser or whatever
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[166px] py-[40px]">
          <div className="text-black text-3xl font-bold font-['Roboto_Condensed'] uppercase leading-10 mb-[22px]">
            Porem Barbershop Jordaan
          </div>
          <div className="flex flex-col gap-[16px] mb-[24px]">
            <div>
              <span className="text-neutral-950 text-base font-bold font-['Roboto'] leading-6">Phone Number</span><br/>
              <span className="text-neutral-950 text-base font-normal font-['Roboto'] leading-6">+31 20 786 43 26</span>
            </div>
            <div>
              <span className="text-neutral-950 text-base font-bold font-['Roboto'] leading-6">Email</span><br/>
              <span className="text-neutral-950 text-base font-normal font-['Roboto'] leading-6">info@porembarbershop.nl</span>
            </div>
            <div>
              <span className="text-neutral-950 text-base font-bold font-['Roboto'] leading-6">Adress</span><br/>
              <span className="text-neutral-950 text-base font-normal font-['Roboto'] leading-6">Nieuwe Willemsstraat 14,<br/>1015 JH Amsterdam</span>
            </div>
          </div>
          <div className="text-neutral-950 text-xl font-semibold font-['Roboto_Condensed'] uppercase leading-8 mb-[5px]">
            Porem Jordaan
          </div>
          <div className="flex items-center gap-1">
            <span className="text-neutral-950 text-base font-normal font-['Roboto'] leading-6">Route description</span>
            <span className="text-neutral-950">→</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Roboto Condensed</span> · <span className="text-neutral-300">Roboto</span></span>
          <span>Colors: neutral-950 · white bg</span>
        </div>
      </section>

      {/* Card 9: 901 Weddings - Style blog / Beverly Hills vibes */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Very specific for a style blog or wedding photographer — Beverly Hills vibes, lots of attitude
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[156px] py-[40px]">
          <div className="text-center text-neutral-900 text-xs font-normal font-['Liberation_Sans',_sans-serif] uppercase leading-4 tracking-widest mb-[16px]">
            the royal treatment
          </div>
          <div className="text-center text-neutral-900 text-6xl font-bold font-['Riawnas_Script'] leading-[66px] tracking-wide mb-[20px]">
            901<br/>Weddings
          </div>
          <div className="text-center">
            <span className="text-neutral-900 text-xs font-normal font-['Liberation_Sans',_sans-serif] uppercase leading-5">Email </span>
            <span className="text-neutral-900 text-xs font-normal font-['Liberation_Sans',_sans-serif] underline uppercase leading-5">weddings@901salon.com</span>
            <span className="text-neutral-900 text-xs font-normal font-['Liberation_Sans',_sans-serif] uppercase leading-5"> to inquire about<br/>bride, groom, and bridal party packages ♥</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Riawnas Script</span> · <span className="text-neutral-300">Liberation Sans</span></span>
          <span className="text-yellow-600">⚠ Riawnas Script is not on Google Fonts — needs custom font file</span>
        </div>
      </section>

      {/* Card 10: Blowouts Delivered - Modern Stylish Ecommerce */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Modern stylish ecommerce or hairdresser with a store
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[174px] py-[40px]">
          <div className="text-stone-700 text-4xl font-bold font-['Poppins'] uppercase leading-10 mb-[20px]">
            BLOWOUTS DELIVERED: SHOP KITS & SETS
          </div>
          <div className="text-stone-700 text-base font-medium font-['Poppins'] leading-5 mb-[8px]">
            The Super Starters Set
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-700 text-lg font-bold font-['Poppins'] leading-6">$230.25</span>
            <span className="text-stone-700 text-base font-normal font-['Poppins'] line-through leading-5">$307.00</span>
            <span className="bg-red-700 text-white text-base font-bold font-['Poppins'] uppercase leading-5 px-2 py-[3px]">25% off</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Poppins</span></span>
          <span>Colors: stone-700 · <span className="text-red-700">■</span> red-700 · white bg</span>
        </div>
      </section>

      {/* Card 11: Klinik Estetik - Stylish Minimalist */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Stylish Minimalist for high end stores and services like a beauty parlor
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[174px] py-[40px]">
          <div className="text-stone-950 text-base font-medium font-['Jost'] uppercase leading-5 mb-[18px]">
            vad vi gör
          </div>
          <div className="text-neutral-800 text-3xl font-medium font-['Futura_PT_Web_Medium',_sans-serif] uppercase leading-[51.20px] tracking-[3.20px] mb-[20px]">
            We are experts at beauty treatments
          </div>
          <div className="text-black text-lg font-light font-['Jost'] leading-6 max-w-[461px] mb-[16px]">
            Klinik Estetik står för medicinsk expertis och har ett helhjärtat
            engagemang i varje kund. För oss är det viktigaste – bortsett
            från att du blir helt nöjd – att du känner dig trygg, från första
            konsultation till återbesök.
          </div>
          <div className="text-black text-lg font-light font-['Jost'] leading-6 max-w-[468px] mb-[30px]">
            Vi är specialiserade inom plastikkirurgi, laser och medicinsk
            hudvård och erbjuder ett brett utbud av estetiska
            behandlingar för hud, kropp och ansikte.
          </div>
          <div className="bg-zinc-950 rounded-md inline-flex items-center gap-3 px-[18px] py-[13px]">
            <span className="text-white text-base font-normal font-['Jost'] leading-10">Book</span>
            <span className="text-white">→</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Jost</span> · <span className="text-neutral-300">Futura PT Web Medium</span></span>
          <span className="text-green-600">✓ Custom font loaded</span>
        </div>
      </section>

      {/* Card 12: Pouss Style Hair Salon - Feminine */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Feminine nice style for say a hairdresser
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[136px] py-[40px]">
          <div className="text-black text-xl font-normal font-['Cormorant'] leading-6 mb-[18px]">
            ESTABLISHED IN 1989
          </div>
          <div className="text-gray-900 text-5xl font-bold font-['Korolev',_sans-serif] leading-[48px] mb-[24px]">
            Pouss Style Hair Salon<br/>Estilistas
          </div>
          <div className="text-gray-600 text-xl font-semibold font-['Montserrat'] leading-8 mb-[10px]">
            Una Cuestión de Actitud
          </div>
          <div className="max-w-[570px]">
            <span className="text-gray-600 text-base font-bold font-['Lato'] leading-6">Pouss Style es más que </span>
            <span className="text-gray-600 text-base font-normal font-['Lato'] leading-6">una peluquería y barbería; es un lugar donde tu
            estilo se transforma. Ubicados en el corazón de Palermo Hollywood desde
            hace 5 años, ofrecemos una amplia gama de servicios para hombres y
            mujeres.</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Korolev</span> · <span className="text-neutral-300">Montserrat</span> · <span className="text-neutral-300">Lato</span> · <span className="text-neutral-300">Cormorant</span></span>
          <span className="text-green-600">✓ Custom font loaded</span>
        </div>
      </section>

      {/* Card 13: BOSSES - Classic Down to Earth */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Classic stable down to earth font combo for say a hairdresser
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[142px] py-[40px]">
          <div className="text-neutral-800 text-base font-normal font-['Bodoni'] leading-6 tracking-wide mb-[18px]">
            Hår | Styling
          </div>
          <div className="text-neutral-800 text-6xl font-normal font-['Bodoni'] leading-[72px] mb-[24px]">
            BOSSES – en frisör i<br/>Uppsala
          </div>
          <div className="text-neutral-700 text-base font-normal font-['Segoe_UI',_sans-serif] leading-7 max-w-[606px]">
            BOSSES Hår och styling räknas till en av landets anrikaste salonger. För en äkta
            Uppsalabo är Bosses ett lika naturligt riktmärke som Domkyrkan och Carolina Rediviva.
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Bodoni</span> · <span className="text-neutral-300">Segoe UI</span></span>
          <span className="text-green-600">✓ Custom font loaded</span>
        </div>
      </section>

      {/* Card 14: Hair Artistry - Modern Stylish Posh */}
      <section className="mb-16">
        <div className="px-10 pb-4">
          <span className="text-red-500 text-sm font-['Outfit']">
            Modern stylish fits many modern services and stores posh a bit feminine
          </span>
        </div>
        <div className="mx-10 overflow-hidden bg-white px-[116px] py-[40px]">
          <div className="text-black text-2xl font-bold font-['Poppins'] uppercase leading-8 tracking-tight mb-[24px]">
            A New Standard in Hair Artistry
          </div>
          <div className="w-20 h-px border-t border-stone-300 mb-[19px]" />
          <div className="text-black text-base font-light font-['Sora'] leading-7 max-w-[691px] mb-[24px]">
            Located just behind bustling Oxford Street, we bring together some seriously talented
            and experienced stylists with the credentials to prove it.
          </div>
          <div className="text-black text-base font-light font-['Sora'] leading-7 max-w-[705px] mb-[30px]">
            Sit back and relax, sipping on your favourite drink from our bar while we give you the hair
            of your dreams.
          </div>
          <div className="bg-white rounded-[10px] border border-black inline-flex items-center justify-center px-[27px] py-[10px]">
            <span className="text-center text-black text-xs font-semibold font-['Sora'] uppercase leading-5 tracking-wide">See Our Results</span>
          </div>
        </div>
        <div className="px-10 pt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs text-neutral-500 font-['Outfit']">
          <span>Fonts: <span className="text-neutral-300">Poppins</span> · <span className="text-neutral-300">Sora</span></span>
          <span>Colors: black · stone-300 · white bg</span>
        </div>
      </section>
    </>
  );
};

export default FontCardsOriginal;
