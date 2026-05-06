import { useState } from "react";

const PhoneIcon = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0">
    <g clipPath="url(#cc_p)">
      <path d="M11.25 44.9999H3.75047C1.68188 44.9999 0 43.3195 0 41.2495V3.749C0 1.679 1.68188 -0.00146484 3.75047 -0.00146484H11.25C13.3186 -0.00146484 15.0005 1.679 15.0005 3.749V41.2495C15.0005 43.3195 13.3186 44.9999 11.25 44.9999ZM3.75047 1.87447C2.71688 1.87447 1.87594 2.71682 1.87594 3.749V41.2495C1.87594 42.2831 2.71828 43.124 3.75047 43.124H11.25C12.2836 43.124 13.1245 42.2817 13.1245 41.2495V3.749C13.1245 2.71541 12.2822 1.87447 11.25 1.87447H3.75047ZM44.062 43.1254H14.0625C13.545 43.1254 13.1245 42.7035 13.1245 42.1874V2.81244C13.1245 2.29494 13.545 1.87447 14.0625 1.87447H44.062C44.5781 1.87447 45 2.29494 45 2.81244V42.1874C45 42.7035 44.5781 43.1254 44.062 43.1254ZM15.0005 41.2495H43.1255V3.749H15.0005V41.2495ZM38.437 16.8749H21.562C21.0445 16.8749 20.6241 16.4545 20.6241 15.937V8.43744C20.6241 7.91994 21.0445 7.49947 21.562 7.49947H38.437C38.9531 7.49947 39.375 7.91994 39.375 8.43744V15.937C39.375 16.4545 38.9531 16.8749 38.437 16.8749ZM22.5 15.0004H37.5005V9.37541H22.5V15.0004ZM27.187 36.5624C26.6709 36.5624 26.2491 36.1406 26.2491 35.6245V20.624C26.2491 20.1065 26.6709 19.686 27.187 19.686C27.7031 19.686 28.125 20.1065 28.125 20.624V35.6245C28.125 36.1406 27.7031 36.5624 27.187 36.5624ZM32.812 36.5624C32.2959 36.5624 31.8741 36.1406 31.8741 35.6245V20.624C31.8741 20.1065 32.2959 19.686 32.812 19.686C33.3281 19.686 33.75 20.1065 33.75 20.624V35.6245C33.75 36.1406 33.3281 36.5624 32.812 36.5624ZM37.5005 26.2504H22.5C21.9825 26.2504 21.562 25.8285 21.562 25.3124C21.562 24.7963 21.9825 24.3745 22.5 24.3745H37.5005C38.0166 24.3745 38.4384 24.7963 38.4384 25.3124C38.4384 25.8285 38.0166 26.2504 37.5005 26.2504ZM37.5005 31.8754H22.5C21.9825 31.8754 21.562 31.4535 21.562 30.9374C21.562 30.4213 21.9825 29.9995 22.5 29.9995H37.5005C38.0166 29.9995 38.4384 30.4213 38.4384 30.9374C38.4384 31.4535 38.0166 31.8754 37.5005 31.8754ZM38.437 37.5004H21.562C21.0445 37.5004 20.6241 37.0785 20.6241 36.5624V19.6874C20.6241 19.1699 21.0445 18.7495 21.562 18.7495H38.437C38.9531 18.7495 39.375 19.1699 39.375 19.6874V36.5624C39.375 37.0785 38.9531 37.5004 38.437 37.5004ZM22.5 35.6245H37.5005V20.624H22.5V35.6245Z" fill="#00AFEF"/>
    </g>
    <defs><clipPath id="cc_p"><rect width="45" height="45" fill="white"/></clipPath></defs>
  </svg>
);

const EmailIcon = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0">
    <path d="M40.3116 39.3751H4.68703C2.10375 39.3751 0 37.2713 0 34.688V10.3135C0 7.73022 2.10375 5.62646 4.68703 5.62646H40.3116C42.8948 5.62646 44.9986 7.73022 44.9986 10.3135V34.688C44.9986 37.2713 42.8948 39.3751 40.3116 39.3751ZM4.68563 7.49959C3.13453 7.49959 1.87312 8.761 1.87312 10.3121V34.6866C1.87312 36.2377 3.13453 37.4991 4.68563 37.4991H40.3102C41.8613 37.4991 43.1227 36.2377 43.1227 34.6866V10.3121C43.1227 8.761 41.8613 7.49959 40.3102 7.49959H4.68563ZM22.4986 28.1813C20.5973 28.1813 18.8198 27.384 17.4923 25.944L1.44984 8.40381C1.10109 8.02131 1.12781 7.42928 1.51031 7.07772C1.89141 6.72897 2.48484 6.75568 2.83641 7.13818L18.8775 24.6769C20.8083 26.7765 24.1917 26.7793 26.1267 24.6755L42.0863 7.21412C42.4392 6.83022 43.0298 6.80771 43.4123 7.15365C43.7962 7.50381 43.823 8.09443 43.4742 8.47975L27.5105 25.9412C26.1787 27.3854 24.3998 28.1813 22.4986 28.1813ZM2.09531 38.2177C1.84219 38.2177 1.58766 38.1151 1.40344 37.9126C1.05328 37.5301 1.08141 36.9352 1.46391 36.5865L16.1494 23.1765C16.5319 22.8277 17.1267 22.8516 17.4755 23.2369C17.8256 23.6194 17.7975 24.2143 17.415 24.5602L2.72953 37.9702C2.54813 38.1348 2.32031 38.2177 2.09531 38.2177ZM42.8273 38.1418C42.6009 38.1418 42.3773 38.0616 42.1959 37.8957L27.5878 24.563C27.2053 24.2143 27.1772 23.6222 27.5273 23.2397C27.8803 22.8558 28.4723 22.8291 28.8534 23.1793L43.4616 36.5119C43.8427 36.8649 43.8722 37.4555 43.5192 37.8352C43.3322 38.0377 43.0805 38.1418 42.8273 38.1418Z" fill="#00AFEF"/>
  </svg>
);

const MapIcon = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0">
    <g clipPath="url(#cc_m)">
      <path d="M44.0606 42.1537C43.9833 42.1537 43.9088 42.1467 43.8342 42.1242L29.0616 38.4342L14.2889 42.1256C14.13 42.1649 13.9612 42.1635 13.8052 42.1185L0.680625 38.3681C0.277031 38.2499 0 37.8843 0 37.4667V14.9667C0 14.6728 0.139219 14.3943 0.372656 14.2185C0.6075 14.0442 0.914063 13.9865 1.19391 14.0667L14.0794 17.7468L18.9352 16.5332C19.4316 16.4024 19.9462 16.7118 20.0714 17.2153C20.1966 17.7173 19.8914 18.2264 19.3894 18.3515L14.2889 19.627C14.13 19.6678 13.9612 19.6649 13.8052 19.6199L1.87453 16.2112V36.7593L14.0794 40.2454L28.8352 36.554C28.9828 36.516 29.1403 36.516 29.2894 36.554L43.1255 40.0176V19.4526L33.7078 17.0971C33.2058 16.972 32.8992 16.4629 33.0272 15.9609C33.1495 15.456 33.6586 15.1467 34.162 15.2789L44.2913 17.8115C44.7089 17.917 45.0014 18.2896 45.0014 18.7214V41.2214C45.0014 41.5068 44.8678 41.7824 44.6428 41.9624C44.4741 42.0904 44.2673 42.1551 44.0634 42.1551L44.0606 42.1537ZM26.2786 26.737C26.0859 26.737 25.8947 26.6793 25.7288 26.557C25.3702 26.2926 16.9242 20.0784 16.9242 12.1739C16.9242 6.9412 21.0319 2.84338 26.2786 2.84338C31.5267 2.84338 35.633 6.9426 35.633 12.1739C35.633 20.0784 27.1884 26.2982 26.8284 26.557C26.6667 26.6793 26.4727 26.737 26.2786 26.737ZM26.2786 4.72073C22.0837 4.72073 18.7987 7.99588 18.7987 12.1753C18.7987 18.0365 24.4645 23.1314 26.2786 24.6079C28.0913 23.1243 33.7584 18.0379 33.7584 12.1753C33.7584 7.99588 30.472 4.72073 26.2786 4.72073ZM26.2786 15.9032C24.21 15.9032 22.5281 14.2214 22.5281 12.1528C22.5281 10.0842 24.21 8.40229 26.2786 8.40229C28.3486 8.40229 30.0291 10.0842 30.0291 12.1528C30.0291 14.2214 28.3472 15.9032 26.2786 15.9032ZM26.2786 10.2782C25.245 10.2782 24.4041 11.1206 24.4041 12.1528C24.4041 13.1849 25.2464 14.0273 26.2786 14.0273C27.3108 14.0273 28.1531 13.1849 28.1531 12.1528C28.1531 11.1206 27.3094 10.2782 26.2786 10.2782ZM14.0611 41.2157C13.5436 41.2157 13.1231 40.7939 13.1231 40.2778V19.6523C13.1231 19.1348 13.5436 18.7143 14.0611 18.7143C14.5786 18.7143 14.9991 19.1348 14.9991 19.6523V40.2778C14.9991 40.7953 14.5786 41.2157 14.0611 41.2157ZM29.0616 37.4667C28.5455 37.4667 28.1236 37.0448 28.1236 36.5287V23.4042C28.1236 22.8881 28.5455 22.4662 29.0616 22.4662C29.5777 22.4662 29.9995 22.8881 29.9995 23.4042V36.5287C29.9995 37.0462 29.5777 37.4667 29.0616 37.4667Z" fill="#00AFEF"/>
    </g>
    <defs><clipPath id="cc_m"><rect width="45" height="45" fill="white"/></clipPath></defs>
  </svg>
);

export function ContactCta() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full bg-white">
      {/* black bottom band — covers ~52% bottom */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[52%] bg-[#131313]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-[10px] bg-[#EFFBFF] lg:grid-cols-2">
          {/* Left */}
          <div className="px-8 py-10 lg:px-[50px] lg:py-[50px]">
            <h2 className="font-outfit text-[36px] font-bold leading-[44px] text-[#131313] lg:text-[42px] lg:leading-[50px]">
              Hablemos de tu problema
            </h2>
            <p
              className="mt-1 font-bold text-[#00AFEF] text-[36px] leading-[44px] lg:text-[42px] lg:leading-[50px]"
              style={{ fontFamily: '"Shantell Sans", cursive' }}
            >
              de plomería
            </p>

            <p className="mt-6 max-w-[493px] font-outfit text-[18px] font-normal leading-[30px] text-[#676767]">
              No te arriesgues cuando se trata de tu casa o tu local. Para el
              mejor consejo y servicio — escribinos hoy.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-5">
                <PhoneIcon />
                <div>
                  <div className="font-outfit text-[24px] font-medium leading-[30px] text-[#131313]">Teléfono</div>
                  <a href="tel:11XXXXXXXX" className="font-outfit text-[18px] font-normal leading-[30px] text-[#00AFEF] hover:underline">11-XXXX-XXXX</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <EmailIcon />
                <div>
                  <div className="font-outfit text-[24px] font-medium leading-[30px] text-[#131313]">Email</div>
                  <a href="mailto:info@empresa.com.ar" className="font-outfit text-[18px] font-normal leading-[30px] text-[#00AFEF] hover:underline">info@[empresa].com.ar</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <MapIcon />
                <div>
                  <div className="font-outfit text-[24px] font-medium leading-[30px] text-[#131313]">Zona de servicio</div>
                  <span className="font-outfit text-[18px] font-normal leading-[30px] text-[#00AFEF]">Palermo y alrededores</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="px-8 py-10 lg:px-[50px] lg:py-[50px]">
            <h3 className="font-outfit text-[28px] font-bold leading-[36px] text-[#131313] lg:text-[32px]">
              Mandanos un mensaje
            </h3>
            <p className="mt-2 font-outfit text-[16px] font-normal leading-[24px] text-[#676767]">
              Completá los datos y te respondemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nombre *"
                  className="h-[52px] w-full rounded-[4px] bg-[#E8EFF2] px-4 font-outfit text-[14px] text-[#131313] placeholder:text-[#676767] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                  required
                />
                <input
                  type="tel"
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Teléfono *"
                  className="h-[52px] w-full rounded-[4px] bg-[#E8EFF2] px-4 font-outfit text-[14px] text-[#131313] placeholder:text-[#676767] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                  required
                />
              </div>
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email *"
                className="h-[52px] w-full rounded-[4px] bg-[#E8EFF2] px-4 font-outfit text-[14px] text-[#131313] placeholder:text-[#676767] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                required
              />
              <textarea
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Mensaje"
                rows={5}
                className="w-full rounded-[4px] bg-[#E8EFF2] px-4 py-3 font-outfit text-[14px] text-[#131313] placeholder:text-[#676767] outline-none focus:ring-2 focus:ring-[#00AFEF]"
              />
              <button
                type="submit"
                className="h-[60px] w-full rounded-[4px] bg-[#009118] font-outfit text-[20px] font-medium text-white transition-colors hover:bg-[#007a14]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
