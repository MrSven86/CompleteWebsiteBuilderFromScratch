import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin, Phone, Mail } from "lucide-react";
import bbbBadge from "@/assets/bbb-a-plus.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  message: string;
  consent: boolean;
}

const Contact = () => {
  const { isScrolled } = useScrollPosition();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
    consent: false,
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

  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <TopBar hidden={isScrolled} />

      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />

      {/* Spacer for fixed navbar */}
      {isScrolled && <div className="h-24" />}

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">
                  Contact
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                  CONTACT US
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you need commercial painting, residential services, or a major restoration project, Parrot Painting's five decades of experience mean you only need one call.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Santa Monica, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <a 
                    href="tel:3103977294" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (310) 397-7294
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a 
                    href="mailto:info@parrotpainting.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@parrotpainting.com
                  </a>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="relative rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52898.60714668962!2d-118.4911912!3d34.0194704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parrot Painting Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                  <span className="text-2xl">💯</span>
                  <span className="text-sm font-medium text-foreground">Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Licensed & Insured</span>
                </div>
                <img
                  src={bbbBadge}
                  alt="BBB Accredited Business A+ Rating"
                  className="h-16 object-contain"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name <span className="text-destructive">(required)</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="rounded-lg border-border focus:border-primary h-12"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email <span className="text-destructive">(required)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-lg border-border focus:border-primary h-12"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone <span className="text-destructive">(required)</span>
                  </Label>
                  <div className="flex">
                    <div className="flex items-center gap-2 px-3 border border-r-0 border-border rounded-l-lg bg-muted/30">
                      <span className="text-lg">🇺🇸</span>
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-1234"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="rounded-l-none rounded-r-lg border-border focus:border-primary h-12"
                    />
                  </div>
                </div>

                {/* Zip */}
                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-foreground font-medium">
                    Zip
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                    placeholder="90210"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="rounded-lg border-border focus:border-primary h-12"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message <span className="text-destructive">(required)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please type a message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="rounded-lg border-border focus:border-primary min-h-[140px] resize-none"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-sm text-muted-foreground italic">
                  We care about your privacy. Please don't submit sensitive information such as social security numbers, credit card or bank information.
                </p>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleConsentChange}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree that Parrot Painting can email and call me in response to my inquiry, as well as with tips and offers for similar services.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-lg uppercase font-semibold tracking-wide transition-all duration-300 hover:shadow-lg text-base"
                >
                  Get A Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
