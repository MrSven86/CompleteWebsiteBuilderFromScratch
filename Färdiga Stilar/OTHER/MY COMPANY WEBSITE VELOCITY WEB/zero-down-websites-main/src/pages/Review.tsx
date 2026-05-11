import { useState } from "react";
import { Star } from "lucide-react";
import reviewCharacter from "@/assets/review-thumbsup.png";
import logo from "@/assets/logo.png";

const GOOGLE_REVIEW_URL = "https://g.page/r/CYF3k0ky5lzWEBM/review";
const API_URL = "https://velocity-contact-form-api.vercel.app/api/send-email";

type Step = "rating" | "feedback" | "thanks";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [step, setStep] = useState<Step>("rating");
  const [feedback, setFeedback] = useState({ name: "", email: "", comment: "" });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (rating === 0) return;
    if (rating >= 4) {
      window.open(GOOGLE_REVIEW_URL, "_blank");
    } else {
      setStep("feedback");
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: feedback.name,
          email: feedback.email,
          phone: "",
          message: `Feedback privado: ${rating} estrellas. Comentario: ${feedback.comment}`,
          website: "Velocity Web",
          clientEmail: "tomas@velocityweb.org",
        }),
      });
      setStep("thanks");
    } catch {
      alert("Error al enviar. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const displayRating = hoveredStar || rating;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center px-4" style={{ backgroundColor: "#f5f0eb" }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        {/* Logo */}
        <img src={logo} alt="Velocity Web" className="h-12 mb-6 object-contain" />

        {step === "rating" && (
          <>
            {/* Character */}
            <img
              src={reviewCharacter}
              alt="Thumbs up"
              className="w-40 h-40 mb-4 object-contain"
            />

            {/* Question */}
            <h1 className="text-xl font-semibold text-gray-800 mb-6 font-['Outfit']">
              ¿Cómo fue tu experiencia?
            </h1>

            {/* Stars */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={40}
                    className={`transition-colors ${
                      star <= displayRating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-none text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={handleNext}
              disabled={rating === 0}
              className="w-full py-3 rounded-xl text-white font-semibold font-['Outfit'] text-lg transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "#f5a623" }}
            >
              Siguiente
            </button>
          </>
        )}

        {step === "feedback" && (
          <form onSubmit={handleFeedbackSubmit} className="w-full flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-800 font-['Outfit'] text-center mb-2">
              Contanos cómo podemos mejorar
            </h2>

            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={feedback.name}
              onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={feedback.email}
              onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              placeholder="¿Qué podemos mejorar?"
              required
              rows={4}
              value={feedback.comment}
              onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold font-['Outfit'] text-lg transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#f5a623" }}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}

        {step === "thanks" && (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🙏</div>
            <h2 className="text-xl font-semibold text-gray-800 font-['Outfit'] mb-2">
              ¡Gracias por tu feedback!
            </h2>
            <p className="text-gray-500 text-sm">
              Tu opinión nos ayuda a mejorar.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-400">© 2026 Velocity Web</p>
    </div>
  );
};

export default Review;
