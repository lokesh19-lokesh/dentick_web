import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Link from 'next/link';
import { featuresData } from '../data/features';
import styles from './page.module.css';

// Small icons for the titles (solid white, simple paths)
const SmallIcon = ({ children }) => (
  <div className={styles.featureIcon}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroVideoBox} style={{ backgroundImage: 'url(/images/dashboard-ui.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className={styles.videoPlayBtn}>
                <svg className={styles.playIcon} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className={styles.heroVideoText}>
                <h2>Empower your clinic with patient-first AI</h2>
                <p>Watch how DentTick automates your growth workflow.</p>
              </div>
              <div className={styles.overlay}></div>
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
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
                <img 
                  key={i} 
                  src={`/images/clinics/${num}.png`} 
                  alt={`Clinic ${num}`} 
                  className={styles.slide} 
                />
              ))}
            </div>
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
            {featuresData.map((feature, index) => (
              <Link href={`/features/${feature.slug}`} key={index} style={{ textDecoration: 'none' }}>
                <div className={styles.featureCard}>
                  <SmallIcon>{feature.icon}</SmallIcon>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Link>
            ))}
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
          
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div>❝</div>
          <h2>Loved by India's top dentists</h2>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "DentTick replaced 3 tools and a part-time receptionist. Our collections grew 41% in 4 months."
              </p>
              <div className={styles.author}>
                <img src="https://i.pravatar.cc/150?u=aarav" alt="Dr. Aarav Sharma" className={styles.authorImage} />
                <div className={styles.authorInfo}>
                  <h4>Dr. Aarav Sharma</h4>
                  <p>Smile Studio, Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "The WhatsApp + AI receptionist combo is magical. Patients book themselves while I focus on dentistry."
              </p>
              <div className={styles.author}>
                <img src="https://i.pravatar.cc/150?u=priya" alt="Dr. Priya Nair" className={styles.authorImage} />
                <div className={styles.authorInfo}>
                  <h4>Dr. Priya Nair</h4>
                  <p>32 Pearls, Bengaluru</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "We went from 38 to 212 Google reviews in 90 days. The growth is unreal."
              </p>
              <div className={styles.author}>
                <img src="https://i.pravatar.cc/150?u=rohan" alt="Dr. Rohan Gupta" className={styles.authorImage} />
                <div className={styles.authorInfo}>
                  <h4>Dr. Rohan Gupta</h4>
                  <p>Dr. Gupta Dental, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqLeft}>
              <h2>Frequently asked questions</h2>
              <p>Everything you need to know before going live.</p>
              
              <div className={styles.faqCard}>
                <h4>Still have questions?</h4>
                <p>Talk to our dental growth experts.</p>
                <Link href="/contact" className={styles.faqButton}>Book a demo</Link>
              </div>
            </div>
            
            <div className={styles.faqRight}>
              <details className={styles.faqItem}>
                <summary>How long does setup take?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>Setup typically takes less than 48 hours. Our team will handle all the technical details for you.</div>
              </details>
              <details className={styles.faqItem}>
                <summary>Will this work with my existing software?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>Yes, DentTick AI integrates seamlessly with most major dental practice management software (PMS) through secure APIs.</div>
              </details>
              <details className={styles.faqItem}>
                <summary>Is patient data secure?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>Absolutely. We are fully HIPAA compliant and use enterprise-grade encryption to ensure patient data is never compromised.</div>
              </details>
              <details className={styles.faqItem}>
                <summary>Do I need to manage WhatsApp myself?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>No, our AI acts as a smart receptionist, handling inquiries, booking appointments, and sending reminders automatically via WhatsApp.</div>
              </details>
              <details className={styles.faqItem}>
                <summary>Can I cancel anytime?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>Yes, we operate on a month-to-month basis. There are no lock-in contracts, so you can cancel anytime.</div>
              </details>
              <details className={styles.faqItem}>
                <summary>Do you offer a free trial?<span className={styles.chevron}></span></summary>
                <div className={styles.faqContent}>We offer a risk-free 14-day trial so you can experience the automated growth firsthand before committing.</div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2>Ready to modernize your clinic?</h2>
            <p>Join the fastest-growing dental network in India. 14-day free trial. No credit card required.</p>
            <div className={styles.ctaButtonGroup}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>Get Your Free Growth Audit</Link>
              <Link href="/pricing" className={styles.ctaBtnSecondary}>View Pricing</Link>
            </div>
          </div>
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
