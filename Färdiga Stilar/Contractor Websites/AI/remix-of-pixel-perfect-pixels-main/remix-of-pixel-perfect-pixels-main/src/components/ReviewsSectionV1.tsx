import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import googleIcon from "@/assets/google-icon.png";
import starIcon from "@/assets/star-icon.png";
import verifiedBadge from "@/assets/verified-badge.png";

const reviews = [
  {
    name: "Tori Durnian",
    avatar: "https://i.pravatar.cc/100?img=1",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Hi I wanted to share my experience about Laguna Painting. I reached out to a friend who is a home Contractor in Newport Beach....",
  },
  {
    name: "Tyler Martina",
    avatar: "https://i.pravatar.cc/100?img=2",
    timeAgo: "3 months ago",
    rating: 5,
    text: "They did a good job at a good price. Work was done quickly and everything looks great",
  },
  {
    name: "Jacqueline Whisnant",
    avatar: "https://i.pravatar.cc/100?img=3",
    timeAgo: "3 months ago",
    rating: 5,
    text: "Laguna Painting and Omar are the best painters out there!!",
  },
  {
    name: "Jacqueline Aguilar",
    avatar: "https://i.pravatar.cc/100?img=4",
    timeAgo: "6 months ago",
    rating: 5,
    text: "Each member of his team was courteous, efficient, and clearly took pride in their work. They were punctual, kept everything clean and organized, and the...",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
    ))}
  </div>
);

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - visibleReviews, prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-[#e8e8e8]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Top-Rated Painting Company
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-4xl mx-auto">
              Five-star painting reviews, our commitment to excellence shines through every project. 
              Join the ranks of satisfied customers who trust Southern California's most recommended 
              painting services. <span className="text-gray-900 font-medium cursor-pointer hover:underline">Read More Reviews.</span>
            </p>
          </div>

          {/* Subheading */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-8">
            What customers are saying about us
          </h3>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {reviews.slice(currentIndex, currentIndex + visibleReviews).map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header with avatar and name */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <img
                        src={googleIcon}
                        alt="Google"
                        className="absolute -bottom-1 -right-1 w-5 h-5"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-900 text-sm">
                          {review.name}
                        </span>
                        <img
                          src={verifiedBadge}
                          alt="Verified"
                          className="w-4 h-4"
                        />
                      </div>
                      <span className="text-gray-500 text-xs">{review.timeAgo}</span>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="mb-3">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.text}
                  </p>
                  {review.text.length > 100 && (
                    <button className="text-gray-500 text-sm mt-2 hover:text-gray-700 transition-colors">
                      Read more
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / visibleReviews) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * visibleReviews)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleReviews) === i
                    ? "bg-gray-800"
                    : "bg-gray-400"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
