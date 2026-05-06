import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt" | "primary" | "secondary";
  id?: string;
}

export function Section({
  children,
  className,
  variant = "default",
  id,
}: SectionProps) {
  const variants = {
    default: "bg-background",
    alt: "bg-background-alt",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
