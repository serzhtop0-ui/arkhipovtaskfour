import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Presentations from "@/components/Presentations";
import Cases from "@/components/Cases";
import News from "@/components/News";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Presentations />
        <Cases />
        <News />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
