import { Check } from "lucide-react";
import aboutPainter from "@/assets/about-painter.png";
import aboutTeam from "@/assets/about-team.png";

const features = [
  "Clean Homes, Happy Hearts",
  "Sparkle Every Space",
  "Purify. Refresh. Revitalize.",
  "Cleanliness Standards",
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Overlapping Images */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Main painter image */}
              <img
                src={aboutPainter}
                alt="Professional painter at work"
                className="absolute top-0 left-0 w-[320px] lg:w-[400px] h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-6">
                Behind the HomeMaster
                <br />
                Company Stories.
              </h2>
              
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                Explore the core mission and vision that drives us every day. At Behind the
                Stories Company, we're not just about cleaning homes; we're about making a
                difference in the lives of our clients and our community.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
