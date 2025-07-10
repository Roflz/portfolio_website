'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, TrendingUp } from 'lucide-react'
import { heroSection } from '../site.config'
import { useState, useRef, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const projectProgressData = [
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 0 },
  { month: 'Mar', count: 1 },
  { month: 'Apr', count: 2 },
  { month: 'May', count: 2 },
  { month: 'Jun', count: 3 },
]

function MiniProjectGraph({ expanded }: { expanded: boolean }) {
  // Mini SVG graph: use Lucide TrendingUp icon for a clean, impactful look
  const miniGraph = (
    <motion.div
      initial={false}
      animate={expanded ? { scale: 1.18, filter: 'drop-shadow(0 0 16px #22c55eaa)' } : { scale: 1, filter: 'drop-shadow(0 2px 8px #22c55e55)' }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className="relative w-[48px] h-[48px] aspect-square flex items-center justify-center cursor-pointer group border-2 border-primary-400 dark:border-primary-500 rounded-xl ring-2 ring-primary-200/40 dark:ring-primary-400/30 shadow-lg hover:ring-4 hover:ring-primary-300/60 hover:shadow-primary-400/30 transition-all duration-200 mt-[5px]"
    >
      <TrendingUp size={32} strokeWidth={3} color="#22c55e" />
    </motion.div>
  )

  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
        style={{ zIndex: 1 }}
      >
        {miniGraph}
      </div>
      {/* Expanded graph, absolutely positioned below */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-background-alt rounded-xl shadow-xl border border-primary/10 transition-all duration-300 overflow-hidden ${expanded ? 'h-32 w-56 opacity-100 pointer-events-auto' : 'h-0 w-56 opacity-0 pointer-events-none'}`}
        style={{ zIndex: 10 }}
      >
        {expanded && (
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={projectProgressData} margin={{ top: 16, right: 16, left: 16, bottom: 16 }}>
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis domain={[0, 'dataMax+1']} tick={{ fontSize: 10 }} />
              <Tooltip wrapperClassName="!text-xs" contentStyle={{ fontSize: 12 }} cursor={false} />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#38bdf8"
                strokeWidth={2}
                dot={true}
                isAnimationActive={true}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        <span className="block text-[10px] text-gray-400 text-center mt-1">Projects Over Time</span>
      </div>
    </div>
  )
}

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Ref and state for dynamic mini graph positioning
  const statsRowRef = useRef<HTMLDivElement>(null)
  const projectsStatRef = useRef<HTMLDivElement>(null)
  const [miniGraphLeft, setMiniGraphLeft] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate the left offset of the projects stat
  useEffect(() => {
    function updatePosition() {
      if (statsRowRef.current && projectsStatRef.current) {
        const statsRect = statsRowRef.current.getBoundingClientRect()
        const projRect = projectsStatRef.current.getBoundingClientRect()
        setMiniGraphLeft(projRect.left + projRect.width / 2 - statsRect.left)
      }
    }
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  // Hover logic for mini graph and expanded chart
  const handleMiniGraphEnter = () => {
    setExpanded(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }
  const handleMiniGraphLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setExpanded(false), 250)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary font-medium"
          >
            {heroSection.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white"
          >
            <span className="gradient-text">{heroSection.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
          >
            {heroSection.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {heroSection.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {heroSection.ctas.map((cta, idx) => (
            <button
                key={cta.label}
                onClick={() => {
                  if (cta.action === 'scroll') {
                    const el = document.getElementById(cta.target)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  } else if (cta.action === 'download') {
                    window.open(cta.target, '_blank')
                  }
                }}
                className={`btn-${cta.style} flex items-center gap-2 px-8 py-3 text-lg`}
            >
                {cta.icon ? <cta.icon size={20} /> : null}
                {cta.label}
            </button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center items-center gap-8 pt-8 relative"
            ref={statsRowRef}
          >
            {heroSection.stats.map((stat) => {
              const isProjects = stat.label === 'Projects Completed';
              return (
                <div
                  className="text-center relative flex flex-col items-center justify-between min-h-[80px]"
                  key={stat.label}
                  ref={isProjects ? projectsStatRef : undefined}
                  onMouseEnter={isProjects ? handleMiniGraphEnter : undefined}
                  onMouseLeave={isProjects ? handleMiniGraphLeave : undefined}
                  style={{ zIndex: isProjects && expanded ? 20 : undefined }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
            </div>
                  {/* Mini graph is not rendered here, but hover area is preserved */}
            </div>
              );
            })}
            {/* Absolutely position the mini graph below the correct stat */}
            {miniGraphLeft !== null && (
              <div
                className="absolute mt-2"
                style={{
                  pointerEvents: 'auto',
                  top: '100%',
                  left: miniGraphLeft,
                  transform: 'translateX(-50%)',
                  width: '32px',
                  zIndex: expanded ? 30 : 10,
                }}
                onMouseEnter={handleMiniGraphEnter}
                onMouseLeave={handleMiniGraphLeave}
              >
                <MiniProjectGraph expanded={expanded} />
            </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 