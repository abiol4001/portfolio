import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App text-gray-200">
      <section id="Homepage" className="w-full">
        <Navbar />
        <Hero />
      </section>
      <section id="">
        <Parallax />
      </section>
      <section id="Services"><Skills /></section>
      <Portfolio />
      <section id="Experience" className="!m-h-[100vh] overflow-scroll">
        <Experience />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
