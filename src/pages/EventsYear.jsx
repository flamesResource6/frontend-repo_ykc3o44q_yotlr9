import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBackendUrl } from '../utils/api'

export default function EventsYear(){
  const { year } = useParams()
  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${getBackendUrl()}/api/events?upcoming_only=false&limit=1000`)
        const data = await res.json()
        const arr = Array.isArray(data) ? data : []
        setEvents(arr.filter(e => new Date(e.date).getFullYear().toString() === year))
      } catch {
        setEvents([])
      }
    })()
  }, [year])

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Events in {year}</h1>
        {events.length === 0 ? (
          <p className="mt-4 text-gray-600">No events found for this year.</p>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div key={e.id} className="rounded-xl overflow-hidden border bg-white">
                {e.cover_image && (
                  <img src={e.cover_image} alt={e.name} className="w-full h-56 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{e.name}</h3>
                  <p className="text-sm text-gray-600">{new Date(e.date).toLocaleDateString()} • {e.location}</p>
                  <p className="mt-2 text-gray-700">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
