'use client'

import { motion } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.5,
        ease: "easeOut",
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 },
        y: { duration: 0.5 }
      }}
      className={`min-h-screen ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
} 