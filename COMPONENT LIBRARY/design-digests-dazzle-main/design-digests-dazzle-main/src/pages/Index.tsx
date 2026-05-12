import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-4xl font-normal font-['DM_Serif_Display'] mb-4">
          Design Reference
        </h1>
        <p className="text-neutral-500 text-lg font-['Outfit'] mb-10">
          A collection of beautiful font & color combinations
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Link
            to="/fonts"
            className="inline-block border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 px-8 py-3 text-sm font-medium font-['Outfit'] tracking-wide transition-colors"
          >
            Font Combinations →
          </Link>
          <Link
            to="/components"
            className="inline-block border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 px-8 py-3 text-sm font-medium font-['Outfit'] tracking-wide transition-colors"
          >
            Components →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
