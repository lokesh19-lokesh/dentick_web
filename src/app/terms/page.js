import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms of Service | DentTick AI',
  description: 'Terms of Service for DentTick AI.',
};

export default function Terms() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: October 2024</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the DentTick AI platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.</p>
          </section>

          <section className={styles.section}>
            <h2>2. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.</p>
            <p>You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the service provided.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Subscription and Billing</h2>
            <ul>
              <li>Subscriptions are billed in advance on a monthly or annual basis, depending on your selected plan.</li>
              <li>You may cancel your subscription at any time. Cancellations take effect at the end of the current billing cycle.</li>
              <li>No refunds are provided for partial months of service.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Limitation of Liability</h2>
            <p>In no event shall DentTick AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          </section>

          <div className={styles.contactBox}>
            <h3>Need legal assistance?</h3>
            <p>If you have any questions regarding these terms, please contact our legal team.</p>
            <Link href="/contact" className={styles.contactLink}>Contact Legal Department →</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
