import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionBanner } from "@/components/MissionBanner";
import { Founder } from "@/components/Founder";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MissionBanner />
        <Founder />
        <Services />
        <Portfolio />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
