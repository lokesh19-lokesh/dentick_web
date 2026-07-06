'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { featuresData } from '../data/features';
import styles from './CommunicationHubSection.module.css';

const hubMessages = [
  { title: "WHATSAPP CRM", text: "Reminder: Your appointment is tomorrow at 10 AM! Reply YES to confirm." },
  { title: "AI RECEPTIONIST", text: "Voice Call: 'Hello, I'd like to reschedule my appointment for next Tuesday...'" },
  { title: "EMAIL CAMPAIGN", text: "Newsletter: Check out our new teeth whitening offers for the summer!" },
  { title: "SMS AUTOMATION", text: "Hi Sarah, it's time for your 6-month checkup. Click here to book." },
  { title: "GOOGLE REVIEWS", text: "Review Request: Thank you for visiting! Please leave us a Google review." }
];

export default function CommunicationHubSection() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % hubMessages.length);
    }, 3500); // Change message every 3.5 seconds
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      clearInterval(interval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Removed Decorative Background Shapes */}

      <div className={styles.container}>
        {/* Left Side: Graphics */}
        <div className={`${styles.graphicContainer} ${isVisible ? styles.visible : ''}`}>
          {/* SVG Connecting Lines */}
          <svg className={styles.linesSvg} viewBox="0 0 500 500">
            <line x1="250" y1="250" x2="250" y2="30" className={styles.line} />
            <line x1="250" y1="250" x2="440" y2="140" className={styles.line} />
            <line x1="250" y1="250" x2="440" y2="360" className={styles.line} />
            <line x1="250" y1="250" x2="250" y2="470" className={styles.line} />
            <line x1="250" y1="250" x2="60" y2="360" className={styles.line} />
            <line x1="250" y1="250" x2="60" y2="140" className={styles.line} />
          </svg>

          {/* Central Card */}
          <div className={styles.centralCard}>
            <div className={styles.cardHeader}>{hubMessages[msgIndex].title}</div>
            <div className={styles.cardBody}>
              <div className={styles.textArea}>
                {hubMessages[msgIndex].text}
              </div>
            </div>
          </div>

          {/* Floating Icons (Service Icons) */}
          {featuresData.slice(0, 6).map((feature, index) => (
            <div key={index} className={`${styles.iconNode} ${styles[`icon${index + 1}`]} ${isVisible ? styles.visible : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {feature.icon}
              </svg>
              <div className={styles.iconTooltip}>{feature.title}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className={`${styles.contentContainer} ${isVisible ? styles.visible : ''}`}>
          <h2>Stay connected when it matters most</h2>
          <p className={styles.subtitle}>
            Reach every patient, every time, with DentTick's Omnichannel Hub.
          </p>
          <p className={styles.description}>
            Manage your clinic's messaging across WhatsApp, SMS, Email, and Voice - including automated notices for appointments, recalls, and reviews. Control all communications from one central dashboard and engage your patients everywhere.
          </p>
          <Link href="/features" className={styles.ctaButton}>
            See Omnichannel Features
          </Link>
        </div>
      </div>
    </section>
  );
}
