// src/app/play/page.tsx
export default function PlayPage() {
  return (
    <main className="bg-white max-w-3xl mx-auto p-6 mt-12 rounded-2xl shadow-xl border border-yellow-400">
      <h1 className="text-3xl font-semibold text-center mb-6">HUAYIN SPRING</h1>
      <h2 className="text-xl font-medium text-center text-gray-700 mb-8">
        Ihre Gesundheit in besten Händen
      </h2>

      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        fermentum nunc sed tellus facilisis, vel hendrerit justo tincidunt.
        Integer lobortis metus at tellus lacinia, a gravida arcu dapibus.
        Curabitur quis libero eu nisi tincidunt luctus. Nulla ac sapien sed
        lorem fringilla tincidunt.
      </p>

      <p className="text-gray-600 mb-6">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vivamus euismod erat sit amet ex sagittis
        porttitor. Nunc bibendum, justo nec facilisis commodo, velit massa
        sollicitudin turpis, at vulputate nulla nisl ac urna.
      </p>

      <form className="flex flex-col gap-4">
        <label htmlFor="email" className="font-medium text-gray-800">
          Ihre E-Mail-Adresse:
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Registrieren
        </button>
      </form>
    </main>
  );
}

