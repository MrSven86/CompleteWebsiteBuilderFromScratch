import { useState } from "react";
import { Phone, Send } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project6 from "@/assets/project-6.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-foreground/90" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left - Form */}
        <div className={`bg-card rounded-lg p-8 shadow-xl reveal-left ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-foreground text-xl font-bold mb-2">Interested in working with us?</h3>
          <h4 className="text-foreground text-2xl font-bold mb-8">Fill out this form to get connected.</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <select
              className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">-- Select A Service --</option>
              <option>Residential Painting</option>
              <option>Commercial Painting</option>
              <option>Exterior Painting</option>
              <option>Interior Painting</option>
              <option>Fence Painting</option>
              <option>Cabinet Refinishing & Painting</option>
              <option>Drywall Repair Services</option>
              <option>Wallpaper Removal</option>
            </select>
            <input
              type="text"
              placeholder="Your City (optional)"
              className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-300"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            <textarea
              placeholder="Tell us more about your project idea here"
              rows={4}
              className="w-full border border-foreground rounded-lg px-4 py-3 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow duration-300"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-lg py-4 font-medium text-lg hover:bg-primary-light hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit
            </button>
          </form>
        </div>

        {/* Right - Images & Info */}
        <div className={`space-y-6 reveal-right ${isVisible ? 'visible' : ''}`}>
          <div className="rounded-lg overflow-hidden h-60 hover:shadow-xl transition-shadow duration-500">
            <img src={project1} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-lg overflow-hidden h-60 hover:shadow-xl transition-shadow duration-500">
            <img src={project6} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="text-primary-foreground text-base leading-5">
            Bear Valley Pro Painting is a painting firm specializing in residential, commercial, and 
            specialty painting. Serving the city of Pasadena and the Central Coast since day one.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Hassle-free service", "One-on-one consultation", "Quick, transparent communication", "Fully licensed, fully certified"].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-primary-foreground text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
