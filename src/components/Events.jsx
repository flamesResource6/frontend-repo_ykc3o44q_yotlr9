import { useEffect, useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/events?upcoming_only=true&limit=6`)
        const data = await res.json()
        setEvents(Array.isArray(data) ? data : [])
      } catch (e) {
        setEvents([])
      }
    }
    fetchEvents()
  }, [])

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        {events.length === 0 ? (
          <p className="text-gray-600">No upcoming events yet. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div key={e.id} className="border rounded-xl bg-white overflow-hidden">
                {e.cover_image && (
                  <div className="aspect-[16/9] bg-gray-200">
                    <img src={e.cover_image} alt={e.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{e.name}</h3>
                  <p className="text-gray-600">{new Date(e.date).toLocaleString()}</p>
                  <p className="text-gray-700 mt-2">{e.description}</p>
                  <div className="mt-3 flex gap-3">
                    <span className="inline-flex px-2 py-1 text-sm rounded bg-blue-100 text-blue-700">{e.location}</span>
                    {e.rsvp_link && (
                      <a href={e.rsvp_link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">RSVP →</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
