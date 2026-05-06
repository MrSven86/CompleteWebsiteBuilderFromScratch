import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import contactBg from "@/assets/contact-bg.jpg";
import bbbBadge from "@/assets/bbb-a-plus.png";
import googleReviewsBadge from "@/assets/google-reviews-badge.svg";
import satisfactionBadge from "@/assets/satisfaction-badge.svg";
import yearsBadge from "@/assets/years-badge.png";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
}

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 md:px-8 lg:px-16 scroll-mt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-xl p-8 shadow-2xl"
            >
              <p className="text-foreground font-semibold mb-6 leading-relaxed">
                Get a free, detailed estimate from Santa Monica's longest-serving
                commercial painting contractor. Licensed, bonded, and insured for
                your complete peace of mind.
              </p>

              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="rounded-lg border-foreground/20 focus:border-primary"
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-lg border-foreground/20 focus:border-primary"
                  />
                  <Input
                    placeholder="Mobile Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-lg border-foreground/20 focus:border-primary"
                  />
                </div>

                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="rounded-lg border-foreground/20 focus:border-primary">
                    <SelectValue placeholder="-- Select A Service --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial-painting">
                      Commercial Painting
                    </SelectItem>
                    <SelectItem value="apartment-buildings">
                      Apartment Buildings
                    </SelectItem>
                    <SelectItem value="parking-structures">
                      Parking Structures
                    </SelectItem>
                    <SelectItem value="high-rise">High-Rise Buildings</SelectItem>
                    <SelectItem value="historical-restoration">
                      Historical Restoration
                    </SelectItem>
                    <SelectItem value="concrete-repair">Concrete Repair</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Your City (optional)"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="rounded-lg border-foreground/20 focus:border-primary"
                />

                <Textarea
                  placeholder="Tell us more about your project idea here"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-lg border-foreground/20 focus:border-primary min-h-[120px] resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-lg uppercase font-semibold tracking-wide transition-all duration-300 hover:shadow-lg"
                >
                  Get My Free Estimate
                </Button>
              </div>
            </form>
          </div>

          {/* Right - Trust Badges */}
          <div
            className={`flex flex-col items-center gap-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge Images Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <img
                src={bbbBadge}
                alt="BBB Accredited Business A+ Rating"
                className="h-24 md:h-28 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              />
              <img
                src={googleReviewsBadge}
                alt="Google Reviews"
                className="h-24 md:h-28 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              />
              <img
                src={satisfactionBadge}
                alt="100% Satisfaction Guarantee"
                className="h-24 md:h-28 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              />
              <img
                src={yearsBadge}
                alt="25 Years in Business"
                className="h-24 md:h-28 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
