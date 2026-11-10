export type NavItem = {
  label: string
  path: string
}

export type ContactDetails = {
  email: string
  phone: string
  address: string
}

export type SchoolProfile = {
  name: string
  shortName: string
  supportingLabel: string
  location: string
  tagline: string
  motto: string
  supportingStatement: string
  values: string[]
  logoSrc: string
  heroImageSrc: string
  videoId: string
  contact: ContactDetails
  navigation: NavItem[]
  statusNote: string
}

export type HeroActionLink = {
  label: string
  to: string
  variant?: 'primary' | 'secondary'
}

export type HeroBreadcrumb = {
  label: string
  to: string
}

export type PageHeroConfig = {
  imageSrc: string
  imageAlt: string
  heading: string
  intro?: string
  eyebrow?: string
  actions?: HeroActionLink[]
  size?: 'home' | 'inner'
  imagePosition?: string
  breadcrumbs?: HeroBreadcrumb[]
}
