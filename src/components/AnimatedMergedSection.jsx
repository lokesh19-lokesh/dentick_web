'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedMergedSection.module.css';

export default function AnimatedMergedSection({ children }) {
  const containerRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(0.95);
  const [borderRadius, setBorderRadius] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is in the viewport
      // rect.top is the distance from top of viewport to top of section
      // rect.bottom is distance from top of viewport to bottom of section
      
      let newScale = 0.75;
      let newRadius = 80;

      // Section is fully in the middle of the screen
      if (rect.top <= windowHeight * 0.2 && rect.bottom >= windowHeight * 0.8) {
        newScale = 1;
        newRadius = 0;
      } else {
        // Calculate a progress value between 0.75 and 1
        // When entering from bottom
        if (rect.top > windowHeight * 0.2 && rect.top < windowHeight) {
          const progress = 1 - ((rect.top - windowHeight * 0.2) / (windowHeight * 0.8));
          newScale = 0.75 + (0.25 * progress);
          newRadius = 80 - (80 * progress);
        }
        // When leaving from top
        else if (rect.bottom < windowHeight * 0.8 && rect.bottom > 0) {
          const progress = rect.bottom / (windowHeight * 0.8);
          newScale = 0.75 + (0.25 * progress);
          newRadius = 80 - (80 * progress);
        }
      }

      // Clamp values
      newScale = Math.max(0.75, Math.min(1, newScale));
      newRadius = Math.max(0, Math.min(80, newRadius));

      setScaleFactor(newScale);
      setBorderRadius(newRadius);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.outerWrapper} ref={containerRef}>
      <div className={styles.stickyContainer}>
        <div 
          className={styles.animatedBackground}
          style={{
            width: `${scaleFactor * 100}%`,
            borderRadius: `${borderRadius}px`,
          }}
        />
      </div>
      <div className={styles.contentLayer}>
        {children}
      </div>
    </div>
  );
}
