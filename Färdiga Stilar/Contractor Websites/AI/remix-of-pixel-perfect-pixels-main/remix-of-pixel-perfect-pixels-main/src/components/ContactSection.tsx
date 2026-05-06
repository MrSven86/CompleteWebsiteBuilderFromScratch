import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      services: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-[#001340] via-[#001F72] to-[#0a2a7a] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div>
              <p className="text-orange-400 font-semibold text-sm tracking-[3px] uppercase mb-3">
                Get In Touch
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Ready to Transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Your Space?
                </span>
              </h2>
            </div>

            <p className="text-blue-200/80 text-lg max-w-xl leading-relaxed">
              Contact us today for a free consultation and discover the difference our
              professional painters can make in your Los Angeles home!
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:3237428448" className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-semibold text-sm">(323) 742-8448</p>
                </div>
              </a>

              <a href="mailto:info@esrpainting.com" className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white font-semibold text-sm">Get In Touch</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-wider">Hours</p>
                  <p className="text-white font-semibold text-sm">Mon–Fri, 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-wider">Location</p>
                  <p className="text-white font-semibold text-sm">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESR Quality Painting Location"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Schedule Your Project
                </h3>
                <p className="text-blue-200/60 text-sm">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                      First Name <span className="text-orange-400">*</span>
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="bg-white/10 border-white/10 h-12 text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                      Last Name <span className="text-orange-400">*</span>
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="bg-white/10 border-white/10 h-12 text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                    Email <span className="text-orange-400">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/10 h-12 text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                    Phone <span className="text-orange-400">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="bg-white/10 border-white/10 h-12 text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                    required
                  />
                </div>

                {/* Services */}
                <div>
                  <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                    Services Needed <span className="text-orange-400">*</span>
                  </label>
                  <Input
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="Interior, Exterior, Commercial..."
                    className="bg-white/10 border-white/10 h-12 text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-blue-200/80 text-xs font-medium mb-1.5 block uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="bg-white/10 border-white/10 min-h-[120px] resize-none text-white placeholder:text-blue-200/30 focus:border-orange-400/50 focus:ring-orange-400/20 transition-all"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold h-14 text-base rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
