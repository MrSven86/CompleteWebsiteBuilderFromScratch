import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ResidentialContactForm = () => {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white font-bold mb-4">
              Get Your Free Painting Estimate
            </h2>
            <p className="font-poppins text-white/85 text-base leading-relaxed mb-8">
              Tell us about your project and we'll get back to you within 24 hours to 
              schedule a time to see your home. No pressure, no obligation.
            </p>

            <div className="border-t border-white/15 pt-6 space-y-2">
              <p className="font-poppins text-white/70 text-sm">✓ Free estimate, no obligation</p>
              <p className="font-poppins text-white/70 text-sm">✓ We'll call to confirm, not sell</p>
              <p className="font-poppins text-white/70 text-sm">✓ Your info stays private</p>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-white/70 text-sm mb-2">Prefer to talk now?</p>
              <p className="font-poppins text-white text-2xl md:text-3xl font-bold">(203) 565-2316</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="font-poppins text-foreground text-xl font-semibold text-center mb-2">
              Request Free Estimate
            </h3>
            <p className="font-poppins text-muted-foreground text-sm text-center mb-6">
              We respond within 24 hours
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-poppins text-foreground text-sm font-medium mb-1 block">
                    Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="" 
                    className="rounded-md border-border"
                  />
                </div>
                <div>
                  <label className="font-poppins text-foreground text-sm font-medium mb-1 block">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="" 
                    className="rounded-md border-border"
                  />
                </div>
              </div>

              <div>
                <label className="font-poppins text-foreground text-sm font-medium mb-1 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="" 
                  className="rounded-md border-border"
                />
              </div>

              <div>
                <label className="font-poppins text-foreground text-sm font-medium mb-1 block">
                  What do you need painted?
                </label>
                <Select>
                  <SelectTrigger className="rounded-md border-border bg-muted">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior">Interior Painting</SelectItem>
                    <SelectItem value="exterior">Exterior Painting</SelectItem>
                    <SelectItem value="both">Both Interior & Exterior</SelectItem>
                    <SelectItem value="cabinets">Cabinet Refinishing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-poppins text-foreground text-sm font-medium mb-1 block">
                  Anything else we should know?
                </label>
                <Textarea 
                  placeholder="Number of rooms, specific areas, timing, etc." 
                  className="rounded-md border-border min-h-[80px]"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                className="w-full rounded-md"
              >
                Request Free Estimate
              </Button>

              <p className="font-poppins text-muted-foreground text-xs text-center">
                We'll contact you to schedule a time—no surprise visits.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialContactForm;
