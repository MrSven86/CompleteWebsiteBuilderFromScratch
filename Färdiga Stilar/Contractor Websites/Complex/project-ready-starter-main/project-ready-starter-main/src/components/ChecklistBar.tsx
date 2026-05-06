import { Check } from "lucide-react";

const items = [
  "Diseño.",
  "Organizamos las tareas.",
  "Supervisamos los trabajos.",
  "Garantizamos la calidad de los materiales empleados.",
  "Administramos los recursos en obra.",
];

const ChecklistBar = () => {
  return (
    <section className="w-full bg-primary py-5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary-foreground shrink-0" strokeWidth={3} />
            <span className="text-primary-foreground text-sm font-bold whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChecklistBar;
