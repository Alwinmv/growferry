export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <nav className="flex justify-between items-center px-10 py-6 border-b">
        <h1 className="text-2xl font-bold text-black">
          Growferry
        </h1>

        <div className="flex gap-8 text-gray-700">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>

          <a href="#services" className="hover:text-black transition">
            Services
          </a>

          <a href="#work" className="hover:text-black transition">
            Work
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>
      </nav>


      <section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center px-6"
>
  <h1 className="text-6xl font-bold text-black">
    Grow Your Business with Growferry
  </h1>

  <p className="mt-6 max-w-2xl text-lg text-gray-600">
    We help businesses build beautiful websites, powerful brands,
    and digital experiences that convert visitors into customers.
  </p>

  <button className="mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
    Book a Free Consultation
  </button>
</section>

      <section id="services" className="h-screen">
        Services Section
      </section>

      <section id="work" className="h-screen">
        Work Section
      </section>

      <section id="about" className="h-screen">
        About Section
      </section>

      <section id="contact" className="h-screen">
        Contact Section
      </section>

    </main>
  );
}