'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedMergedSection.module.css';

export default function AnimatedMergedSection({ children }) {
  const containerRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(0.96);
  const [borderRadius, setBorderRadius] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      // We only want this effect on desktop. On mobile, we use a solid background.
      if (window.innerWidth <= 991) {
        setScaleFactor(1);
        setBorderRadius(0);
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const OFFSET = windowHeight * 0.25;
      let newScale = 0.96;
      let newRadius = 40;

      // Entering from bottom
      if (rect.top > OFFSET && rect.top <= windowHeight) {
        const progress = 1 - ((rect.top - OFFSET) / (windowHeight - OFFSET));
        newScale = 0.96 + (0.04 * progress);
        newRadius = 40 - (40 * progress);
      }
      // Section is fully in the middle or scrolling past top
      else if (rect.top <= OFFSET) {
        newScale = 1;
        newRadius = 0;
      }
      // Completely outside
      else {
        newScale = 0.96;
        newRadius = 40;
      }

      newScale = Math.max(0.96, Math.min(1, newScale));
      newRadius = Math.max(0, Math.min(40, newRadius));

      setScaleFactor(newScale);
      setBorderRadius(newRadius);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    }
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
