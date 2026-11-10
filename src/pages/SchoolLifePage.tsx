import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

export function SchoolLifePage() {
  return (
    <PageShell title="Life at Darling Wisdom Academy">
      <PageHero {...pageHeroContent['/school-life']} />

      <section className="content-grid three-up">
        <article className="detail-card">
          <h3>Student life</h3>
          <p>Daily routines that encourage discipline, order and a strong sense of belonging.</p>
        </article>
        <article className="detail-card">
          <h3>Leadership</h3>
          <p>Opportunities for students to develop confidence, responsibility and consistent effort.</p>
        </article>
        <article className="detail-card">
          <h3>Community</h3>
          <p>A school environment rooted in respect, hard work and shared progress.</p>
        </article>
      </section>
    </PageShell>
  )
}
