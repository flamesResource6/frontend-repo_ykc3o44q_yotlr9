export default function About(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#483D8B]">About Our Club</h2>
          <p className="mt-4 text-gray-700">Welcome to the creative heart of our campus! The Fine Arts Club is more than just a club; it's a vibrant community dedicated to fostering artistic expression in all its forms. Our mission is to provide a platform for students to explore their creativity, collaborate on inspiring projects, and showcase their talent. From interactive workshops and gallery exhibitions to community art projects and insightful talks, we are a space for artists of all skill levels to learn, grow, and connect.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop" alt="Workshop" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxsZXJ5fGVufDB8MHx8fDE3NjMyNzAwMzl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Gallery" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?q=80&w=1200&auto=format&fit=crop" alt="Sketching" />
          <img className="rounded-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop" alt="Painting" />
        </div>
      </div>
    </section>
  )
}
