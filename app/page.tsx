export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <nav className="flex justify-between items-center px-8 py-6">
  <h1 className="text-2xl font-bold">Growferry</h1>

  <div className="flex gap-6">
    <a href="#">Home</a>
    <a href="#">Services</a>
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black">
          Welcome to Growferry
        </h1>

        <p className="mt-4 text-gray-600">
          We build brands people remember.
        </p>

        <button className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500">
          Book a Call
        </button>
      </div>
    </main>
  );
}