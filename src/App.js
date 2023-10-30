import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div className="App text-gray-200">
      <section id="Homepage" className="w-full">
        <Navbar />
        <Hero />
      </section>
      <section id=""><Parallax /></section>
      <section id="Services">Services</section>
      <section>Parallax</section>
      <section>Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
