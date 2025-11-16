export default function Community(){
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Blogs & Reviews</h1>
        <p className="text-gray-700 mt-2">Read stories and reviews from our members. Click into posts to explore more.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <article key={i} className="rounded-xl border p-5 bg-white">
              <h3 className="font-semibold">Sample Post {i}</h3>
              <p className="text-gray-700 mt-2">A short preview of the post content goes here...</p>
              <a href="#" className="text-[#483D8B] inline-block mt-3">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
