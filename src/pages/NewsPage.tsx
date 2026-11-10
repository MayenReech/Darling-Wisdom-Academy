import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

const newsEntries = [
  {
    date: '23 October 2026',
    title: 'Preparing for S4 Examinations',
    text:
      'The school announced that the 2026 S4 examination timetable was available, encouraging students to prepare and make their parents and teachers proud.',
  },
  {
    date: '19 October 2026',
    title: 'Discipline and Consistency',
    text:
      'The school highlighted discipline, focus, hard work and consistent effort as foundations for success.',
  },
]

export function NewsPage() {
  return (
    <PageShell title="Latest School News">
      <PageHero {...pageHeroContent['/news']} />

      <section className="news-list">
        {newsEntries.map((entry) => (
          <article key={entry.title} className="detail-card news-item">
            <p className="news-date">{entry.date}</p>
            <h3>{entry.title}</h3>
            <p>{entry.text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
