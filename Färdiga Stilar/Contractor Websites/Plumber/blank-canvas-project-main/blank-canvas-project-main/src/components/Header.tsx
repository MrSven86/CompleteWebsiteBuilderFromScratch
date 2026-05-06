import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp.svg";
import phoneIcon from "@/assets/phone.svg";
import texture from "@/assets/header-texture.png";

const navItems = [
  { label: "SERVICIOS", hasDropdown: true },
  { label: "PRECIOS", hasDropdown: false },
  { label: "CONTACTO", hasDropdown: false },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-header-gradient shadow-[0_1px_12px_rgba(0,0,0,0.20)]">
      {/* Texture overlay - above bar but below content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90 mix-blend-soft-light"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto flex h-[96px] max-w-[1920px] items-center justify-between gap-6 px-4 md:px-8 xl:px-[179px]">
        {/* Logo */}
        <a href="/" className="flex shrink-0 flex-col items-start">
          <img
            src={logo}
            alt="MyPlumber"
            className="block h-[38px] w-auto max-w-none"
          />
          <span className="mt-1 whitespace-nowrap font-shantell text-[16px] font-light leading-none text-white">
            -Plomero matriculado en Palermo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 items-center gap-10 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 whitespace-nowrap font-roboto text-[22px] font-normal uppercase leading-[22.5px] text-white transition-opacity hover:opacity-80"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-5 w-5" strokeWidth={2.5} />}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-[15px] xl:flex">
          <a
            href="#"
            className="flex h-[44px] w-[180px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#00AFEF] font-roboto-condensed text-[20px] text-white transition-opacity hover:opacity-90"
          >
            <img src={whatsappIcon} alt="" className="h-[22px] w-[22px] shrink-0" />
            <span className="whitespace-nowrap">[WhatsApp]</span>
          </a>
          <a
            href="#"
            className="flex h-[44px] w-[180px] shrink-0 items-center gap-2 rounded-full border border-[#00AFEF] pl-3 font-roboto-condensed text-[20px] text-[#00AFEF] transition-colors hover:bg-[#00AFEF]/10"
          >
            <img src={phoneIcon} alt="" className="h-[32px] w-[32px] shrink-0" />
            <span className="whitespace-nowrap">11-XXXX-XXXX</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white xl:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="relative border-t border-white/10 bg-header-gradient xl:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center justify-between py-3 font-roboto text-[20px] uppercase text-white"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-5 w-5" />}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="#"
                className="flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#00AFEF] font-roboto-condensed text-[20px] text-white"
              >
                <img src={whatsappIcon} alt="" className="h-[22px] w-[22px]" />
                <span>[WhatsApp]</span>
              </a>
              <a
                href="#"
                className="flex h-[44px] items-center justify-center gap-3 rounded-full border border-[#00AFEF] font-roboto-condensed text-[20px] text-[#00AFEF]"
              >
                <img src={phoneIcon} alt="" className="h-[32px] w-[32px]" />
                <span>11-XXXX-XXXX</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
