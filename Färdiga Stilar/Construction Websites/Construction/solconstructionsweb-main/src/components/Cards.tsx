import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  image,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

export function ProcessStep({
  number,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-4 md:flex-col md:text-center md:gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg">
          {icon || number}
        </div>
      </div>
      <div className="space-y-2 pb-8 md:pb-0">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
