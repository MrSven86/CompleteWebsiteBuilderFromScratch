import { useState } from "react";
import squareBrush from "@/assets/square-brush.svg";
import galleryArrowLeft from "@/assets/gallery-arrow-left.svg";
import galleryArrowRight from "@/assets/gallery-arrow-right.svg";

const allImages = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=627&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=627&h=400&fit=crop",
];

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = [
    allImages[startIndex % allImages.length],
    allImages[(startIndex + 1) % allImages.length],
    allImages[(startIndex + 2) % allImages.length],
  ];

  const totalPages = Math.ceil(allImages.length / 3);
  const currentPage = Math.floor(startIndex / 3) % totalPages;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 3 + allImages.length) % allImages.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3) % allImages.length);
  };

  return (
    <section className="w-full py-[60px]">
      <div className="w-[1920.66px] mx-auto relative">
        {/* Header - matching Services section style */}
        <div className="text-center mb-[30px]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[32px] h-[36px]" />
            <span className="text-primary text-2xl font-bold uppercase leading-6">GALLERY</span>
          </div>
          <h2 className="text-[50px] font-normal text-foreground/80 leading-[56px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", letterSpacing: '0.5px' }}>
            Our Recent Work
          </h2>
        </div>

        {/* Images row */}
        <div className="flex w-full">
          {/* Image 1 - Left */}
          <div className="w-[636.66px] h-96 overflow-hidden relative">
            <div className="w-[626.66px] h-96 left-[5px] top-[5px] absolute overflow-hidden">
              <div className="w-[626.66px] h-96 left-0 top-0 absolute bg-[radial-gradient(ellipse_70.71%_70.71%_at_50.00%_50.00%,_white_0%,_black_100%)]" />
              <div className="w-[626.66px] h-96 left-0 top-0 absolute">
                <img className="w-[626.66px] h-96 left-0 top-0 absolute object-cover" src={visibleImages[0]} alt="Gallery image 1" />
              </div>
            </div>
          </div>

          {/* Image 2 - Center */}
          <div className="w-[636.66px] h-96 overflow-hidden relative">
            <div className="w-[626.66px] h-96 left-[5px] top-[5px] absolute overflow-hidden">
              <div className="w-[626.66px] h-96 left-0 top-0 absolute bg-[radial-gradient(ellipse_70.71%_70.71%_at_50.00%_50.00%,_white_0%,_black_100%)]" />
              <div className="w-[626.66px] h-96 left-0 top-0 absolute">
                <img className="w-[626.66px] h-96 left-0 top-0 absolute object-cover" src={visibleImages[1]} alt="Gallery image 2" />
              </div>
            </div>
          </div>

          {/* Image 3 - Right */}
          <div className="w-[636.66px] h-96 overflow-hidden relative">
            <div className="w-[626.66px] h-96 left-[5px] top-[5px] absolute overflow-hidden">
              <div className="w-[626.66px] h-96 left-0 top-0 absolute bg-[radial-gradient(ellipse_70.71%_70.71%_at_50.00%_50.00%,_white_0%,_black_100%)]" />
              <div className="w-[626.66px] h-96 left-0 top-0 absolute">
                <img className="w-[626.66px] h-96 left-0 top-0 absolute object-cover" src={visibleImages[2]} alt="Gallery image 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Left arrow */}
        <img
          src={galleryArrowLeft}
          alt="Previous"
          className="w-20 h-20 absolute left-[45px] top-[calc(50%+40px)] -translate-y-1/2 cursor-pointer"
          onClick={handlePrev}
        />

        {/* Right arrow */}
        <img
          src={galleryArrowRight}
          alt="Next"
          className="w-20 h-20 absolute right-[45px] top-[calc(50%+40px)] -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        />

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-[6px] mt-[30px]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full cursor-pointer ${
                i === currentPage
                  ? "w-4 h-4 bg-[#2CBCDE]"
                  : "w-3 h-3 bg-[#999999] opacity-50"
              }`}
              onClick={() => setStartIndex(i * 3)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
