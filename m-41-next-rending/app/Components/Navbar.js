'use client'
import { useState, useEffect } from 'react'
import { navLinks, meta } from './resume'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from './ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 24px' : '20px 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-2)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="/" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '20px',
            letterSpacing: '-0.04em',
            color: 'var(--text)',
          }}>
            <span style={{ color: 'var(--accent)' }}>A</span>nuj{' '}
            <span style={{ color: 'var(--accent)' }}>P</span>aul
          </a>

          {/* Desktop nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }} className="desktop-nav">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--accent)' : 'var(--text-2)',
                    background: isActive ? 'var(--surface)' : 'transparent',
                    transition: 'all 0.2s',
                    letterSpacing: '0.01em',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text)'
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-2)'
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                fontSize: '16px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--border-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-2)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Resume button */}
            <a
              href={meta.resumeUrl}
              className="btn-primary"
              style={{ padding: '8px 20px', fontSize: '13px' }}
            >
              Resume
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              style={{
                width: '36px',
                height: '36px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text)',
                cursor: 'pointer',
                fontSize: '18px',
              }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'var(--bg)',
          paddingTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              style={{
                display: 'block',
                width: '100%',
                padding: '16px 24px',
                borderRadius: '12px',
                fontSize: '20px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                textAlign: 'center',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}