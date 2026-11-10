import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

export function PrivacyPage() {
  return (
    <PageShell title="Privacy Information">
      <PageHero {...pageHeroContent['/privacy']} />

      <section className="detail-card wide-card">
        <h3>Privacy notice</h3>
        <p>
          No personal data is collected or processed in this phase. This placeholder page exists to
          establish the final route structure and to keep the legal information separate from the main
          school content until the academy approves the final wording.
        </p>
      </section>
    </PageShell>
  )
}
