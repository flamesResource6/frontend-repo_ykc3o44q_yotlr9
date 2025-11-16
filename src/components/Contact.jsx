import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      subject: fd.get('subject'),
      body: fd.get('body'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail || 'Failed to send message')
      setStatus({ ok: true, message: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded border px-4 py-2" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded border px-4 py-2" />
          </div>
          <input name="subject" required placeholder="Subject" className="w-full rounded border px-4 py-2" />
          <textarea name="body" required rows="4" placeholder="Message" className="w-full rounded border px-4 py-2" />
          <button className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Send</button>
          {status && (
            <p className={status.ok ? 'text-green-700' : 'text-red-600'}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
