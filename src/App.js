import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App text-gray-200">
      <section id='Homepage' className='w-full'><Navbar /></section>
      <section id=''>Parallax</section>
      <section id='Services'>Services</section>
      <section>Parallax</section>
      <section>Parallax</section>
      <section id='Portfolio'>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App;
