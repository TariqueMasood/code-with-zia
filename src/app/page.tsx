import { Attend } from "./components/workshop/workshop";
import { LearnSection } from "./components/learn-section/learn-section";
import ScrollBtn from "./components/scroll-btn/scroll-btn";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";

export default function Home() {
  return (
    <main>
      <LearnSection />
      <Attend />
      <TestimonialCarousel />
      <ScrollBtn />
    </main>
  );
}
