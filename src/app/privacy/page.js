import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | DentTick AI',
  description: 'Privacy Policy for DentTick AI.',
};

export default function Privacy() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2024</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you register for an account, subscribe to our newsletter, request support, or communicate with us. This may include your name, email address, phone number, clinic details, and billing information.</p>
            <p>We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, pages visited, and timestamps.</p>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information, including confirmations and receipts.</li>
              <li>Send technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Data Sharing and Security</h2>
            <p>We do not share your personal data with third parties except as necessary to provide our services (e.g., payment processors, cloud hosting providers). All third-party providers are strictly vetted for security and privacy compliance.</p>
            <p>We implement industry-standard security measures, including AES-256 encryption, to protect your data from unauthorized access, alteration, or destruction.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. You can manage your information from your account dashboard or by contacting our support team.</p>
          </section>

          <div className={styles.contactBox}>
            <h3>Questions about this policy?</h3>
            <p>If you have any questions or concerns regarding your privacy, please let us know.</p>
            <Link href="/contact" className={styles.contactLink}>Contact our Data Protection Officer →</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
