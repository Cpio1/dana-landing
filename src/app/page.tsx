import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { DayInLife } from "@/components/DayInLife";
import { Gallery } from "@/components/Gallery";
import { Teachers } from "@/components/Teachers";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { ContactsMap } from "@/components/ContactsMap";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Advantages />
        <About />
        <Programs />
        <DayInLife />
        <Gallery />
        <Teachers />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <ContactsMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
