import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Navbar />
<Hero />
<Services />
<WhyChooseUs />
<About />
<Contact />
<Footer />

</main>
  );
}