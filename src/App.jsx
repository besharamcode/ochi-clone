import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import Eye from "./components/Eye";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  new LocomotiveScroll();
  return (
    <>
      <div className="text-white min-h-screen bg-zinc-800">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Eye />
          <Featured />
          <Cards />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
