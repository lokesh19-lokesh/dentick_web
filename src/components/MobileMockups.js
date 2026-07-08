'use client';
import React, { useEffect, useState, useRef } from 'react';
import styles from './MobileMockups.module.css';

export default function MobileMockups() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: observer.disconnect(); if you only want it to animate once
        } else {
           // Uncomment if you want it to re-animate every time it enters
           setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className={`${styles.mobilePhone} ${styles.phone1} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.uiHeaderDark}>
          <div className={styles.uiTitle}>WhatsApp CRM</div>
        </div>
        <div className={styles.crmGraphBody}>
          <div className={styles.crmStatCards}>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue}>1,240</div>
              <div className={styles.crmStatLabel}>Msgs Sent</div>
            </div>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue}>68%</div>
              <div className={styles.crmStatLabel}>Open Rate</div>
            </div>
          </div>

          <div className={styles.crmChartContainer}>
            <div className={styles.crmChartTitle}>Campaign Performance</div>
            <div className={styles.crmDonut}>
              <div className={styles.crmDonutInner}>
                 <div className={styles.crmDonutValue}>+24%</div>
                 <div className={styles.crmDonutLabel}>Growth</div>
              </div>
            </div>
            <div className={styles.crmLegend}>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: 'var(--primary)'}}></div>
                Booked
              </div>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: '#34d399'}}></div>
                Replied
              </div>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: '#fbbf24'}}></div>
                Sent
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.mobilePhone} ${styles.phone2} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.uiHeaderDark}>
          <div className={styles.uiTitle}>Patient Profile</div>
        </div>
        <div className={styles.uiProfile}>
          <div className={styles.uiAvatar}></div>
          <div className={styles.uiName}>Sarah Johnson</div>
          <div className={styles.uiDetail}>Lifetime Value: $4,250</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.uiCard}>
            <div className={styles.uiCardTitle}>Spend History</div>
            <div className={styles.uiBarChart}>
               <div className={styles.uiBarCol}></div>
               <div className={styles.uiBarCol}></div>
               <div className={styles.uiBarCol}></div>
               <div className={styles.uiBarCol}></div>
               <div className={styles.uiBarCol}></div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.55rem', color:'#9ca3af', marginTop:'0.25rem'}}>
               <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
            </div>
          </div>
          
          <div className={styles.uiCard}>
            <div className={styles.uiCardTitle} style={{display:'flex', justifyContent:'space-between'}}>
              <span>Treatment Plan</span>
              <span style={{color:'var(--primary)'}}>70%</span>
            </div>
            <div className={styles.uiBar}><div className={styles.uiBarFill} style={{width: '70%'}}></div></div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.mobilePhone} ${styles.phone3} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.uiHeader}>
          <div className={styles.uiTitle}>AI Receptionist</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.aiBubble}>Hello! I'm DentTick AI. How can I help you today?</div>
          <div className={styles.userBubble}>Can I reschedule my appointment?</div>
          <div className={styles.aiBubble}>I can help with that. What day works better for you?</div>
        </div>
      </div>

      <div className={`${styles.mobilePhone} ${styles.phone4} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.uiHeaderDark}>
          <div className={styles.uiTitle}>Schedule</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.calSlot}>
            <div className={styles.calTime}>09:00</div>
            <div className={styles.calAppt} style={{background: '#e0e7ff', borderLeft: '4px solid #4f46e5'}}>Root Canal - John</div>
          </div>
          <div className={styles.calSlot}>
            <div className={styles.calTime}>10:00</div>
            <div className={styles.calAppt} style={{background: '#fce7f3', borderLeft: '4px solid #db2777'}}>Checkup - Emily</div>
          </div>
          <div className={styles.calSlot}>
            <div className={styles.calTime}>11:00</div>
            <div className={styles.calAppt} style={{background: '#fef3c7', borderLeft: '4px solid #d97706'}}>Consult - Mike</div>
          </div>
        </div>
      </div>
    </div>
  );
}
