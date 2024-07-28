import { Attend } from "./components/workshop/workshop";
import { LearnSection } from "./components/learn-section/learn-section";

export default function Home() {
  return (
    <main>
      <LearnSection />
      <Attend />
    </main>
  );
}
