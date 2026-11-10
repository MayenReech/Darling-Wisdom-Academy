import { motion, useReducedMotion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import { Children, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children?: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: ElementType
  once?: boolean
  amount?: number
} & Omit<HTMLMotionProps<'div'>, 'children' | 'className'>

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as: Component = 'div',
  once = true,
  amount = 0.2,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionComponent =
    Component === 'div'
      ? motion.div
      : ((motion[Component as keyof typeof motion] ?? motion.div) as typeof motion.div)

  return (
    <MotionComponent
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

type StaggerGroupProps = {
  children?: ReactNode
  className?: string
  stagger?: number
  delay?: number
  as?: ElementType
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as: Component = 'div',
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion()
  const MotionComponent =
    Component === 'div'
      ? motion.div
      : ((motion[Component as keyof typeof motion] ?? motion.div) as typeof motion.div)

  return (
    <MotionComponent
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      style={{ display: 'grid', gap: '1rem' }}
    >
      {Children.map(children, (child, index) =>
        prefersReducedMotion ? (
          child
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: delay + index * stagger, ease: 'easeOut' }}
          >
            {child}
          </motion.div>
        ),
      )}
    </MotionComponent>
  )
}

type AnimatedHeadingProps = {
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  delay?: number
  id?: string
}

export function AnimatedHeading({
  children,
  className,
  level = 2,
  delay = 0,
  id,
}: AnimatedHeadingProps) {
  const prefersReducedMotion = useReducedMotion()
  const Tag = `h${level}` as keyof typeof motion
  const MotionTag = motion[Tag] as typeof motion.h1

  return (
    <MotionTag
      id={id}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}

type RouteTransitionProps = {
  children: ReactNode
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
