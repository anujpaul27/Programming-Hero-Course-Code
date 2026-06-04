import { ThemeProvider } from './Components/ThemeContext'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://anujpaul.dev'),
  title: {
    default: 'Anuj Paul — Full-Stack Developer | MERN · Next.js · JavaScript',
    template: '%s | Anuj Paul',
  },
  description: 'Full-Stack Developer specializing in MERN Stack and Next.js. Building scalable, production-grade web applications with React, Node.js, MongoDB. 300+ DSA problems solved.',
  keywords: [
    'Full Stack Developer', 'MERN Stack Developer', 'Next.js Developer',
    'React Developer', 'Node.js Developer', 'JavaScript Developer',
    'Web Developer Bangladesh', 'MongoDB', 'Express.js', 'Anuj Paul'
  ],
  authors: [{ name: 'Anuj Paul', url: 'https://github.com/anujpaul27' }],
  creator: 'Anuj Paul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anujpaul.dev',
    title: 'Anuj Paul — Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack and Next.js.',
    siteName: 'Anuj Paul Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Paul — Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack and Next.js.',
    creator: '@anujpaul27',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}