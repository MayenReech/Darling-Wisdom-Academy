import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

const programmes = [
  'Foundation learning and study skills',
  'Sciences and applied learning',
  'Humanities and communications',
  'Creative, practical and leadership enrichment',
]

export function AcademicsPage() {
  return (
    <PageShell title="Learning with Purpose">
      <PageHero {...pageHeroContent['/academics']} />

      <section className="detail-card wide-card">
        <h3>Secondary education focus</h3>
        <p>
          The secondary school section is centred on building confidence, discipline and academic
          purpose as students continue their education and prepare for their next steps.
        </p>
        <ul className="stack-list">
          {programmes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
