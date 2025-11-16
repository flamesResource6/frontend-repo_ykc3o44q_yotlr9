import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GalleryIndex from './pages/GalleryIndex'
import GalleryCategory from './pages/GalleryCategory'
import GalleryCategoryAll from './pages/GalleryCategoryAll'
import EventsPage from './pages/Events'
import EventsYear from './pages/EventsYear'
import Members from './pages/Members'
import FineArtsFeature from './pages/FineArtsFeature'
import Community from './pages/Community'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="gallery" element={<GalleryIndex />} />
        <Route path="gallery/:category" element={<GalleryCategory />} />
        <Route path="gallery/:category/all" element={<GalleryCategoryAll />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:year" element={<EventsYear />} />
        <Route path="members" element={<Members />} />
        <Route path="fine-arts-feature" element={<FineArtsFeature />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  )
}

export default App
