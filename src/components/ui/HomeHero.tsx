import { useReducedMotion } from 'motion/react'
import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { PageHeroConfig } from '../../types/content'

const slideDuration = 9000

const slides = [
  {
    imageSrc: '/images/homepage-hero-1.jpg',
    imageAlt: 'Darling Wisdom Academy students celebrating together.',
    desktopPosition: '50% 48%',
    mobilePosition: '50% 48%',
    desktopOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.46) 0%, rgba(8, 23, 121, 0.01) 34%, rgba(8, 23, 121, 0.08) 57%, rgba(8, 23, 121, 0.74) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.3) 0%, rgba(8, 23, 121, 0.12) 38%, rgba(8, 23, 121, 0.02) 76%)',
    mobileOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.48) 0%, rgba(8, 23, 121, 0.02) 32%, rgba(8, 23, 121, 0.1) 55%, rgba(8, 23, 121, 0.8) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.2), transparent 75%)',
  },
  {
    imageSrc: '/images/homepage-hero-2.jpg',
    imageAlt: 'Darling Wisdom Academy students holding their school flag.',
    desktopPosition: '50% 44%',
    mobilePosition: '52% 45%',
    desktopOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.44) 0%, rgba(8, 23, 121, 0.01) 34%, rgba(8, 23, 121, 0.08) 58%, rgba(8, 23, 121, 0.74) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.3) 0%, rgba(8, 23, 121, 0.12) 38%, rgba(8, 23, 121, 0.02) 76%)',
    mobileOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.46) 0%, rgba(8, 23, 121, 0.02) 32%, rgba(8, 23, 121, 0.1) 55%, rgba(8, 23, 121, 0.8) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.22), transparent 75%)',
  },
  {
    imageSrc: '/images/homepage-hero-3.jpg',
    imageAlt: 'A school leader speaking to students at an academy event.',
    desktopPosition: '54% 44%',
    mobilePosition: '55% 40%',
    desktopOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.48) 0%, rgba(8, 23, 121, 0.02) 34%, rgba(8, 23, 121, 0.09) 58%, rgba(8, 23, 121, 0.76) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.34) 0%, rgba(8, 23, 121, 0.15) 38%, rgba(8, 23, 121, 0.02) 76%)',
    mobileOverlay:
      'linear-gradient(180deg, rgba(8, 23, 121, 0.5) 0%, rgba(8, 23, 121, 0.03) 32%, rgba(8, 23, 121, 0.12) 55%, rgba(8, 23, 121, 0.82) 100%), linear-gradient(90deg, rgba(8, 23, 121, 0.24), transparent 78%)',
  },
] as const

type HomeHeroProps = Pick<PageHeroConfig, 'heading' | 'intro' | 'eyebrow' | 'actions'>

export function HomeHero({ heading, intro, eyebrow, actions }: HomeHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(() => new Set())
  const [failedSlide, setFailedSlide] = useState<number | null>(null)
  const nextSlide = (activeSlide + 1) % slides.length

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveSlide(0)
      setPaused(true)
    } else {
      setPaused(false)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => {
      setLoadedSlides((loaded) => (loaded.has(nextSlide) ? loaded : new Set(loaded).add(nextSlide)))
    }
    image.src = slides[nextSlide].imageSrc

    if (image.complete && image.naturalWidth > 0) {
      setLoadedSlides((loaded) => (loaded.has(nextSlide) ? loaded : new Set(loaded).add(nextSlide)))
    }
  }, [nextSlide])

  useEffect(() => {
    if (
      prefersReducedMotion ||
      paused ||
      failedSlide === nextSlide ||
      !loadedSlides.has(activeSlide) ||
      !loadedSlides.has(nextSlide)
    ) {
      return
    }

    const timeout = window.setTimeout(() => setActiveSlide(nextSlide), slideDuration)
    return () => window.clearTimeout(timeout)
  }, [activeSlide, failedSlide, loadedSlides, nextSlide, paused, prefersReducedMotion])

  const markLoaded = (index: number) => {
    setLoadedSlides((loaded) => (loaded.has(index) ? loaded : new Set(loaded).add(index)))
    if (failedSlide === index) setFailedSlide(null)
  }

  const handleImageError = (index: number) => {
    setFailedSlide(index)
    if (index === nextSlide) setPaused(true)
  }

  const showSlide = (index: number) => {
    setActiveSlide(index)
    if (prefersReducedMotion) setPaused(true)
  }

  return (
    <section
      className={`page-hero home-hero${prefersReducedMotion ? ' prefers-reduced-motion' : ''}${paused ? ' is-paused' : ''}`}
      aria-label="Darling Wisdom Academy highlights"
    >
      <div className="home-hero-slides" aria-hidden="true">
        {slides.map((slide, index) => {
          const slideStyle = {
            '--hero-desktop-position': slide.desktopPosition,
            '--hero-mobile-position': slide.mobilePosition,
            '--hero-desktop-overlay': slide.desktopOverlay,
            '--hero-mobile-overlay': slide.mobileOverlay,
          } as CSSProperties

          return (
            <div
              key={slide.imageSrc}
              className={`home-hero-slide${index === activeSlide ? ' is-active' : ''}`}
              style={slideStyle}
            >
              <img
                src={slide.imageSrc}
                alt=""
                className="home-hero-slide-image"
                onLoad={() => markLoaded(index)}
                onError={() => handleImageError(index)}
              />
              <div className="home-hero-slide-overlay" />
            </div>
          )
        })}
      </div>

      <div className="page-hero-copy home-hero-copy">
        {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
        <h1>{heading}</h1>
        {intro ? <p className="hero-intro">{intro}</p> : null}

        {actions && actions.length > 0 ? (
          <div className="hero-actions">
            {actions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className={action.variant === 'secondary' ? 'button secondary' : 'button primary'}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}

        <a
          href="#secondary-school-introduction"
          className="hero-scroll-link"
          aria-label="Scroll to the next section"
        >
          Explore
          <span aria-hidden="true">↓</span>
        </a>

        <div className="home-hero-controls" aria-label="Slideshow controls">
          {!prefersReducedMotion ? (
            <button
              type="button"
              className="hero-play-toggle"
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? 'Play' : 'Pause'}
            </button>
          ) : null}
          <div className="hero-slide-indicators" role="group" aria-label="Choose a hero photo">
            {slides.map((slide, index) => (
              <button
                key={slide.imageSrc}
                type="button"
                className={`hero-slide-indicator${index === activeSlide ? ' is-active' : ''}`}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeSlide}
                disabled={failedSlide === index || !loadedSlides.has(index)}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
        </div>
        {failedSlide !== null ? (
          <span className="hero-slide-status" role="status">
            Photo {failedSlide + 1} could not be loaded. The slideshow is paused.
          </span>
        ) : null}
      </div>
    </section>
  )
}
