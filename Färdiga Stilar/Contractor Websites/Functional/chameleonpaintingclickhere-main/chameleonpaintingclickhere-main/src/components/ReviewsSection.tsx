import googleIcon from "@/assets/icons/icon-google-review.png";
import starsIcon from "@/assets/icons/icon-5-stars.png";

const reviews = [
  {
    name: "Herb James",
    initial: "H",
    timeAgo: "9 months ago",
    text: "Phenomenal job on my house. Sanded, scraped, paint...five years later, no peeling...still looks like a fresh coat. Highly...",
    bgColor: "bg-orange-500"
  },
  {
    name: "Michael Smith",
    initial: "M",
    timeAgo: "1 year ago",
    text: "Randall is the BEST! He is a skilled professional and his work is top notch. He has done a number of painting projects at...",
    bgColor: "bg-red-500"
  },
  {
    name: "Kathren Delikaris",
    initial: "K",
    timeAgo: "1 year ago",
    text: "We've used Randall for several painting jobs in our home (hallways, bedrooms, basement, etc). He's always very...",
    bgColor: "bg-purple-600"
  },
  {
    name: "Wing Ng",
    initial: "W",
    timeAgo: "1 year ago",
    text: "Very reasonably priced. Work was performed in a timely and professionally manner. I would definitely consider using Randa...",
    bgColor: "bg-green-600"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-satoshi text-sm text-primary tracking-widest uppercase mb-3">testimonials</p>
          <h2 className="font-satoshi font-bold text-[40px] lg:text-[48px] text-secondary">
            Don't just take our word for it
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-satoshi font-bold text-sm text-black">{review.name}</h4>
                    <p className="font-satoshi text-xs text-gray-500">{review.timeAgo}</p>
                  </div>
                </div>
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
              </div>

              {/* Stars */}
              <div className="mb-3">
                <img src={starsIcon} alt="5 stars" className="h-4" />
              </div>

              {/* Review Text */}
              <p className="font-satoshi text-sm text-black leading-relaxed mb-2">
                {review.text}
              </p>
              <button className="font-satoshi text-sm text-gray-500 hover:text-black transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
