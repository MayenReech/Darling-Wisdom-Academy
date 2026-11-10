import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { PageHeroConfig } from '../../types/content'

export function PageHero({
  imageSrc,
  imageAlt,
  heading,
  intro,
  eyebrow,
  actions,
  size = 'inner',
  imagePosition = 'center center',
  breadcrumbs,
}: PageHeroConfig) {
  const prefersReducedMotion = useReducedMotion()
  const heroClass = size === 'home' ? 'page-hero home-hero' : 'page-hero inner-hero'

  return (
    <motion.section
      className={heroClass}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav className="hero-breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.to} className="breadcrumb-item">
              {index > 0 ? <span className="breadcrumb-separator">/</span> : null}
              <Link to={crumb.to}>{crumb.label}</Link>
            </span>
          ))}
        </nav>
      ) : null}

      <div className="page-hero-media">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="page-hero-image"
          style={{ objectPosition: imagePosition }}
          loading="eager"
          sizes={size === 'home' ? '(max-width: 768px) 100vw, 70vw' : '(max-width: 768px) 100vw, 100vw'}
          initial={prefersReducedMotion ? false : { scale: 1.04, opacity: 0.96 }}
          animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="page-hero-overlay" aria-hidden="true" />
      </div>

      <motion.div
        className="page-hero-copy"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
      >
        {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
        <h1>{heading}</h1>
        {intro ? <p className="hero-intro">{intro}</p> : null}

        {actions && actions.length > 0 ? (
          <div className="hero-actions">
            {actions.map((action, index) => (
              <motion.div
                key={action.to}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 + index * 0.08, ease: 'easeOut' }}
              >
                <Link
                  to={action.to}
                  className={action.variant === 'secondary' ? 'button secondary' : 'button primary'}
                >
                  {action.label}
                </Link>
              </motion.div>
            ))}
          </div>
        ) : null}

        {size === 'home' ? (
          <a href="#secondary-school-introduction" className="hero-scroll-link" aria-label="Scroll to the next section">
            Explore
            <span aria-hidden="true">↓</span>
          </a>
        ) : null}
      </motion.div>
    </motion.section>
  )
}
