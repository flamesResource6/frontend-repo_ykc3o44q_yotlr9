export default function FineArtsFeature(){
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">A Journey Through Art</h1>
        <p className="text-gray-700 mt-2">Discover the rich tapestry of artistic traditions from India and around the world.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The Rich Heritage of Indian Art</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Tanjore Painting (Tamil Nadu)',
                desc: 'Known for its rich colors, gold foil embellishments, and intricate details, Tanjore painting often depicts deities and mythological scenes. It is a classical South Indian art form.',
                img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Madhubani Art (Bihar)',
                desc: 'Characterized by complex geometric patterns and line drawings, this style from the Mithila region uses natural dyes and pigments. Themes revolve around nature, mythology, and daily life.',
                img: 'https://images.unsplash.com/photo-1600093463592-8e36ae8b41ee?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Warli (Maharashtra)',
                desc: 'A tribal art form using simple geometric shapes to depict everyday life, rituals, and nature.',
                img: 'https://images.unsplash.com/photo-1602620502123-9229ae2bbf67?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Pattachitra (Odisha)',
                desc: 'Traditional cloth-based scroll painting with intricate details and mythological themes.',
                img: 'https://images.unsplash.com/photo-1621804543832-9ebb76e5c1d2?q=80&w=1200&auto=format&fit=crop'
              },
            ].map((c, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border bg-white">
                <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-gray-700 mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Inspirations from Across the Globe</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Ukiyo-e (Japan)',
                desc: 'A genre of Japanese woodblock prints and paintings from the Edo period featuring kabuki actors, landscapes, and historical scenes.',
                img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Dutch Golden Age Painting (Netherlands)',
                desc: 'Known for realism and mastery of light and shadow across portraits, still life, and everyday scenes.',
                img: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e1?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Impressionism (France)',
                desc: 'Characterized by small, thin brush strokes and emphasis on light and its changing qualities.',
                img: 'https://images.unsplash.com/photo-1601968177507-a5e8f1f57c0e?q=80&w=1200&auto=format&fit=crop'
              },
              {
                title: 'Cubism (Spain/France)',
                desc: 'An early-20th-century avant-garde art movement that revolutionized European painting and sculpture.',
                img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop'
              },
            ].map((c, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border bg-white">
                <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-gray-700 mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
