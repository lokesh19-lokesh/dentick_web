import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import FaqAccordion from './FaqAccordion';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing & Plans | DentTick AI Dental Software',
  description: 'Simple, transparent pricing for Indian dental clinics. Start free for 14 days and scale your practice with DentTick AI. Plans starting at ₹2,999/mo.',
  keywords: ['dental software pricing India', 'affordable dental CRM', 'clinic management software cost', 'AI receptionist pricing'],
  openGraph: {
    title: 'DentTick AI Pricing | Simple, Transparent Plans',
    description: 'Simple, transparent pricing for Indian dental clinics. Start free for 14 days and scale your practice with DentTick AI.',
    url: 'https://denttickai.com/pricing',
    images: [{ url: '/images/og-image.jpg' }],
  },
  alternates: {
    canonical: '/pricing',
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "subject": "Dental Software Pricing",
    "audience": "Dentists, Dental Clinics",
  }
};

const CheckIcon = () => (
  <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Pricing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'DentTick AI Pricing',
    description: 'Simple, transparent pricing for Indian dental clinics. Start free for 14 days and scale your practice with DentTick AI.',
    url: 'https://denttickai.com/pricing',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2999',
      highPrice: '9999',
      offerCount: '3'
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <div className={styles.hero}>
          <div className={styles.overline}>Pricing</div>
          <h1 className={styles.title}>
            Simple, transparent <span className={styles.titleHighlight}>pricing</span>
          </h1>
          <p className={styles.subtitle}>
            Start free for 14 days. No credit card. Cancel anytime.
          </p>
        </div>

        <section className={styles.pricingSection}>
          {/* Starter Plan */}
          <div className={styles.card}>
            <div className={styles.cardCategory}>For solo clinics</div>
            <h2 className={styles.cardTitle}>Starter</h2>
            <div className={styles.cardPriceWrapper}>
              <span className={styles.cardPrice}>₹2,999</span>
              <span className={styles.cardPricePeriod}>/mo</span>
            </div>
            <Link href="/contact" className={`${styles.btn} ${styles.btnOutline}`}>
              Start free trial
            </Link>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}><CheckIcon /> AI receptionist (200 mins)</li>
              <li className={styles.featureItem}><CheckIcon /> WhatsApp CRM</li>
              <li className={styles.featureItem}><CheckIcon /> Appointment management</li>
              <li className={styles.featureItem}><CheckIcon /> Patient records</li>
              <li className={styles.featureItem}><CheckIcon /> Google review automation</li>
              <li className={styles.featureItem}><CheckIcon /> Email support</li>
            </ul>
          </div>

          {/* Growth Plan */}
          <div className={`${styles.card} ${styles.cardPopular}`}>
            <div className={styles.popularBadge}>Most popular</div>
            <div className={styles.cardCategory}>Most popular</div>
            <h2 className={styles.cardTitle}>Growth</h2>
            <div className={styles.cardPriceWrapper}>
              <span className={styles.cardPrice}>₹5,999</span>
              <span className={styles.cardPricePeriod}>/mo</span>
            </div>
            <Link href="/contact" className={`${styles.btn} ${styles.btnSolid}`}>
              Start free trial
            </Link>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}><CheckIcon /> Everything in Starter</li>
              <li className={styles.featureItem}><CheckIcon /> AI receptionist (1,000 mins)</li>
              <li className={styles.featureItem}><CheckIcon /> Marketing automation</li>
              <li className={styles.featureItem}><CheckIcon /> Revenue analytics</li>
              <li className={styles.featureItem}><CheckIcon /> Multi-doctor support</li>
              <li className={styles.featureItem}><CheckIcon /> Dedicated success manager</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className={styles.card}>
            <div className={styles.cardCategory}>For multi-clinic groups</div>
            <h2 className={styles.cardTitle}>Pro</h2>
            <div className={styles.cardPriceWrapper}>
              <span className={styles.cardPrice}>₹9,999</span>
              <span className={styles.cardPricePeriod}>/mo</span>
            </div>
            <Link href="/contact" className={`${styles.btn} ${styles.btnOutline}`}>
              Start free trial
            </Link>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}><CheckIcon /> Everything in Growth</li>
              <li className={styles.featureItem}><CheckIcon /> Unlimited AI minutes</li>
              <li className={styles.featureItem}><CheckIcon /> Multi-location dashboard</li>
              <li className={styles.featureItem}><CheckIcon /> Custom integrations</li>
              <li className={styles.featureItem}><CheckIcon /> Ad management included</li>
              <li className={styles.featureItem}><CheckIcon /> Priority 24/7 support</li>
            </ul>
          </div>
        </section>

        <section className={styles.customPlanSection}>
          <div className={styles.customPlanCard}>
            <h2 className={styles.customPlanTitle}>Need a custom plan for a chain or DSO?</h2>
            <p className={styles.customPlanText}>
              We support 50+ multi-location dental groups across India with custom pricing and SLAs.
            </p>
            <Link href="/contact" className={styles.btnCustom}>
              Talk to sales
            </Link>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>Pricing questions</h2>
            <p className={styles.faqSubtitle}>Everything about billing, trials and onboarding.</p>
          </div>
          <FaqAccordion />
        </section>
      </main>
      <Footer />
    </div>
  );
}
