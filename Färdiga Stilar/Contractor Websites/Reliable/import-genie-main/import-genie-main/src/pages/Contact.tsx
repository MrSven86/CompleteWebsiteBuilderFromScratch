import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: [] as string[],
    message: "",
  });

  const projectTypes = [
    "Hardwood Installation",
    "Floor Refinishing",
    "Laminate",
    "Carpet",
    "Vinyl Plank",
    "Painting",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within minutes.",
    });
    setFormData({ name: "", phone: "", email: "", projectType: [], message: "" });
  };

  const toggleProjectType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter((t) => t !== type)
        : [...prev.projectType, type],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-tertiary text-tertiary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact Inter-Urban Flooring
            </h1>
            <p className="text-tertiary-foreground/80 text-lg max-w-2xl mx-auto">
              Ready to discuss your flooring project? Fill out the form below or call us directly. We typically respond within minutes.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get Your Free Estimate
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 555-5555"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label>Project Type</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {projectTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type.replace(/\s+/g, "-").toLowerCase()}
                            checked={formData.projectType.includes(type)}
                            onCheckedChange={() => toggleProjectType(type)}
                          />
                          <label
                            htmlFor={type.replace(/\s+/g, "-").toLowerCase()}
                            className="text-sm text-text-medium cursor-pointer"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your flooring project, including room sizes, flooring type preferences, and any questions you have..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-heading font-bold py-6"
                  >
                    Submit Request
                  </Button>

                  <p className="text-xs text-text-lighter text-center">
                    Your information is private. We don't share or sell your data.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-heading font-bold mb-1">Phone</h3>
                          <a
                            href="tel:3236055582"
                            className="text-text-medium hover:text-primary transition-colors text-lg"
                          >
                            (323) 605-5582
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-heading font-bold mb-1">Email</h3>
                          <a
                            href="mailto:info@inter-urbanflooring.net"
                            className="text-text-medium hover:text-primary transition-colors"
                          >
                            info@inter-urbanflooring.net
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-heading font-bold mb-1">Address</h3>
                          <p className="text-text-medium">
                            43885 44th St W<br />
                            Lancaster, CA 93536
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-heading font-bold mb-1">Hours</h3>
                          <p className="text-text-medium">
                            Monday - Friday: 8:00 AM - 6:00 PM<br />
                            Saturday: 8:00 AM - 5:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Why Contact Us */}
                <div className="mt-8 p-6 bg-background-alt rounded-lg">
                  <h3 className="font-heading font-bold text-lg mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "Response within minutes",
                      "Free, no-obligation estimate",
                      "Detailed written quote",
                      "Carlos personally visits your home",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-text-medium">
                        <Check className="w-5 h-5 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
