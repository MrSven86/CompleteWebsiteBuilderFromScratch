import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const CTASection = () => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/50 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="text-white">
            <p className="font-satoshi text-sm text-secondary tracking-widest uppercase mb-3">
              Ready to Start Your Project?
            </p>
            <h2 className="font-clash font-bold text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6">
              Get Your Free Painting<br className="hidden sm:block" />
              Estimate Today
            </h2>
            <p className="font-satoshi text-white/80 text-base lg:text-lg mb-6 lg:mb-8 max-w-md">
              Contact Chameleon Painting and Decorating to discuss your residential or commercial painting project. We serve Long Beach and the surrounding area.
            </p>
            
            {/* Phone */}
            <div className="flex items-center gap-4 mb-5 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
              </div>
              <div>
                <p className="font-satoshi text-white/70 text-xs lg:text-sm">Call for project inquiries and free estimates</p>
                <a href="tel:5622125468" className="font-clash font-bold text-lg lg:text-xl text-secondary hover:text-secondary/80 transition-colors">
                  (562) 212-5468
                </a>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-center gap-4 mb-5 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
              </div>
              <div>
                <p className="font-satoshi font-bold text-white text-sm">Opening Hours</p>
                <p className="font-satoshi text-white/80 text-sm">Monday - Friday: Hours TBD</p>
                <p className="font-satoshi text-white/80 text-sm">Saturday: Hours TBD</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-satoshi font-bold text-white text-sm">Serving Long Beach, CA 90805</p>
                  <p className="font-satoshi text-white/80 text-sm">And surrounding areas</p>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106091.97642498498!2d-118.24368455!3d33.80543015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd313b68a77995%3A0x5028f67b45e388b7!2sLong%20Beach%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Long Beach Map"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-primary rounded-2xl p-6 lg:p-8 shadow-2xl">
            <h3 className="font-clash font-bold text-xl lg:text-2xl text-white text-center mb-6 lg:mb-8 uppercase tracking-wide">
              Request Your Free Estimate
            </h3>
            
            <form className="space-y-4 lg:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-satoshi text-white text-sm mb-2 block">
                    Name <span className="text-secondary">*</span>
                  </label>
                  <Input 
                    placeholder="" 
                    className="bg-white border-0 h-12 rounded-md"
                  />
                  <span className="text-secondary text-xs mt-1 block">First</span>
                </div>
                <div>
                  <label className="font-satoshi text-white text-sm mb-2 block sm:opacity-0">
                    Last
                  </label>
                  <Input 
                    placeholder="" 
                    className="bg-white border-0 h-12 rounded-md"
                  />
                  <span className="text-secondary text-xs mt-1 block">Last</span>
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label className="font-satoshi text-white text-sm mb-2 block">
                  Email <span className="text-secondary">*</span>
                </label>
                <Input 
                  type="email" 
                  placeholder="" 
                  className="bg-white border-0 h-12 rounded-md"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="font-satoshi text-white text-sm mb-2 block">
                  Phone Number <span className="text-secondary">*</span>
                </label>
                <Input 
                  type="tel" 
                  placeholder="" 
                  className="bg-white border-0 h-12 rounded-md"
                />
              </div>
              
              {/* Services */}
              <div>
                <label className="font-satoshi text-white text-sm mb-2 block">
                  What Services Do You Need? <span className="text-secondary">*</span>
                </label>
                <Input 
                  placeholder="" 
                  className="bg-white border-0 h-12 rounded-md"
                />
              </div>
              
              {/* Message */}
              <div>
                <label className="font-satoshi text-white text-sm mb-2 block">
                  Comment or Message
                </label>
                <Textarea 
                  placeholder="" 
                  className="bg-white border-0 min-h-[100px] lg:min-h-[120px] rounded-md resize-none"
                />
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white font-satoshi font-bold px-8 py-3 h-auto rounded-md w-full sm:w-auto"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
