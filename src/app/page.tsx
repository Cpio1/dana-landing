import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { KeyInfo } from "@/components/KeyInfo";
import { Nutrition } from "@/components/Nutrition";
import { Transport } from "@/components/Transport";
import { Activities } from "@/components/Activities";
import { Gallery } from "@/components/Gallery";
import { OfficialInfo } from "@/components/OfficialInfo";
import { Documents } from "@/components/Documents";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <KeyInfo />
        <Nutrition />
        <Transport />
        <Activities />
        <Gallery />
        <OfficialInfo />
        <Documents />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
