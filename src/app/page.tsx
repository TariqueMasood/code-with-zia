import { Attend } from "./components/workshop/workshop";
import { LearnSection } from "./components/learn-section/learn-section";
import { Dashboard } from "./components/dashboard/dashboard";
import { Testimonial } from "./components/testimonial/testimonial";

export default function Home() {
  return (
    <main>
      <LearnSection />
      <Attend />
      <Dashboard />
      <Testimonial />
    </main>
  );
}
