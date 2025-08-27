import Hero from "@/components/Hero";
import ServicesHighlight from "@/components/ServicesHighlight";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesHighlight />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
