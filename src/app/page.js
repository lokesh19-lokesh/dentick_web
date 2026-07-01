import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroVideoBox}>
              <div className={styles.videoPlayBtn}>
                <svg className={styles.playIcon} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className={styles.heroVideoText}>
                <h2>Empower your clinic with patient-first AI</h2>
                <p>Watch how DentTick automates your growth workflow.</p>
              </div>
            </div>
            
            <div className={styles.heroContent}>
              <h1>Scale Your Practice <span>With Precision.</span></h1>
              <p>
                The unified growth operating system designed for Indian dental clinics. 
                Automate patient acquisition, communications and management in one seamless platform.
              </p>
              <div className={styles.heroButtons}>
                <Button href="/contact" variant="primary">Book a Demo Today →</Button>
                <Button href="/pricing" variant="secondary">Start Free Trial</Button>
              </div>
              <a href="#" style={{ display: 'inline-block', marginTop: '2rem', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                DOWNLOAD PRODUCT BROCHURE →
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <p>PROUDLY SERVING 500+ DENTAL CLINICS ACROSS INDIA</p>
          <div className={styles.logos}>
            <div className={styles.logoCircle}>SS</div>
            <div className={styles.logoCircle}>32P</div>
            <div className={styles.logoCircle}>MD</div>
            <div className={styles.logoCircle}>AW</div>
            <div className={styles.logoCircle}>CC</div>
            <div className={styles.logoCircle}>SD</div>
            <div className={styles.logoCircle}>TS</div>
            <div className={styles.logoCircle}>FD</div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>10k+</h3>
              <p>Patients Managed</p>
            </div>
            <div className={styles.statCard}>
              <h3>3.2x</h3>
              <p>Avg. Patient Growth</p>
            </div>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Active Clinics</p>
            </div>
            <div className={styles.statCard}>
              <h3>48 hrs</h3>
              <p>Avg. Go-Live Time</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>Everything your clinic needs</h2>
            <p>A suite of tools built specifically for the demands of modern dentistry in the digital age.</p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>AI Receptionist</h3>
              <p>24/7 voice & chat agent that books appointments, answers FAQs and never misses a lead.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Dental CRM</h3>
              <p>Unified patient records, treatment plans, recall reminders and lifetime value tracking.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3>WhatsApp CRM</h3>
              <p>Automated WhatsApp campaigns, broadcasts and 2-way chat — fully compliant.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📅</div>
              <h3>Appointment Management</h3>
              <p>Smart scheduling, auto-reminders, no-show recovery and chair utilization analytics.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📢</div>
              <h3>Marketing Automation</h3>
              <p>Run Meta & Google ads, landing pages and drip campaigns on autopilot.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⭐</div>
              <h3>Google Review Automation</h3>
              <p>Turn every happy patient into a 5-star Google review automatically.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Revenue Analytics</h3>
              <p>Track collections, doctor productivity, treatment-mix and ROI in real time.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.featureCardHighlighted}`}>
              <div className={styles.featureIconSolid}>🚀</div>
              <h3>New Clinic Launch Pack</h3>
              <p>Brand kit, website, GMB setup and 90-day growth playbook for new clinics.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <div className={styles.sectionHeader}>
            <h2>How it works</h2>
            <p>Go live in 7 days. Grow forever.</p>
          </div>
          
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Onboard</h3>
              <p>We migrate patients, set up WhatsApp & AI agent in 48 hours — white-glove included.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Automate</h3>
              <p>AI starts qualifying leads, nurturing patients and recovering no-shows from day one.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Accelerate</h3>
              <p>Weekly growth reviews, ad management and a dedicated success manager.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '5rem', fontSize: '2rem', color: 'var(--primary)' }}>
            ❝
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginTop: '1rem' }}>
            Loved by India's top dentists
          </h2>
        </section>

        {/* Consult Form Section */}
        <section className={styles.consultSection}>
          <div className={styles.consultBox}>
            <h2 style={{ fontFamily: 'var(--font-serif)' }}>Free 30-min consult with a DentTick growth expert.</h2>
            <form>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Clinic name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="WhatsApp number" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="City" required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Request my free consult
              </button>
              <p className={styles.formFooter}>No spam. We respect your time.</p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
