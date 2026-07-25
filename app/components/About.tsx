     export default function About() {
  return (
     <section
  id="about"
  className="scroll-mt-24 min-h-screen bg-gray-50 py-20 px-6 md:px-10"
>
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-black">
      About Growferry
    </h2>

    <p className="mt-8 text-base md:text-lg text-gray-600 leading-8 px-2">
        We help businesses build a strong online presence
  through beautiful websites, creative design,
  and smart digital solutions.
      
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div>
       <h3 className="text-3xl md:text-4xl font-bold text-black">
  100%
</h3>
        <p className="text-gray-600 mt-2">Client Focused</p>
      </div>

      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-black">
  Modern
</h3>
        <p className="text-gray-600 mt-2">Design Approach</p>
      </div>

      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-black">
  Creative
</h3>
        <p className="text-gray-600 mt-2">Solutions</p>
      </div>

    </div>

  </div>
</section>
 );
}