import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { useDocumentTitle } from '../components/layout/PageFrame'

type PageShellProps = {
  title: string
  children: ReactNode
  className?: string
}

export function PageShell({ title, children, className }: PageShellProps) {
  useDocumentTitle(title)

  return (
    <motion.div
      className={className ? `page-shell ${className}` : 'page-shell'}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
