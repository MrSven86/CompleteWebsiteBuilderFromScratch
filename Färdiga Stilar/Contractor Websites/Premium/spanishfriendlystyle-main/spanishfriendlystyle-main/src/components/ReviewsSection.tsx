import { ChevronLeft, ChevronRight } from "lucide-react";
import steveImg from "@/assets/steve-seabolt.png";
import leslieImg from "@/assets/leslie-banks.png";
import bhargaviImg from "@/assets/bhargavi-rajesh.png";
import googleIcon from "@/assets/google-icon.svg";
import googleStar from "@/assets/google-star.svg";
import verifiedIcon from "@/assets/verified.svg";

const reviews = [
  {
    name: "Carlos Méndez",
    avatar: steveImg,
    verified: true,
    text: "La calidad de su trabajo es excelente. Los precios son justos. Llegan a tiempo, se comunican bien y dejan todo impecable. Los recomiendo...",
  },
  {
    name: "María González",
    avatar: leslieImg,
    verified: true,
    text: "Altamente recomendados. El trabajo que hicieron en mi casa fue fabuloso. Fueron profesionales en todo momento y...",
  },
  {
    name: "Roberto Fernández",
    avatar: bhargaviImg,
    verified: false,
    text: "El equipo hizo un trabajo excelente en nuestro hogar. Son extremadamente profesionales y hacen un esfuerzo extra para cuidar cada detalle...",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={googleStar} alt="" className="w-4 h-4" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="bg-card rounded-xl shadow-sm border border-border p-5 flex flex-col gap-3 min-w-[280px] max-w-[340px] flex-1">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-gibson font-semibold text-foreground text-sm">{review.name}</span>
      </div>
      <img src={googleIcon} alt="Google" className="w-5 h-5" />
    </div>
    <div className="flex items-center gap-1.5">
      <Stars />
      {review.verified && <img src={verifiedIcon} alt="Verificado" className="w-4 h-4" />}
    </div>
    <p className="text-muted-foreground text-sm font-gibson leading-relaxed">{review.text}</p>
    <a href="#" className="text-muted-foreground/70 text-sm font-gibson hover:underline w-fit">Leer más</a>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="bg-muted py-20 px-8 md:px-16 lg:px-[258px]">
      <div className="max-w-[1404px] mx-auto flex flex-col items-center">
        {/* Header */}
        <p className="text-accent italic font-gibson text-lg mb-2">Reseñas Reales de Personas Reales</p>
        <h2 className="text-foreground text-5xl font-gibson font-bold mb-10">Promedio de 5.0 Estrellas</h2>

        {/* Cards with arrows */}
        <div className="relative w-full flex items-center justify-center">
          <button className="absolute -left-4 z-10 w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-5">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <button className="absolute -right-4 z-10 w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
