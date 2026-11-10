import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { schoolProfile } from '../content/school'
import { PageShell } from './PageShell'

export function ContactPage() {
  return (
    <PageShell title="Connect with Our Academy">
      <PageHero {...pageHeroContent['/contact']} />

      <section className="content-grid two-up">
        <article className="detail-card">
          <h3>School location</h3>
          <p>{schoolProfile.location}</p>
          <p>{schoolProfile.contact.address}</p>
        </article>

        <article className="detail-card">
          <h3>Contact channels</h3>
          <p>
            Email: <a href={`mailto:${schoolProfile.contact.email}`}>{schoolProfile.contact.email}</a>
          </p>
          <p>
            Phone:{' '}
            <a href={`tel:${schoolProfile.contact.phone.replaceAll(' ', '')}`}>
              {schoolProfile.contact.phone}
            </a>
          </p>
        </article>
      </section>
    </PageShell>
  )
}
