import styles from './page.module.css';
import BlogSection from '../../components/BlogSection';

export const metadata = {
  title: 'Blog - DentTick AI',
  description: 'Latest insights, guides, and resources for growing your dental clinic.',
};

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <h1>Our Blog</h1>
        <p>Insights and resources to scale your clinic</p>
      </div>
      <BlogSection />
    </main>
  );
}
