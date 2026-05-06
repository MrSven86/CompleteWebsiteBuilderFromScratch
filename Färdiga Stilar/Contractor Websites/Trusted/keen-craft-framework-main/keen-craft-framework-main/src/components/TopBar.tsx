import acmeLogo from "@/assets/acmelogo.png";
import phoneIcon from "@/assets/phone-icon.svg";
import mailIcon from "@/assets/mail-icon.svg";
import locationIcon from "@/assets/location-icon.svg";
import igIcon from "@/assets/ig-icon.svg";

const TopBar = () => {
  return (
    <div className="w-full">
      {/* Top accent bars */}
      <div className="flex w-full h-2">
        <div className="w-1/2 bg-brand-dark" />
        <div className="w-1/2 bg-brand-red" />
      </div>

      {/* Contact info bar */}
      <div className="bg-background">
        <div className="max-w-[1170px] mx-auto flex items-center justify-between py-5 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={acmeLogo}
              alt="Acme Painting Corp"
              className="h-[115px] w-auto"
            />
          </div>

          {/* Contact details */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <img src={phoneIcon} alt="Phone" className="w-8 h-8" />
              <div>
                <p className="text-xs font-medium font-rubik text-muted-foreground leading-3">
                  Call Us!
                </p>
                <p className="text-sm font-medium font-rubik text-foreground leading-6">
                  (415) 876-9119
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border rotate-12" />

            {/* Email */}
            <div className="flex items-center gap-3">
              <img src={mailIcon} alt="Email" className="w-8 h-8" />
              <div>
                <p className="text-xs font-medium font-rubik text-muted-foreground leading-3">
                  Send Email
                </p>
                <p className="text-sm font-medium font-rubik text-foreground leading-6">
                  contact@donispaintingca.com
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-border rotate-12" />

            {/* Location */}
            <div className="flex items-center gap-3">
              <img src={locationIcon} alt="Location" className="w-9 h-9" />
              <div>
                <p className="text-xs font-medium font-rubik text-muted-foreground leading-3">
                  Our Location
                </p>
                <p className="text-sm font-medium font-rubik text-foreground leading-6">
                  200 Park Plaza Dr. Apt #32, Daly City CA, 94015
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a href="#" className="ml-4 flex-shrink-0">
              <img src={igIcon} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
