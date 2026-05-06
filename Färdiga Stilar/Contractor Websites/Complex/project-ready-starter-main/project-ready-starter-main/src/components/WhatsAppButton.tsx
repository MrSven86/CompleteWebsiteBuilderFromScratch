import whatsappIcon from "@/assets/icon-whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=541127949481&text=Hola%21%20Quisiera%20hacer%20una%20consulta.."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-gray-900 font-bold text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
        Chatear en WhatsApp
      </span>
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform duration-200"
      />
    </a>
  );
};

export default WhatsAppButton;
