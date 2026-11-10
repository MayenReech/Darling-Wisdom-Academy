import { motion } from 'motion/react'
import { useEffect } from 'react'

type PageFrameProps = {
  title: string
  intro: string
  children: React.ReactNode
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Darling Wisdom Academy`
  }, [title])
}

export function PageFrame({ title, intro, children }: PageFrameProps) {
  useDocumentTitle(title)

  return (
    <motion.div
      className="page-shell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <header className="page-header">
        <p className="eyebrow">Darling Wisdom Academy</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
      </header>
      {children}
    </motion.div>
  )
}
