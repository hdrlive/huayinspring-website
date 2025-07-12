'use client'
import React from 'react'

export default function PlayPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const email = (document.getElementById("email") as HTMLInputElement).value
    alert(`Danke! Die E-Mail "${email}" wurde erfasst.`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white text-black rounded-2xl p-8 w-full max-w-3xl shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-2 text-gray-300">HUAYIN SPRING</h1>
        <h2 className="text-center text-xl mb-4">Ihre Gesundheit in besten Händen</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <label className="block mb-2">Ihre E-Mail-Adresse:</label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full p-3 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-3 rounded hover:bg-yellow-500"
          >
            Registrieren
          </button>
        </form>
      </div>
    </div>
  )
}
