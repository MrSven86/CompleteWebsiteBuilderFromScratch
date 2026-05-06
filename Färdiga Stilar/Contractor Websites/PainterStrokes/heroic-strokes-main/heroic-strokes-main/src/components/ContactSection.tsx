import { useState } from "react";
import logo from "@/assets/logo.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="flex-1 bg-card rounded-md shadow-[0px_48px_100px_0px_rgba(17,12,46,0.15)] p-10">
            <h2 className="section-heading text-foreground">Request A Service</h2>
            <p className="font-body text-base text-brand-neutral leading-8 mt-4">
              Please submit the following form or call us and we will get back to you
              promptly. We look forward to hearing from you!
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground"
                />
                <input
                  name="lastName"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground"
                />
                <input
                  name="phone"
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <input
                name="location"
                placeholder="YOUR LOCATION"
                value={formData.location}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground"
              />
              <div>
                <label className="font-body text-sm font-bold uppercase text-foreground">
                  What service(s) do you need?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 mt-1 rounded border border-border bg-card font-body text-sm text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="cabinet">Cabinet Refinishing</option>
                  <option value="deck">Deck Resurfacing</option>
                  <option value="faux">Faux Finishes</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="DO YOU HAVE ANY QUESTIONS OR ADDITIONAL DETAILS TO INCLUDE?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border border-border bg-card font-body text-sm font-bold uppercase text-foreground placeholder:text-muted-foreground resize-none"
              />
              <button type="submit" className="btn-brand-full">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:w-[400px] flex flex-col items-start pt-10">
            <img src={logo} alt="SJP Logo" className="w-64 h-64 object-contain" />
            <h3 className="section-heading text-foreground mt-4">Stephen James Painting</h3>
            <h4 className="font-heading text-3xl text-foreground mt-6">Our Location</h4>
            <h4 className="font-heading text-3xl text-foreground mt-6">Call Us Today</h4>
            <p className="font-body text-base font-bold text-muted-foreground mt-2">805-423-7553</p>
            <h4 className="font-heading text-3xl text-foreground mt-6">Send Us a Message</h4>
            <p className="font-body text-base font-bold text-muted-foreground mt-2">StephenJamesPaint@yahoo.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
