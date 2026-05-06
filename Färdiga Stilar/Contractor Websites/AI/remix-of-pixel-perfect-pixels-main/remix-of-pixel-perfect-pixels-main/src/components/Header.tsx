import phoneIcon from "@/assets/phone-icon.svg";
import mailIcon from "@/assets/mail-icon.svg";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="header-gradient py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img src={logo} alt="ESR Quality Painting" className="w-32 h-32 rounded-full object-cover" />
              <div className="ml-2">
                <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                  <span className="text-primary">ESR</span>{" "}
                  <span className="text-white">Quality</span>
                </h1>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight -mt-1">
                  Painting Inc.
                </h2>
              </div>
            </div>
          </div>

          {/* Services Description */}
          <div className="hidden lg:block text-sm">
            <p className="text-primary font-semibold">Residential Painting</p>
            <p className="text-primary font-semibold">Commercial Painting</p>
            <p className="text-primary font-semibold">Interior & Exterior</p>
          </div>

          {/* Service Areas */}
          <div className="hidden xl:block text-right">
            <p className="text-destructive text-sm font-semibold uppercase tracking-wide">Service Areas</p>
            <p className="text-white text-sm">Hacienda Heights</p>
            <p className="text-white text-sm">San Gabriel Valley</p>
            <p className="text-white text-sm">West Covina</p>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <img src={phoneIcon} alt="Phone" className="w-10 h-10" />
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wide">Call Us Now</p>
                <p className="text-white text-lg font-bold">(626) 715-1424</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <img src={mailIcon} alt="Email" className="w-10 h-10" />
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wide">Email Us</p>
                <p className="text-white text-sm">esr@esrqualitypainting.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
