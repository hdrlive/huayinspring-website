"use client";

import { useState, useEffect } from "react";

export default function PlayPage() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));

  // Fokus auf erstes Feld nach dem Rendern
  useEffect(() => {
    if (codeSent) {
      const firstInput = document.getElementById("code-input-0") as HTMLInputElement | null;
      if (firstInput) firstInput.focus();
    }
  }, [codeSent]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setCodeSent(true);
    } catch (err) {
      alert("Fehler beim Senden des Codes.");
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`) as HTMLInputElement | null;
      if (nextInput) nextInput.focus();
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`) as HTMLInputElement | null;
      if (prevInput) prevInput.focus();
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    try {
      const response = await fetch("/api/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: fullCode }),
      });
      const data = await response.json();
      if (data.success) {
        document.cookie = "access_granted=true; max-age=86400; path=/";
        window.location.href = "/home";
      } else {
        alert("Falscher Code.");
        // Optional: Code zurücksetzen und Fokus auf erstes Feld
        setCode(Array(6).fill(""));
        setTimeout(() => {
          const firstInput = document.getElementById("code-input-0") as HTMLInputElement | null;
          if (firstInput) firstInput.focus();
        }, 0);
      }
    } catch {
      alert("Fehler bei der Code-Verifizierung.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-xl border border-yellow-400">
        <h1 className="text-center text-gray-800 text-2xl font-bold mb-2">HUAYIN SPRING</h1>
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
              className="w-full px-4 py-3 rounded border border-gray-300 mb-4 text-sm"
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
            <label className="block mb-2 font-medium text-gray-700">
              Bestätigungscode eingeben:
            </label>
            <div className="flex justify-between gap-2 mb-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleCodeKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded"
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