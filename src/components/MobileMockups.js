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
        <div className={styles.crmGraphBody}>
          <div className={styles.crmStatCards}>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue}>342</div>
              <div className={styles.crmStatLabel}>Calls Handled</div>
            </div>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue}>42h</div>
              <div className={styles.crmStatLabel}>Time Saved</div>
            </div>
          </div>
          <div className={styles.uiCard} style={{marginTop: '0.25rem', padding: '1rem'}}>
             <div className={styles.uiCardTitle} style={{marginBottom: '1.25rem'}}>Call Volume (This Week)</div>
             <div className={styles.uiLineChart}>
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{width: '100%', height: '50px', overflow: 'visible'}}>
                  <polyline fill="none" stroke="var(--primary)" strokeWidth="3" points="0,30 20,20 40,35 60,10 80,15 100,5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path fill="rgba(111, 60, 193, 0.1)" d="M0,30 L20,20 L40,35 L60,10 L80,15 L100,5 L100,40 L0,40 Z" />
                </svg>
             </div>
             <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.55rem', color:'#9ca3af', marginTop:'0.5rem'}}>
               <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
             </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobilePhone} ${styles.phone4} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.uiHeaderDark}>
          <div className={styles.uiTitle}>Schedule Overview</div>
        </div>
        <div className={styles.crmGraphBody}>
          <div className={styles.crmStatCards}>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue} style={{color: '#34d399'}}>92%</div>
              <div className={styles.crmStatLabel}>Capacity</div>
            </div>
            <div className={styles.crmStatCard}>
              <div className={styles.crmStatValue} style={{color: '#f87171'}}>1%</div>
              <div className={styles.crmStatLabel}>No-Shows</div>
            </div>
          </div>
          
          <div className={styles.uiCard} style={{marginTop: '0.25rem', padding: '1rem'}}>
            <div className={styles.uiCardTitle}>Today's Utilization</div>
            <div style={{marginTop: '1rem', marginBottom: '1.25rem'}}>
              <div style={{display: 'flex', height: '10px', borderRadius: '5px', overflow: 'hidden', background: '#f3f4f6'}}>
                <div style={{width: '40%', background: '#4f46e5'}}></div>
                <div style={{width: '35%', background: '#db2777'}}></div>
                <div style={{width: '15%', background: '#d97706'}}></div>
              </div>
            </div>
            <div className={styles.crmLegend} style={{marginTop: '0', flexDirection: 'column', gap: '0.6rem'}}>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: '#4f46e5'}}></div>
                Treatments (40%)
              </div>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: '#db2777'}}></div>
                Checkups (35%)
              </div>
              <div className={styles.crmLegendItem}>
                <div className={styles.crmDot} style={{background: '#d97706'}}></div>
                Consults (15%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
