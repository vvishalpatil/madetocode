import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Topics } from "./components/Topics";
import { Tracks } from "./components/Tracks";
import { Waitlist } from "./components/Waitlist";

function App() {
  return (
    <div className="bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Topics />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
