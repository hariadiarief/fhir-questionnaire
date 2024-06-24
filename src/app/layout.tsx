import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import './globals.css'
import './lfrom.css'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'Next PWA'
const APP_DEFAULT_TITLE = 'Next.js PWA Starter Kit'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'Build your PWA easier'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='mx-auto flex min-h-screen flex-col'>
          <main className='flex grow flex-col'>{children}</main>
          {/* <SiteFooter /> */}
          <Link
            href='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/styles.css'
            media='screen'
            rel='stylesheet'
          />
          <Script
            src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/assets/lib/zone.min.js'
            async
          ></Script>
          <Script
            src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/lhc-forms.js'
            async
          ></Script>
          <Script
            src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/fhir/R4/lformsFHIR.min.js'
            async
          ></Script>
        </div>
      </body>
    </html>
  )
}
