import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Events from './components/Events'
import JoinForm from './components/JoinForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Gallery />
      <Events />
      <JoinForm />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-600 border-t">
        <p>© {new Date().getFullYear()} Fine Arts Club. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
