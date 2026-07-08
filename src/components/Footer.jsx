'use client';
import Link from 'next/link';
import Button from './Button';
import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button when scrolled down a bit
      if (window.scrollY > 300) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img src="/images/logo.png" alt="DentTick AI Logo" className={styles.logoImage} />
          </Link>
          <p className={styles.description}>
            India's first Dental Growth Operating System — built to help dentists scale revenue without scaling stress.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
                <path d="M4 20l6.768-6.768m2.46-2.46L20 4"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={styles.linksContainer}>
          <div className={styles.linkGroup}>
            <h3>Product</h3>
            <ul className={styles.linkList}>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Book Demo</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkGroup}>
            <h3>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Legal</h3>
            <ul className={styles.linkList}>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 DentTick AI Technologies Pvt. Ltd.</p>
        <p>hello@dentick.ai · +91 80000 00000</p>
      </div>

      {showFloating && (
        <div className={styles.floatingDemo}>
          <Button href="/contact" variant="primary">
            📅 Book a free demo
          </Button>
        </div>
      )}
    </footer>
  );
}
