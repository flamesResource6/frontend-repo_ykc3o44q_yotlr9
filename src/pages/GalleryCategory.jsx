import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBackendUrl } from '../utils/api'

export default function GalleryCategory(){
  const { category } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${getBackendUrl()}/api/artworks?tag=${encodeURIComponent(category)}&limit=6`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [category])

  const title = (category || '').replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((art) => (
                <div key={art.id} className="rounded-xl overflow-hidden border bg-white/80">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img src={art.image_url} alt={art.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{art.title}</h3>
                    <p className="text-sm text-gray-600">{art.artist} {art.handle ? `• ${art.handle}` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to={`/gallery/${category}/all`} className="px-4 py-2 rounded bg-[#483D8B] text-white inline-block">View More</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
