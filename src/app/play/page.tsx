// src/app/play/page.tsx
"use client";

import { useState } from "react";

export default function PlayPage() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real API call to send code
    console.log("Code sent to:", email);
    setCodeSent(true);
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real API verification
    if (code === "123456") {
      document.cookie = "access_granted=true; max-age=86400; path=/";
      setAccessGranted(true);
      window.location.href = "/home"; // Zielseite nach erfolgreicher Anmeldung
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
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
              className="w-full px-4 py-3 rounded border border-gray-300 mb-4 text-sm tracking-widest"
              placeholder="123456"
            />
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

}
