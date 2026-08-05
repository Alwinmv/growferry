 "use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

   const data = await res.json();

console.log("API Response:", data);

if (res.ok && data.success && !data.resend?.error) {
  setStatus("✅ Message sent successfully!");
  setForm({
    name: "",
    email: "",
    message: "",
  });
} else {
  console.log("API Error:", data);
  setStatus("❌ Failed to send message.");
}
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gray-900 text-white px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-center text-gray-300 mt-4 mb-16">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 text-base md:text-lg">
              <p><strong>Email:</strong> growferry@gmail.com</p>
              <p><strong>Phone:</strong> +91 8714181898</p>
              <p><strong>Location:</strong> Kerala, India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white text-black outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white text-black outline-none"
              required
            />

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-white text-black outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm">{status}</p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}