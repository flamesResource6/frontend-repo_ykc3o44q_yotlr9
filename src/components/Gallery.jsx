import { useEffect, useState } from 'react'

export default function Gallery() {
  const [artworks, setArtworks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/artworks?featured=true&limit=12`)
        const data = await res.json()
        setArtworks(Array.isArray(data) ? data : [])
      } catch (e) {
        setArtworks([])
      } finally {
        setLoading(false)
      }
    }
    fetchArtworks()
  }, [])

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Gallery</h2>
            <p className="text-gray-600">A rotating selection of member highlights</p>
          </div>
          <a href="#join" className="text-blue-600 hover:underline">Submit your work →</a>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : artworks.length === 0 ? (
          <p className="text-gray-600">No featured artworks yet. Be the first to submit!</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <div key={art.id} className="group border rounded-lg overflow-hidden bg-gray-50">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={art.image_url} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{art.title}</h3>
                  <p className="text-sm text-gray-600">{art.artist}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
