import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://denttick.com'),
  title: {
    default: "DentTick AI | Dental Growth Operating System India",
    template: "%s | DentTick AI"
  },
  description: "DentTick is India's leading AI-powered dental growth operating system. Automate patient acquisition, WhatsApp CRM, and clinic management in one seamless platform.",
  keywords: [
    "dental software India", 
    "clinic management software", 
    "dental CRM", 
    "AI dental receptionist", 
    "patient acquisition for dentists", 
    "WhatsApp API for dental clinics", 
    "best dental software in India",
    "dentist operating system"
  ],
  authors: [{ name: "DentTick AI", url: "https://denttick.com" }],
  creator: "DentTick",
  publisher: "DentTick AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-in',
    },
  },
  openGraph: {
    title: "DentTick AI | Dental Growth Operating System India",
    description: "Automate patient acquisition, communications and clinic management in one seamless AI platform.",
    url: "https://denttick.com",
    siteName: "DentTick AI",
    images: [
      {
        url: "/images/og-image.jpg", // Standard OG image size 1200x630
        width: 1200,
        height: 630,
        alt: "DentTick AI - Dental Growth Operating System India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentTick AI | Dental Growth Operating System India",
    description: "Automate patient acquisition, communications and management in one seamless platform.",
    images: ["/images/og-image.jpg"],
    creator: "@denttickai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // GEO SEO Tags
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    // Answer Engine Optimization (AEO) signals
    "subject": "Dental Clinic Management Software",
    "audience": "Dentists, Dental Clinics, Orthodontists",
  }
};

export default function RootLayout({ children }) {
  // Schema.org JSON-LD for Organization and SoftwareApplication
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DentTick AI',
    operatingSystem: 'Web-based',
    applicationCategory: 'BusinessApplication',
    description: 'DentTick is India\'s leading AI-powered dental growth operating system. Automate patient acquisition, WhatsApp CRM, and clinic management.',
    url: 'https://denttick.com',
    publisher: {
      '@type': 'Organization',
      name: 'DentTick AI',
      url: 'https://denttick.com',
      logo: 'https://denttick.com/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        areaServed: 'IN', // Geo-targeting India
        availableLanguage: ['en', 'hi']
      }
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
