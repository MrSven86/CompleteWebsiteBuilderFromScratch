import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="Velocity Web" className="h-8 mx-auto mb-4" />
        <p className="text-primary-foreground font-outfit font-bold text-lg mb-2">Velocity Web</p>
        <p className="text-primary-foreground/60 font-dm-sans text-sm">
          © {new Date().getFullYear()} Velocity Web. {t("Todos los derechos reservados.", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
