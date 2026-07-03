'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="/images/logo.png" alt="DentTick AI Logo" className={styles.logoImage} />
      </Link>
      
      <nav className={styles.nav}>
        <Link href="/features" className={styles.navLink}>Features</Link>
        <Link href="/pricing" className={styles.navLink}>Pricing</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </nav>

      <div className={styles.actions}>
        <Link href="/contact" className={styles.bookDemo}>Book Demo</Link>
        <Button href="/contact" variant="secondary">Get Started</Button>
        <button 
          className={styles.mobileMenuBtn} 
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <Link href="/features" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
