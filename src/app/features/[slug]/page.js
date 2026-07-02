import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { featuresData } from '../../../data/features';
import styles from './page.module.css';

export function generateStaticParams() {
  return featuresData.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const feature = featuresData.find((f) => f.slug === slug);
  if (!feature) return { title: 'Feature Not Found' };
  
  return {
    title: `${feature.title} | DentTick AI`,
    description: feature.description,
  };
}

export default async function FeaturePage({ params }) {
  const { slug } = await params;
  const feature = featuresData.find((f) => f.slug === slug);
  
  if (!feature) {
    notFound();
  }

  return (
    <div className={styles.main}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroOverline}>Feature Deep Dive</div>
            <h1 className={styles.heroTitle}>{feature.title}</h1>
            <p className={styles.heroSubtitle}>{feature.description}</p>
          </div>
          <div className={styles.heroGraphic}>
            {feature.graphic}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsHeader}>
            <h2>Why clinics love this</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {feature.bullets.map((bullet, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {/* Using a simple check icon for each benefit, or reusing the small icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>{bullet}</h3>
                <p>Fully automated and integrated directly into your existing workflow to ensure maximum efficiency and growth.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.simpleCtaSection}>
          <Link href="/contact" className={styles.simpleCtaButton}>See it live — book a demo</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
