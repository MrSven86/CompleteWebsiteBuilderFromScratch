import { useEffect, useState } from "react";

const TZ = "America/Argentina/Buenos_Aires";

function getBuenosAiresParts() {
  const formatter = new Intl.DateTimeFormat("es-AR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const time = formatter.format(new Date());

  const hourFormatter = new Intl.DateTimeFormat("es-AR", {
    timeZone: TZ,
    hour: "2-digit",
    hour12: false,
  });
  // Some locales return "24" at midnight — normalize to 0
  const hour = parseInt(hourFormatter.format(new Date()), 10) % 24;

  return { time, hour };
}

export function TopBar() {
  const [{ time, hour }, setParts] = useState(getBuenosAiresParts);

  useEffect(() => {
    const tick = () => setParts(getBuenosAiresParts());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const isOpen = hour >= 6 && hour <= 19;

  return (
    <div className="w-full bg-[linear-gradient(90deg,#001F2B_0%,#006991_100%)] text-white">
      <div className="mx-auto flex h-9 max-w-[1920px] items-center justify-between gap-4 px-4 md:px-8 xl:px-[179px]">
        {/* Left — time + status */}
        <div className="flex items-center gap-2 font-outfit text-[14px] leading-none">
          <span
            aria-hidden
            className={`inline-block h-2.5 w-2.5 rounded-full ${
              isOpen ? "bg-[#22C55E] animate-pulse" : "bg-[#9CA3AF]"
            }`}
          />
          <span>{time}</span>
          <span className="opacity-60">|</span>
          {isOpen ? (
            <span>
              Estamos <strong className="font-semibold">abiertos</strong>
            </span>
          ) : (
            <span>
              <strong className="font-semibold">Cerrado ahora</strong>
            </span>
          )}
        </div>

        {/* Right — 24/7 emergencies (hidden on mobile) */}
        <div className="hidden font-outfit text-[12px] uppercase tracking-wide text-white/70 md:block">
          24/7 Emergencias Disponibles
        </div>
      </div>
    </div>
  );
}
