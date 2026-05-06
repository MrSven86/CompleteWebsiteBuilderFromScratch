import { Phone, MapPin, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import iconGoogle from "@/assets/icons/icon-google-hd.svg";
import starsIcon from "@/assets/icons/icon-5-stars.png";
import googleReviewIcon from "@/assets/icons/icon-google-review.png";

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

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Form */}
      <section className="relative min-h-[600px] overflow-hidden pt-[56px] lg:pt-[88px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <AnimatedSection direction="left" className="text-white">
              <p className="font-satoshi text-lg mb-2">Contact Joya's Painting</p>
              <h1 className="font-satoshi font-bold text-4xl md:text-5xl mb-6">
                Ready to discuss your project?
              </h1>
              <p className="font-inter text-white/90 text-lg mb-8">
                Fill out the form and we'll get back to you within{" "}
                <span className="font-bold">2-3 hours (on business days).</span>
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Free Consultation", "Detailed proposal", "Upfront pricing", "Exceptional communication"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/30">
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-satoshi font-bold text-base text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Side - Contact Form */}
            <AnimatedSection direction="right" delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-satoshi font-bold text-foreground">
                    Call or text us at <a href="tel:3237428448" className="text-primary hover:underline">(323) 742-8448</a> or fill out the form below
                  </p>
                </div>

                <form className="space-y-4">
                  <Input 
                    placeholder="Full Name"
                    className="h-12 bg-muted border-0"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      type="email"
                      placeholder="Email Address"
                      className="h-12 bg-muted border-0"
                    />
                    <Input 
                      type="tel"
                      placeholder="Mobile Number"
                      className="h-12 bg-muted border-0"
                    />
                  </div>
                  <select className="w-full h-12 px-4 bg-muted rounded-md text-muted-foreground font-inter text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">-- Select A Service --</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinet">Cabinet Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="drywall">Drywall Installation</option>
                  </select>
                  <Input 
                    placeholder="Your City (optional)"
                    className="h-12 bg-muted border-0"
                  />
                  <Textarea 
                    placeholder="Tell us more about your project idea here"
                    className="bg-muted border-0 min-h-[100px] resize-none"
                  />
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-satoshi font-bold"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map & Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <AnimatedSection direction="left">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192113701154!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Los Angeles Map"
                />
              </div>
            </AnimatedSection>

            {/* Contact Details */}
            <AnimatedSection direction="right" delay={200}>
              <h2 className="font-satoshi font-bold text-3xl text-foreground mb-8">Contact Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-foreground mb-1">Address</h3>
                    <p className="font-inter text-muted-foreground">3814 Willat Avenue Los Angeles, CA 90232</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:3237428448" className="font-inter text-primary hover:underline">
                      (323) 742-8448
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@joyaspainting.com" className="font-inter text-primary hover:underline">
                      info@joyaspainting.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Reviews Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <AnimatedSection direction="up" className="text-center mb-12">
            <p className="font-satoshi text-sm text-primary tracking-widest uppercase mb-3">testimonials</p>
            <h2 className="font-satoshi font-bold text-[40px] lg:text-[48px] text-secondary">
              What Our Customers Say
            </h2>
          </AnimatedSection>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-satoshi font-bold text-sm text-foreground">{review.name}</h4>
                        <p className="font-satoshi text-xs text-muted-foreground">{review.timeAgo}</p>
                      </div>
                    </div>
                    <img src={googleReviewIcon} alt="Google" className="w-6 h-6" />
                  </div>

                  {/* Stars */}
                  <div className="mb-3">
                    <img src={starsIcon} alt="5 stars" className="h-4" />
                  </div>

                  {/* Review Text */}
                  <p className="font-satoshi text-sm text-foreground leading-relaxed mb-2">
                    {review.text}
                  </p>
                  <button className="font-satoshi text-sm text-muted-foreground hover:text-primary transition-colors">
                    Read more
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Google Rating Badge */}
          <AnimatedSection direction="up" delay={400} className="flex justify-center mt-10">
            <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-4">
              <img src={iconGoogle} alt="Google" className="h-12 w-auto" />
              <div>
                <p className="font-satoshi font-bold text-foreground">Excellent</p>
                <div className="flex items-center gap-2">
                  <img src={starsIcon} alt="5 stars" className="h-4" />
                  <span className="font-inter text-sm text-muted-foreground">Based on 50+ reviews</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
