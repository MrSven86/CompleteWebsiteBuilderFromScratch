import logoImg from "@/assets/logo.png";

const Footer = () => {
  const kosmetiskeLocations = [
    { name: "CeriX København", address: "Købmagergade 24", zip: "1150 København K" },
    { name: "CeriX Frederiksberg", address: "Pile Allé 15", zip: "2000 Frederiksberg" },
    { name: "CeriX Hellerup", address: "Strandvejen 191", zip: "2900 Hellerup" },
    { name: "CeriX Køge", address: "Brogade 12", zip: "4600 Køge" },
    { name: "CeriX Holbæk", address: "Ahlgade 26, 1 tv.", zip: "4300 Holbæk" },
    { name: "CeriX Hillerød", address: "Helsingørgade 8D", zip: "3400 Hillerød" },
    { name: "CeriX Greve", address: "Hundige strandvej 197", zip: "2670 Greve" },
    { name: "CeriX Roskilde", address: "Allehelgensgade 3", zip: "4000 Roskilde" },
    { name: "CeriX Helsingør", address: "Stjernegade 4C", zip: "3000 Helsingør" },
    { name: "CeriX Rungsted", address: "Rungsted Bytorv 1 st.", zip: "2960 Rungsted Kyst" },
    { name: "CeriX Søborg", address: "Søborg Hovedgade 96A", zip: "2860 Søborg" },
    { name: "CeriX Aalborg", address: "Bispensgade 30", zip: "9000 Aalborg" },
    { name: "CeriX Aarhus", address: "Guldsmedgade 1", zip: "8000 Aarhus C" },
    { name: "CeriX Esbjerg", address: "Kongensgade 84", zip: "6700 Esbjerg" },
    { name: "CeriX Silkeborg", address: "Torvet 5, st. tv", zip: "8600 Silkeborg" },
    { name: "CeriX Odense", address: "Vestergade 23, 1 Sal", zip: "5000 Odense C" },
  ];

  const privatLocations = [
    { name: "Aarhus (forundersøgelse)", address: "Guldsmedgade 1", zip: "8000 Aarhus C" },
    { name: "CeriX Privathospital – Hellerup", address: "Strandvejen 191", zip: "2900 Hellerup" },
    { name: "CeriX Privathospital – Aalborg", address: "Vandmanden 10E", zip: "9200 Aalborg" },
  ];

  const footerNavStyle = {
    fontFamily: "'Futura PT Web', sans-serif",
    fontWeight: 500,
    fontSize: '18px',
    color: 'hsl(240 6% 25%)',
  } as const;

  const listStyle = {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: '32px',
    color: 'hsl(240 6% 25%)',
  } as const;

  return (
    <footer className="w-full" style={{ backgroundColor: 'hsl(30 11% 96%)' }}>
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-[290px]">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 pt-16 pb-12 lg:grid-cols-[280px_1fr]">
          <div>
            <img src={logoImg} alt="CeriX" className="mb-6 h-12 w-auto" />
            <p className="m-0 mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '18px', lineHeight: '24px', color: 'hsl(240 6% 25%)' }}>
              Vær først med nyheder og tilbud
            </p>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-md no-underline transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'hsl(30 5% 52%)', height: '48px', padding: '0 22px', fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '18px', color: 'hsl(0 0% 100%)' }}
            >
              Tilmeld nyhedsbrev
            </a>

            <div className="mt-8 flex items-center gap-6">
              <a href="#" className="transition-opacity hover:opacity-70" style={{ color: 'hsl(240 6% 25%)' }}>
                <svg width="12" height="22" viewBox="0 0 12 22" fill="currentColor"><path d="M8 12.5h3l.5-3H8V7.5c0-.83 0-1.5 1.5-1.5H11.5V3.14A25.28 25.28 0 0 0 8.84 3C6.14 3 4.5 4.49 4.5 7.2V9.5H1.5v3H4.5V21h3.5v-8.5z"/></svg>
              </a>
              <a href="#" className="transition-opacity hover:opacity-70" style={{ color: 'hsl(240 6% 25%)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1 4.98 2.12 4.98 3.5zM5 8H0v16h5V8zm7.98 0H8.02v16h4.96v-8.4c0-4.67 6.03-5.05 6.03 0V24H24V14.27C24 6.36 14.94 6.61 12.98 10.56V8z"/></svg>
              </a>
              <a href="#" className="transition-opacity hover:opacity-70" style={{ color: 'hsl(240 6% 25%)' }}>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor"><path d="M9 0a9 9 0 0 0-.13 0v13.5a2.5 2.5 0 1 1-2.5-2.5h.5V8.5H6.5A5 5 0 1 0 11.5 13.5V6.73A7.5 7.5 0 0 0 16 8V5.5a4.5 4.5 0 0 1-4.5-4.5H9z"/></svg>
              </a>
              <a href="#" className="transition-opacity hover:opacity-70" style={{ color: 'hsl(240 6% 25%)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="#" className="transition-opacity hover:opacity-70" style={{ color: 'hsl(240 6% 25%)' }}>
                <svg width="22" height="16" viewBox="0 0 24 18" fill="currentColor"><path d="M23.5 3.5a3 3 0 0 0-2.1-2.1C19.5.8 12 .8 12 .8s-7.5 0-9.4.6A3 3 0 0 0 .5 3.5C0 5.4 0 9 0 9s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 12.6 24 9 24 9s0-3.6-.5-5.5zM9.8 12.8V5.2L15.8 9l-6 3.8z"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { title: "Virksomhed", items: ["Tilsynsrapporter", "Kvalitet & sikkerhed", "Mød personalet", "Ledige stillinger hos CeriX"] },
              { title: "Politik & Vilkår", items: ["Privatlivspolitik", "Cookiepolitik", "Handelsbetingelser"] },
              { title: "Information", items: ["Kampagner", "Udstyr", "Finansiering", "Bliv kosmetisk sygeplejerske", "Betaling med ViaBill"] },
              { title: "Inspiration", items: ["Medlemsskab", "Nyheder", "Gavekort"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="m-0 mb-4" style={footerNavStyle}>{col.title}</h4>
                <ul className="m-0 list-none p-0" style={listStyle}>
                  {col.items.map((item) => (
                    <li key={item}><a href="#" className="no-underline" style={{ color: 'inherit' }}>{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(30 5% 85%)' }} />

        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-2">
          {/* Kosmetiske klinikker */}
          <div>
            <h3 className="m-0 mb-3" style={{ ...footerNavStyle, fontSize: '22px' }}>Kosmetiske klinikker</h3>
            <p className="m-0 mb-6" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: '24px', color: 'hsl(240 6% 25%)' }}>
              Vi har telefontid alle hverdage fra 8.00-18.00 samt lørdag fra<br />10.00-15.00 – men du kan også altid fange os på mail
            </p>
            <div className="mb-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(240 6% 25%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '20px', color: 'hsl(240 6% 25%)' }}>+45 61 61 61 17</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(240 6% 25%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '20px', color: 'hsl(240 6% 25%)' }}>kundeservice@cerix.dk</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
              {kosmetiskeLocations.map((loc, i) => (
                <div key={i}>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '14px', color: 'hsl(240 6% 25%)' }}>{loc.name}</p>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', lineHeight: '20px', color: 'hsl(240 6% 25% / 0.7)' }}>{loc.address}</p>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', lineHeight: '20px', color: 'hsl(240 6% 25% / 0.7)' }}>{loc.zip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Privathospitaler */}
          <div>
            <h3 className="m-0 mb-3" style={{ ...footerNavStyle, fontSize: '22px' }}>Privathospitaler</h3>
            <p className="m-0 mb-6" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: '24px', color: 'hsl(240 6% 25%)' }}>
              Privathospitalet har telefontid alle<br />hverdage fra 9.00-16.00
            </p>
            <div className="mb-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(240 6% 25%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '20px', color: 'hsl(240 6% 25%)' }}>+45 61 90 02 00</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(240 6% 25%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '20px', color: 'hsl(240 6% 25%)' }}>privathospital@cerix.dk</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {privatLocations.map((loc, i) => (
                <div key={i}>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: '14px', color: 'hsl(240 6% 25%)' }}>{loc.name}</p>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', lineHeight: '20px', color: 'hsl(240 6% 25% / 0.7)' }}>{loc.address}</p>
                  <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', lineHeight: '20px', color: 'hsl(240 6% 25% / 0.7)' }}>{loc.zip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t py-8" style={{ borderColor: 'hsl(30 5% 85%)' }}>
          <p className="m-0" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '13px', color: 'hsl(240 6% 25% / 0.6)' }}>
            CeriX er et varemærkebeskyttet brand - All rights reserved CeriX 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
