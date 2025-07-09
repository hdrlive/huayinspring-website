export default function Home() {
  return (
    <main className="min-h-screen bg-[#e0f0e9] flex items-center justify-center px-4 py-20">
      {/* White content container with golden border */}
      <div className="relative bg-white max-w-3xl w-full p-10 rounded-2xl border-[2px] border-yellow-500 min-h-[800px]">
        
        {/* ZH Button (50% larger, same red border color) */}
        <a
          href="https://huayinspring.hk"
          className="absolute"
          style={{ top: '9mm', right: '9mm' }}
        >
          <img
            src="/ZH_route.png"
            alt="ZH"
            className="h-12 w-auto border-[2px] border-[#74190f] rounded"
          />
        </a>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HUAYIN SPRING</h1>
        <p className="text-lg italic text-gray-700 mb-6">Where Culture meets Health</p>

        {/* Main text */}
        <div className="text-gray-800 space-y-4 text-base">
          <p className="font-semibold">Your Cells: The Building Blocks of Life</p>
          <p>Your key to new energy and vitality = Holistic Cell Therapy</p>

          <p>Do you often feel tired and exhausted?</p>
          <p>Do you notice that the challenges of everyday life cost more energy than they used to?</p>
          <p>The cause often lies deeper than you think – in the communication between your cells.</p>

          <p>Discover your inner balance with holistic cell therapy<br />
          and activate your self-healing powers.</p>

          <p className="font-semibold">Would you like to learn more about modern and holistic cell therapy?</p>

          <p>Register now and we will send you an invitation with a registration code by email.</p>
        </div>

        {/* Footer note with red separator */}
        <hr className="my-8 border-[#74190f]" />
        <div className="text-sm text-gray-500 space-y-2">
          <p>
            Huayin Spring has extensive experience with confidentiality agreements (NDAs), as required when working
            with family offices, private concierge services, and medically sensitive cooperation partners.
          </p>
          <p>
            Every inquiry, every recommendation, and every treatment is handled in accordance with the highest
            confidentiality standards – contractually secured and anonymized upon request.
          </p>
        </div>
      </div>
    </main>
  );
}




