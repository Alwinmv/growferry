export default function Footer() {
  return (
    <>
<footer id="footer" className="bg-black text-white py-8">

  <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center">



    <h2 className="text-2xl font-bold">

      Growferry

    </h2>



    <p className="text-gray-400 mt-4 md:mt-0">

      © 2026 Growferry. All Rights Reserved.

    </p>



  </div>

</footer>



{/* Top Button */}

<a

  href="#home"

  className="fixed bottom-24 right-6 bg-black/70 text-white w-12 h-12 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center text-xl z-50" 

>

  ↑

</a>



{/* Bottom Button */}

<a

  href="#footer"

  className="fixed bottom-8 right-6 bg-black/70 text-white w-12 h-12 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center text-xl z-50" 

>

  ↓

</a>
 </>
  );
}