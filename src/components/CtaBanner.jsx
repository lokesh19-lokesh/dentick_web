import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          
          {/* Left Image Mockup */}
          <div className={`${styles.mockupContainer} ${styles.leftMockup}`}>
            <Image 
              src="/dashboard_mockup.png" 
              alt="Dashboard" 
              width={400} 
              height={300} 
              className={styles.mockupImage}
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Center Content */}
          <div className={styles.content}>
            <h2>Transform Your Clinic’s Connections</h2>
            <p>
              Schedule a personalized consultation with one of our clinic communications experts today!
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Meeting
            </Link>
          </div>

          {/* Right Image Mockup */}
          <div className={`${styles.mockupContainer} ${styles.rightMockup}`}>
            <Image 
              src="/mobile_mockup.png" 
              alt="Mobile App" 
              width={250} 
              height={400} 
              className={styles.mockupImage}
              style={{ objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
