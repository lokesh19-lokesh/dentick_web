import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../shared-page.module.css';

export const metadata = {
  title: 'Pricing | DentTick AI',
  description: 'Simple and transparent pricing for your dental clinic.',
};

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Pricing</h1>
        <p>Simple, transparent pricing designed to scale with your practice.</p>
      </main>
      <Footer />
    </div>
  );
}
