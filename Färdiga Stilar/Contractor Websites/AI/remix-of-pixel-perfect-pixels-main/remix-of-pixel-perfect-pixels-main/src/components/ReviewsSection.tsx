import googleIcon from "@/assets/google-icon.png";
import starIcon from "@/assets/star-icon.png";

const reviews = [
  { name: "Diana Kane", initial: "D", text: "Jimmy and his team did an exemplary job on painting our home with professional care and attention. Top tier...", bgColor: "bg-pink-500" },
  { name: "Blanca Benavides", initial: "B", text: "If you are looking for a local, reasonable, and professional company, look no further. Jimmy's Custom Painting...", bgColor: "bg-teal-500" },
  { name: "Dan Nolen", initial: "D", text: "I recently hired Jimmy's Custom Painting company to paint the exterior of my house and I couldn't be more...", bgColor: "bg-blue-600" },
  { name: "Sarah Mitchell", initial: "S", text: "Outstanding work from start to finish. The crew was professional, punctual, and the final result exceeded our expectations...", bgColor: "bg-amber-500" },
  { name: "Robert Chen", initial: "R", text: "We had our entire office repainted and the team was incredible. Minimal disruption to our business and flawless results...", bgColor: "bg-indigo-500" },
  { name: "Maria Lopez", initial: "M", text: "Best painting company we've ever hired. They transformed our dated kitchen cabinets into a modern masterpiece...", bgColor: "bg-rose-500" },
  { name: "James Wilson", initial: "J", text: "From the initial estimate to the final walkthrough, everything was handled with professionalism. Our home looks brand new...", bgColor: "bg-emerald-500" },
  { name: "Linda Park", initial: "L", text: "Hired them for exterior painting and couldn't be happier. Even the neighbors have been complimenting how great it looks...", bgColor: "bg-violet-500" },
  { name: "Tom Harris", initial: "T", text: "Third time using this company and they never disappoint. Consistent quality and fair pricing every single time...", bgColor: "bg-orange-500" },
  { name: "Angela Ross", initial: "A", text: "They painted our nursery with zero-VOC paint and it turned out beautifully. So thoughtful and detail-oriented...", bgColor: "bg-cyan-500" },
  { name: "Kevin Brooks", initial: "K", text: "Amazing attention to detail on our Victorian home's trim work. They really care about preserving architectural character...", bgColor: "bg-red-500" },
  { name: "Patricia Young", initial: "P", text: "The color consultation alone was worth it. They helped us pick the perfect palette and executed it flawlessly...", bgColor: "bg-purple-600" },
  { name: "David Kim", initial: "D", text: "Quick turnaround without cutting corners. Our rental property was ready for new tenants ahead of schedule...", bgColor: "bg-green-600" },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm min-w-[300px] w-[300px] flex-shrink-0">
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
          {review.initial}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-gray-900">{review.name}</span>
            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <StarRating />
        </div>
      </div>
      <img src={googleIcon} alt="Google" className="w-6 h-6" />
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-2">{review.text}</p>
    <button className="text-blue-600 text-sm hover:underline">Read more</button>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#eef0f2] overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-[44px] text-gray-900 mb-2">
            Satisfied Customers
          </h2>
          <p className="text-gray-500 text-base">What Our Customers Say</p>
        </div>

        {/* Google Rating Bar */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm">
            <img src={googleIcon} alt="Google" className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">Excellent on Google</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-gray-800">4.8</span>
                <StarRating />
              </div>
            </div>
            <a
              href="#"
              className="bg-gray-800 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Review on Google
            </a>
          </div>
        </div>
      </div>

      {/* Marquee - full width, overflows viewport */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#eef0f2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#eef0f2] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {/* Duplicate the reviews for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
