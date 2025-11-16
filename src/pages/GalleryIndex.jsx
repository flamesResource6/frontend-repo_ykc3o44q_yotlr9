import { Link } from 'react-router-dom'

const categories = [
  { slug: 'top-picks', title: 'Top Picks' },
  { slug: 'art-for-a-cause', title: 'Art for a Cause' },
  { slug: 'concept-art', title: 'Concept Art' },
  { slug: 'portraits', title: 'Portraits' },
  { slug: 'mythological-mysterious', title: 'Mythological / Mysterious' },
  { slug: 'campus-life', title: 'Campus Life Artworks' },
  { slug: 'musical-artwork', title: 'Musical Artwork' },
  { slug: 'digital-artwork', title: 'Digital Artwork' },
  { slug: 'anime', title: 'Anime' },
]

export default function GalleryIndex(){
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Art Gallery</h1>
          <p className="text-gray-700 mt-2">Explore the diverse and imaginative works of our talented members.</p>
        </div>
        <div className="rounded-xl border p-5 mb-10 bg-indigo-50/40">
          <h3 className="text-xl font-semibold text-[#483D8B]">Artwork of the Week</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-5 items-center">
            <img src="https://images.unsplash.com/photo-1610733376381-010db4468779?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcnR3b3JrJTIwb2YlMjB0aGUlMjBXZWVrfGVufDB8MHx8fDE3NjMyNzAwNDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-lg w-full h-64 object-cover" alt="Artwork of the Week" />
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-600">Featured</p>
              <h4 className="text-2xl font-bold">Celestial Dance</h4>
              <p className="text-gray-700">By Aarav Gupta • @aarav_paints</p>
              <p className="mt-2 text-gray-700">A mixed media canvas blending traditional motifs with a modern palette.</p>
              <button className="mt-3 px-4 py-2 rounded bg-[#483D8B] text-white">View Piece</button>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} to={`/gallery/${c.slug}`} className="group relative overflow-hidden rounded-xl border h-40 bg-gray-100 flex items-end p-4">
              <span className="relative z-10 font-semibold group-hover:underline">{c.title}</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#483D8B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
