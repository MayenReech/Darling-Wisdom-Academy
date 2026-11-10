import { Link } from 'react-router-dom'
import { schoolProfile } from '../../content/school'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-explore">
          <h2 className="footer-heading">Explore Darling Wisdom</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/about">About</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/school-life">School Life</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-contact-panel">
          <img
            src={schoolProfile.logoSrc}
            alt="Darling Wisdom Academy crest"
            className="footer-crest"
          />
          <h2 className="footer-heading">Contact Us</h2>
          <p>{schoolProfile.contact.address}</p>
          <a className="footer-phone" href="tel:+211982221962">
            {schoolProfile.contact.phone}
          </a>
        </div>

        <div className="footer-follow">
          <h2 className="footer-heading">Follow Darling Wisdom</h2>
          <a
            className="footer-social-link"
            href={`https://youtu.be/${schoolProfile.videoId}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Watch Darling Wisdom Academy on YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
            <span>YouTube</span>
          </a>
          <Link className="footer-privacy-link" to="/privacy">
            Privacy Policy
          </Link>
          <p className="footer-copyright">© 2026 Darling Wisdom Academy</p>
        </div>
      </div>
    </footer>
  )
}
