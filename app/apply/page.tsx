'use client'
import { useState } from 'react'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send data to backend or email to Chairman
    setSubmitted(true)
  }

  return (    
    <div className="max-w-xl mx-auto space-y-6">

      <h2 className="text-2xl font-bold text-blue-900">Membership Application</h2>

      {submitted ? (
        <p className="text-green-700">Your request has been submitted. The Chairman will review and contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email Address" required className="w-full border px-4 py-2 rounded" />
          <input type="tel" placeholder="Phone Number" required className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      )}
    </div>
  )
}
