import squareBrush from "@/assets/square-brush.svg";

const AboutSection = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#dce9ef' }}>
      <div className="max-w-[1440px] mx-auto relative" style={{ padding: '100px 80px 120px 80px' }}>
        <div className="flex justify-between items-start gap-[60px]">
          {/* Left content */}
          <div className="w-[48%] pt-[10px]">
            {/* Icon + label */}
            <div className="flex items-center gap-2 mb-[10px]">
              <img src={squareBrush} alt="" className="w-[28px] h-[28px]" />
              <span
                className="font-bold text-[20px] uppercase tracking-wide"
                style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif", color: '#00BFEF' }}
              >
                ABOUT US
              </span>
            </div>

            {/* Headline */}
            <h2
              className="leading-[1.1] mb-[30px]"
              style={{
                fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif",
                fontSize: '50px',
                color: '#1a1a1a',
              }}
            >
              THE VANGUARD<br />DIFFERENCE
            </h2>

            {/* Body text */}
            <p
              className="text-[17px] leading-[28px] mb-[40px]"
              style={{ fontFamily: "'Inter', sans-serif", color: '#555555' }}
            >
              Imagine your home with a stunning exterior that boosts its curb appeal, enhances comfort, and reduces energy costs. With Vanguard General Contracting, this isn't just a possibility — it's a promise. We don't just work on homes—we bring your dream home to life. Whether you need a complex roof repair, a custom siding design, or an integrated solar solution, our team's unmatched expertise ensures that your project is completed with precision and care. From start to finish, we use only the highest-quality materials and offer personalized service that turns your vision into a reality you'll cherish for years.
            </p>

            {/* CTA Button */}
            <button
              className="w-[480px] h-[60px] text-white font-bold text-[18px] uppercase tracking-wider cursor-pointer"
              style={{
                background: 'var(--gradient-cta)',
                fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif",
                border: 'none',
              }}
            >
              GET FREE QUOTE
            </button>
          </div>

          {/* Right image */}
          <div className="w-[48%]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop"
              alt="Beautiful home exterior"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
