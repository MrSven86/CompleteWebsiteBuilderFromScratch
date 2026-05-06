import teamPic from "@/assets/plumber-team.png";

const benefits = [
  "Respuesta rápida — en 30 a 60 minutos",
  "Atención de principio a fin",
  "Precio cerrado, sin importar cuánto tardemos",
  "Experiencia real en el rubro",
  "Presupuesto sin cargo",
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[7px] shrink-0"
      aria-hidden
    >
      <path
        d="M10.4593 7.25893L6.69141 11.0268C6.57831 11.1399 6.44438 11.1964 6.28962 11.1964C6.13486 11.1964 6.00093 11.1399 5.88784 11.0268L3.26283 8.40179C3.14974 8.28869 3.09319 8.15477 3.09319 8C3.09319 7.84524 3.14974 7.71131 3.26283 7.59822L4.17355 6.6875C4.28664 6.57441 4.42057 6.51786 4.57534 6.51786C4.7301 6.51786 4.86403 6.57441 4.97712 6.6875L6.28962 8L8.74498 5.54465C8.85807 5.43155 8.992 5.375 9.14676 5.375C9.30153 5.375 9.43545 5.43155 9.54855 5.54465L10.4593 6.45536C10.5724 6.56846 10.6289 6.70238 10.6289 6.85715C10.6289 7.01191 10.5724 7.14584 10.4593 7.25893ZM11.0664 10.4375C11.0664 10.4375 11.175 10.2515 11.3923 9.87947C11.6096 9.50744 11.7182 8.88096 11.7182 8C11.7182 7.11905 11.5009 6.30655 11.0664 5.5625C10.6319 4.81846 10.0426 4.22917 9.29855 3.79465C8.5545 3.36012 7.742 3.14286 6.86105 3.14286C5.9801 3.14286 5.1676 3.36012 4.42355 3.79465C3.6795 4.22917 3.09022 4.81846 2.65569 5.5625C2.22117 6.30655 2.00391 7.11905 2.00391 8C2.00391 8.88096 2.22117 9.69346 2.65569 10.4375C3.09022 11.1816 3.6795 11.7708 4.42355 12.2054C5.1676 12.6399 5.9801 12.8571 6.86105 12.8571C7.742 12.8571 8.5545 12.6399 9.29855 12.2054C10.0426 11.7708 10.6319 11.1816 11.0664 10.4375ZM12.7985 4.55804C12.7985 4.55804 12.9518 4.82069 13.2584 5.34599C13.5649 5.87128 13.7182 6.75596 13.7182 8C13.7182 9.24405 13.4116 10.3914 12.7985 11.442C12.1855 12.4926 11.3536 13.3244 10.303 13.9375C9.25242 14.5506 8.1051 14.8571 6.86105 14.8571C5.617 14.8571 4.46968 14.5506 3.41908 13.9375C2.36849 13.3244 1.53664 12.4926 0.923549 11.442C0.310454 10.3914 0.00390625 9.24405 0.00390625 8C0.00390625 6.75596 0.310454 5.60863 0.923549 4.55804C1.53664 3.50744 2.36849 2.6756 3.41908 2.0625C4.46968 1.44941 5.617 1.14286 6.86105 1.14286C8.1051 1.14286 9.25242 1.44941 10.303 2.0625C11.3536 2.6756 12.1855 3.50744 12.7985 4.55804Z"
        fill="#00AFEF"
      />
    </svg>
  );
}

export function TeamSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1584px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[630px_1fr] lg:gap-[60px] lg:px-12">
        <div className="mx-auto w-full max-w-[630px]">
          <img
            src={teamPic}
            alt="Equipo de plomeros matriculados en Palermo"
            className="h-auto w-full"
          />
        </div>

        <div className="w-full max-w-[630px]">
          <h2 className="font-outfit text-[40px] font-bold leading-[48px] text-black lg:text-[60px] lg:leading-[72px]">
            Somos tu equipo de{" "}
            <span
              className="font-bold text-[#00AFEF]"
              style={{ fontFamily: '"Shantell Sans", cursive' }}
            >
              plomeros
            </span>{" "}
            en Palermo.
          </h2>

          <p className="mt-6 font-outfit text-[18px] font-normal leading-[30px] text-black">
            Un equipo matriculado que trabaja en Palermo todos los días.
            Conocemos los edificios del barrio, los problemas típicos de las
            cañerías de la zona, y sabemos llegar rápido porque estamos cerca.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-outfit text-[20px] font-medium leading-[30px] text-black">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-10 h-[66px] w-full max-w-[267px] rounded-[4px] bg-[#009118] font-outfit text-[20px] font-medium text-white transition-colors hover:bg-[#007a14]"
          >
            Sobre nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
