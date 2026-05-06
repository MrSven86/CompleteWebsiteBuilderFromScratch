import { ChevronRight, ChevronDown } from "lucide-react";
import iconUser from "@/assets/icons/icon-user.png";
import iconPhone from "@/assets/icons/icon-phone.png";
import iconEmail from "@/assets/icons/icon-email.png";
import iconServices from "@/assets/icons/icon-services.png";

const HeroSection2 = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a3a4a]/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-satoshi font-bold text-[32px] sm:text-[40px] lg:text-[56px] text-white leading-tight mb-4 lg:mb-6">
              Professional Painting<br />
              Services in<br />
              Long Beach
            </h1>
            <p className="font-general-sans font-medium text-sm lg:text-base text-white/80 mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
              Fully licensed painting contractor serving Long Beach and surrounding areas since 2007
            </p>
            <button className="bg-primary hover:bg-[hsl(197,57%,35%)] text-white px-6 py-3 font-satoshi font-bold text-sm flex items-center gap-2 rounded transition-colors mx-auto lg:mx-0">
              REQUEST FREE ESTIMATE
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-[80%] lg:ml-auto border-2 border-primary rounded-lg overflow-hidden">
            {/* Blue Header */}
            <div className="bg-primary px-4 lg:px-6 py-4 lg:py-5">
              <h2 className="font-satoshi font-bold text-xl lg:text-2xl text-white text-center mb-1">
                GET A FREE QUOTE
              </h2>
              <p className="font-general-sans font-medium text-white/80 text-center text-xs lg:text-sm">
                Enter your contact information below
              </p>
            </div>
            
            {/* Dark Form Area */}
            <div className="bg-[#1a2a35] px-4 lg:px-6 py-4 lg:py-5">
              <form className="space-y-3">
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-10 lg:w-12 flex items-center justify-center">
                    <img src={iconUser} alt="" className="w-4 lg:w-5 h-4 lg:h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-10 lg:w-12 flex items-center justify-center">
                    <img src={iconUser} alt="" className="w-4 lg:w-5 h-4 lg:h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-10 lg:w-12 flex items-center justify-center">
                    <img src={iconPhone} alt="" className="w-4 lg:w-5 h-4 lg:h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-10 lg:w-12 flex items-center justify-center">
                    <img src={iconEmail} alt="" className="w-4 lg:w-5 h-4 lg:h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="flex-1 bg-white py-3 pr-4 text-sm font-inter placeholder:text-gray-500 outline-none"
                  />
                </div>
                <div className="relative flex items-center bg-white rounded overflow-hidden border-l-4 border-l-primary">
                  <div className="w-10 lg:w-12 flex items-center justify-center">
                    <img src={iconServices} alt="" className="w-4 lg:w-5 h-4 lg:h-5" />
                  </div>
                  <select className="flex-1 bg-white py-3 pr-10 text-sm font-inter text-gray-500 appearance-none outline-none">
                    <option>SERVICES</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Surface Preparation & Finishing</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[hsl(197,57%,35%)] text-white font-satoshi font-bold py-4 rounded text-base transition-colors mt-2"
                >
                  SUBMIT
                </button>
              </form>

              {/* Disclaimer Text */}
              <p className="font-inter text-xs text-white/70 text-center mt-4 lg:mt-6 leading-relaxed">
                Submit your project details and we'll contact you within 24 hours to discuss your painting needs and provide a detailed estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
