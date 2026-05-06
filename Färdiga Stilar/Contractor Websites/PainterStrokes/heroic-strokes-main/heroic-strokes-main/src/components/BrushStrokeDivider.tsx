interface BrushStrokeDividerProps {
  variant: "white-to-black" | "black-to-white" | "white-to-white" | "black-to-black";
  flip?: boolean;
}

const BrushStrokeDivider = ({ variant, flip = false }: BrushStrokeDividerProps) => {
  const bgColor = variant.startsWith("white") || variant.startsWith("black")
    ? variant.split("-to-")[1] === "black" ? "bg-brand-dark" : "bg-background"
    : "bg-background";

  const topBg = variant.split("-to-")[0] === "black" ? "bg-brand-dark" : "bg-background";

  // The SVG is dark strokes on transparent. We use CSS filters to make it white when needed.
  const needsInvert = variant === "white-to-black" || variant === "black-to-black";

  return (
    <div className={`relative w-full ${bgColor}`}>
      {/* Top color band */}
      <div className={`absolute top-0 left-0 w-full h-1/2 ${topBg}`} />
      <div className="relative z-10 brush-stroke-divider">
        <img
          src="/images/brush-stroke.svg"
          alt=""
          className={`w-full h-full object-cover ${flip ? "scale-x-[-1]" : ""}`}
          style={needsInvert ? { filter: "invert(1)" } : undefined}
        />
      </div>
    </div>
  );
};

export default BrushStrokeDivider;
