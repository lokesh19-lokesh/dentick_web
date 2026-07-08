import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Careers | DentTick AI',
  description: 'Join our team at DentTick AI.',
};

export default function Careers() {
  const benefits = [
    { title: "Remote-First", desc: "Work from anywhere in India with flexible hours." },
    { title: "Health & Wellness", desc: "Comprehensive health coverage for you and your family." },
    { title: "Continuous Learning", desc: "Annual stipend for courses, conferences, and books." },
    { title: "Ownership", desc: "Generous equity packages so you own what you build." }
  ];

  const roles = [
    { title: "Senior Full Stack Engineer", type: "Full-Time", location: "Remote (India)" },
    { title: "Product Designer", type: "Full-Time", location: "Remote (India)" },
    { title: "Customer Success Lead", type: "Full-Time", location: "Bengaluru, India" }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Join the dental revolution</h1>
          <p className={styles.heroSubtitle}>We're building the unified operating system for modern Indian dentistry. Come do the best work of your life with us.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why work with us?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Open Roles</h2>
          <div className={styles.rolesGrid}>
            {roles.map((role, i) => (
              <div key={i} className={styles.roleCard}>
                <div className={styles.roleInfo}>
                  <h3>{role.title}</h3>
                  <div className={styles.roleMeta}>
                    {role.type} • {role.location}
                  </div>
                </div>
                <Link href="/contact" className={styles.btnSolid}>Apply Now</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}
