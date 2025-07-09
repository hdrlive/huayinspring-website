export default function Home() {
  return (
    <div className="bg-emerald-50 min-h-screen py-8 px-2 sm:px-4 relative">
      
      {/* ZH-Button oben rechts */}
      <a
        href="https://huayinspring.hk"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-emerald-600 text-white text-sm sm:text-base px-5 py-2 rounded-md hover:bg-emerald-700 shadow-md"
      >
        ZH
      </a>

      <main className="bg-white text-gray-900 font-sans px-6 py-12 sm:px-10 max-w-3xl mx-auto rounded-xl shadow-lg text-left border border-[#d4af37] sm:border-[1.5px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 mb-2">
          HUAYIN SPRING
        </h1>
        <h2 className="text-xl italic text-gray-500 mb-8">
          Where Culture meets Health
        </h2>

        <p className="font-semibold text-base sm:text-lg mt-4">Your Cells: The Building Blocks of Life</p>
        <p>Your key to new energy and vitality = Holistic Cell Therapy</p>

        <p className="mt-4">
          Do you often feel tired and exhausted?<br />
          Do you notice that the challenges of everyday life cost more energy than they used to?<br />
          The cause often lies deeper than you think – in the communication between your cells.
        </p>

        <p className="mt-4">
          Discover your inner balance with holistic cell therapy<br />
          and activate your self-healing powers.
        </p>

        <p className="mt-6 font-medium">
          Would you like to learn more about modern and holistic cell therapy?
        </p>

        <p className="mt-4">
          Register now and we will send you an invitation with a registration code by email.
        </p>

        <footer className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>
            Huayin Spring has extensive experience with confidentiality agreements (NDAs),
            as required when working with family offices, private concierge services, and
            medically sensitive cooperation partners.
          </p>
          <p className="mt-2">
            Every inquiry, every recommendation, and every treatment is handled
            in accordance with the highest confidentiality standards – contractually secured and
            anonymized upon request.
          </p>
        </footer>
      </main>
    </div>
  );
}




