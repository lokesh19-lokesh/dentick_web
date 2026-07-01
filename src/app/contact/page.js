import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../shared-page.module.css';
import pageStyles from '../page.module.css';

export const metadata = {
  title: 'Contact Us | DentTick AI',
  description: 'Get in touch to book a demo and learn how DentTick AI can help your clinic.',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={pageStyles.consultSection} style={{ borderTop: 'none', width: '100%' }}>
          <div className={pageStyles.consultBox}>
            <h2 style={{ fontFamily: 'var(--font-serif)' }}>Free 30-min consult with a DentTick growth expert.</h2>
            <form>
              <div className={pageStyles.formGroup}>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className={pageStyles.formGroup}>
                <input type="text" placeholder="Clinic name" required />
              </div>
              <div className={pageStyles.formGroup}>
                <input type="tel" placeholder="WhatsApp number" required />
              </div>
              <div className={pageStyles.formGroup}>
                <input type="text" placeholder="City" required />
              </div>
              <button type="submit" className={pageStyles.submitBtn}>
                Request my free consult
              </button>
              <p className={pageStyles.formFooter}>No spam. We respect your time.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
