'use client'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/resume'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Work() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={ref} style={{
      padding: '120px 5%',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <p data-animate style={{
            color: 'var(--accent)',
            fontSize: '12px',
            letterSpacing: '4px',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '12px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            Portfolio
          </p>
          <h2 data-animate style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            My <span style={{ color: 'var(--accent)' }}>Work</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div data-animate style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '40px',
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'all 0.6s ease, border-color 0.3s, background 0.3s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(194,164,255,0.3)'
      e.currentTarget.style.background = 'rgba(194,164,255,0.03)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '8px',
          }}>
            <span style={{
              fontSize: '13px',
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.3)',
            }}>
              0{index + 1}
            </span>
            <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700 }}>
              {project.title}
            </h3>
            <span style={{
              padding: '4px 12px',
              background: 'rgba(194,164,255,0.1)',
              border: '1px solid rgba(194,164,255,0.2)',
              borderRadius: '20px',
              fontSize: '12px',
              color: 'var(--accent)',
              fontWeight: 600,
            }}>
              {project.category}
            </span>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '1px',
          }}>
            {project.subtitle}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              background: 'var(--accent)',
              color: '#0b080c',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              transition: 'all 0.2s',
            }}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>

      <p style={{
        fontSize: '15px',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.7,
        marginBottom: '24px',
        fontWeight: 300,
        maxWidth: '720px',
      }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {project.tech.map((t, i) => (
          <span key={i} style={{
            fontSize: '12px',
            padding: '4px 12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            color: 'rgba(255,255,255,0.7)',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Features toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--accent)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '1px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: 0,
          transition: 'opacity 0.2s',
        }}
      >
        {expanded ? '↑ HIDE FEATURES' : '↓ KEY FEATURES'}
      </button>

      {expanded && (
        <ul style={{
          marginTop: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '10px',
          listStyle: 'none',
        }}>
          {project.features.map((f, i) => (
            <li key={i} style={{
              display: 'flex',
              gap: '10px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.5,
            }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>▹</span>
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}