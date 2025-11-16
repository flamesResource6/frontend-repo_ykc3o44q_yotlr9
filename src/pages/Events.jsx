import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBackendUrl } from '../utils/api'

const YEARS = [2025, 2024, 2023]

export default function EventsPage(){
  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${getBackendUrl()}/api/events?upcoming_only=false&limit=5`)
        const data = await res.json()
        setEvents(Array.isArray(data) ? data : [])
      } catch {
        setEvents([])
      }
    })()
  },[])

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Events</h1>
        <div className="relative mt-8 rounded-xl bg-white border p-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1622221113291-bda180c8270c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx0b3AtcmlnaHR8ZW58MHwwfHx8MTc2MzI3MDA0MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="top-right" className="hidden md:block absolute top-0 right-0 w-56 h-40 object-cover rounded-bl-xl opacity-90" />
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600&auto=format&fit=crop" alt="bottom-left" className="hidden md:block absolute bottom-0 left-0 w-56 h-40 object-cover rounded-tr-xl opacity-90" />
          <div className="relative z-10 max-w-2xl">
            <p className="text-gray-700">From hands-on workshops that build your skills to large-scale exhibitions that celebrate your work, our events are the lifeblood of the club. We host a variety of activities throughout the year, designed to inspire, educate, and bring our creative community together. Explore our flagship events and see what’s coming next!</p>
            <a href="#major" className="inline-block mt-4 px-4 py-2 rounded bg-[#483D8B] text-white">Know More</a>
          </div>
        </div>

        <h2 id="major" className="mt-12 text-2xl font-bold">Major Events</h2>
        <div className="mt-6 space-y-8">
          {events.slice(0,5).map((e, idx) => (
            <div key={e.id || idx} className={`grid md:grid-cols-2 gap-6 items-center ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="rounded-xl overflow-hidden border bg-gray-50">
                {e.cover_image ? (
                  <img src={e.cover_image} alt={e.name} className="w-full h-64 object-cover" />
                ) : (
                  <div className="w-full h-64 bg-gray-200" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{e.name}</h3>
                <p className="text-gray-600">{new Date(e.date).toLocaleDateString()} • {e.location}</p>
                <p className="mt-2 text-gray-700">{e.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold">Event Timeline</h3>
          <div className="flex gap-3 mt-3">
            {YEARS.map(y => (
              <Link key={y} to={`/events/${y}`} className="px-3 py-1.5 rounded-full border hover:bg-gray-50">{y}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
