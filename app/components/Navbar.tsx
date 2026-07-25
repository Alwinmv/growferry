import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 border-b bg-white/90 backdrop-blur-md">
      <a href="#home">
        <Image
          src="/logo.png"
          alt="Growferry Logo"
          width={180}
          height={60}
          priority
        />
      </a>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-700 mt-4 md:mt-0">
        <a href="#home" className="hover:text-black transition">
          Home
        </a>

        <a href="#services" className="hover:text-black transition">
          Services
        </a>

        <a href="#work" className="hover:text-black transition">
          Why Choose Us
        </a>

        <a href="#about" className="hover:text-black transition">
          About
        </a>

        <a href="#contact" className="hover:text-black transition">
          Contact
        </a>
      </div>
    </nav>
  );
}