import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSendCode = () => {
    // Hier wäre ein API-Aufruf zur E-Mail-Verifizierung
    setCodeSent(true);
  };

  const handleVerify = () => {
    if (code === "123456") {
      router.push("/seite2");
    } else {
      alert("Falscher Code. Bitte erneut versuchen.");
    }
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-12">
      <main className="bg-white text-gray-900 font-sans px-6 py-12 sm:px-10 max-w-3xl mx-auto rounded-xl shadow-lg text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 mb-2">
          HUAYIN SPRING
        </h1>
        <h2 className="text-xl italic text-gray-500 mb-8">
          Were Culture meets Health
        </h2>

        <p className="font-semibold text-base sm:text-lg mt-4">Ihre Zellen: Die Bausteine des Lebens</p>
        <p>Ihr Schlüssel zu neuer Energie und Vitalität = Ganzheitliche Zelltherapie</p>

        <p className="mt-4">Fühlen Sie sich oft müde und erschöpft?<br />
        Bemerken Sie, dass die Herausforderungen des Alltags mehr Kraft kosten als früher?<br />
        Die Ursache liegt oft tiefer, als man denkt – in der Kommunikation Ihrer Zellen.</p>

        <p className="mt-4">Finden Sie mit einer ganzheitlichen Zelltherapie Ihr inneres Gleichgewicht<br />
        und aktivieren Sie Ihre Selbstheilungskräfte.</p>

        <p className="mt-6 font-medium">
          Möchten Sie mehr über die moderne und ganzheitliche Zelltherapie erfahren?
        </p>

        {/* Registrierung */}
        <div className="mt-4">
          <label className="block font-medium mb-1" htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSendCode}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            Code senden
          </button>
        </div>

        {/* Code-Eingabe */}
        {codeSent && (
          <div className="mt-6">
            <label className="block font-medium mb-1" htmlFor="code">Bestätigungscode</label>
            <input
              type="text"
              id="code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="6-stelliger Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={handleVerify}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Bestätigen
            </button>
          </div>
        )}

        <p className="mt-4">Sie erhalten dann von uns auf Ihre E-Mail eine Einladung mit Registrierungscode.</p>

        <footer className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Huayin Spring verfügt über umfassende Erfahrung mit Verschwiegenheitsvereinbarungen (NDAs),
          wie sie etwa bei der Zusammenarbeit mit Family Offices, privaten Concierge-Services und
          medizinisch sensiblen Kooperationspartnern notwendig sind.</p>
          <p className="mt-2">Jede Anfrage, jede Empfehlung und jede Behandlung erfolgt unter
          Berücksichtigung höchster Vertraulichkeitsstandards – vertraglich abgesichert und
          auf Wunsch auch anonymisiert.</p>
        </footer>
      </main>
    </div>
  );
}

