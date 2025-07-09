export default function Home() {
  return (
    <main className="min-h-screen bg-[#e0f0e9] flex items-center justify-center px-4">
      {/* White content container with golden border */}
      <div className="relative bg-white max-w-3xl w-full p-10 rounded-2xl border-[2px] border-yellow-500">
        
        {/* ZH Button (PNG) in top-right corner, 9mm from top and right */}
        <a
          href="https://huayinspring.hk"
          className="absolute"
          style={{ top: '9mm', right: '9mm' }}
        >
          <img
            src="/zh_route.png"
            alt="ZH"
            className="h-8 w-auto border-[2px] border-yellow-500 rounded"
          />
        </a>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HUAYIN SPRING</h1>
        <p className="text-lg italic text-gray-700 mb-6">Where Culture meets Health</p>

        {/* Body Text */}
        <div className="text-gray-800 space-y-4">
          <p className="text-xl font-semibold">
            Your cells: The building blocks of life
          </p>
          <p className="text-lg font-medium">
            Your key to renewed energy and vitality = Holistic Cell Therapy
          </p>
          <p>
            Do you often feel tired and drained? Do you notice that the challenges of everyday life require more energy than they used to?  
            The root cause often lies deeper than expected – in the communication of your cells.
          </p>
          <p>
            Discover inner balance and activate your self-healing powers through holistic cell therapy.
          </p>
          <p>
            Would you like to learn more about modern and holistic cell therapy?  
            Then register here (register).
          </p>
          <p>
            We will then send you an invitation with your personal registration code by email.
          </p>
        </div>
      </div>
    </main>
  );
}




