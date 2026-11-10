import type { SchoolProfile } from '../types/content'

export const schoolProfile: SchoolProfile = {
  name: 'Darling Wisdom Academy',
  shortName: 'Darling Wisdom Academy',
  supportingLabel: 'Secondary School',
  location: 'Juba, South Sudan',
  tagline: 'Strive for Excellence',
  motto: 'Sky Is The Limit',
  supportingStatement:
    'Inspiring secondary school students to learn with purpose, grow in confidence and strive for excellence.',
  values: ['discipline', 'commitment', 'consistency', 'hard work', 'academic excellence'],
  logoSrc: '/brand/darling-wisdom-academy-logo.png',
  heroImageSrc: '/images/school-hero.jpg',
  videoId: 'iIVRdDBCVMc',
  contact: {
    email: 'hello@darlingwisdomacademy.example',
    phone: '+211 982 221 962',
    address: 'Juba, Central Equatoria State, South Sudan',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'School Life', path: '/school-life' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Contact', path: '/contact' },
  ],
  statusNote:
    'Placeholder content is intentionally used for this phase while the school confirms details.',
}

export const pageHighlights = [
  {
    eyebrow: 'Our values',
    title: 'Discipline, commitment and consistent effort.',
    description:
      'The secondary school section promotes values that strengthen character, focus and academic excellence.',
  },
  {
    eyebrow: 'Academic focus',
    title: 'A learning culture rooted in purpose and confidence.',
    description:
      'Students are encouraged to build sound study habits and to approach learning with determination and clarity.',
  },
  {
    eyebrow: 'School community',
    title: 'A supportive environment for growth and achievement.',
    description:
      'The school community is shaped around respect, effort and steady progress alongside learning.',
  },
]
