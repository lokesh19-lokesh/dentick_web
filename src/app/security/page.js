import styles from './page.module.css';

export const metadata = {
  title: 'Security | DentTick AI',
  description: 'Enterprise-grade security for your dental clinic.',
};

export default function Security() {
  const pillars = [
    {
      title: "Data Encryption",
      desc: "All clinic and patient data is encrypted at rest using AES-256 and in transit via TLS 1.3.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Role-Based Access",
      desc: "Granular permissions ensure doctors, receptionists, and staff only access what they need.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      desc: "Hosted on AWS in isolated virtual private clouds (VPCs) with robust DDOS protection.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
    {
      title: "Regular Audits",
      desc: "We perform routine penetration testing and maintain continuous vulnerability scanning.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      <main>
        <section className={styles.hero}>
          <div className={styles.heroIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h1 className={styles.heroTitle}>Enterprise-grade security</h1>
          <p className={styles.heroSubtitle}>Your patients trust you with their health. You can trust us with their data. Security and privacy are built into DentTick AI from day one.</p>
        </section>

        <section className={styles.section}>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  {pillar.icon}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.complianceBox}>
            <h2>Compliance & Privacy</h2>
            <p>DentTick AI operates in accordance with major data privacy frameworks to ensure your clinic remains compliant.</p>
            <div className={styles.badges}>
              <div className={styles.badge}>SOC 2 Compliant</div>
              <div className={styles.badge}>Data Privacy Ready</div>
              <div className={styles.badge}>HIPAA Aligned</div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
