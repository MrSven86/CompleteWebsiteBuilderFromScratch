import { Link } from "react-router-dom";
import FontCardsOriginal from "@/components/FontCardsOriginal";
import FontCardsNew1 from "@/components/FontCardsNew1";
import FontCardsNew2 from "@/components/FontCardsNew2";
import FontCardsNew3 from "@/components/FontCardsNew3";
import FontCardsNew4 from "@/components/FontCardsNew4";
import FontCardsNew5 from "@/components/FontCardsNew5";
import FontCardsNew6 from "@/components/FontCardsNew6";

const Fonts = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <nav className="px-10 py-6 flex items-center gap-6">
        <Link to="/" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">← Home</Link>
        <h1 className="text-neutral-400 text-sm font-['Outfit']">Font & Color Combinations</h1>
      </nav>

      <FontCardsOriginal />
      <FontCardsNew1 />
      <FontCardsNew2 />
      <FontCardsNew3 />
      <FontCardsNew4 />
      <FontCardsNew5 />
      <FontCardsNew6 />
    </div>
  );
};

export default Fonts;
