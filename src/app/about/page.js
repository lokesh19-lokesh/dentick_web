import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | DentTick AI Dental Software',
  description: 'Learn how DentTick AI is building the ultimate operating system for modern Indian dentistry. Trusted by 500+ clinics across 40+ cities.',
  keywords: ['about DentTick AI', 'dental software company India', 'dental clinic growth partners', 'dentistry software startup'],
  openGraph: {
    title: 'About DentTick AI | Building the Dental Growth OS',
    description: 'Learn how DentTick AI is building the ultimate operating system for modern Indian dentistry. Trusted by 500+ clinics across 40+ cities.',
    url: 'https://denttickai.com/about',
    images: [{ url: '/images/og-image.jpg' }],
  },
  alternates: {
    canonical: '/about',
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "subject": "About DentTick AI",
    "audience": "Dentists, Dental Clinics",
  }
};

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About DentTick AI',
    description: 'Learn how DentTick AI is building the ultimate operating system for modern Indian dentistry.',
    url: 'https://denttickai.com/about',
    publisher: {
      '@type': 'Organization',
      name: 'DentTick AI',
      foundingDate: '2024'
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className={styles.hero}>
          <div className={styles.overline}>About</div>
          <h1 className={styles.title}>
            We're building the operating system for <span className={styles.titleHighlight}>modern Indian dentistry</span>.
          </h1>
          <p className={styles.subtitle}>
            India has 3 lakh+ dentists running great clinics on chaotic tools. DentTick is the calm, AI-powered system that gives them their evenings back — and grows their revenue while they sleep.
          </p>
        </div>

        <section className={styles.storySection}>
          <div className={styles.storyImageWrapper}>
            <Image 
              src="/images/about-dentist.png" 
              alt="DentTick AI for Dentists" 
              width={600} 
              height={800} 
              className={styles.storyImage}
            />
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Our story</h2>
            <p className={styles.storyText}>
              DentTick was founded in 2024 by a team of ex-Razorpay, ex-CRED operators and second-generation dentists who watched their families struggle with no-shows, missed calls and stagnant reviews. We're backed by some of India's leading SaaS investors and growing fast.
            </p>
            <p className={styles.storyText}>
              Today, 500+ clinics in 40+ cities trust DentTick to run their growth. We won't stop until every Indian dentist runs a calmer, more profitable practice.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>500+</div>
                <div className={styles.statLabel}>Clinics</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>40+</div>
                <div className={styles.statLabel}>Cities</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>12k+</div>
                <div className={styles.statLabel}>Appointments / mo</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>₹40Cr+</div>
                <div className={styles.statLabel}>Patient revenue processed</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.beliefsSection}>
          <h2 className={styles.beliefsTitle}>What we believe</h2>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefCard}>
              <h3 className={styles.beliefCardTitle}>Dentist-first</h3>
              <p className={styles.beliefCardText}>Built with input from 200+ practising dentists across India.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3 className={styles.beliefCardTitle}>Indian by design</h3>
              <p className={styles.beliefCardText}>Hindi, regional languages, UPI, WhatsApp, DPDP — done right.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3 className={styles.beliefCardTitle}>Outcome obsessed</h3>
              <p className={styles.beliefCardText}>We win when your collections, reviews and patients grow.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3 className={styles.beliefCardTitle}>Privacy by default</h3>
              <p className={styles.beliefCardText}>End-to-end encrypted, hosted in Mumbai, DPDP-compliant.</p>
            </div>
          </div>
          <Link href="/contact" className={styles.btnSolid}>
            Join the movement
          </Link>
        </section>
      </main>
    </div>
  );
}
