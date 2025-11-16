import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0f1a] dark:text-gray-100">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <footer className="mt-16 py-12 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200/70 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h4 className="font-semibold text-[#483D8B] dark:text-indigo-300 mb-2">About</h4>
            <p>The Fine Arts Club is a creative community for artists of all skill levels. We host workshops, exhibitions, and collaborations.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#483D8B] dark:text-indigo-300 mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/gallery" className="hover:underline">Art Gallery</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/members" className="hover:underline">Our Members</a></li>
              <li><a href="/fine-arts-feature" className="hover:underline">Fine Arts Feature</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#483D8B] dark:text-indigo-300 mb-2">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-[#483D8B]">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-[#483D8B]">Facebook</a>
              <a href="#" aria-label="YouTube" className="hover:text-[#483D8B]">YouTube</a>
            </div>
          </div>
        </div>
        <p className="mt-8">© {new Date().getFullYear()} Fine Arts Club. All rights reserved.</p>
      </footer>
    </div>
  )
}
