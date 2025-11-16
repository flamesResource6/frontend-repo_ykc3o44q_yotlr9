import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#events', label: 'Events' },
    { href: '#join', label: 'Join' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Fine Arts Club
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-gray-700 hover:text-blue-600">
              {n.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className="i-lucide-menu">☰</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-blue-600">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
