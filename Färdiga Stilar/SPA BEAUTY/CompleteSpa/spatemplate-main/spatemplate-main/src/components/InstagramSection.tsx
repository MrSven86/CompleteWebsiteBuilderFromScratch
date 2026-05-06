import ig1 from "@/assets/ig1.png";
import ig2 from "@/assets/ig2.png";
import ig3 from "@/assets/ig3.png";
import ig4 from "@/assets/ig4.png";
import corporalesImg from "@/assets/tratamiento-corporales.png";

const images = [
  { src: ig1, alt: "Valentine's Exclusive" },
  { src: ig2, alt: "Dine fordele i CeriX appen" },
  { src: ig3, alt: "Before and after" },
  { src: corporalesImg, alt: "Body treatment" },
  { src: ig4, alt: "CeriX clinic" },
];

const InstagramSection = () => {
  return (
    <section className="w-full bg-secondary px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-[1340px]">
        {/* Header row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2
            className="m-0 text-foreground"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontSize: '24px',
              letterSpacing: '3.2px',
              textTransform: 'uppercase',
              lineHeight: '1.4',
            }}
          >
            Følg Cerix på Instagram
          </h2>

          <a
            href="https://instagram.com/cerix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-foreground bg-transparent px-5 py-2.5 text-foreground no-underline transition-opacity hover:opacity-70"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            Følg CeriX
            <span>→</span>
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[16px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;