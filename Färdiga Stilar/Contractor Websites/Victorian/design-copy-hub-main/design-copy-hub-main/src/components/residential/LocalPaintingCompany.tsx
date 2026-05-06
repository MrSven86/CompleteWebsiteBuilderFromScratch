import { MapPin } from 'lucide-react';
import houseExterior from '@/assets/gallery/house-exterior.jpg';

const communitiesLeft = [
  "Altadena",
  "La Mirada",
  "Long Beach",
  "Lakewood",
  "Pasadena",
];

const communitiesRight = [
  "Fountain Valley",
  "Huntington Beach",
  "La Habra",
  "La Palma",
  "Los Alamitos",
];

const LocalPaintingCompany = () => {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <p className="font-poppins text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Beautify The Interior Of Your Home Or Office
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
              Local Painting<br />Company
            </h2>
            
            <p className="font-poppins text-muted-foreground text-base leading-relaxed mb-8">
              Hire a local painting company that you can trust: Westfhal House Painters! 
              Since 2009, our boutique painting business has served the local community by 
              delivering high-quality, long-lasting interior and exterior paint jobs for 
              residential and commercial properties.
            </p>

            {/* Communities List */}
            <p className="font-poppins text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Completed Projects For Following Communities
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                {communitiesLeft.map((community) => (
                  <div key={community} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-poppins text-muted-foreground text-sm">{community}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {communitiesRight.map((community) => (
                  <div key={community} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-poppins text-muted-foreground text-sm">{community}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={houseExterior} 
              alt="Local painting company serving Southern California" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPaintingCompany;
