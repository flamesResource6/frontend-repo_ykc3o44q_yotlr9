export default function CTAJoin(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to join our creative family?</h3>
        <p className="mt-3 text-gray-700">Fill the application and we will reach out. You can also message us for any queries.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#join" className="px-5 py-2.5 rounded bg-[#483D8B] text-white font-medium hover:opacity-90">Join the Club</a>
          <a href="#contact" className="px-5 py-2.5 rounded border border-gray-300 text-gray-800 hover:bg-gray-50">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
