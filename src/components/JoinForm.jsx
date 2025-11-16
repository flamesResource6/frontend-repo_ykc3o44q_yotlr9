import { useState } from 'react'

export default function JoinForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      art_focus: form.get('art_focus'),
      bio: form.get('bio'),
      portfolio_link: form.get('portfolio_link'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ ok: true, message: 'Thanks! Your application has been received.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="join" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Club</h2>
        <p className="text-gray-600 mb-6">Tell us about you and your art. We'll get back soon.</p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="w-full rounded border px-4 py-2" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded border px-4 py-2" />
          </div>
          <input name="art_focus" placeholder="Primary art focus (e.g., Illustration)" className="w-full rounded border px-4 py-2" />
          <input name="portfolio_link" placeholder="Portfolio link (optional)" className="w-full rounded border px-4 py-2" />
          <textarea name="bio" rows="4" placeholder="Short bio" className="w-full rounded border px-4 py-2" />
          <button disabled={loading} className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
          {status && (
            <p className={status.ok ? 'text-green-700' : 'text-red-600'}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
