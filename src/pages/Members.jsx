export default function Members(){
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Meet the Team</h1>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">The Core Committee</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-xl border p-4 text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200" />
                <h3 className="mt-3 font-semibold">Member {i}</h3>
                <p className="text-sm text-gray-600">Position</p>
                <p className="mt-2 text-gray-700 text-sm">A short bio about the member and their contributions.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Our Talented Artists</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Year of Study</th>
                  <th className="px-4 py-2 border">Specialization</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aditi Rao','3rd Year','Digital Illustration'],
                  ['Benjamin Das','2nd Year','Portrait Sketching'],
                  ['Chirag Mehta','1st Year','Concept Art'],
                ].map((r, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 border">{r[0]}</td>
                    <td className="px-4 py-2 border">{r[1]}</td>
                    <td className="px-4 py-2 border">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="mt-3 flex gap-4">
            <a href="#" className="px-4 py-2 rounded bg-[#483D8B] text-white">Instagram</a>
            <a href="#" className="px-4 py-2 rounded border">Facebook</a>
            <a href="#" className="px-4 py-2 rounded border">YouTube</a>
            <a href="mailto:artclub@yourcollege.edu" className="px-4 py-2 rounded border">Email</a>
          </div>
        </section>
      </div>
    </div>
  )
}
