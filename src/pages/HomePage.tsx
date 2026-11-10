import { Link } from 'react-router-dom'
import { useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Reveal } from '../components/ui/Animation'
import { HomeHero } from '../components/ui/HomeHero'
import { SchoolVideo } from '../components/ui/SchoolVideo'
import { schoolProfile } from '../content/school'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

function HomeSectionHeading({
  id,
  children,
  tone,
}: {
  id: string
  children: ReactNode
  tone: 'white' | 'pale'
}) {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const prefersReducedMotion = Boolean(useReducedMotion())
  const [armed, setArmed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion || !headingRef.current || !('IntersectionObserver' in window)) return

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          setVisible(true)
          observer.disconnect()
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
      )

      observer.observe(headingRef.current)
      setArmed(true)
      return () => observer.disconnect()
    } catch (error) {
      console.error('Unable to observe the homepage section heading.', error)
    }
  }, [prefersReducedMotion])

  return (
    <div className={`home-section-heading-band is-${tone}`}>
      <div className="home-section-heading-inner">
        <h2
          ref={headingRef}
          id={id}
          className={`home-section-heading${armed && !visible ? ' is-pending' : ''}${visible ? ' is-visible' : ''}`}
        >
          {children}
        </h2>
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <PageShell title="Sky Is The Limit" className="home-page-shell">
      <HomeHero {...pageHeroContent['/']} />

      <div className="home-layout">
        <HomeSectionHeading id="home-story-heading" tone="white">
          Our Story
        </HomeSectionHeading>
        <Reveal
          as="section"
          id="secondary-school-introduction"
          className="home-story-section home-story"
          aria-labelledby="home-story-heading"
        >
          <div className="home-story-image">
            <img
              src="/images/school-hero.jpg"
              alt="Darling Wisdom Academy students standing together outdoors."
              loading="lazy"
            />
          </div>
          <div className="home-story-copy">
            <h3 className="section-title">
              Learning with purpose. Growing with confidence.
            </h3>
            <p>
              Darling Wisdom Academy’s secondary school section encourages discipline, commitment
              and consistent effort, supporting students as they pursue academic excellence.
            </p>
            <Link to="/about" className="button muted">
              Discover our story
            </Link>
          </div>
        </Reveal>

        <HomeSectionHeading id="home-video-heading" tone="pale">
          School Video
        </HomeSectionHeading>
        <SchoolVideo headingId="home-video-heading" />

        <HomeSectionHeading id="home-learning-heading" tone="white">
          Learning at Darling Wisdom
        </HomeSectionHeading>
        <Reveal
          as="section"
          className="home-story-section home-learning"
          aria-labelledby="home-learning-heading"
        >
          <div className="home-story-copy">
            <h3 className="section-title">
              Strive for excellence
            </h3>
            <p>
              The secondary school section focuses on building discipline, confidence and a strong
              sense of purpose in students as they grow academically. We encourage sound study
              habits, hard work and steady progress.
            </p>
            <ul className="home-value-list">
              {schoolProfile.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
            <Link to="/academics" className="button muted">
              Explore academics
            </Link>
          </div>
          <div className="home-story-image">
            <img
              src="/images/classroom-learning.jpg"
              alt="Students learning together in a classroom setting."
              loading="lazy"
            />
          </div>
        </Reveal>

        <HomeSectionHeading id="home-life-heading" tone="pale">
          Life at Darling Wisdom
        </HomeSectionHeading>
        <Reveal
          as="section"
          className="home-story-section home-life"
          aria-labelledby="home-life-heading"
        >
          <div className="home-story-image">
            <img
              src="/images/students-celebrating.jpg"
              alt="Darling Wisdom Academy students smiling and celebrating together."
              loading="lazy"
            />
          </div>
          <div className="home-story-copy">
            <h3 className="section-title">
              A community built on confidence and belonging
            </h3>
            <p>
              A supportive learning environment where students build friendships, confidence and
              responsibility through daily school life.
            </p>
            <Link to="/school-life" className="button muted">
              Explore school life
            </Link>
          </div>
        </Reveal>

        <HomeSectionHeading id="home-campuses-heading" tone="white">
          Our Campuses
        </HomeSectionHeading>
        <Reveal
          as="section"
          className="home-story-section home-campuses"
          aria-labelledby="home-campuses-heading"
        >
          <div className="home-story-copy">
            <h3 className="section-title">
              A place to learn and grow
            </h3>
            <p>
              Our school community is based in {schoolProfile.location}. Get in touch with the
              academy for directions and information about visiting.
            </p>
            <Link to="/contact" className="button muted">
              Find our school
            </Link>
          </div>
          <div className="home-story-image">
            <img
              src="/images/gallery-campus.jpg"
              alt="Darling Wisdom Academy students and community members gathered on campus."
              loading="lazy"
            />
          </div>
        </Reveal>

        <HomeSectionHeading id="home-admissions-heading" tone="pale">
          Admissions and Contact
        </HomeSectionHeading>
        <Reveal
          as="section"
          className="home-admissions-section"
          aria-labelledby="home-admissions-heading"
        >
          <div className="home-admissions-image">
            <img
              src="/images/student-portrait.jpg"
              alt="Darling Wisdom Academy student in school uniform."
              loading="lazy"
            />
          </div>
          <div className="home-admissions-copy">
            <h3 className="section-title">
              Your next step starts here
            </h3>
            <p>
              The secondary school section welcomes students who are ready to learn with purpose
              and grow in a disciplined, encouraging environment. Contact the academy for formal
              guidance and the most current admissions information.
            </p>
            <div className="home-cta-row">
              <Link to="/admissions" className="button primary">
                Admissions
              </Link>
              <Link to="/contact" className="button muted">
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  )
}
