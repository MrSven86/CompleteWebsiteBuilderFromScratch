import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message! We will get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center mb-2">Contact Us</h2>
        <p className="text-muted-foreground text-center mb-10">We usually reach back out in 24 hours. Call us anytime.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-heading font-bold text-sm">PHONE</p>
                <a href="tel:6614316349" className="text-muted-foreground text-sm">(661) 431-6349</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-heading font-bold text-sm">EMAIL</p>
                <a href="mailto:omarsanchez@protekcoating.org" className="text-muted-foreground text-sm">omarsanchez@protekcoating.org</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-heading font-bold text-sm">HOURS</p>
                <p className="text-muted-foreground text-sm">Monday – Friday: 8:00AM – 5:00PM</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-heading font-bold py-3 rounded hover:opacity-90 transition-opacity text-sm uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
