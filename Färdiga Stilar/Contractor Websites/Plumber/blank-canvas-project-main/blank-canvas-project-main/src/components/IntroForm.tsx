import { useState } from "react";
import iconLicense from "@/assets/icon-license.svg";
import iconReceipt from "@/assets/icon-receipt.svg";
import iconHandshake from "@/assets/icon-handshake.svg";
import blueBlob from "@/assets/blue-blob.svg";
import waterBg from "@/assets/water-bg.png";

const features = [
  {
    icon: iconLicense,
    title: "Plomero matriculado",
    desc: "Trabajamos con registro oficial habilitado. Tu obra queda en regla y con respaldo legal. Podés pedirte el número de matrícula antes de contratar.",
  },
  {
    icon: iconReceipt,
    title: "Sin cargos ocultos",
    desc: "Acordamos el precio antes de empezar. Lo que cotizamos es lo que pagás, sin sorpresas al final. No empezamos hasta que des el visto bueno.",
  },
  {
    icon: iconHandshake,
    title: "Trabajo garantizado",
    desc: "Si algo falla por nuestra parte, volvemos sin costo y lo dejamos resuelto. No terminamos el trabajo hasta que estés conforme. Tu satisfacción no es negociable.",
  },
];

export function IntroForm() {
  const [form, setForm] = useState({
    need: "Destapaciones",
    name: "",
    phone: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full bg-background">
      {/* Water background image - extends below to bleed into next section */}
      <img
        src={waterBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0 left-[20%] h-[calc(100%+400px)] w-full object-cover select-none"
        style={{ mixBlendMode: "hard-light", opacity: 1 }}
      />
      {/* Background blue blob */}
      <img
        src={blueBlob}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-[-600px] h-auto w-[1772px] max-w-none select-none"
      />

      <div className="relative mx-auto grid max-w-[1920px] grid-cols-1 gap-12 px-6 py-16 md:px-12 lg:grid-cols-[1fr_592px] lg:gap-16 lg:px-[180px] lg:py-24">
        {/* Left column */}
        <div className="flex flex-col">
          <h2 className="font-outfit text-[36px] font-bold leading-[1.05] text-[#131313] md:text-[42px]">
            Tu plomero matriculado en{" "}
            <span className="font-shantell text-[#00AFEF] font-bold">
              Palermo
            </span>
          </h2>

          <p className="mt-6 max-w-[823px] font-outfit text-[18px] font-normal leading-[30px] text-black">
            Somos un equipo familiar de plomeros en Palermo. Trabajamos en
            departamentos, casas y locales del barrio todos los días — por eso
            llegamos rápido y conocemos los problemas típicos de la zona.
            Presupuestamos antes de empezar y dejamos todo limpio cuando
            terminamos.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex gap-6">
                <img
                  src={f.icon}
                  alt=""
                  className="h-[54px] w-[54px] shrink-0"
                />
                <div className="flex flex-col gap-3">
                  <h3 className="font-outfit text-[26px] font-extrabold leading-[1.1] text-[#0F0F0F] md:text-[30px]">
                    {f.title}
                  </h3>
                  <p className="font-outfit text-[18px] leading-[30px] text-[#0F0F0F]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - form */}
        <div className="w-full">
          <div className="rounded-[10px] bg-white p-8 shadow-[0_12px_22px_rgba(0,0,0,0.06),0_2px_7px_rgba(0,0,0,0.05),0_1px_0_rgba(0,0,0,0.04)] md:p-10">
            <h3 className="font-outfit text-[28px] font-bold leading-[1.1] text-[#131313] md:text-[32px]">
              Pedí tu presupuesto{" "}
              <span className="font-shantell text-[#00AFEF] font-bold">
                gratis
              </span>
            </h3>
            <p className="mt-3 font-outfit text-[18px] leading-[30px] text-[#676767]">
              Te respondemos en menos de 15 minutos
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="need"
                  className="font-outfit text-[18px] leading-[30px] text-[#676767]"
                >
                  ¿Qué necesitás?
                </label>
                <select
                  id="need"
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  className="h-11 rounded-[4px] bg-black/[0.04] px-4 font-outfit text-[14px] text-[#555555] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                >
                  <option>Destapaciones</option>
                  <option>Plomería general</option>
                  <option>Gasista</option>
                  <option>Urgencia 24hs</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="h-12 rounded-[4px] bg-black/[0.04] px-3 font-outfit text-[14px] text-[#0F0F0F] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="h-12 rounded-[4px] bg-black/[0.04] px-3 font-outfit text-[14px] text-[#0F0F0F] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-12 rounded-[4px] bg-black/[0.04] px-3 font-outfit text-[14px] text-[#0F0F0F] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                />
                <input
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="WhatsApp"
                  className="h-12 rounded-[4px] bg-black/[0.04] px-3 font-outfit text-[14px] text-[#0F0F0F] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#00AFEF]"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Contanos tu problema"
                rows={5}
                className="rounded-[4px] bg-black/[0.04] p-3 font-outfit text-[14px] text-[#0F0F0F] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#00AFEF]"
              />

              <button
                type="submit"
                className="h-[50px] rounded-[4px] bg-[#009118] font-outfit text-[20px] font-medium text-white transition-colors hover:bg-[#007d15]"
              >
                Quiero mi presupuesto
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
