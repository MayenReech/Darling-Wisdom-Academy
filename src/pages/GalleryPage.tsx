import { PageHero } from '../components/ui/PageHero'
import { pageHeroContent } from '../content/hero'
import { PageShell } from './PageShell'

const gallery = [
  { src: '/images/school-hero.jpg', caption: 'School community highlight', alt: 'Students standing together outdoors with a school banner at the academy.' },
  { src: '/images/classroom-learning.jpg', caption: 'Learning environment', alt: 'Students in a classroom setting engaged in learning and discussion.' },
  { src: '/images/students-celebrating.jpg', caption: 'Celebration and school spirit', alt: 'Students smiling and celebrating together at school.' },
  { src: '/images/student-portrait.jpg', caption: 'Portrait study', alt: 'Student portrait in a school uniform, showing a focused, welcoming campus atmosphere.' },
  { src: '/images/gallery-campus.jpg', caption: 'Campus detail', alt: 'Students and school community members gathered together on campus.' },
]

export function GalleryPage() {
  return (
    <PageShell title="Our School in Pictures">
      <PageHero {...pageHeroContent['/gallery']} />

      <section className="gallery-grid">
        {gallery.map((item) => (
          <figure key={item.src} className="gallery-card">
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </section>
    </PageShell>
  )
}
