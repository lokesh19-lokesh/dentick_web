import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Book a Demo | DentTick AI',
  description: 'Get in touch with the DentTick AI team. Book a free demo to see how our dental growth OS can scale your clinic in India.',
  keywords: ['contact DentTick AI', 'book dental software demo', 'dental clinic CRM demo', 'DentTick AI phone number', 'dental software support India'],
  openGraph: {
    title: 'Contact DentTick AI | Book a Free Demo',
    description: 'Get in touch with the DentTick AI team. Book a free demo to see how our dental growth OS can scale your clinic in India.',
    url: 'https://denttickai.com/contact',
    images: [{ url: '/images/og-image.jpg' }],
  },
  alternates: {
    canonical: '/contact',
  },
  other: {
    "geo.region": "IN-KA", // Karnataka
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
    "subject": "Contact DentTick AI",
    "audience": "Dentists, Dental Clinics",
  }
};

const MailIcon = () => (
  <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Contact() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact DentTick AI',
    description: 'Get in touch with the DentTick AI team. Book a free demo to see how our dental growth OS can scale your clinic in India.',
    url: 'https://denttickai.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'DentTick AI',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'WeWork Galaxy, MG Road',
        addressLocality: 'Bengaluru',
        postalCode: '560001',
        addressCountry: 'IN'
      },
      telephone: '+918000000000',
      email: 'hello@dentick.ai'
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
          <div className={styles.overline}>Contact</div>
          <h1 className={styles.title}>
            Let's <span className={styles.titleHighlight}>talk growth</span>
          </h1>
          <p className={styles.subtitle}>
            Reach out — our team responds within 2 working hours.
          </p>
        </div>

        <section className={styles.contentSection}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <MailIcon />
              </div>
              <div className={styles.infoTextWrapper}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>hello@dentick.ai</div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <PhoneIcon />
              </div>
              <div className={styles.infoTextWrapper}>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>+91 80000 00000</div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <WhatsAppIcon />
              </div>
              <div className={styles.infoTextWrapper}>
                <div className={styles.infoLabel}>WhatsApp</div>
                <div className={styles.infoValue}>+91 80000 00000</div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <LocationIcon />
              </div>
              <div className={styles.infoTextWrapper}>
                <div className={styles.infoLabel}>Office</div>
                <div className={styles.infoValue}>WeWork Galaxy, MG Road, Bengaluru 560001</div>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Get a personalised growth plan</h2>
              <p className={styles.formSubtitle}>Free 30-min consult with a DentTick growth expert.</p>
              <form>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your name" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Clinic name" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                  <input type="tel" placeholder="WhatsApp number" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="City" className={styles.input} required />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Request my free consult
                </button>
                <p className={styles.formFooter}>No spam. We respect your time.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
