import logoImg from "@/assets/logo.png";
import starSvg from "@/assets/star.svg";
import phoneSvg from "@/assets/phone-icon.svg";
import googleImg from "@/assets/google-logo.png";
import bookArrow from "@/assets/book-arrow.svg";

const Header = () => {
  return (
    <header className="relative w-full bg-background">
      <div className="hidden w-full border-b border-border xl:block">
        <div className="mx-auto flex h-10 max-w-[1920px] items-center justify-between px-[290px]">
          <div className="flex items-center gap-[6px]">
            <span className="text-muted-foreground" style={{ fontSize: '6px' }}>✦</span>
            <span
              className="uppercase text-muted-foreground"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.12em',
                lineHeight: '24px',
              }}
            >
              Registreret hos styrelsen for patientsikkerhed
            </span>
            <span className="text-muted-foreground" style={{ fontSize: '6px' }}>✦</span>
            <span
              className="uppercase text-muted-foreground"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.12em',
                lineHeight: '24px',
              }}
            >
              150.000+ behandlinger udført
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="tel:+4561616117" className="flex items-center gap-2 no-underline">
              <img src={phoneSvg} alt="Phone" className="h-[20px] w-[20px]" />
              <span
                className="text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                }}
              >
                +45 61 61 61 17
              </span>
            </a>

            <div className="flex items-center gap-[10px]">
              <span
                className="text-foreground underline underline-offset-[3px]"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                Fremragende
              </span>
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starSvg} alt="star" className="h-[13px] w-[13px]" />
                ))}
              </div>
              <img src={googleImg} alt="Google" style={{ width: '88px', height: '29px' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border xl:border-b-0">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-10 xl:h-[72px] xl:flex-row xl:items-center xl:justify-between xl:px-[290px] xl:py-0">
          <nav className="order-2 flex flex-wrap items-center gap-x-6 gap-y-2 xl:order-1 xl:gap-10">
            {[
              { href: '#behandlinger', label: 'Behandlinger' },
              { href: '#priser', label: 'Priser' },
              { href: '#medlemsklub', label: 'Medlemsklub' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground no-underline transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="order-1 flex items-center justify-between gap-4 xl:order-2 xl:ml-auto">
            <img src={logoImg} alt="Cerix" className="h-[28px] w-auto sm:h-[34px] xl:absolute xl:left-1/2 xl:-translate-x-1/2" />

            <a
              href="#book"
              className="inline-flex h-[44px] w-[96px] items-center justify-between rounded-md no-underline transition-opacity hover:opacity-90"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                color: 'hsl(0 0% 100%)',
                backgroundColor: 'hsl(210 30% 5%)',
                padding: '0 16px',
              }}
            >
              Book
              <img src={bookArrow} alt="" className="h-[14px] w-[18px]" />
            </a>
          </div>

          <div className="order-3 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4 xl:hidden">
            <a href="tel:+4561616117" className="flex items-center gap-2 no-underline">
              <img src={phoneSvg} alt="Phone" className="h-[18px] w-[18px]" />
              <span
                className="text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                }}
              >
                +45 61 61 61 17
              </span>
            </a>

            <div className="flex items-center gap-[8px]">
              <span
                className="text-foreground underline underline-offset-[3px]"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                Fremragende
              </span>
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starSvg} alt="star" className="h-[12px] w-[12px]" />
                ))}
              </div>
              <img src={googleImg} alt="Google" style={{ width: '72px', height: '24px' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
