// src/app/play/page.tsx
"use client";

import { useState } from "react";

export default function PlayPage() {
  // ⬇️ Zustände für E-Mail und Codeeingabe
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [codeDigits, setCodeDigits] = useState(Array(6).fill(""));
  const [accessGranted, setAccessGranted] = useState(false);

  // ⬇️ E-Mail absenden → Code anzeigen
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Code gesendet an:", email);
    setCodeSent(true);
  };

  // ⬇️ Eingabefeld für Code aktualisieren
  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Nur Ziffern erlaubt
    const newDigits = [...codeDigits];
    newDigits[index] = value;
    setCodeDigits(newDigits);

    const nextInput = document.getElementById(`code-${index + 1}`);
    if (value && nextInput) {
      (nextInput as HTMLInputElement).focus();
    }
  };

  // ⬇️ Code prüfen → Weiterleiten
  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = codeDigits.join("");
    if (fullCode === "123456") {
      document.cookie = "access_granted=true; max-age=86400; path=/";
      setAccessGranted(true);
      window.location.href = "/home";
    } else {
      alert("Falscher Code. Bitte erneut eingeben.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-xl border border-yellow-400">
        <h1 className="text-center text-gray-200 text-2xl font-bold mb-2">HUAYIN SPRING</h1>
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Ihre Gesundheit in besten Händen
        </h2>

        {!codeSent ? (
          // ⬇️ Formular für E-Mail-Eingabe
          <form onSubmit={handleEmailSubmit}>
            <label className="block mb-2 font-medium text-gray-700">
              Ihre E-Mail-Adresse:
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded border border-gray-300 mb-4 text-sm text-black"
              placeholder="email@example.com"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded"
            >
              Weiter
            </button>
          </form>
        ) : (
          // ⬇️ Formular für Code-Eingabe (6 Felder)
          <form onSubmit={handleCodeSubmit}>
            <label className="block mb-2 font-medium text-gray-700">
              Bestätigungscode eingeben:
            </label>
            <div className="flex justify-between gap-2 mb-4">
              {codeDigits.map((digit, idx) => (
                <input
                  key={idx}
                  id={`code-${idx}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleDigitChange(idx, e.target.value)}
                  className="w-12 h-12 text-center border border-gray-300 rounded text-xl text-black"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded"
            >
              Code bestätigen
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
