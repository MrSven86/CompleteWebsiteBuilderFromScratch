import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { UrgencyBar } from "@/components/UrgencyBar";
import { IntroForm } from "@/components/IntroForm";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { WhatsappCta } from "@/components/WhatsappCta";
import { TeamSection } from "@/components/TeamSection";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <TopBar />
      <Header />
      <Hero />
      <UrgencyBar />
      <IntroForm />
      <Services />
      <Reviews />
      <Process />
      <WhatsappCta />
      <TeamSection />
      <ContactCta />
      <Footer />
    </div>
  );
}
