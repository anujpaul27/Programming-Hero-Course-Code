'use client'
import { useEffect, useRef } from 'react'
import { skills } from '../data/resume'

const skillCategories = [
  { label: 'FRONTEND', items: skills.frontend, color: '#c2a4ff' },
  { label: 'BACKEND', items: skills.backend, color: '#7b4fff' },
  { label: 'TOOLS', items: skills.tools, color: '#a78bfa' },
  { label: 'CONCEPTS', items: skills.concepts, color: '#8b5cf6' },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 100)
          })
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{
      padding: '80px 5%',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p data-animate style={{
            color: 'var(--accent)',
            fontSize: '12px',
            letterSpacing: '4px',
            marginBottom: '12px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s ease',
          }}>
            WHAT I DO
          </p>
          <h2 data-animate style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.5s ease',
          }}>
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>W</span>HAT{' '}
            <span style={{ color: 'var(--accent)' }}>I</span>{' '}
            D<span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>O</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {skillCategories.map((cat, i) => (
            <div key={i} data-animate style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.5s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${cat.color}40`
              e.currentTarget.style.background = `rgba(194,164,255,0.04)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
            }}
            >
              {/* Corner decoration */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                borderTop: `2px solid ${cat.color}`,
                borderLeft: `2px solid ${cat.color}`,
                borderRadius: '16px 0 0 0',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '40px',
                height: '40px',
                borderBottom: `2px solid ${cat.color}`,
                borderRight: `2px solid ${cat.color}`,
                borderRadius: '0 0 16px 0',
              }} />

              <h3 style={{
                fontSize: '13px',
                letterSpacing: '3px',
                fontWeight: 700,
                color: cat.color,
                marginBottom: '20px',
              }}>
                {cat.label}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.items.map((item, j) => (
                  <span key={j} style={{
                    fontSize: '13px',
                    padding: '5px 12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.8)',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}