import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

export function AdmissionsPage() {
  return (
    <PageShell title="Begin Your Journey">
      <PageHero {...pageHeroContent['/admissions']} />

      <section className="detail-card wide-card">
        <h3>Secondary school admissions</h3>
        <p>
          The secondary school section welcomes students who are ready to learn with purpose and to
          grow in a disciplined and encouraging environment. Contact the school for formal guidance and
          the most current information.
        </p>
      </section>
    </PageShell>
  )
}
