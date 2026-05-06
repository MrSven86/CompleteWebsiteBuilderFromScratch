import googleIcon from "@/assets/google-icon.svg";
import noiseBg from "@/assets/noise.png";
import rating46 from "@/assets/rating-4-6.png";
import reviewMichael from "@/assets/review-michael.png";
import reviewErica from "@/assets/review-erica.png";

const reviews = [
  {
    name: null,
    subtitle: "Based on Google Reviews",
    photo: null,
    rating: "5.0",
    text: "Highly recommend Roof Ninja. Jace was great to work with. I have a 1950's rambler with a 20+ year old roof that needed replacement. Once I decided on the shingles, I was on the schedule for the next week, the job was done in a day..",
  },
  {
    name: "Michael S",
    subtitle: "Based on Google Reviews",
    photo: reviewMichael,
    rating: "5.0",
    text: "Working with Jace and roof ninja was easy as can be. They were very upfront and got to working pretty fast! They had our roof and new siding up in no time at all! I appreciated all their services.",
  },
  {
    name: "Erica Steinke",
    subtitle: "Based on Google Reviews",
    photo: reviewErica,
    rating: "5.0",
    text: "Jace and his team at Roof Ninja were wonderful partners as I replaced my roof. He walked me through each obstacle with the insurance company and kept me well-informed of the process and details. He stuck it out with me for many months! I appreciate his drive, professionalism, ethics, and good nature. Plus he's just a fun guy to work with! I recommend Roof Ninja to everyone I know!",
  },
];

/* Full-color Google G logo rendered as inline SVG so it scales cleanly */
const GoogleLogo = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M37.6 22.5c0-1.28-.11-2.51-.33-3.69H22v6.98h8.73a7.47 7.47 0 01-3.24 4.9v4.07h5.24C35.65 31.77 37.6 27.5 37.6 22.5z"
      fill="#4285F4" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M22 38c4.38 0 8.06-1.45 10.73-3.93l-5.24-4.07c-1.45.97-3.3 1.55-5.49 1.55-4.22 0-7.8-2.85-9.08-6.68H7.5v4.2A16.18 16.18 0 0022 38z"
      fill="#34A853" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12.92 24.87A9.72 9.72 0 0112.39 22c0-.99.17-1.95.53-2.87v-4.2H7.5A16.18 16.18 0 006 22c0 2.61.63 5.09 1.5 7.07l5.42-4.2z"
      fill="#FBBC05" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M22 12.45c2.38 0 4.51.82 6.19 2.42l4.63-4.63C30.05 7.58 26.37 6 22 6A16.18 16.18 0 007.5 14.93l5.42 4.2C14.2 15.3 17.78 12.45 22 12.45z"
      fill="#EA4335" />
  </svg>
);

/* Decorative glint / shine – a soft rotated white ellipse */
const Glint = ({
  width, height, top, left, right, rotate, opacity,
}: {
  width: number; height: number; top?: string; left?: string; right?: string; rotate: number; opacity: number;
}) => (
  <div
    className="absolute pointer-events-none rounded-full"
    style={{
      width,
      height,
      top,
      left,
      right,
      background: 'radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
      transform: `rotate(${rotate}deg)`,
      opacity,
    }}
  />
);

const ReviewsSection = () => {
  return (
    <section className="w-full relative overflow-hidden" style={{ paddingBottom: '80px' }}>
      {/* Full-width light-blue background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(56,189,248,0.18)' }}
      />

      {/* Noise texture — above blue bg, below glints */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${noiseBg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          opacity: 0.55,
        }}
      />

      {/* Decorative glints / shine elements */}
      <Glint width={340} height={200} top="-40px" left="5%" rotate={-25} opacity={0.6} />
      <Glint width={260} height={160} top="60%" right="6%" rotate={20} opacity={0.5} />
      <Glint width={180} height={120} top="30%" left="48%" rotate={10} opacity={0.35} />
      <Glint width={300} height={160} top="75%" left="25%" rotate={-15} opacity={0.45} />

      {/* Content */}
      <div className="relative z-10 pt-[76px]">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-8 px-4">

          {/* Single Google rating badge */}
          <div className="flex items-center gap-3 mb-5">
            <GoogleLogo size={44} />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-[20px]" style={{ fontFamily: "'Inter', sans-serif", color: '#111827' }}>
                Excellent on Google
              </span>
              <div className="flex items-center gap-[6px] mt-[2px]">
                <span className="font-bold text-[15px]" style={{ color: '#111827' }}>4.6</span>
                <img src={rating46} alt="4.6 stars" className="h-[18px]" />
              </div>
            </div>
          </div>

          {/* Pen icon + READ OUR REAL REVIEWS */}
          <div className="flex items-center gap-2 mb-3">
            {/* Pen / paintbrush icon (inline SVG to match design accent colour) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="#00BFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="#00BFEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="font-bold text-[22px] uppercase tracking-wide"
              style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif", color: '#00BFEF' }}
            >
              READ OUR REAL REVIEWS
            </span>
          </div>

          {/* Main headline */}
          <h2
            className="font-normal leading-[1.12]"
            style={{
              fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif",
              fontSize: '48px',
              color: '#374151',
            }}
          >
            What our LA Customers<br />are saying
          </h2>
        </div>

        {/* ── Review cards ── */}
        <div className="flex w-full mt-[20px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-1 bg-white overflow-hidden"
              style={{
                boxShadow: '0px 10px 30px 0px rgba(0,0,0,0.10)',
                minHeight: '288px',
              }}
            >
              <div className="px-[31px] pt-[40px] pb-[31px] h-full flex flex-col">
                {/* Card header row */}
                <div className="flex items-start justify-between mb-[30px]">
                  {/* Avatar + name */}
                  <div className="flex items-center gap-3">
                    {review.photo ? (
                      <img
                        src={review.photo}
                        alt={review.name || "Reviewer"}
                        className="w-[65px] h-[65px] rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-[65px] h-[65px] rounded-full flex-shrink-0 bg-slate-200" />
                    )}
                    <div className="flex flex-col gap-[4px]">
                      {review.name && (
                        <span className="font-bold text-[20px] leading-5 capitalize" style={{ color: '#1c1917' }}>
                          {review.name}
                        </span>
                      )}
                      <span className="font-normal text-[15px] leading-4" style={{ color: '#0a0a0a' }}>
                        {review.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Google G + rating (larger, no duplicate row) */}
                  <div className="flex items-center gap-[6px] flex-shrink-0">
                    <GoogleLogo size={44} />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-[20px] leading-none" style={{ color: '#1a1a1a' }}>
                        {review.rating}
                      </span>
                      <span className="text-[18px] leading-none tracking-wide" style={{ color: '#E4A44A' }}>
                        ★★★★★
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-[17px] font-normal leading-6" style={{ color: '#71717a' }}>
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
