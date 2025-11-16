export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Celebrate Creativity. Build Community.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A space for painters, illustrators, photographers, and all visual storytellers.
              Explore our gallery, join upcoming events, and become part of the Fine Arts Club.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">
                Join the Club
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-gray-300 text-gray-800 hover:bg-white">
                View Gallery
              </a>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-white/60 bg-white">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Art collage" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
