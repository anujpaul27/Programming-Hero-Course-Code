'use client'
import { useEffect, useRef, useState } from 'react'
import { meta, stats } from './resume'
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

const ROLES = ['Full-Stack Developer', 'MERN Stack Engineer', 'Next.js Specialist', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const cursorRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    setMounted(true)
    const currentRole = ROLES[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  // Cursor glow follows mouse
  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 80px',
    }} className="grid-bg">

      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" style={{ opacity: mounted ? 1 : 0 }} />

      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-30%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,120,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,200,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          background: 'rgba(100,255,180,0.08)',
          border: '1px solid rgba(100,255,180,0.2)',
          borderRadius: '100px',
          fontSize: '13px',
          color: 'var(--green)',
          marginBottom: '32px',
          fontFamily: 'DM Mono, monospace',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--green)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 100px)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '24px',
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Anuj</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, var(--accent) 0%, #a78bfa 50%, var(--accent-2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% auto',
            animation: 'shimmer 4s linear infinite',
          }}>
            Paul.
          </span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          color: 'var(--text-2)',
          marginBottom: '28px',
          fontWeight: 300,
          fontFamily: 'DM Mono, monospace',
          letterSpacing: '-0.01em',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          <span style={{ color: 'var(--accent)' }}>$ </span>
          <span>{displayed}</span>
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '1.2em',
            background: 'var(--accent)',
            animation: 'blink 1s step-end infinite',
            marginLeft: '1px',
          }} />
        </div>

        {/* Bio */}
        <p style={{
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          color: 'var(--text-2)',
          maxWidth: '580px',
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: '40px',
        }}>
          {meta.bio}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects <FiArrowRight size={16} />
          </a>
          <a href={`mailto:${meta.email}`} className="btn-secondary">
            Let&apos;s Talk
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-2)'
            }}
          >
            <FiGithub size={18} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-2)'
            }}
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: '720px',
          border: '1px solid var(--border)',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              padding: '20px 24px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
            >
              <div style={{
                fontSize: '24px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.3 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.4,
        fontSize: '11px',
        letterSpacing: '0.1em',
        color: 'var(--text-3)',
        writingMode: 'vertical-rl',
        fontFamily: 'DM Mono, monospace',
      }}>
        SCROLL DOWN
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--text-3), transparent)',
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cursor-glow { display: none; }
        }
      `}</style>
    </section>
  )
}