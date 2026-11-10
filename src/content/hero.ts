import type { PageHeroConfig } from '../types/content'

export const pageHeroContent: Record<string, PageHeroConfig> = {
  '/': {
    imageSrc: '/images/school-hero.jpg',
    imageAlt: 'Students standing together outdoors with a school banner at the academy.',
    eyebrow: 'Darling Wisdom Academy · Secondary School',
    heading: 'Sky Is The Limit',
    intro:
      'Inspiring secondary school students to learn with purpose, grow in confidence and strive for excellence.',
    actions: [
      { label: 'Explore Our School', to: '/about', variant: 'primary' },
      { label: 'Admissions', to: '/admissions', variant: 'secondary' },
    ],
    size: 'home',
    imagePosition: 'center center',
  },
  '/about': {
    imageSrc: '/images/gallery-campus.jpg',
    imageAlt: 'Students and school community members gathered together on campus.',
    eyebrow: 'About us',
    heading: 'About Darling Wisdom Academy',
    intro:
      'Darling Wisdom Academy’s secondary school section encourages discipline, commitment and consistent effort, supporting students as they pursue academic excellence.',
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
    ],
  },
  '/academics': {
    imageSrc: '/images/classroom-learning.jpg',
    imageAlt: 'Students in a classroom setting engaged in learning and discussion.',
    eyebrow: 'Academics',
    heading: 'Learning with Purpose',
    intro:
      'The secondary school section focuses on building discipline, confidence and a strong sense of purpose in students as they grow academically.',
    size: 'inner',
    imagePosition: 'center 45%',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Academics', to: '/academics' },
    ],
  },
  '/school-life': {
    imageSrc: '/images/students-celebrating.jpg',
    imageAlt: 'Students smiling and celebrating together at school.',
    eyebrow: 'School life',
    heading: 'Life at Darling Wisdom Academy',
    intro:
      'A supportive learning environment where students build friendships, confidence and responsibility through daily school life.',
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'School Life', to: '/school-life' },
    ],
  },
  '/news': {
    imageSrc: '/images/classroom-learning.jpg',
    imageAlt: 'Students in a classroom setting engaged in learning and discussion.',
    eyebrow: 'News',
    heading: 'Latest School News',
    intro:
      'Updates and announcements from the secondary school section are shared for the school community and families.',
    size: 'inner',
    imagePosition: 'center 40%',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'News', to: '/news' },
    ],
  },
  '/gallery': {
    imageSrc: '/images/student-portrait.jpg',
    imageAlt: 'Student portrait in a school uniform, showing a focused, welcoming campus atmosphere.',
    eyebrow: 'Gallery',
    heading: 'Our School in Pictures',
    intro:
      'A selection of moments reflecting the secondary school environment, student life and campus energy.',
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  '/admissions': {
    imageSrc: '/images/gallery-campus.jpg',
    imageAlt: 'A welcoming campus scene with students and school surroundings.',
    eyebrow: 'Admissions',
    heading: 'Begin Your Journey',
    intro:
      'The secondary school section welcomes students into a disciplined, encouraging and purposeful environment with guidance from the school.',
    actions: [{ label: 'Contact the Academy', to: '/contact', variant: 'primary' }],
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
  '/contact': {
    imageSrc: '/images/gallery-campus.jpg',
    imageAlt: 'Campus setting suitable for connecting with the academy community.',
    eyebrow: 'Contact',
    heading: 'Connect with Our Academy',
    intro:
      'The school can be contacted for guidance and information about the secondary school section and enrolment conversations.',
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  '/privacy': {
    imageSrc: '/images/student-portrait.jpg',
    imageAlt: 'Student portrait showing the school environment in a calm and respectful setting.',
    eyebrow: 'Privacy',
    heading: 'Privacy Information',
    intro:
      'This page provides a readable placeholder for privacy information while the school finalises its approved policy wording.',
    size: 'inner',
    imagePosition: 'center center',
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Privacy', to: '/privacy' },
    ],
  },
}
