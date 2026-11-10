import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { schoolProfile } from '../../content/school'

export function Header() {
  const location = useLocation()
  const [isTransparent, setIsTransparent] = useState(location.pathname === '/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsTransparent(false)
      setIsMenuOpen(false)
      return
    }

    const hero = document.querySelector('.home-hero')
    if (!hero) {
      setIsTransparent(false)
      return
    }

    const updateHeaderState = () => {
      const heroRect = hero.getBoundingClientRect()
      const header = document.querySelector('.site-header')
      const headerBottom = header?.getBoundingClientRect().bottom ?? 76
      setIsTransparent(heroRect.bottom > headerBottom)
    }

    updateHeaderState()

    let rafId = 0
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateHeaderState)
    }

    const handleResize = () => {
      updateHeaderState()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navClassName = `site-nav${isMenuOpen ? ' mobile-open' : ''}`
  const isHome = location.pathname === '/'

  return (
    <>
      {isMenuOpen ? (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      ) : null}
      <header
        className={`site-header${isHome ? ' is-home' : ''}${isTransparent ? ' is-transparent' : ' is-solid'}`}
      >
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label="Darling Wisdom Academy home">
            <img src={schoolProfile.logoSrc} alt="Darling Wisdom Academy crest" className="brand-logo" />
            <span className="brand-text">
              <strong>{schoolProfile.name}</strong>
              <small>{schoolProfile.supportingLabel}</small>
            </span>
          </NavLink>

          <button
            type="button"
            ref={menuButtonRef}
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="main-navigation" className={navClassName} aria-label="Main navigation">
            <div className="mobile-nav-heading">
              <strong>Menu</strong>
              <button type="button" className="nav-close" onClick={closeMenu}>
                Close
              </button>
            </div>
            {schoolProfile.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="enquire-link">
            Enquire Now
          </NavLink>
        </div>
      </header>
    </>
  )
}
