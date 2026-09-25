import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { KeyInfo } from "@/components/KeyInfo";
import { Nutrition } from "@/components/Nutrition";
import { Activities } from "@/components/Activities";
import { Gallery } from "@/components/Gallery";
import { OfficialInfo } from "@/components/OfficialInfo";
import { Documents } from "@/components/Documents";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionSeam } from "@/components/ui/SectionSeam";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionSeam name="hero-about" />
        <About />
        <SectionSeam name="about-keyinfo" />
        <KeyInfo />
        <SectionSeam name="keyinfo-nutrition" />
        <Nutrition />
        <SectionSeam name="nutrition-activities" />
        <Activities />
        <SectionSeam name="activities-gallery" />
        <Gallery />
        <SectionSeam name="gallery-official" />
        <OfficialInfo />
        <SectionSeam name="official-documents" />
        <Documents />
        <SectionSeam name="documents-contacts" />
        <Contacts />
        <SectionSeam name="contacts-footer" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
