'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedMergedSection.module.css';

export default function AnimatedMergedSection({ 
  children,
  mobileGraphic, 
  mobileText,
  hubGraphic, 
  hubText
}) {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  
  const [scaleFactor, setScaleFactor] = useState(0.75);
  const [borderRadius, setBorderRadius] = useState(80);
  const [activeIndex, setActiveIndex] = useState(0);

  // Background shrink/enlarge effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.innerWidth <= 991) {
        setScaleFactor(1);
        setBorderRadius(0);
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const OFFSET = windowHeight * 0.25;

      let newScale = 1;
      let newRadius = 0;

      if (rect.top > OFFSET && rect.top <= windowHeight) {
        const progress = 1 - ((rect.top - OFFSET) / (windowHeight - OFFSET));
        newScale = 0.75 + (0.25 * progress);
        newRadius = 80 - (80 * progress);
      } else if (rect.top <= OFFSET && rect.bottom > 0) {
        newScale = 1;
        newRadius = 0;
      } else {
        newScale = 0.75;
        newRadius = 80;
      }

      newScale = Math.max(0.75, Math.min(1, newScale));
      newRadius = Math.max(0, Math.min(80, newRadius));

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

  // Intersection Observer for scrolljacking active index
  useEffect(() => {
    if (window.innerWidth <= 991) return; // Only for desktop
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === text1Ref.current) setActiveIndex(0);
            if (entry.target === text2Ref.current) setActiveIndex(1);
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the text block is visible
    );

    if (text1Ref.current) observer.observe(text1Ref.current);
    if (text2Ref.current) observer.observe(text2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.outerWrapper} ref={containerRef}>
      <div className={styles.edlioBackgroundContainer}>
        <div 
          className={styles.animatedBackground}
          style={{
            width: `${scaleFactor * 100}vw`,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            borderRadius: `${borderRadius}px`,
          }}
        />
      </div>
      
      <div className={styles.contentLayer}>
        {/* MOBILE VIEW: Preserved exactly as requested */}
        <div className={styles.mobileView}>
          {children}
        </div>

        {/* DESKTOP VIEW: Scrolljacking */}
        <div className={styles.desktopView}>
          <div className={styles.scrolljackingContainer}>
            {/* Left Sticky Column */}
            <div className={styles.stickyColumn}>
              <div className={styles.graphicWrapperContainer}>
                <div className={`${styles.graphicItem} ${activeIndex === 0 ? styles.active : ''}`}>
                  {mobileGraphic}
                </div>
                <div className={`${styles.graphicItem} ${activeIndex === 1 ? styles.active : ''}`}>
                  {hubGraphic}
                </div>
              </div>
            </div>

            {/* Right Scrolling Column */}
            <div className={styles.scrollColumn}>
              <div className={styles.textBlock} ref={text1Ref}>
                {mobileText}
              </div>
              <div className={styles.textBlock} ref={text2Ref}>
                {hubText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
