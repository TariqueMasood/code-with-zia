import { Attend } from "./components/workshop/workshop";
import { LearnSection } from "./components/learn-section/learn-section";
import ScrollBtn from "./components/scroll-btn/scroll-btn";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import { Dashboard } from "./components/dashboard/dashboard";
import { Testimonial } from "./components/testimonial/testimonial";
import { Certificate } from "./components/certificate/certificate";
import AccordionContent from "./components/accordion-content/accordion-content";

export default function Home() {
  return (
    <main>
      <LearnSection />
      <Attend />
      <Dashboard />
      <TestimonialCarousel />
      <Certificate />
      <AccordionContent />
      <ScrollBtn />
    </main>
  );
}
