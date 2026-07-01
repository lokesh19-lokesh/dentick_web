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
          <Link href="/" className={styles.logo}>DentTick AI</Link>
          <p className={styles.description}>
            India's first Dental Growth Operating System — built to help dentists scale revenue without scaling stress.
          </p>
          <p className={styles.madeIn}>
            Made in India with ❤️ for modern dentists.
          </p>
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
