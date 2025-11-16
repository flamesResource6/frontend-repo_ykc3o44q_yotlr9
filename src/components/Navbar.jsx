import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Art Gallery' },
    { to: '/events', label: 'Events' },
    { to: '/members', label: 'Our Members' },
    { to: '/fine-arts-feature', label: 'Fine Arts Feature' },
    { to: '/community', label: 'Community' },
  ]

  const linkClass = ({ isActive }) => `text-sm md:text-base hover:text-[#483D8B] ${isActive ? 'underline underline-offset-4 decoration-2 text-[#483D8B]' : 'text-gray-700 dark:text-gray-200'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b0f1a]/70 border-b border-gray-200/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#1A1A1A] dark:text-white">
          Fine Arts Club
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass} end={n.to === '/'}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="inline-flex items-center px-2.5 py-1.5 rounded border text-sm hover:bg-gray-50 dark:hover:bg-white/5">
            {dark ? 'Light' : 'Dark'}
          </button>
          <button className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <span>☰</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200/60 dark:border-white/10 bg-white/90 dark:bg-[#0b0f1a]/90">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={linkClass} end={n.to === '/'}>
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
