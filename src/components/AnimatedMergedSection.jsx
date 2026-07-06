'use client';
import styles from './AnimatedMergedSection.module.css';

export default function AnimatedMergedSection({ children }) {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.contentLayer}>
        {children}
      </div>
    </div>
  );
}
