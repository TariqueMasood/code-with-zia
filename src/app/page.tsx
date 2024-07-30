import { Attend } from "./components/workshop/workshop";
import { LearnSection } from "./components/learn-section/learn-section";
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
      <Testimonial />
      <Certificate />
      <AccordionContent />
    </main>
  );
}
