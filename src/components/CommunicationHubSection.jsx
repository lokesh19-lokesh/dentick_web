'use client';
import Link from 'next/link';
import { featuresData } from '../data/features';
import styles from './CommunicationHubSection.module.css';

export default function CommunicationHubSection() {
  return (
    <section className={styles.section}>
      {/* Decorative Background Shapes */}
      <div className={styles.bgShape1}></div>
      <div className={styles.bgShape2}></div>

      <div className={styles.container}>
        {/* Left Side: Graphics */}
        <div className={styles.graphicContainer}>
          {/* SVG Connecting Lines */}
          <svg className={styles.linesSvg} viewBox="0 0 500 500">
            <line x1="250" y1="250" x2="250" y2="30" className={styles.line} />
            <line x1="250" y1="250" x2="440" y2="140" className={styles.line} />
            <line x1="250" y1="250" x2="440" y2="360" className={styles.line} />
            <line x1="250" y1="250" x2="250" y2="470" className={styles.line} />
            <line x1="250" y1="250" x2="60" y2="360" className={styles.line} />
            <line x1="250" y1="250" x2="60" y2="140" className={styles.line} />
          </svg>

          {/* Central Card */}
          <div className={styles.centralCard}>
            <div className={styles.cardHeader}>WHATSAPP CRM</div>
            <div className={styles.cardBody}>
              <div className={styles.textArea}>
                Reminder: Your appointment is tomorrow at 10 AM! Reply YES to confirm.
              </div>
            </div>
          </div>

          {/* Floating Icons (Service Icons) */}
          {featuresData.slice(0, 6).map((feature, index) => (
            <div key={index} className={`${styles.iconNode} ${styles[`icon${index + 1}`]}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {feature.icon}
              </svg>
              <div className={styles.iconTooltip}>{feature.title}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentContainer}>
          <h2>Stay connected when it matters most</h2>
          <p className={styles.subtitle}>
            Reach every patient, every time, with DentTick's Omnichannel Hub.
          </p>
          <p className={styles.description}>
            Manage your clinic's messaging across WhatsApp, SMS, Email, and Voice - including automated notices for appointments, recalls, and reviews. Control all communications from one central dashboard and engage your patients everywhere.
          </p>
          <Link href="/features" className={styles.ctaButton}>
            See Omnichannel Features
          </Link>
        </div>
      </div>
    </section>
  );
}
