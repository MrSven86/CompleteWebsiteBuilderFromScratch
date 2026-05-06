import googleIcon from "@/assets/google-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import bbbIconRound from "@/assets/bbb-icon-round.svg";
import socialIcons from "@/assets/social-icons.svg";
import phoneIcon from "@/assets/phone-icon.svg";
import emailIcon from "@/assets/email-icon.svg";

const TopBar = () => {
  return (
    <div className="w-full h-16 relative">
      {/* Shaped container - starts after logo area, with rounded left side */}
      <div className="absolute right-0 top-0 h-full bg-secondary" style={{ left: '360px', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40px 100%)' }}>
        <div className="h-full flex items-center justify-between px-8 ml-10">
          {/* Reviews Section */}
          <div className="flex items-center gap-5">
            {/* Google Reviews */}
            <div className="flex items-center gap-2">
              <img src={googleIcon} alt="Google" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-topbar-foreground text-sm font-bold">5.0 </span>
                  <span className="text-star text-base font-bold tracking-widest">★★★★★</span>
                </div>
                <span className="text-topbar-foreground text-[13px] italic">Based on 185 Reviews</span>
              </div>
            </div>

            {/* Facebook Reviews */}
            <div className="flex items-center gap-2">
              <img src={facebookIcon} alt="Facebook" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-topbar-foreground text-sm font-bold">5.0 </span>
                  <span className="text-star text-base font-bold tracking-widest">★★★★★</span>
                </div>
                <span className="text-topbar-foreground text-[13px] italic">Based on 24 Reviews</span>
              </div>
            </div>

            {/* BBB Accredited */}
            <div className="flex items-center gap-2">
              <img src={bbbIconRound} alt="BBB Accredited" className="w-9 h-9 rounded-full" />
              <div className="flex flex-col">
                <span className="text-topbar-foreground text-sm font-bold">Accredited</span>
                <span className="text-topbar-foreground text-[13px] italic">A+ Rating</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 ml-6">
            <span className="text-topbar-foreground text-lg font-medium">Call Us Now!</span>
            <div className="flex items-center gap-2">
              <img src={phoneIcon} alt="Phone" className="w-6 h-6 brightness-0 invert" />
              <span className="text-topbar-foreground text-lg font-bold">+1 (410) 271-2980</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-5 brightness-0 invert" />
              <span className="text-topbar-foreground text-lg font-bold">sam@vanguardgc.com</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;
