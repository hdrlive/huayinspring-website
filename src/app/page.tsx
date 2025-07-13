"use client";

import { useState, useRef, useEffect } from "react";

export default function PlayPage() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [accessGranted, setAccessGranted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (codeSent) {
      inputRefs.current[0]?.focus(); // Erstes Feld aktiv
    }
  }, [codeSent]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setCodeSent(true);
    } else {
      alert("Fehler beim Senden des Codes.");
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    const res = await fetch("/api/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code: fullCode }),
    });
    const data = await res.json();
    if (data.success) {
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
        <h1 className="text-center text-gray-300 text-2xl font-bold mb-2">HUAYIN SPRING</h1>
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          Ihre Gesundheit in besten Händen
        </h2>

        {!codeSent ? (
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
          <form onSubmit={handleCodeSubmit}>
            <label className="block mb-4 font-medium text-gray-700">
              Bestätigungscode eingeben:
            </label>
            <div className="flex justify-between mb-4 gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="w-12 h-12 text-center border border-gray-300 rounded text-black text-lg"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
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
