export default function Community(){
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">From Our Community - Reviews & Blogs</h3>
          <a href="/community" className="text-[#483D8B] hover:underline font-medium">Learn More →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">A Truly Inspiring Space!</h4>
            <p className="mt-2 text-gray-700">Joining this club was the best decision I made. The 'Art for a Cause' event was incredibly rewarding, and I met so many talented people.</p>
            <p className="mt-3 text-sm text-gray-600">— Priya Sharma, Member</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Blog: The Art of Storytelling Through Concept Art</h4>
            <p className="mt-2 text-gray-700">Every line and shadow in concept art tells a story. This week, we explored how artists build entire worlds before a single frame is animated...</p>
            <p className="mt-3 text-sm text-gray-600">— Raj Verma, Blog Contributor</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Workshops are Top-Notch.</h4>
            <p className="mt-2 text-gray-700">The digital art workshop on Procreate was fantastic. The seniors are so helpful, and I learned techniques I now use every day.</p>
            <p className="mt-3 text-sm text-gray-600">— Anjali Singh, Member</p>
          </div>
        </div>
      </div>
    </section>
  )
}
