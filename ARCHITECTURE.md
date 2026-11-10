# Architecture overview

## Objective

This Phase 1 build creates a maintainable React + TypeScript foundation for the Darling Wisdom Academy website. The design keeps content, layout and routing separate so the school can later replace placeholder copy and photography without reworking the whole application.

## Source and project placement

The existing static demonstration was preserved in its original folder. The React app was created in a separate sibling project under the workspace at:

`C:\Darling Wisdom A\darling-wisdom-react`

This keeps the prior HTML prototype intact while giving the team a reusable React foundation for subsequent phases.

## Structure

```text
src/
  app/
    App.tsx
    router.tsx
  components/
    layout/
      Footer.tsx
      Header.tsx
      PageFrame.tsx
  content/
    school.ts
  pages/
    AboutPage.tsx
    AcademicsPage.tsx
    AdmissionsPage.tsx
    ContactPage.tsx
    GalleryPage.tsx
    HomePage.tsx
    NotFoundPage.tsx
    PageShell.tsx
    PrivacyPage.tsx
    SchoolLifePage.tsx
  styles/
    global.css
    tokens.css
  types/
    content.ts
public/
  brand/
    darling-wisdom-academy-logo.png
  images/
    school-hero.jpg
    classroom-learning.jpg
    students-celebrating.jpg
    student-portrait.jpg
    gallery-campus.jpg
```

## Routing and layout

- `src/app/App.tsx` sets up the shared browser router and wraps all routes in a single site shell.
- `src/app/router.tsx` centrally defines the route map for `/`, `/about`, `/academics`, `/school-life`, `/gallery`, `/admissions`, `/contact`, `/privacy`, and a helpful not-found page.
- The layout uses one shared `Header`, `main` landmark and `Footer` so the navigation and page shell stay consistent across the site.
- A skip-to-content link is included for accessibility and all page content sits within a `main` landmark with a clear heading hierarchy.
- The site now includes a reusable `PageHero` component that handles image, overlay, text, breadcrumb, and call-to-action patterns across pages.

## Content management

- `src/content/school.ts` holds the school name, location, logo path, placeholder contact details and navigation configuration.
- `src/content/hero.ts` centralises the image assignment, headings, intros, action links and focal positioning for every hero used across the main pages.
- `src/types/content.ts` declares the shared TypeScript structures used across pages and content modules.
- The site intentionally keeps the narrative, school details and provisional copy separate from display components so future content updates do not require CSS or layout changes.

## Design tokens

The application uses a central token layer in `src/styles/tokens.css` with the provisional palette required for the project:

- Navy: `#102B50`
- White: `#FFFFFF`
- Creamy yellow: `#F5E8B8`

The design system also centralises spacing, border radius and shadow values so the typography and layout remain consistent.

## Asset handling

- Selected real images from the school source folder are copied into `public/images` with descriptive filenames.
- The real logo was copied into `public/brand` without altering the original art.
- No original photographs or files were edited, renamed, moved or deleted.
- All image paths are project-relative URLs, keeping browser code independent from local Windows paths.

## Route-level metadata

Each major page uses a small page wrapper that updates `document.title` when the route changes. This prepares the site for proper browser tab metadata and SEO-friendly route labeling later in the project lifecycle.

## Responsive foundation

The current stylesheet includes a base responsive pattern with card grids, fluid images, and mobile-friendly navigation. The layout intentionally avoids horizontal overflow and keeps the build ready for more detailed homepage and section styling in later phases.

## Motion and interaction layer

The app uses the existing `motion/react` package to add a restrained, school-appropriate motion system without introducing extra animation dependencies.

- `src/components/ui/Animation.tsx` defines reusable primitives for section reveals, staggered content entrances, animated headings and route transitions.
- `Reveal` applies a gentle opacity and Y translation when content enters the viewport, with reduced-motion fallback styles that show content immediately.
- `StaggerGroup` wraps sibling content and applies a short stagger to child items while preserving a readable, non-fragmented layout.
- `AnimatedHeading` keeps headings semantic and accessible while removing the need to hardcode motion patterns at each page.
- `RouteTransition` provides a brief fade and small upward movement around route changes without creating flash or layout jumps.

## Header behaviour

The shared header in `src/components/layout/Header.tsx` is designed to stay compact and readable while preserving the hero photography.

- On the homepage, the header tracks the real hero boundary and switches between transparent and solid states based on the hero's visible position relative to the header bottom.
- The transition uses a small CSS easing and keeps the header height stable so the page does not jump as the state changes.
- When the page is not using a fullscreen image hero, the header starts in a solid state immediately.
- The mobile menu opens in an opaque panel so it remains readable regardless of the header state, and it closes on navigation and on Escape key activation.
- Touch targets remain at a minimum of 44px and the logo remains readable without distortion.

## Future phases

The current architecture remains modular and supports future content and storytelling work without upsetting the route, content and style separation.
