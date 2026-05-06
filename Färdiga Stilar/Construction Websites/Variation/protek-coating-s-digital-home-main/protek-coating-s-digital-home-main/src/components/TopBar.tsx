import { Phone, Mail, Linkedin, Briefcase } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:6614316349" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>(661) 431-6349</span>
          </a>
          <a href="mailto:omarsanchez@protekcoating.org" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>omarsanchez@protekcoating.org</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Portfolio" className="hover:opacity-80 transition-opacity">
            <Briefcase className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
