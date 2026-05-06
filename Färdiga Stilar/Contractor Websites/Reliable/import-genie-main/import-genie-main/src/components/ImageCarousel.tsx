import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  alt?: string;
  className?: string;
}

const ImageCarousel = ({ images, interval = 4000, alt = "Gallery image", className = "" }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Ensure container has proper dimensions */}
      <img
        src={images[0]}
        alt=""
        className="invisible w-full h-full object-cover"
        aria-hidden="true"
      />
    </div>
  );
};

export default ImageCarousel;
