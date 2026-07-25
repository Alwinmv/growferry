 export default function Contact() {
  return (
 <section
  id="contact"
  className="scroll-mt-24 min-h-screen bg-gray-900 text-white py-20 px-6 md:px-10"
>
  <div className="max-w-6xl mx-auto">

<h2 className="text-4xl md:text-5xl font-bold text-center">
    </h2>

    <p className="text-center text-gray-300 mt-4 mb-16">
      Have a project in mind? Let's build something amazing together.
    </p>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Contact Details */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">
          Get in Touch
        </h3>

        <div className="space-y-6 text-base md:text-lg">
          <p>📧 <strong>Email:</strong> growferry@gmail.com</p>

          <p>📱 <strong>Phone:</strong> +91 8714181898</p>

          <p>📍 <strong>Location:</strong> Kerala, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-white text-black outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-white text-black outline-none"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-white text-black outline-none"
        ></textarea>

        <button
          className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>
 );
}