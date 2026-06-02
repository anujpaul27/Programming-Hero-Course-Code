'use client'
import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/resume'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 150)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{
      padding: '120px 5%',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-grid">

          {/* Left side */}
          <div>
            <p data-animate style={{
              color: 'var(--accent)',
              fontSize: '12px',
              letterSpacing: '4px',
              fontWeight: 600,
              textTransform: 'uppercase',
              marginBottom: '16px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}>
              About Me
            </p>

            <h2 data-animate style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: '32px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}>
              Crafting digital<br />
              <span style={{
                background: 'linear-gradient(135deg, #c2a4ff 0%, #7b4fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                experiences
              </span>
            </h2>

            <p data-animate style={{
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              fontWeight: 300,
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}>
              {personalInfo.about}
            </p>
          </div>

          {/* Right side — stat cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              { number: '300+', label: 'Problems Solved', sub: 'Codeforces & CodeChef' },
              { number: '2+', label: 'Full-Stack Projects', sub: 'Production Ready' },
              { number: '1031', label: 'Max CF Rating', sub: 'Competitive Programming' },
              { number: '2★', label: 'CodeChef Rating', sub: 'Algorithm Expert' },
            ].map((stat, i) => (
              <div key={i} data-animate style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '28px 24px',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.6s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(194,164,255,0.3)'
                e.currentTarget.style.background = 'rgba(194,164,255,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
              >
                <div style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}