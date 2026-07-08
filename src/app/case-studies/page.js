import CtaBanner from '../../components/CtaBanner';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const caseStudies = [
  {
    id: 1,
    tag: "Revenue Growth",
    title: "Smile Studio Mumbai: 41% Revenue Growth in 4 Months",
    description: "Discover how Dr. Aarav Sharma replaced 3 disjointed tools and a part-time receptionist with DentTick's unified operating system.",
    image: "/images/clinics/1.png"
  },
  {
    id: 2,
    tag: "Patient Acquisition",
    title: "32 Pearls Bengaluru: From 38 to 212 Google Reviews",
    description: "See how Dr. Priya Nair automated her post-appointment review requests to skyrocket her local SEO ranking and attract 3x more new patients.",
    image: "/images/clinics/2.png"
  },
  {
    id: 3,
    tag: "Operational Efficiency",
    title: "Dr. Gupta Dental Delhi: Zero Missed Calls",
    description: "Learn how the DentTick AI Receptionist handles out-of-hours inquiries, ensuring that every lead is instantly engaged via WhatsApp.",
    image: "/images/clinics/3.png"
  },
  {
    id: 4,
    tag: "Patient Retention",
    title: "Apex Dental Care: 90% Recall Success Rate",
    description: "How automated SMS and WhatsApp reminders eliminated manual follow-ups and brought inactive patients back to the chair.",
    image: "/images/clinics/4.png"
  },
  {
    id: 5,
    tag: "Revenue Growth",
    title: "Modern Smiles Chennai: Scaling to 3 Locations",
    description: "Centralizing operations, analytics, and patient communication across multiple clinics using DentTick's enterprise dashboard.",
    image: "/images/clinics/5.png"
  },
  {
    id: 6,
    tag: "Patient Acquisition",
    title: "White & Bright Clinic: Reducing No-Shows by 70%",
    description: "Implementing an automated multi-channel reminder system that confirms appointments instantly and reduces idle chair time.",
    image: "/images/clinics/6.png"
  }
];

export default function CaseStudies() {
  return (
    <div className={styles.main}>
      
      <main>
        <section className={styles.hero}>
          <h1>Customer Success Stories</h1>
          <p>See how India's top dental clinics are growing their practices, automating operations, and delivering better care with DentTick.</p>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {caseStudies.map(study => (
              <div key={study.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    fill
                    style={{ objectFit: 'contain', padding: '1.5rem' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTag}>{study.tag}</div>
                  <h3 className={styles.cardTitle}>{study.title}</h3>
                  <p className={styles.cardDesc}>{study.description}</p>
                  <Link href="#" className={styles.readMore}>
                    Read Full Story
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBanner />
      </main>

    </div>
  );
}
