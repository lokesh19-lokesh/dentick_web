import Link from 'next/link';
import styles from './AccessibilitySection.module.css';

export default function AccessibilitySection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardImage}></div>
          <div className={styles.mainCardText}>
            <h2>Omnichannel Access</h2>
            <p>
              <strong>1 in 3 patients</strong> prefer texting or online booking over calling. 
              By adapting to modern communication preferences, you <strong>include everyone in your 
              patient base.</strong> DentTick is here to help: we design all our workflows 
              to ensure that <strong>your message reaches EVERY patient</strong> seamlessly, 
              whether via WhatsApp, SMS, or Voice.
            </p>
            <Link href="/contact" className={styles.cardLink}>
              Meet DentTick Omnichannel →
            </Link>
          </div>
        </div>
        
        <div className={styles.sliceContainer}>
          <div className={`${styles.verticalSlice} ${styles.slice1}`}></div>
          <div className={`${styles.verticalSlice} ${styles.slice2}`}></div>
          <div className={`${styles.verticalSlice} ${styles.slice3}`}></div>
        </div>
      </div>
    </section>
  );
}
