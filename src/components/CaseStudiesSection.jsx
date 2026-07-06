import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CaseStudiesSection.module.css';

export default function CaseStudiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Trusted by Dental Clinics Like These</h2>
          <Link href="/case-studies" className={styles.viewAllBtn}>
            View All
          </Link>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column - Content Card */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.badge}>Case Studies</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M9 14h6"></path>
                <path d="M9 18h6"></path>
                <path d="M9 10h.01"></path>
              </svg>
            </div>

            <div className={styles.quoteBox}>
              <p>
                Every day, dental clinic owners put in the work to make patients feel cared for. <strong>These are their stories.</strong>
              </p>
            </div>

            <div className={styles.cardFooter}>
              <Link href="/case-studies" className={styles.readBtn}>
                Read our Case Studies
              </Link>
              <Link href="/case-studies" className={styles.arrowBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/dental_leader_case_study.png" 
                alt="Dental Clinic Manager"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
