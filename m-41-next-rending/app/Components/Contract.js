'use client'
import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../data/resume'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUpRight } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
  { icon: FiInstagram, href: personalInfo.instagram, label: 'Instagram' },
]

export default function Contact() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

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

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} style={{
      padding: '120px 5% 80px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Big CTA */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <p data-animate style={{
            color: 'var(--accent)',
            fontSize: '12px',
            letterSpacing: '4px',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            Contact
          </p>
          <h2 data-animate style={{
            fontSize: 'clamp(40px, 7vw, 96px)',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '32px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            Let&apos;s work<br />
            <span style={{
              background: 'linear-gradient(135deg, #c2a4ff 0%, #7b4fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              together
            </span>
          </h2>
          <p data-animate style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '480px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            I&apos;m currently available for freelance work and full-time positions.
            Let&apos;s build something amazing together.
          </p>
          <div data-animate style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            <a href={`mailto:${personalInfo.email}`} style={{
              padding: '16px 36px',
              background: 'var(--accent)',
              color: '#0b080c',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(194,164,255,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              Send Email <FiArrowUpRight />
            </a>
            <button onClick={copyEmail} style={{
              padding: '16px 36px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'inherit'
            }}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* Contact grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          paddingTop: '60px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div data-animate style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Email
            </h4>
            <a href={`mailto:${personalInfo.email}`} style={{
              fontSize: '15px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'inherit'}
            >
              {personalInfo.email}
            </a>
          </div>

          <div data-animate style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Phone
            </h4>
            <a href={`tel:${personalInfo.phone}`} style={{ fontSize: '15px' }}>
              {personalInfo.phone}
            </a>
          </div>

          <div data-animate style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Social
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    paddingBottom: '10px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <Icon size={14} /> {label} <FiArrowUpRight size={12} style={{ marginLeft: 'auto' }} />
                </a>
              ))}
            </div>
          </div>

          <div data-animate style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
            <h4 style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', textTransform: 'uppercase' }}>
              Credit
            </h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              Designed and Developed by{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Anuj Paul</span>
              <br />
              <span style={{ fontSize: '13px', opacity: 0.6 }}>© 2024</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}