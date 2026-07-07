import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from './page.module.css';
import { featuresData } from '../../data/features';

// Small icons for the titles (solid white, simple paths)
const SmallIcon = ({ children }) => (
  <div className={styles.featureIconSmall}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

const CheckIcon = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const metadata = {
  title: 'Features | DentTick AI Dental Software',
  description: 'Explore the powerful features of DentTick AI, including our AI Dental Receptionist, WhatsApp CRM, and automated patient acquisition tools built for Indian clinics.',
  keywords: ['dental software features', 'AI receptionist for dentists', 'WhatsApp dental CRM', 'patient management system India', 'dental clinic automation'],
  openGraph: {
    title: 'DentTick AI Features | The Ultimate Dental Growth OS',
    description: 'Explore the powerful features of DentTick AI, including our AI Dental Receptionist, WhatsApp CRM, and automated patient acquisition tools built for Indian clinics.',
    url: 'https://denttick.com/features',
    images: [{ url: '/images/og-image.jpg' }],
  },
  alternates: {
    canonical: '/features',
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "subject": "Dental Software Features",
    "audience": "Dentists, Dental Clinics, Orthodontists",
  }
};

export default function Features() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DentTick AI Features',
    description: 'Explore the powerful features of DentTick AI, including our AI Dental Receptionist, WhatsApp CRM, and automated patient acquisition tools built for Indian clinics.',
    url: 'https://denttick.com/features',
    about: {
      '@type': 'SoftwareApplication',
      name: 'DentTick AI',
      applicationCategory: 'BusinessApplication'
    }
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverline}>Features</div>
          <h1 className={styles.heroTitle}>
            The complete <span className={styles.heroTitleGradient}>Dental Growth OS</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Every tool your clinic needs to grow — designed specifically for the way Indian dentists work.
          </p>
        </section>

        {/* Features List */}
        <section className={styles.featuresContainer}>
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.featureRow} ${index % 2 !== 0 ? styles.featureRowReverse : ''}`}
            >
              <div className={styles.featureContent}>
                <SmallIcon>{feature.icon}</SmallIcon>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <div className={styles.bulletGrid}>
                  {feature.bullets.map((bullet, bIndex) => (
                    <div key={bIndex} className={styles.bulletItem}>
                      <CheckIcon />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '3rem' }}>
                  <Link href={`/features/${feature.slug}`} className={styles.learnMoreLink}>
                    Learn more about {feature.title} <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
              <div className={styles.featureGraphic}>
                {feature.graphic}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className={styles.simpleCtaSection}>
          <Link href="/contact" className={styles.simpleCtaButton}>See it live — book a demo</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
