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

      <section
  id="services"
  className="min-h-screen bg-gray-50 py-24 px-10"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-black">
      Our Services
    </h2>

    <p className="text-center text-gray-600 mt-4 mb-16">
      Everything you need to grow your business online.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          💻 Website Development
        </h3>

        <p className="text-gray-600">
          Fast, modern websites built using Next.js and React.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          🎨 UI / UX Design
        </h3>

        <p className="text-gray-600">
          Beautiful interfaces designed to improve user experience.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
  <h3 className="text-2xl font-semibold mb-4">
    🎨 Branding & Graphic Design
  </h3>

  <p className="text-gray-600">
    Build a strong brand identity with professional designs.
  </p>
</div>

      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          📈 Digital Marketing
        </h3>

        <p className="text-gray-600">
          Grow your brand with data-driven marketing strategies.
        </p>
      </div>

    </div>

  </div>
</section>

      <section
  id="work"
  className="min-h-screen bg-white py-24 px-10"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center text-black">
      Why Choose Growferry?
    </h2>

    <p className="text-center text-gray-600 mt-4 mb-16">
      We build modern digital solutions that help your business grow with confidence.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">⚡ Fast Delivery</h3>
        <p className="text-gray-600">
          We deliver high-quality projects on time without compromising quality.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">📱 Fully Responsive</h3>
        <p className="text-gray-600">
          Every website looks perfect on mobile, tablet, and desktop devices.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">🎯 Custom Solutions</h3>
        <p className="text-gray-600">
          Every business is unique, so we create solutions tailored to your goals.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">🎨 Creative Design</h3>
        <p className="text-gray-600">
          Beautiful branding, graphics, and user-friendly interfaces that leave a lasting impression.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">💬 Dedicated Support</h3>
        <p className="text-gray-600">
          We're here to support you even after your website goes live.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-4">🚀 Business Growth</h3>
        <p className="text-gray-600">
          Our focus is not just building websites, but helping your business grow online.
        </p>
      </div>

    </div>

  </div>
</section>
      <section
  id="about"
  className="min-h-screen bg-gray-50 py-24 px-10"
>
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl font-bold text-black">
      About Growferry
    </h2>

    <p className="mt-8 text-lg text-gray-600 leading-8">
        We help businesses build a strong online presence
  through beautiful websites, creative design,
  and smart digital solutions.
      
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div>
        <h3 className="text-4xl font-bold text-black">100%</h3>
        <p className="text-gray-600 mt-2">Client Focused</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-black">Modern</h3>
        <p className="text-gray-600 mt-2">Design Approach</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-black">Creative</h3>
        <p className="text-gray-600 mt-2">Solutions</p>
      </div>

    </div>

  </div>
</section>
      <section id="contact" className="h-screen">
        Contact Section
      </section>

    </main>
  );
}