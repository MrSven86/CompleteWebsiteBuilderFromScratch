import { Paintbrush } from 'lucide-react';
import painterAtWork from '@/assets/painter-at-work.jpg';

const servicesLeft = [
  "Walls and ceilings (any height)",
  "Doors and windows",
  "Mantels and bookshelves",
  "Baseboards and crown molding",
];

const servicesRight = [
  "Chair rail molding",
  "Cabinets and wood shelves",
  "Custom color consultations",
];

const InteriorPainting = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <img 
              src={painterAtWork} 
              alt="Interior painting services" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-poppins text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Beautify The Interior Of Your Home Or Office
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
              Interior Painting
            </h2>
            
            <p className="font-poppins text-muted-foreground text-base leading-relaxed mb-4">
              Beautify the interior of your home or office with help from Southern California's 
              best painting contractor. At Westfhal House Painters, our experienced 
              painters love to create a warm, welcoming space for people to live and work. 
              We believe that choosing the right paint color combinations and delivering a 
              neat and clean paint job can turn any drab room into an indoor oasis.
            </p>
            
            <p className="font-poppins text-muted-foreground text-base leading-relaxed mb-6">
              We provide a full suite of painting services to customers in Los Angeles County 
              and Orange County. Our highly trained painters pride themselves on their punctuality, 
              work ethic, and cleanliness when completing a project.
            </p>

            {/* Services List */}
            <p className="font-poppins text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Services We Offer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                {servicesLeft.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Paintbrush className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-poppins text-muted-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {servicesRight.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Paintbrush className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-poppins text-muted-foreground text-sm">{service}</span>
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

export default InteriorPainting;
