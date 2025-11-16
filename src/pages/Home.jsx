import Hero from '../components/Hero'
import About from './components_home/About'
import Community from './components_home/Community'
import CTAJoin from './components_home/CTAJoin'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Community />
      <CTAJoin />
    </div>
  )
}
