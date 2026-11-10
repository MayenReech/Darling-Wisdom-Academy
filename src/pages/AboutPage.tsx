import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

export function AboutPage() {
  return (
    <PageShell title="About Darling Wisdom Academy">
      <PageHero {...pageHeroContent['/about']} />

      <section className="content-grid two-up">
        <article className="detail-card">
          <h3>Secondary school culture</h3>
          <p>
            Darling Wisdom Academy’s secondary school section encourages discipline, commitment and
            consistent effort, supporting students as they pursue academic excellence.
          </p>
        </article>

        <article className="detail-card">
          <h3>Values</h3>
          <p>
            Discipline, commitment, consistency, hard work and academic excellence guide the school
            environment and the expectations placed on students.
          </p>
        </article>
      </section>
    </PageShell>
  )
}
