import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Features | DentTick AI',
  description: 'Explore the features of DentTick AI, the unified growth operating system.',
};

// Reusable SVG icons for large graphics (hollow, stroke-based)
const RobotGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16.01" />
    <line x1="16" y1="16" x2="16" y2="16.01" />
  </svg>
);

const UsersGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

const MessageGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CalendarGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MegaphoneGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="11 19 2 12 11 5 11 19" />
    <path d="M22 12A10 10 0 0 1 12 22" />
  </svg>
);

const StarGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChartGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="22" x2="22" y2="22" />
  </svg>
);

const RocketGraphic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1.5c1.6-1.6 4.1-1.9 6-1 2-2 3-5.5 3-5.5s-3.5 1-5.5 3c-.9 1.9-1.2 4.4.4 6a5.4 5.4 0 0 0-1.5 1z" />
    <circle cx="14.5" cy="9.5" r="1.5" />
  </svg>
);

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

export default function Features() {
  const features = [
    {
      title: "AI Receptionist",
      description: "A 24/7 multilingual voice & chat agent that handles inbound calls, books appointments and answers FAQs — even at 2am.",
      bullets: ["Hindi + English + regional", "Books appointments live", "WhatsApp + voice", "Never misses a lead"],
      icon: <><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></>,
      graphic: <RobotGraphic />
    },
    {
      title: "Dental CRM",
      description: "Patient records, treatment plans, recall lists and lifetime value — finally in one beautiful place.",
      bullets: ["Unified patient profiles", "Treatment plan tracking", "Recall automation", "LTV & cohort analytics"],
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
      graphic: <UsersGraphic />
    },
    {
      title: "WhatsApp CRM",
      description: "Verified WhatsApp Business API with templates, broadcasts and a shared inbox for your team.",
      bullets: ["Green-tick verification", "Drip campaigns", "Shared team inbox", "DPDP-compliant"],
      icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
      graphic: <MessageGraphic />
    },
    {
      title: "Appointment Management",
      description: "Smart calendar with auto-reminders, no-show recovery and chair utilisation insights.",
      bullets: ["Online booking page", "3-touch reminders", "No-show recovery", "Chair utilisation %"],
      icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
      graphic: <CalendarGraphic />
    },
    {
      title: "Marketing Automation",
      description: "Run Meta & Google ads, landing pages and patient drip campaigns from one cockpit.",
      bullets: ["Done-for-you ads", "Landing page builder", "Lead routing", "Attribution"],
      icon: <><polygon points="11 19 2 12 11 5 11 19"/><path d="M22 12A10 10 0 0 1 12 22"/></>,
      graphic: <MegaphoneGraphic />
    },
    {
      title: "Google Review Automation",
      description: "After every visit, the right patients are nudged to leave a glowing Google review.",
      bullets: ["Smart sentiment routing", "1-tap review links", "Reply templates", "Reputation dashboard"],
      icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
      graphic: <StarGraphic />
    },
    {
      title: "Revenue Analytics",
      description: "Track collections, doctor productivity, treatment-mix and ROI in real-time.",
      bullets: ["Daily collections", "Doctor scorecards", "Procedure profitability", "Forecasting"],
      icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="22" x2="22" y2="22"/></>,
      graphic: <ChartGraphic />
    },
    {
      title: "New Clinic Launch Pack",
      description: "Opening a new clinic? Brand, website, GMB and 90-day playbook — all done for you.",
      bullets: ["Brand identity kit", "Website + booking", "Google Business setup", "90-day growth plan"],
      icon: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5a5.4 5.4 0 0 0 1-1.5c1.6-1.6 4.1-1.9 6-1 2-2 3-5.5 3-5.5s-3.5 1-5.5 3c-.9 1.9-1.2 4.4.4 6a5.4 5.4 0 0 0-1.5 1z" /><circle cx="14.5" cy="9.5" r="1.5" /></>,
      graphic: <RocketGraphic />
    }
  ];

  return (
    <div className={styles.main}>
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
          {features.map((feature, index) => (
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
              </div>
              <div className={styles.featureGraphic}>
                {feature.graphic}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className={styles.simpleCtaSection}>
          <button className={styles.simpleCtaButton}>See it live — book a demo</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
