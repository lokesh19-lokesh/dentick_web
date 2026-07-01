import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../shared-page.module.css';

export const metadata = {
  title: 'About Us | DentTick AI',
  description: 'Learn more about DentTick AI and our mission.',
};

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>We are building India's first Dental Growth Operating System to help dentists scale revenue without scaling stress.</p>
      </main>
      <Footer />
    </div>
  );
}
