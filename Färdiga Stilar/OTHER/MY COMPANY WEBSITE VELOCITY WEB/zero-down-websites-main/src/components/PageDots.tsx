const PageDots = () => {
  const scrollTo = (position: "top" | "middle" | "bottom") => {
    const targets = { top: 0, middle: document.body.scrollHeight / 2, bottom: document.body.scrollHeight };
    window.scrollTo({ top: targets[position], behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-3 hidden lg:flex">
      {(["top", "middle", "bottom"] as const).map((pos) => (
        <button
          key={pos}
          onClick={() => scrollTo(pos)}
          className="w-4 h-4 rounded-full border-[2.5px] border-foreground/60 hover:border-foreground transition-colors bg-transparent"
          aria-label={`Scroll to ${pos}`}
        />
      ))}
    </div>
  );
};

export default PageDots;
