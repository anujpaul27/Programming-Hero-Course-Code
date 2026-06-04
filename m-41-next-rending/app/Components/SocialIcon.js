'use client'
import { personalInfo } from './resume'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const icons = [
  { Icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { Icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: FaXTwitter, href: personalInfo.twitter, label: 'Twitter' },
  { Icon: FaInstagram, href: personalInfo.instagram, label: 'Instagram' },
]

export default function SocialIcons() {
  return (
    <>
      <div style={{
        position: 'fixed',
        left: '24px',
        bottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: 50,
        alignItems: 'center',
      }}>
        {icons.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '18px',
              transition: 'color 0.2s, transform 0.2s',
              display: 'flex',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Icon />
          </a>
        ))}
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
          marginTop: '4px',
        }} />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .social-fixed { display: none !important; }
        }
      `}</style>
    </>
  )
}