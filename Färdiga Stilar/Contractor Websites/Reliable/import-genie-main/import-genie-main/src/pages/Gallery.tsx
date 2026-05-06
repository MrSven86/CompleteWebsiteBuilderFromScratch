import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

import heroFlooring from "@/assets/hero-flooring.jpg";
import bathroomTile from "@/assets/bathroom-tile.jpg";
import bedroomFlooring from "@/assets/bedroom-flooring.jpg";
import kitchenFlooring from "@/assets/kitchen-flooring.jpg";
import livingRoomDark from "@/assets/living-room-dark.jpg";
import modernKitchen from "@/assets/modern-kitchen.jpg";
import staircase from "@/assets/staircase.jpg";
import hallwayStairs from "@/assets/hallway-stairs.jpg";
import openFloor from "@/assets/open-floor.jpg";

import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const mainGalleryImages = [
    { src: heroFlooring, alt: "Living room with beautiful hardwood flooring", category: "Hardwood" },
    { src: kitchenFlooring, alt: "Modern kitchen with wood floors", category: "Hardwood" },
    { src: modernKitchen, alt: "Kitchen renovation with new flooring", category: "Hardwood" },
    { src: staircase, alt: "Staircase with matching wood floors", category: "Hardwood" },
    { src: hallwayStairs, alt: "Hallway and stairs flooring", category: "Hardwood" },
    { src: livingRoomDark, alt: "Living room with dark hardwood floors", category: "Hardwood" },
    { src: openFloor, alt: "Open floor plan with consistent flooring", category: "Hardwood" },
    { src: bedroomFlooring, alt: "Bedroom with laminate flooring", category: "Laminate" },
    { src: bathroomTile, alt: "Bathroom tile installation", category: "Tile" },
  ];

  const additionalGalleryImages = [
    { src: gallery17, alt: "Living room vinyl plank flooring", category: "Vinyl" },
    { src: gallery18, alt: "Light oak hardwood flooring", category: "Hardwood" },
    { src: gallery19, alt: "Flooring installation in progress", category: "Installation" },
    { src: gallery20, alt: "Before and after hardwood installation", category: "Hardwood" },
    { src: gallery21, alt: "Hardwood hallway flooring", category: "Hardwood" },
    { src: gallery22, alt: "Beautiful staircase with hardwood treads", category: "Hardwood" },
    { src: gallery23, alt: "Modern staircase with floating steps", category: "Hardwood" },
    { src: gallery24, alt: "Crown molding detail", category: "Painting" },
    { src: gallery25, alt: "Kitchen with dark hardwood floors", category: "Hardwood" },
  ];

  const GalleryImage = ({ image, index }: { image: { src: string; alt: string; category: string }; index: number }) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-tertiary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <span className="text-primary text-sm font-heading font-medium">{image.category}</span>
          <p className="text-tertiary-foreground text-sm mt-1">{image.alt}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-tertiary text-tertiary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <p className="text-tertiary-foreground/80 text-lg max-w-2xl mx-auto">
              Browse through our portfolio of completed flooring projects throughout the Antelope Valley.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Main Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainGalleryImages.map((image, index) => (
                <GalleryImage key={index} image={image} index={index} />
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowMore(!showMore)}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold px-8 py-6 text-base"
              >
                {showMore ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    See More Projects <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            {/* Additional Gallery - Expandable */}
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
                {additionalGalleryImages.map((image, index) => (
                  <GalleryImage key={index + mainGalleryImages.length} image={image} index={index + mainGalleryImages.length} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background-alt">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-text-medium mb-8 max-w-xl mx-auto">
              Contact us today for a free estimate on your flooring project.
            </p>
            <a href="/contact" className="inline-block">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold px-8 py-4">
                Get Your Free Estimate
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
