'use client'
import { useEffect, useRef } from 'react'
import { experience } from './resume'

export default function Career() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{
      padding: '120px 5%',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'start',
        }} className="career-grid">

          {/* Left */}
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
              Experience
            </p>
            <h2 data-animate style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.05,
              background: 'linear-gradient(0deg, #7b4fff, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}>
              My career<br />&<br />experience
            </h2>
          </div>

          {/* Right - Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #c2a4ff, transparent)',
            }} />

            {experience.map((item, i) => (
              <div key={i} data-animate style={{
                paddingLeft: '40px',
                paddingBottom: i < experience.length - 1 ? '60px' : 0,
                position: 'relative',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.6s ease',
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 16px rgba(194,164,255,0.6)',
                }} />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>
                      {item.role}
                    </h3>
                    <p style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 500 }}>
                      {item.company} · {item.type}
                    </p>
                  </div>
                  <span style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'monospace',
                    whiteSpace: 'nowrap',
                    padding: '4px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    {item.period}
                  </span>
                </div>

                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .career-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}