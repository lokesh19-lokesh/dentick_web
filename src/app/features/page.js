import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../shared-page.module.css';

export const metadata = {
  title: 'Features | DentTick AI',
  description: 'Explore the features of DentTick AI, the unified growth operating system.',
};

export default function Features() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Features</h1>
        <p>Discover how our AI-driven tools can automate patient acquisition, communications, and management for your clinic.</p>
      </main>
      <Footer />
    </div>
  );
}
