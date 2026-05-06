import brushImg from "@/assets/brush.png";
import callIcon from "@/assets/call-icon.svg";
import emailIcon from "@/assets/email-icon.svg";
import locationIcon from "@/assets/location-footer-icon.svg";
import footerBg from "@/assets/footer-bg.png";
import igIcon from "@/assets/ig-icon.svg";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="font-rubik font-bold text-xl text-primary-foreground leading-8 mb-2">
      {children}
    </h3>
    <div className="flex items-center gap-0">
      <div className="w-10 h-0.5 bg-primary" />
      <div className="w-1 h-0.5 bg-primary-foreground" />
    </div>
  </div>
);

const LinkItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    <span className="text-[hsl(var(--footer-text-muted))] text-xs">›</span>
    <a
      href="#"
      className="font-rubik text-base text-[hsl(var(--footer-text-muted))] leading-8 hover:text-primary-foreground transition-colors"
    >
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[hsl(var(--footer-bg))] relative overflow-hidden">
      {/* Background sketch overlay - subtle but visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
      </div>

      {/* Brush image - positioned at top-left, overlapping edge */}
      <img
        src={brushImg}
        alt="Paint brush"
        className="absolute z-10 w-[240px] left-[2%] top-[20px] -rotate-[14deg] origin-center"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-4 gap-10">

          {/* 4-column content inline */}
          <>
            {/* About Us */}
            <div>
              <SectionHeading>About Us</SectionHeading>
              <p className="font-rubik text-base text-[hsl(var(--footer-text-muted))] leading-8">
                At our company, we specialize in painting services. With 19 years of experience, we
                are dedicated to delivering exceptional results for both residential and commercial
                clients.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(24_5%_22%)] hover:bg-primary transition-colors"
                >
                  <img src={igIcon} alt="Instagram" className="w-4 h-4 invert brightness-0 filter" />
                </a>
              </div>
            </div>

            {/* Sitemap */}
            <div>
              <SectionHeading>Sitemap</SectionHeading>
              <ul className="space-y-1">
                <LinkItem>Home</LinkItem>
                <LinkItem>About Us</LinkItem>
                <LinkItem>Our Services</LinkItem>
                <LinkItem>Our Projects</LinkItem>
                <LinkItem>Reviews</LinkItem>
                <LinkItem>Contact Us</LinkItem>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <SectionHeading>Our Services</SectionHeading>
              <ul className="space-y-1">
                <LinkItem>Exterior & Interior Painting</LinkItem>
                <LinkItem>Cabinets Painting</LinkItem>
                <LinkItem>Remove Wallpaper</LinkItem>
                <LinkItem>Wall Repair</LinkItem>
                <LinkItem>Ceiling Repair</LinkItem>
                <LinkItem>And More...</LinkItem>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading>Contact Info</SectionHeading>
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4 pb-5 border-b border-primary-foreground/10">
                  <img src={callIcon} alt="Call" className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <p className="font-rubik text-sm text-[hsl(var(--footer-text-muted))] leading-4">
                      Call Us!
                    </p>
                    <p className="font-rubik text-base font-medium text-primary-foreground leading-8">
                      (415) 876-9119
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pb-5 border-b border-primary-foreground/10">
                  <img src={emailIcon} alt="Email" className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <p className="font-rubik text-sm text-[hsl(var(--footer-text-muted))] leading-4">
                      Send Email
                    </p>
                    <p className="font-rubik text-base font-medium text-primary-foreground leading-8">
                      contact@donispaintingca.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <img src={locationIcon} alt="Location" className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <p className="font-rubik text-sm text-[hsl(var(--footer-text-muted))] leading-4">
                      Our Location
                    </p>
                    <p className="font-rubik text-base font-medium text-primary-foreground leading-8">
                      200 Park Plaza Dr. Apt #32, Daly
                      <br />
                      City CA, 94015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full bg-primary py-5">
        <p className="text-center font-rubik text-base text-primary-foreground leading-8">
          © Copyright 2026 Donis Painting Corp All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
