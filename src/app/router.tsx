import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { RouteTransition } from '../components/ui/Animation'
import { AboutPage } from '../pages/AboutPage'
import { AcademicsPage } from '../pages/AcademicsPage'
import { AdmissionsPage } from '../pages/AdmissionsPage'
import { ContactPage } from '../pages/ContactPage'
import { GalleryPage } from '../pages/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { SchoolLifePage } from '../pages/SchoolLifePage'

export function AppRouter() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteTransition><HomePage /></RouteTransition>} />
        <Route path="/about" element={<RouteTransition><AboutPage /></RouteTransition>} />
        <Route path="/academics" element={<RouteTransition><AcademicsPage /></RouteTransition>} />
        <Route path="/school-life" element={<RouteTransition><SchoolLifePage /></RouteTransition>} />
        <Route path="/gallery" element={<RouteTransition><GalleryPage /></RouteTransition>} />
        <Route path="/admissions" element={<RouteTransition><AdmissionsPage /></RouteTransition>} />
        <Route path="/contact" element={<RouteTransition><ContactPage /></RouteTransition>} />
        <Route path="/privacy" element={<RouteTransition><PrivacyPage /></RouteTransition>} />
        <Route path="*" element={<RouteTransition><NotFoundPage /></RouteTransition>} />
      </Routes>
    </AnimatePresence>
  )
}
