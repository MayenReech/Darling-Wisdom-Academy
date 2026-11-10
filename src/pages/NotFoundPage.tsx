import { Link } from 'react-router-dom'
import { PageShell } from './PageShell'

export function NotFoundPage() {
  return (
    <PageShell title="Page not found">
      <section className="detail-card narrow-card not-found-card">
        <p className="eyebrow">Not found</p>
        <h2>Page not found</h2>
        <p>The page you requested does not exist in this Phase 1 route map.</p>
        <Link to="/" className="button primary">Return home</Link>
      </section>
    </PageShell>
  )
}
