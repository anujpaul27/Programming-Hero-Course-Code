'use client'
import { useEffect, useRef } from 'react'
import { personalInfo } from '../data/resume'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section style={{
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 5% 60px',
    }}>
      {/* Background orb */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(155,109,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'orbFloat 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(194,164,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        animation: 'orbFloat 10s ease-in-out infinite reverse',
      }} />

      <div ref={heroRef} style={{ width: '100%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <span style={{
            color: 'var(--accent)',
            fontSize: '14px',
            letterSpacing: '4px',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}>
            Hello, I&apos;m
          </span>

          <h1 style={{
            fontSize: 'clamp(52px, 10vw, 120px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-2px',
          }}>
            <span style={{ display: 'block' }}>ANUJ</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #c2a4ff 0%, #7b4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              PAUL
            </span>
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '8px',
            flexWrap: 'wrap',
          }}>
            <span style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 300,
              letterSpacing: '2px',
            }}>
              A Creative
            </span>
            <div style={{
              height: '28px',
              overflow: 'hidden',
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              fontWeight: 600,
              color: 'var(--accent)',
            }}>
              <div style={{ animation: 'slideText 4s infinite ease-in-out' }}>
                <div>Full-Stack Developer</div>
                <div>MERN Stack Engineer</div>
                <div>UI/UX Enthusiast</div>
              </div>
            </div>
          </div>

          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '480px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Building scalable web applications with modern technologies.
            300+ problems solved on Codeforces & CodeChef.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '32px',
            flexWrap: 'wrap',
          }}>
            <a
              href="#work"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                padding: '14px 32px',
                background: 'var(--accent)',
                color: '#0b080c',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 10px 30px rgba(194,164,255,0.3)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              View Work
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                padding: '14px 32px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                e.target.style.color = 'inherit'
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.4,
        animation: 'fadeUp 1s 1.5s both',
      }}>
        <span style={{ fontSize: '11px', letterSpacing: '3px' }}>SCROLL</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #fff, transparent)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes slideText {
          0%, 30% { transform: translateY(0); }
          33%, 63% { transform: translateY(-100%); }
          66%, 96% { transform: translateY(-200%); }
          100% { transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
    </section>
  )
}