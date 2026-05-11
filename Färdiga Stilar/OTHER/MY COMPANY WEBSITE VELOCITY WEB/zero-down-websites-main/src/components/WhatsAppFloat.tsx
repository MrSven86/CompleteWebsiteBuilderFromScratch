import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/46734609747?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
  </a>
);

export default WhatsAppFloat;
