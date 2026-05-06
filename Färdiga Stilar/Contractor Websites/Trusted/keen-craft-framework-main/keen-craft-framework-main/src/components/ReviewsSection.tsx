import steveImg from "@/assets/steve-seabolt.png";
import leslieImg from "@/assets/leslie-banks.png";
import bhargaviImg from "@/assets/bhargavi-rajesh.png";
import googleIcon from "@/assets/google-icon.svg";
import starIcon from "@/assets/star-icon.svg";
import verifiedIcon from "@/assets/verified-icon.svg";

const reviews = [
  {
    name: "Steve Seabolt",
    image: steveImg,
    text: "The quality of their work is excellent. The pricing is fair. They show up on time, communicate thoroughly and leave the site in great condition. I use...",
  },
  {
    name: "Leslie Banks",
    image: leslieImg,
    text: 'Acme Painting came highly recommended. The work that he and his crew did on my home is "fabulous." They were both professional and...',
  },
  {
    name: "Bhargavi Rajesh",
    image: bhargaviImg,
    text: "Acme Painting and his team did an excellent job for our 3-floor townhome twice. They are extremely professional and go the extra mile to take care of...",
  },
];

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={starIcon} alt="" className="w-[17px] h-[17px]" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="bg-card rounded-xl border border-border p-6 flex flex-col gap-3">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={review.image}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-rubik font-semibold text-foreground text-sm">
          {review.name}
        </span>
      </div>
      <img src={googleIcon} alt="Google" className="w-5 h-5" />
    </div>

    {/* Stars + verified */}
    <div className="flex items-center gap-1.5">
      <Stars />
      <img src={verifiedIcon} alt="Verified" className="w-[15px] h-[15px]" />
    </div>

    {/* Review text */}
    <p className="font-rubik text-sm text-muted-foreground leading-relaxed">
      {review.text}
    </p>

    {/* Read more */}
    <a
      href="#"
      className="font-rubik text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      Read more
    </a>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="w-full bg-muted py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="font-rubik text-sm text-muted-foreground tracking-wide mb-2">
            Real Reviews from Real People
          </p>
          <h2 className="font-rubik font-bold text-4xl text-foreground">
            5.0 Star Average
          </h2>
        </div>

        {/* Cards with arrows */}
        <div className="relative flex items-center mt-12">
          {/* Left arrow */}
          <button className="absolute -left-6 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            ‹
          </button>

          <div className="grid grid-cols-3 gap-6 w-full">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          {/* Right arrow */}
          <button className="absolute -right-6 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
