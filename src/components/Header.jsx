'use client';
import Link from 'next/link';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        DentTick AI
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
        <button className={styles.mobileMenuBtn} aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
}
