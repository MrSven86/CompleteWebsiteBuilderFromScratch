import { Link, NavLink } from "react-router-dom";

/* ============== CTA Variants from HVAC.png ============== */

const Input = ({ ph, type = "text", className = "" }: { ph: string; type?: string; className?: string }) => (
  <input type={type} placeholder={ph} className={`w-full bg-transparent outline-none ${className}`} />
);

/* Variant A — Elvis Painting yellow estimate with house photo */
const VariantA = () => (
  <section className="py-20 px-10 bg-[#FBF7E8]">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #A — Elvis Painting Estimate</p>
    <div className="mx-auto grid grid-cols-[280px_1fr] gap-10" style={{ maxWidth: 1100 }}>
      <div>
        <img src="/images/cta/elvis-logo.png" alt="Elvis Painting" className="w-full h-auto mb-4" />
        <h4 className="font-['Oswald'] font-bold text-[#1a1a1a] uppercase text-[18px] leading-[22px] mb-3">Got A Painting Project? Get A Quote</h4>
        <p className="text-[#444] font-['Open_Sans'] text-[12px] leading-[18px] mb-4">Reliable team, fair pricing, fully licensed. We respond within 24 hours.</p>
        <div className="bg-neutral-200 h-[180px] rounded overflow-hidden">
          <div className="w-full h-full bg-[url('/images/cta/kitchen.png')] bg-cover bg-center" />
        </div>
      </div>
      <div>
        <h3 className="font-['Oswald'] font-bold text-[#0E2A47] text-[26px] uppercase leading-[30px] mb-1">Tell Us About Your Project — Get A Free Quote</h3>
        <p className="text-[#666] font-['Open_Sans'] text-[12px] mb-6">Fields marked with * are required.</p>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div><label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">First Name *</label><div className="border border-neutral-300 px-3 py-2 bg-white"><Input ph="" className="text-[13px]" /></div></div>
          <div><label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">Last Name *</label><div className="border border-neutral-300 px-3 py-2 bg-white"><Input ph="" className="text-[13px]" /></div></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div><label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">Email *</label><div className="border border-neutral-300 px-3 py-2 bg-white"><Input ph="" type="email" className="text-[13px]" /></div></div>
          <div><label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">Phone *</label><div className="border border-neutral-300 px-3 py-2 bg-white"><Input ph="" className="text-[13px]" /></div></div>
        </div>
        <div className="mb-3">
          <label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">Service Address</label>
          <div className="border border-neutral-300 px-3 py-2 bg-white"><Input ph="" className="text-[13px]" /></div>
        </div>
        <div className="mb-4">
          <label className="block text-[12px] text-[#222] mb-1 font-['Open_Sans']">Project Details</label>
          <div className="border border-neutral-300 px-3 py-2 bg-white"><textarea className="w-full bg-transparent outline-none text-[13px] resize-none" rows={4} /></div>
        </div>
        <button className="bg-[#DD1A32] hover:bg-[#B81629] text-white font-['Oswald'] font-bold uppercase tracking-wider px-8 py-2.5 text-[13px]">Submit Request</button>
      </div>
    </div>
  </section>
);

/* Variant B — Green contact info card with right form */
const VariantB = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #B — Green Quick Contact</p>
    <div className="mx-auto grid grid-cols-[1fr_360px] gap-8" style={{ maxWidth: 900 }}>
      <div>
        <h3 className="font-['Inter'] font-bold text-[20px] text-neutral-900 mb-1">Reach Us From Local Areas</h3>
        <p className="text-neutral-500 font-['Inter'] text-[13px] mb-5">We're a call away from helping you.</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 border border-neutral-200 rounded p-3">
            <div className="w-10 h-10 rounded bg-[#3AB449]/15 text-[#3AB449] flex items-center justify-center text-[18px]">📞</div>
            <div>
              <div className="text-[11px] text-neutral-500 font-['Inter']">Call us</div>
              <div className="font-['Inter'] font-semibold text-[14px] text-neutral-900">(555) 234-5678</div>
            </div>
          </div>
          <div className="flex items-center gap-3 border border-neutral-200 rounded p-3">
            <div className="w-10 h-10 rounded bg-[#3AB449]/15 text-[#3AB449] flex items-center justify-center text-[18px]">✉️</div>
            <div>
              <div className="text-[11px] text-neutral-500 font-['Inter']">Email</div>
              <div className="font-['Inter'] font-semibold text-[14px] text-neutral-900">info@servicepro.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3 border border-neutral-200 rounded p-3">
            <div className="w-10 h-10 rounded bg-[#3AB449]/15 text-[#3AB449] flex items-center justify-center text-[18px]">📍</div>
            <div>
              <div className="text-[11px] text-neutral-500 font-['Inter']">Visit</div>
              <div className="font-['Inter'] font-semibold text-[14px] text-neutral-900">123 Main St, Austin TX</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3AB449] rounded p-6 space-y-3">
        <div className="bg-white rounded px-3 py-2.5"><Input ph="Full Name" className="text-[13px]" /></div>
        <div className="bg-white rounded px-3 py-2.5"><Input ph="Email" type="email" className="text-[13px]" /></div>
        <div className="bg-white rounded px-3 py-2.5"><Input ph="Phone" className="text-[13px]" /></div>
        <div className="bg-white rounded px-3 py-2.5"><Input ph="Subject" className="text-[13px]" /></div>
        <div className="bg-white rounded px-3 py-2.5"><textarea placeholder="Message" className="w-full bg-transparent outline-none text-[13px] resize-none" rows={3} /></div>
        <button className="bg-[#0E2F12] hover:bg-black text-white font-['Inter'] font-semibold px-6 py-2.5 rounded text-[13px]">Send Message</button>
      </div>
    </div>
  </section>
);

/* Variant C — Book a Service blue call bar */
const VariantC = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #C — Book a Service Bar</p>
    <div className="mx-auto bg-[#2D7BD8] rounded-md py-10 px-12 text-center text-white" style={{ maxWidth: 900 }}>
      <h3 className="font-['Inter'] font-bold text-[28px] mb-2">📅 Book A Service</h3>
      <p className="text-white/85 font-['Inter'] text-[14px] mb-6">Same-day appointments available. Book in under 60 seconds.</p>
      <button className="bg-white text-[#2D7BD8] font-['Inter'] font-semibold px-8 py-3 rounded text-[14px]">BOOK NOW →</button>
    </div>
  </section>
);

/* Variant D — Compact estimate form with utility icons */
const VariantD = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #D — Quote with Utility Icons</p>
    <div className="mx-auto grid grid-cols-[1fr_360px] gap-10 items-start" style={{ maxWidth: 1000 }}>
      <div className="space-y-4">
        <div className="border-b border-neutral-300 pb-3">
          <label className="block text-[12px] text-neutral-500 font-['Inter']">Phone</label>
          <Input ph="(555) 123-4567" className="text-[14px] font-['Inter']" />
        </div>
        <div className="border-b border-neutral-300 pb-3">
          <label className="block text-[12px] text-neutral-500 font-['Inter']">Email</label>
          <Input ph="you@example.com" type="email" className="text-[14px] font-['Inter']" />
        </div>
        <div className="border-b border-neutral-300 pb-3">
          <label className="block text-[12px] text-neutral-500 font-['Inter']">Address</label>
          <Input ph="123 Main St" className="text-[14px] font-['Inter']" />
        </div>
        <button className="bg-[#F4A015] hover:bg-[#D88A09] text-white font-['Inter'] font-semibold px-8 py-2.5 rounded text-[13px] mt-4">Request Quote</button>
      </div>
      <div>
        <h3 className="font-['Inter'] font-bold text-[20px] text-neutral-900 mb-2 leading-[26px]">Request a quote — fast turnaround on every project</h3>
        <p className="text-neutral-500 font-['Inter'] text-[13px] mb-6">We service all major utilities and home systems.</p>
        <div className="flex items-center gap-4">
          <div className="text-3xl">💧</div>
          <div className="text-3xl">⚡</div>
          <div className="text-3xl">🔥</div>
          <div className="text-3xl">🛠️</div>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 1 — Dark navy two-column with purple submit */
const Variant1 = () => (
  <section className="py-20 px-10 bg-neutral-200">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #1 — Dark Quick Touch</p>
    <div className="mx-auto bg-[#1B1B2F] rounded-[10px] grid grid-cols-2 gap-10 p-12" style={{ width: 1200 }}>
      <div className="text-white">
        <h3 className="font-['Inter'] font-bold text-[28px] text-[#9F7AEA] mb-4">Get In Touch With Us</h3>
        <p className="text-neutral-400 font-['Inter'] text-[15px] leading-[24px] mb-8">Have questions? We're here to help. Reach out and our team will respond within 24 hours.</p>
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#9F7AEA]">📞</div>
          <div>
            <div className="font-['Inter'] font-semibold text-[15px]">Call Us</div>
            <div className="text-neutral-400 text-[14px]">(555) 123-4567</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#9F7AEA]">✉</div>
          <div>
            <div className="font-['Inter'] font-semibold text-[15px]">Email</div>
            <div className="text-neutral-400 text-[14px]">hello@example.com</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-['Inter'] font-bold text-[24px] text-white mb-6">Send Us A Message</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded px-3 py-3"><Input ph="Full Name" className="text-[14px]" /></div>
          <div className="bg-white rounded px-3 py-3"><Input ph="Email" type="email" className="text-[14px]" /></div>
        </div>
        <div className="bg-white rounded px-3 py-3 mb-4"><Input ph="Phone" className="text-[14px]" /></div>
        <div className="bg-white rounded px-3 py-3 mb-4"><Input ph="Service Needed" className="text-[14px]" /></div>
        <div className="bg-white rounded px-3 py-3 mb-4"><textarea placeholder="Message" className="w-full bg-transparent outline-none text-[14px] resize-none" rows={3} /></div>
        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-['Inter'] font-semibold px-8 py-2.5 rounded text-[14px] float-right">Submit</button>
      </div>
    </div>
  </section>
);

/* Variant 2 — CONTACT US with map and teal button */
const Variant2 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #2 — Contact Us Map</p>
    <div className="mx-auto grid grid-cols-2 gap-10" style={{ width: 1100 }}>
      <div>
        <h3 className="font-['Oswald'] font-bold text-[36px] text-[#222] tracking-wider mb-3">CONTACT US</h3>
        <p className="text-[#555] font-['Open_Sans'] text-[14px] leading-[22px] mb-4">Reach out to us for any inquiries. Our team is available to provide swift, professional assistance for all your service needs.</p>
        <div className="text-[#222] font-['Open_Sans'] text-[14px] mb-4">
          <div>(555) 987-6543</div>
          <div>info@servicepro.com</div>
          <div>123 Main St, Los Angeles, CA</div>
        </div>
        <div className="rounded overflow-hidden border border-neutral-200" style={{ height: 200 }}>
          <iframe title="map" className="w-full h-full" src="https://maps.google.com/maps?q=Los%20Angeles&t=&z=11&ie=UTF8&iwloc=&output=embed" />
        </div>
        <div className="flex items-center gap-3 mt-5">
          <div className="w-10 h-10 rounded-full bg-yellow-600" />
          <div className="w-10 h-10 rounded-full bg-neutral-700" />
          <div className="w-12 h-8 bg-[#0E767C] rounded text-white text-[10px] flex items-center justify-center font-bold">BBB</div>
        </div>
      </div>
      <div className="bg-white">
        <div className="space-y-3 mb-4">
          <div><label className="block text-[12px] text-[#555] mb-1 font-['Open_Sans']">Your Name</label><div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="" /></div></div>
          <div><label className="block text-[12px] text-[#555] mb-1 font-['Open_Sans']">Email Address</label><div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="hello@example.com" type="email" /></div></div>
          <div><label className="block text-[12px] text-[#555] mb-1 font-['Open_Sans']">Phone Number</label>
            <div className="border border-neutral-300 rounded px-3 py-2.5 flex items-center gap-2">
              <span className="inline-block w-5 h-3 bg-gradient-to-b from-red-500 via-white to-blue-700" />
              <Input ph="+1 (555) 000-0000" />
            </div>
          </div>
          <div><label className="block text-[12px] text-[#555] mb-1 font-['Open_Sans']">City</label><div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="" /></div></div>
          <div><label className="block text-[12px] text-[#555] mb-1 font-['Open_Sans']">How Can We Help?</label><div className="border border-neutral-300 rounded px-3 py-3"><textarea className="w-full bg-transparent outline-none resize-none" rows={3} /></div></div>
        </div>
        <p className="text-[11px] text-[#777] mb-4">By clicking submit, you agree to our Terms & Privacy Policy.</p>
        <button className="w-full bg-[#0E767C] hover:bg-[#0A5A60] text-white font-['Open_Sans'] font-bold uppercase text-[14px] py-3.5 rounded">Get a Quote</button>
      </div>
    </div>
  </section>
);

/* Variant 3 — Blue overlay hero with American Painters card */
const Variant3 = () => (
  <section className="bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] px-10 pt-10 pb-4">Variant #3 — American Painters Hero</p>
    <div className="relative w-full" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#143E7A]/85" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-10 pt-16 pb-20">
        <div className="text-center">
          <p className="text-[#DD1A32] font-['Inter'] text-[13px] mb-3">Get a FREE Estimate</p>
          <h2 className="text-white font-['Inter'] font-semibold text-[44px] leading-[52px] mb-5">Consult American Painters Today</h2>
          <p className="text-white/95 font-['Libre_Baskerville'] text-[16px] leading-[28px] max-w-[760px] mx-auto mb-10">
            When you choose American Painters, you're choosing quality, integrity, and reliability.
            You're choosing prompt, professional painters who don't cut corners. You're choosing
            the best painting contractors around. Contact us now for exceptional paintwork.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_540px_1fr] gap-8 items-start">
          <div />
          <div className="bg-white rounded-[6px] border-2 border-[#DD1A32] px-12 py-10">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-7 h-7 rounded-full border border-[#DD1A32] text-[#DD1A32] flex items-center justify-center text-[13px] font-['Inter']">1</span>
              <span className="flex-1 h-px bg-neutral-400" />
              <span className="w-7 h-7 rounded-full border border-[#464646] text-[#464646] flex items-center justify-center text-[13px] font-['Inter']">2</span>
              <span className="flex-1 h-px bg-neutral-400" />
              <span className="w-7 h-7 rounded-full border border-[#464646] text-[#464646] flex items-center justify-center text-[13px] font-['Inter']">3</span>
            </div>
            <div className="space-y-5 mb-7">
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Name <span className="text-[#DD1A32]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5"><input placeholder="Name" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" /></div>
              </div>
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Email <span className="text-[#DD1A32]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5"><input placeholder="Email" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" /></div>
              </div>
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Phone Number <span className="text-[#DD1A32]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5"><input placeholder="Phone Number" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" /></div>
              </div>
            </div>
            <button className="w-full bg-[#DD1A32] hover:bg-[#B71428] text-white font-['Inter'] font-medium py-3 rounded">Next</button>
          </div>
          <div className="flex flex-col items-start gap-6 pt-2">
            <img src="/images/cta/fully-insured.png" alt="Fully Insured" className="w-[140px] h-auto" />
            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-['Inter'] font-semibold text-[14px]">A</span>
                <span className="font-['Inter'] text-[14px]">Chase Q.</span>
                <span className="w-4 h-4 rounded-full bg-[#DD1A32] text-white text-[10px] flex items-center justify-center">✓</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-['Inter'] text-[13px]">5.0</span>
                <span className="text-[#FCBF02] text-[14px] tracking-tight">★★★★★</span>
              </div>
              <p className="text-white/90 font-['Inter'] text-[12px] leading-[18px] max-w-[200px]">
                This business was fantastic! I loved doing roofs and would give this job a 10/10 experience! Chase Quaves
              </p>
              <span className="inline-flex items-center gap-1 mt-3 bg-[#1A8F4C] text-white text-[11px] font-['Inter'] px-2 py-1 rounded">
                Verified Buildzoom review ⓘ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 4 — Two column house image + GET A FREE QUOTE */
const Variant4 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #4 — Get A Free Quote (House)</p>
    <div className="mx-auto grid grid-cols-2 gap-12" style={{ width: 1100 }}>
      <div className="relative rounded-[8px] overflow-hidden" style={{ height: 460, backgroundImage: "url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute bottom-0 left-0 right-0 bg-[#1A56DB] text-white text-center py-4 font-['Outfit'] font-semibold">Tell us your Project Goals & Connect</div>
      </div>
      <div>
        <h3 className="font-['Outfit'] font-bold text-[28px] text-[#111] mb-3 tracking-wide">GET A FREE QUOTE</h3>
        <p className="text-[#666] font-['Outfit'] text-[14px] leading-[22px] mb-6">Share a few details about your project and we'll get back to you with a no-obligation estimate.</p>
        <div className="space-y-5">
          <div><label className="text-[12px] text-[#999] block mb-1">NAME</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
          <div><label className="text-[12px] text-[#999] block mb-1">EMAIL</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
          <div><label className="text-[12px] text-[#999] block mb-1">PHONE</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-[12px] text-[#999] block mb-1">CITY</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
            <div><label className="text-[12px] text-[#999] block mb-1">STATE</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
          </div>
          <div><label className="text-[12px] text-[#999] block mb-1">PROJECT</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
        </div>
        <button className="mt-8 bg-[#FF6B2B] hover:bg-[#E55A1F] text-white font-['Outfit'] font-semibold px-8 py-3 rounded-full">Request Free Quote →</button>
      </div>
    </div>
  </section>
);

/* Variant 5 — Plumbing light blue split with green submit */
const Variant5 = () => (
  <section className="py-20 px-10 bg-neutral-900">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #5 — Plumbing Needs</p>
    <div className="mx-auto bg-[#EAF4F7] rounded-[8px] grid grid-cols-2 gap-10 p-12" style={{ width: 1200 }}>
      <div>
        <h3 className="font-['Outfit'] font-bold text-[28px] text-[#111] mb-1">Discuss Your Plumbing</h3>
        <p className="font-['Outfit'] font-bold text-[28px] text-[#1AAB48] mb-4">Needs With Us</p>
        <p className="text-[#555] text-[14px] leading-[22px] mb-8 font-['Outfit']">For top-quality leak repairs, drain cleaning, and pipe installations, get in touch with our trusted experts today.</p>
        <div className="space-y-5">
          {[
            ["📞", "Phone", "(555) 234-5678"],
            ["✉", "Email", "info@plumbingpro.com"],
            ["📍", "Service Area", "Los Angeles, CA"],
          ].map(([i, l, v]) => (
            <div key={l} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1AAB48] text-lg">{i}</div>
              <div>
                <div className="font-['Outfit'] font-semibold text-[15px] text-[#111]">{l}</div>
                <div className="text-[#666] text-[13px]">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-['Outfit'] font-bold text-[24px] text-[#111] mb-2">Send us a Message</h3>
        <p className="text-[#666] text-[13px] mb-5">Fill out the form and we'll get back to you shortly.</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-white rounded px-3 py-3"><Input ph="First Name" /></div>
          <div className="bg-white rounded px-3 py-3"><Input ph="Last Name" /></div>
        </div>
        <div className="bg-white rounded px-3 py-3 mb-3"><Input ph="Email" type="email" /></div>
        <div className="bg-white rounded px-3 py-3 mb-3"><textarea placeholder="Message" rows={5} className="w-full bg-transparent outline-none resize-none" /></div>
        <button className="w-full bg-[#1AAB48] hover:bg-[#16933B] text-white font-['Outfit'] font-semibold py-3 rounded">Send</button>
      </div>
    </div>
  </section>
);

/* Variant 6 — Dark bg, Get A Free Estimate w/ yellow submit */
const Variant6 = () => (
  <section className="py-20 px-10 bg-[#1B1B1B]">
    <p className="text-neutral-400 text-sm font-['Outfit'] mb-6">Variant #6 — Dark Free Estimate (Yellow)</p>
    <div className="mx-auto bg-white rounded-[6px] p-14" style={{ width: 900 }}>
      <h3 className="text-center font-['Inter'] font-bold text-[32px] text-[#111] mb-2">Get A Free Estimate</h3>
      <p className="text-center text-[#666] text-[14px] mb-10">Submit your details and our team will reach out with a tailored estimate.</p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div><label className="text-[12px] text-[#999] block mb-1">NAME</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
        <div><label className="text-[12px] text-[#999] block mb-1">EMAIL</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" type="email" /></div></div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div><label className="text-[12px] text-[#999] block mb-1">PHONE</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
        <div><label className="text-[12px] text-[#999] block mb-1">SERVICE</label><div className="border-b border-neutral-400 py-1.5 bg-neutral-100 px-2"><Input ph="Select" /></div></div>
      </div>
      <div className="mb-6"><label className="text-[12px] text-[#999] block mb-1">ADDRESS</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
      <div className="mb-2"><label className="text-[12px] text-[#999] block mb-1">MESSAGE</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
      <p className="text-[11px] text-[#999] mb-8">By clicking submit, you agree to our Terms.</p>
      <button className="w-full bg-[#FFC700] hover:bg-[#E6B400] text-[#111] font-['Inter'] font-bold py-3.5 rounded">Submit</button>
    </div>
  </section>
);

/* Variant 7 — Testimonial-style "We believe every space..." with before/after */
const Variant7 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #7 — Every Space (Before/After)</p>
    <div className="mx-auto relative overflow-hidden rounded-[8px]" style={{ width: 1200, backgroundImage: "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600)", backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 grid grid-cols-2 gap-10 p-14">
        <div>
          <p className="text-[#FFC700] font-['Inter'] text-[12px] uppercase tracking-wider mb-3">Trusted By Hundreds Of Homeowners</p>
          <h2 className="text-white font-['Inter'] font-bold text-[40px] leading-[48px] mb-6">We believe every space has the potential to become extraordinary</h2>
          <p className="text-neutral-300 font-['Inter'] text-[14px] leading-[22px] mb-8">From small touch-ups to full remodels, we transform homes with craftsmanship and care. Let's talk about your vision.</p>
          <div className="bg-white rounded-[6px] p-7">
            <p className="font-['Inter'] font-semibold text-[14px] text-[#111] mb-1">Tell us a few things about</p>
            <p className="font-['Inter'] font-bold text-[18px] text-[#111] mb-5">the project to get a free estimate</p>
            <div className="space-y-3 mb-4">
              <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Full Name" /></div>
              <div className="border border-neutral-300 rounded px-3 py-2.5 flex items-center gap-2">
                <span className="inline-block w-5 h-3 bg-gradient-to-b from-red-500 via-white to-blue-700" />
                <Input ph="Phone Number" />
              </div>
              <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Project Type" /></div>
              <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Project Address" /></div>
              <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Tell us more about the project" /></div>
            </div>
            <button className="w-full bg-[#111] hover:bg-black text-white font-['Inter'] font-semibold py-3 rounded">Next</button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[6px] overflow-hidden h-[220px] bg-neutral-200" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900)", backgroundSize: "cover" }} />
          <div className="rounded-[6px] overflow-hidden h-[220px] bg-neutral-200" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900)", backgroundSize: "cover" }} />
          <p className="text-neutral-300 text-[12px] leading-[18px]">Real before-and-after results from recent projects in your neighborhood. Browse our portfolio to see more.</p>
          <div className="grid grid-cols-2 gap-3 text-white text-[12px]">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFC700]" /> Licensed</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFC700]" /> Insured</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFC700]" /> 5-Star Reviews</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFC700]" /> Local Team</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 8 — Painter image w/ blue overlay, white form card right */
const Variant8 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #8 — Get A Free Estimate (Painter Hero)</p>
    <div className="mx-auto relative overflow-hidden rounded-[6px]" style={{ width: 1200, height: 460, backgroundImage: "url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#0B1B4D]/80" />
      <div className="relative z-10 grid grid-cols-2 gap-12 p-12 h-full items-center">
        <div className="text-white">
          <h2 className="font-['Inter'] font-bold text-[40px] leading-[48px] mb-4">Get A Free Estimate</h2>
          <p className="font-['Inter'] text-[15px] leading-[24px] text-neutral-200">For a professional painting service trusted by homeowners across the region, get in touch today and we'll respond promptly.</p>
        </div>
        <div className="bg-white rounded-[6px] p-7 shadow-2xl">
          <h3 className="font-['Inter'] font-bold text-[18px] text-[#0B1B4D] mb-5">Looking for Reliable Painters?</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><label className="text-[12px] text-[#666]">First Name *</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
            <div><label className="text-[12px] text-[#666]">Last Name *</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" /></div></div>
          </div>
          <div className="mb-4"><label className="text-[12px] text-[#666]">Email *</label><div className="border-b border-neutral-300 py-1.5"><Input ph="" type="email" /></div></div>
          <div className="bg-neutral-100 rounded h-[100px] mb-3" />
          <div className="flex items-center gap-2 mb-4 text-[12px] text-[#666]"><span className="w-5 h-5 border border-neutral-400 inline-block" /> I'm not a robot</div>
          <button className="w-full bg-[#0B1B4D] hover:bg-[#091541] text-white font-['Inter'] font-semibold py-3 rounded">Submit</button>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 9 — Cobweb world map, REQUEST A SERVICE + contact panel */
const Variant9 = () => (
  <section className="py-20 px-10 bg-white" style={{ backgroundImage: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #9 — Request A Service / Stephen James</p>
    <div className="mx-auto grid grid-cols-2 gap-12 items-start" style={{ width: 1100 }}>
      <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded p-10">
        <h3 className="font-['Oswald'] font-bold text-[28px] text-[#222] tracking-wider mb-2">REQUEST A SERVICE</h3>
        <p className="text-[#666] text-[13px] mb-6">Fill out the form below and our scheduling team will be in touch within one business day.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-[12px] text-[#999] block">First Name</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
          <div><label className="text-[12px] text-[#999] block">Last Name</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-[12px] text-[#999] block">Phone</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
          <div><label className="text-[12px] text-[#999] block">Email</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" type="email" /></div></div>
        </div>
        <div className="mb-6"><label className="text-[12px] text-[#999] block">Service Needed</label><div className="border-b border-neutral-400 py-1.5"><Input ph="" /></div></div>
        <p className="text-[11px] text-[#999] mb-6">By clicking submit, you agree to our terms and privacy policy.</p>
        <button className="w-full bg-[#2A6FB5] hover:bg-[#235A93] text-white font-['Oswald'] font-bold uppercase py-3.5 rounded">Send</button>
      </div>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#2A6FB5] rotate-45 mb-4">
          <span className="-rotate-45 text-white font-['Oswald'] font-bold text-[18px]">SJP</span>
        </div>
        <p className="text-[12px] text-[#666] mb-1">— PROFESSIONAL PAINTERS —</p>
        <h3 className="font-['Oswald'] font-bold text-[28px] text-[#222] tracking-wider mb-6">STEPHEN JAMES PAINTERS</h3>
        <div className="text-left max-w-[320px] mx-auto space-y-3 text-[#222] font-['Oswald']">
          <div><div className="font-bold text-[13px]">CALL US</div><div className="text-[14px]">(555) 234-9876</div></div>
          <div><div className="font-bold text-[13px]">EMAIL US</div><div className="text-[14px]">info@stephenjamespainters.com</div></div>
          <div><div className="font-bold text-[13px]">SERVICE AREAS</div><div className="text-[14px]">Greater LA County</div></div>
          <div><div className="text-[12px] text-[#666]">Mon–Fri 7am – 6pm · Sat by appt.</div></div>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 10 — Orange CONTACT US */
const Variant10 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #10 — Orange Contact Us</p>
    <div className="mx-auto" style={{ width: 1100 }}>
      <div className="border-t-4 border-[#FF6A00] mb-10" />
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="font-['Bowlby_One'] text-[40px] text-[#FF6A00] mb-4 leading-none">CONTACT US</h3>
          <p className="text-[#444] font-['Open_Sans'] text-[14px] leading-[22px] mb-6">For services, scheduling, or quotes — reach out anytime. Our team responds quickly.</p>
          <div className="text-[#FF6A00] font-['Open_Sans'] font-bold text-[14px] space-y-1">
            <div>(555) 765-4321</div>
            <div>contact@example.com</div>
            <div>456 Service Lane, Pasadena, CA</div>
          </div>
        </div>
        <div className="border-2 border-[#FF6A00] rounded p-6">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Name" /></div>
            <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="Phone" /></div>
          </div>
          <div className="border border-neutral-300 rounded px-3 py-2.5 mb-3"><select className="w-full bg-transparent outline-none text-[#666]"><option>Service Type</option></select></div>
          <div className="border border-neutral-300 rounded px-3 py-2.5 mb-4"><textarea placeholder="Message" rows={4} className="w-full bg-transparent outline-none resize-none" /></div>
          <button className="w-full bg-[#FF6A00] hover:bg-[#E55C00] text-white font-['Open_Sans'] font-bold py-3 rounded">Submit</button>
        </div>
      </div>
      <div className="border-t-4 border-[#FF6A00] mt-10" />
    </div>
  </section>
);

/* Variant 11 — Blue van hero "Contact Us Today" with red submit */
const Variant11 = () => (
  <section className="bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] px-10 pt-10 pb-4">Variant #11 — Contact Us Today (Van Hero)</p>
    <div className="relative w-full" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1920)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#1A4D8C]/85" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-10 pt-16 pb-20">
        <div className="text-center">
          <p className="text-[#E63946] font-['Inter'] text-[13px] mb-3">Reach Out</p>
          <h2 className="text-white font-['Inter'] font-semibold text-[44px] leading-[52px] mb-5">Contact Us Today</h2>
          <p className="text-white/95 font-['Libre_Baskerville'] text-[16px] leading-[28px] max-w-[760px] mx-auto mb-10">
            Got questions or ready to schedule service? Send us a message and our team
            will be in touch with the best next step. We respond fast and treat every
            project like it's our own.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_540px_1fr] gap-8 items-start">
          <div />
          <div className="bg-white rounded-[6px] border-2 border-[#E63946] px-12 py-10">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-7 h-7 rounded-full border border-[#E63946] text-[#E63946] flex items-center justify-center text-[13px] font-['Inter']">1</span>
              <span className="flex-1 h-px bg-neutral-400" />
              <span className="w-7 h-7 rounded-full border border-[#464646] text-[#464646] flex items-center justify-center text-[13px] font-['Inter']">2</span>
              <span className="flex-1 h-px bg-neutral-400" />
              <span className="w-7 h-7 rounded-full border border-[#464646] text-[#464646] flex items-center justify-center text-[13px] font-['Inter']">3</span>
            </div>
            <div className="space-y-5 mb-7">
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Name <span className="text-[#E63946]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5"><input placeholder="Name" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" /></div>
              </div>
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Email <span className="text-[#E63946]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5"><input placeholder="Email" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" /></div>
              </div>
              <div>
                <label className="text-[13px] text-[#1f1f1f] font-['Inter']">Phone Number <span className="text-[#E63946]">*</span></label>
                <div className="mt-1.5 border border-neutral-300 rounded px-3 py-2.5 flex items-center gap-2">
                  <span className="inline-block w-5 h-3 bg-gradient-to-b from-red-600 via-white to-blue-700 rounded-sm" />
                  <input placeholder="+1 (555) 000-0000" className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" />
                </div>
              </div>
            </div>
            <button className="w-full bg-[#E63946] hover:bg-[#C42E3A] text-white font-['Inter'] font-medium py-3 rounded">Submit</button>
          </div>
          <div className="flex flex-col items-start gap-6 pt-2">
            <img src="/images/cta/fully-insured.png" alt="Fully Insured" className="w-[140px] h-auto" />
            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-9 h-9 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-['Inter'] font-semibold text-[14px]">A</span>
                <span className="font-['Inter'] text-[14px]">Chase Q.</span>
                <span className="w-4 h-4 rounded-full bg-[#E63946] text-white text-[10px] flex items-center justify-center">✓</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-['Inter'] text-[13px]">5.0</span>
                <span className="text-[#FCBF02] text-[14px] tracking-tight">★★★★★</span>
              </div>
              <p className="text-white/90 font-['Inter'] text-[12px] leading-[18px] max-w-[200px]">
                Quick, professional, and on time. They explained everything and the price was fair. Highly recommend.
              </p>
              <span className="inline-flex items-center gap-1 mt-3 bg-[#1A8F4C] text-white text-[11px] font-['Inter'] px-2 py-1 rounded">
                Verified Buildzoom review ⓘ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 12 — Kitchen Free Estimate with Elvis-style branding */
const Variant12 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #12 — Kitchen Free Estimate</p>
    <div className="mx-auto grid grid-cols-2 gap-12 items-center" style={{ width: 1230 }}>
      <div className="flex justify-center">
        <img src="/images/cta/kitchen.png" alt="Kitchen" className="w-[584px] h-auto" />
      </div>
      <div className="border border-amber-400 rounded-sm bg-white">
        <div className="border-b border-amber-400 px-10 pt-7 pb-5 relative">
          <div className="absolute -top-3.5 left-10 bg-white px-2">
            <span className="text-amber-500 text-2xl">★</span>
          </div>
          <h3 className="text-black text-[34px] leading-[40px] font-bold uppercase font-['Josefin_Sans']">Get Your Free Estimate</h3>
          <p className="text-orange-600 text-[15px] mt-2 font-['Josefin_Sans'] tracking-wide">Start Planning Your Next Kitchen Today</p>
        </div>
        <div className="px-10 py-7 space-y-4">
          <div>
            <label className="block text-[13px] text-neutral-700 mb-1 font-['Josefin_Sans']">Your Name *</label>
            <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="" /></div>
          </div>
          <div>
            <label className="block text-[13px] text-neutral-700 mb-1 font-['Josefin_Sans']">Email *</label>
            <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="" type="email" /></div>
          </div>
          <div>
            <label className="block text-[13px] text-neutral-700 mb-1 font-['Josefin_Sans']">Phone Number</label>
            <div className="border border-neutral-300 rounded px-3 py-2.5"><Input ph="" /></div>
          </div>
          <button className="w-full bg-[#1F8FE8] hover:bg-[#1976C7] text-white font-['Josefin_Sans'] font-semibold py-3 rounded uppercase tracking-wider text-[14px]">Get My Free Estimate</button>
        </div>
      </div>
    </div>
  </section>
);

/* Variant 13 — Schedule a Consultation over painted wall */
const Variant13 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Variant #13 — Schedule a Consultation</p>
    <div className="mx-auto relative overflow-hidden" style={{ maxWidth: 1280 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#A8B4C4] via-[#8FA0B5] to-[#6F8299]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.4), transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 6px)" }} />
      <div className="relative grid grid-cols-[480px_1fr] gap-10 px-12 py-16">
        <div className="bg-white rounded-[16px] p-10 shadow-2xl">
          <h3 className="text-center text-[#1B5E94] font-['DM_Serif_Display'] text-[30px] mb-8">Schedule a Consultation</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] text-neutral-800 mb-1.5 font-['Open_Sans']">Name <span className="text-red-500">*</span></label>
              <div className="border border-neutral-300 rounded-full px-5 py-2.5"><Input ph="Name" className="text-[14px]" /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[13px] text-neutral-800 mb-1.5 font-['Open_Sans']">Email <span className="text-red-500">*</span></label>
                <div className="border border-neutral-300 rounded-full px-4 py-2.5"><Input ph="Email" type="email" className="text-[14px]" /></div>
              </div>
              <div>
                <label className="block text-[13px] text-neutral-800 mb-1.5 font-['Open_Sans']">Phone Number <span className="text-red-500">*</span></label>
                <div className="border border-neutral-300 rounded-full px-4 py-2.5"><Input ph="Phone Number" className="text-[14px]" /></div>
              </div>
            </div>
            <div>
              <label className="block text-[13px] text-neutral-800 mb-1.5 font-['Open_Sans']">City, State <span className="text-red-500">*</span></label>
              <div className="border border-neutral-300 rounded-full px-5 py-2.5"><Input ph="City, State" className="text-[14px]" /></div>
            </div>
            <div>
              <label className="block text-[13px] text-neutral-800 mb-2 font-['Open_Sans']">Interested in...</label>
              <div className="space-y-1.5 text-[13px] text-neutral-700 font-['Open_Sans']">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#1B5E94]" /> Apartment painting</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#1B5E94]" /> House painting (interior)</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#1B5E94]" /> Exterior painting</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#1B5E94]" /> Other</label>
              </div>
            </div>
            <button className="w-full bg-[#2778C2] hover:bg-[#1F66A8] text-white font-['Open_Sans'] font-semibold py-3 rounded-full mt-2">Send</button>
          </div>
        </div>
        <div className="text-white pt-4">
          <p className="font-['Open_Sans'] font-bold text-[14px] mb-3">Contact Win Custom Painting Inc.</p>
          <h2 className="font-['DM_Serif_Display'] text-[44px] leading-[52px] mb-5">Leave a Lasting<br/>First Impression</h2>
          <p className="font-['Open_Sans'] text-[14px] leading-[24px] text-white/90 mb-8 max-w-[420px]">
            No matter whether you're just moving into a new home and want to personalize it, or are starting to see cracks in your home's current paint jobs, Win Custom Painting, Inc. is proud to offer advice on color schemes and applications.
          </p>
          <p className="font-['DM_Serif_Display'] text-[22px] mb-2">📞 (562) 900-0324</p>
          <p className="font-['DM_Serif_Display'] text-[20px]">📍 13337 South St #755, Cerritos, CA</p>
        </div>
      </div>
    </div>
  </section>
);

/* ============== OTHER TYPES OF WEBSITES ============== */

const OtherHeadline = () => (
  <div className="bg-neutral-950 py-24 px-10">
    <h2 className="text-white font-['Anton'] text-[88px] leading-[88px] tracking-tight uppercase text-center">
      Other Types of Websites
    </h2>
    <p className="text-neutral-400 font-['Outfit'] text-center mt-4 text-[15px]">CTA layouts beyond home services</p>
  </div>
);

/* O1 — Beauty / loyalty signup with eye image */
const Other1 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #1 — Beauty Loyalty</p>
    <div className="mx-auto grid grid-cols-2 gap-0 bg-[#D6D2C1]" style={{ maxWidth: 1100 }}>
      <img src="/images/cta/beauty-eye.png" alt="Beauty" className="w-full h-full object-cover" />
      <div className="p-16">
        <p className="font-['Poppins'] uppercase text-[13px] text-[#101010] tracking-wider mb-3">contact us</p>
        <h3 className="font-['Cormorant'] italic text-[42px] leading-[46px] text-[#101010] mb-10">Join my loyalty program and receive updates</h3>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="border-b border-black pb-2"><Input ph="Name" className="text-[14px] font-['Poppins']" /></div>
          <div className="border-b border-black pb-2"><Input ph="Last Name" className="text-[14px] font-['Poppins']" /></div>
        </div>
        <div className="border-b border-black pb-2 mb-10"><Input ph="Email" type="email" className="text-[14px] font-['Poppins']" /></div>
        <button className="border border-black px-8 py-2.5 text-[13px] font-['Poppins'] uppercase tracking-wider hover:bg-black hover:text-white transition">Submit</button>
      </div>
    </div>
  </section>
);

/* O2 — Plain compact form */
const Other2 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #2 — Compact Form</p>
    <div className="mx-auto bg-white border border-neutral-200 p-10" style={{ maxWidth: 720 }}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-[12px] text-neutral-700 mb-1 font-['Inter']">Full Name *</label>
          <div className="border border-neutral-300 px-3 py-2"><Input ph="" className="text-[13px]" /></div>
          <label className="block text-[12px] text-neutral-700 mb-1 mt-4 font-['Inter']">Email Address *</label>
          <div className="border border-neutral-300 px-3 py-2"><Input ph="" className="text-[13px]" /></div>
          <p className="text-[11px] text-neutral-500 mt-2 font-['Inter']">We will never share your information.</p>
          <div className="mt-4 space-y-1.5 text-[12px] text-neutral-700 font-['Inter']">
            <label className="flex items-center gap-2"><input type="checkbox" /> Subscribe to newsletter</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Send promotional offers</label>
          </div>
        </div>
        <div>
          <label className="block text-[12px] text-neutral-700 mb-1 font-['Inter']">Phone</label>
          <div className="border border-neutral-300 px-3 py-2"><Input ph="" className="text-[13px]" /></div>
          <label className="block text-[12px] text-neutral-700 mb-1 mt-4 font-['Inter']">Message</label>
          <div className="border border-neutral-300 px-3 py-2"><textarea className="w-full bg-transparent outline-none text-[13px] resize-none" rows={5} /></div>
          <button className="mt-4 bg-neutral-900 text-white px-6 py-2 text-[12px] font-['Inter'] uppercase tracking-wider float-right">Submit</button>
        </div>
      </div>
    </div>
  </section>
);

/* O3 — Light green centered booking */
const Other3 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #3 — Online Consultation Booking</p>
    <div className="mx-auto bg-[#E0EDE5] p-12 text-center" style={{ maxWidth: 760 }}>
      <h3 className="font-['Playfair_Display'] text-[26px] text-[#1F4D3C] mb-1">Embrace Heart Health In Your</h3>
      <h3 className="font-['Playfair_Display'] text-[26px] text-[#1F4D3C] mb-8">Hands! No Online Consultation</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white border border-[#1F4D3C]/30 px-4 py-2.5"><Input ph="First Name" className="text-[13px]" /></div>
        <div className="bg-white border border-[#1F4D3C]/30 px-4 py-2.5"><Input ph="Last Name" className="text-[13px]" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-[#1F4D3C]/30 px-4 py-2.5"><Input ph="Email" type="email" className="text-[13px]" /></div>
        <div className="bg-white border border-[#1F4D3C]/30 px-4 py-2.5"><Input ph="Phone" className="text-[13px]" /></div>
      </div>
      <button className="bg-[#1F4D3C] hover:bg-[#163A2C] text-white px-10 py-2.5 font-['Playfair_Display'] text-[14px]">Book My Free Consultation</button>
    </div>
  </section>
);

/* O4 — Dark form panel */
const Other4 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #4 — Dark Form Panel</p>
    <div className="mx-auto bg-[#0E1B2C] grid grid-cols-2 gap-12 p-12 text-white" style={{ maxWidth: 1100 }}>
      <div>
        <h3 className="font-['Manrope'] font-bold text-[28px] mb-4">Get In Touch With Our Team</h3>
        <p className="text-neutral-400 font-['Manrope'] text-[14px] leading-[22px] mb-6">Reach out today and we'll respond within 1 business day.</p>
        <ul className="space-y-3 text-[14px] font-['Manrope']">
          <li>📧 hello@brand.com</li>
          <li>📞 (555) 234 9876</li>
          <li>📍 Austin, TX</li>
        </ul>
      </div>
      <div className="space-y-3">
        <div className="bg-white text-black px-4 py-3 rounded-sm"><Input ph="Full Name" className="text-[14px]" /></div>
        <div className="bg-white text-black px-4 py-3 rounded-sm"><Input ph="Email" type="email" className="text-[14px]" /></div>
        <div className="bg-white text-black px-4 py-3 rounded-sm"><Input ph="Phone" className="text-[14px]" /></div>
        <div className="bg-white text-black px-4 py-3 rounded-sm"><Input ph="Subject" className="text-[14px]" /></div>
        <div className="bg-white text-black px-4 py-3 rounded-sm"><textarea placeholder="Message" className="w-full bg-transparent outline-none text-[14px] resize-none" rows={4} /></div>
        <button className="w-full bg-[#3D7BF4] hover:bg-[#2D63D4] text-white py-3 font-['Manrope'] font-semibold rounded-sm">Send Message</button>
      </div>
    </div>
  </section>
);

/* O5 — Tech support / customer rep banner */
const Other5 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #5 — Support Rep Banner</p>
    <div className="mx-auto bg-[#E8F4F2] rounded-2xl grid grid-cols-[260px_1fr] gap-10 p-10 items-center" style={{ maxWidth: 1100 }}>
      <div className="bg-gradient-to-b from-[#3FB8AF] to-[#2A8C85] rounded-xl h-[220px] flex items-end justify-center">
        <div className="text-white text-center pb-4">
          <div className="w-16 h-16 rounded-full bg-white/30 mx-auto mb-2" />
          <p className="font-['Inter'] text-[12px]">Alex M.</p>
          <p className="font-['Inter'] text-[10px] opacity-80">Support Lead</p>
        </div>
      </div>
      <div>
        <h3 className="font-['Inter'] font-bold text-[24px] text-[#1A2E3D] mb-2">Have a question? Speak to a real person.</h3>
        <p className="text-neutral-600 font-['Inter'] text-[14px] mb-2">No bots. Just our team, ready to help with anything you need — usually within minutes.</p>
        <p className="text-[#2A8C85] font-['Inter'] font-semibold text-[14px] mb-5">⭐ 4.9/5 from 1,200+ customers</p>
        <button className="bg-[#2A8C85] hover:bg-[#1F6E68] text-white px-6 py-2.5 rounded-full font-['Inter'] text-[14px] font-semibold">I'm ready to chat →</button>
      </div>
    </div>
  </section>
);

/* O6 — Get in Touch booking with side form */
const Other6 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #6 — Booking Side Form</p>
    <div className="mx-auto grid grid-cols-2 gap-10" style={{ maxWidth: 900 }}>
      <div>
        <p className="font-['Inter'] text-neutral-500 text-[13px] mb-2">Booking</p>
        <h3 className="font-['Inter'] font-bold text-[26px] text-neutral-900 mb-4 leading-[32px]">Get in touch to book your free appointment</h3>
        <p className="text-neutral-600 font-['Inter'] text-[13px] mb-6">Quick form — only takes a minute.</p>
        <div className="space-y-3 text-[13px] font-['Inter'] text-neutral-700">
          <div>📅 Mon–Fri, 9–5</div>
          <div>📞 (555) 111 2222</div>
        </div>
      </div>
      <div className="bg-white border border-neutral-200 rounded">
        <div className="bg-[#1B3A6B] text-white text-center py-3 font-['Inter'] font-semibold text-[14px]">Personal details</div>
        <div className="p-6 space-y-3">
          <div className="border border-neutral-300 rounded px-3 py-2"><Input ph="Name" className="text-[13px]" /></div>
          <div className="border border-neutral-300 rounded px-3 py-2"><Input ph="Email" type="email" className="text-[13px]" /></div>
          <div className="border border-neutral-300 rounded px-3 py-2"><Input ph="Phone" className="text-[13px]" /></div>
          <div className="border border-neutral-300 rounded px-3 py-2"><Input ph="Date preference" className="text-[13px]" /></div>
          <div className="border border-neutral-300 rounded px-3 py-2"><Input ph="Service" className="text-[13px]" /></div>
          <button className="w-full bg-[#1B3A6B] text-white py-2.5 rounded font-['Inter'] text-[13px] font-semibold">Confirm Booking</button>
        </div>
      </div>
    </div>
  </section>
);

/* O7 — Send a message over barber image */
const Other7 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #7 — Send a Message Hero</p>
    <div className="mx-auto relative overflow-hidden rounded" style={{ maxWidth: 1100, height: 320 }}>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h3 className="font-['Cormorant'] italic text-[44px] mb-6">Send us a message</h3>
        <button className="border border-white/60 px-8 py-2.5 text-[13px] font-['Inter'] uppercase tracking-widest hover:bg-white hover:text-black transition">Contact</button>
      </div>
    </div>
  </section>
);

/* O8 — Gradient banner CTA */
const Other8 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #8 — Gradient Banner</p>
    <div className="mx-auto rounded-xl px-10 py-8 flex items-center justify-between text-white" style={{ maxWidth: 1100, background: "linear-gradient(90deg, #4F46E5 0%, #EC4899 60%, #F97316 100%)" }}>
      <div>
        <h3 className="font-['Inter'] font-bold text-[22px] mb-1">Ready to take that first step toward a new flight path?</h3>
        <p className="font-['Inter'] text-[13px] text-white/90">Talk to an advisor and find your route in under 24 hours.</p>
      </div>
      <button className="bg-white text-[#4F46E5] font-['Inter'] font-semibold px-6 py-2.5 rounded-full text-[14px] whitespace-nowrap">Get Started →</button>
    </div>
  </section>
);

/* O9 — Tan centered Send-us-a-message */
const Other9 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #9 — Tan Centered CTA</p>
    <div className="mx-auto bg-[#F1E8DC] py-14 px-12 text-center" style={{ maxWidth: 1100 }}>
      <h3 className="font-['Playfair_Display'] text-[28px] text-[#3A2E26] mb-3">Send us a message — let's chat</h3>
      <p className="text-[#6B5B4D] font-['Inter'] text-[14px] max-w-[640px] mx-auto mb-8">Whether it's a small project or a full collaboration, we'd love to hear from you and respond personally.</p>
      <button className="bg-[#C97B4E] hover:bg-[#B56A3E] text-white font-['Inter'] font-semibold px-8 py-3 rounded-full text-[14px]">Get in touch</button>
    </div>
  </section>
);

/* O10 — 3-step status badges */
const Other10 = () => (
  <section className="py-20 px-10 bg-neutral-100">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #10 — 3-Step Process Badges</p>
    <div className="mx-auto grid grid-cols-3 gap-6 text-center" style={{ maxWidth: 900 }}>
      <div className="bg-[#FFE600] py-10 px-6">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-3 font-['Inter'] font-bold">1</div>
        <p className="font-['Inter'] font-bold text-[14px] text-black">Book a Call</p>
        <p className="font-['Inter'] text-[12px] text-black/70 mt-1">Tell us what you need</p>
      </div>
      <div className="bg-white border border-neutral-200 py-10 px-6">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-3 font-['Inter'] font-bold">2</div>
        <p className="font-['Inter'] font-bold text-[14px] text-black">We Plan</p>
        <p className="font-['Inter'] text-[12px] text-black/70 mt-1">Get a custom proposal</p>
      </div>
      <div className="bg-white border border-neutral-200 py-10 px-6">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-3 font-['Inter'] font-bold">3</div>
        <p className="font-['Inter'] font-bold text-[14px] text-black">Launch</p>
        <p className="font-['Inter'] text-[12px] text-black/70 mt-1">We deliver, you grow</p>
      </div>
    </div>
  </section>
);

/* O11 — Dark navy schedule yours */
const Other11 = () => (
  <section className="py-20 px-10 bg-white">
    <p className="text-neutral-500 text-sm font-['Outfit'] mb-6">Other #11 — Schedule Yours Now</p>
    <div className="mx-auto bg-[#142659] rounded-xl py-14 px-12 text-center text-white" style={{ maxWidth: 900 }}>
      <span className="inline-block bg-[#3D7BF4] text-white text-[11px] font-['Inter'] uppercase tracking-wider px-3 py-1 rounded-full mb-4">Limited Spots</span>
      <h3 className="font-['Playfair_Display'] text-[34px] mb-2">Pro, ready, available —</h3>
      <h3 className="font-['Playfair_Display'] text-[34px] mb-6">schedule yours now or later</h3>
      <p className="text-white/70 font-['Inter'] text-[13px] mb-8">📞 (555) 998-2233 · hello@brand.com</p>
      <button className="bg-white text-[#142659] font-['Inter'] font-semibold px-8 py-3 rounded-full text-[14px]">Book your slot</button>
    </div>
  </section>
);

const CTA = () => (
  <div className="min-h-screen bg-neutral-950 text-white">
    <nav className="px-10 py-6 flex items-center gap-6 border-b border-neutral-800">
      <Link to="/" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">← Home</Link>
      <Link to="/components" className="text-neutral-400 hover:text-white text-sm font-['Outfit']">Components</Link>
      <h1 className="text-white text-sm font-['Outfit']">/ CTA</h1>
    </nav>
    <div className="flex">
      <aside className="w-64 border-r border-neutral-800 min-h-[calc(100vh-65px)] p-6">
        <p className="text-neutral-500 text-xs uppercase tracking-wider font-['Outfit'] mb-4">Categories</p>
        <ul className="space-y-2">
          <li><NavLink to="/components/service-areas" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>Service Areas</NavLink></li>
          <li><NavLink to="/components/faq" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>FAQ</NavLink></li>
          <li><NavLink to="/components/cta" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>CTA</NavLink></li>
          <li><NavLink to="/components/hero" className={({ isActive }) => `block px-3 py-2 rounded text-sm font-['Outfit'] transition-colors ${isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-900"}`}>Hero</NavLink></li>
        </ul>
      </aside>
      <main className="flex-1 bg-white">
        <VariantA />
        <VariantB />
        <VariantC />
        <VariantD />
        <Variant1 />
        <Variant2 />
        <Variant3 />
        <Variant4 />
        <Variant5 />
        <Variant6 />
        <Variant7 />
        <Variant8 />
        <Variant9 />
        <Variant10 />
        <Variant11 />
        <Variant12 />
        <Variant13 />
        <OtherHeadline />
        <Other1 />
        <Other2 />
        <Other3 />
        <Other4 />
        <Other5 />
        <Other6 />
        <Other7 />
        <Other8 />
        <Other9 />
        <Other10 />
        <Other11 />
      </main>
    </div>
  </div>
);

export default CTA;
