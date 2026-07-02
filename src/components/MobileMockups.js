import React from 'react';
import styles from './MobileMockups.module.css';

export default function MobileMockups() {
  return (
    <>
      <div className={`${styles.mobilePhone} ${styles.phone1}`}>
        <div className={styles.uiHeader}>
          <div className={styles.uiTitle}>WhatsApp CRM</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.chatBubbleRecv}>Hi, looking to book a cleaning.</div>
          <div className={styles.chatBubbleSent}>Of course! Does tomorrow 10am work?</div>
          <div className={styles.chatBubbleRecv}>Yes, perfect.</div>
          <div className={styles.chatBubbleSent}>Great, you're confirmed!</div>
        </div>
        <div className={styles.uiFooter}>
          <div className={styles.uiInput}>Type a message...</div>
        </div>
      </div>
      
      <div className={`${styles.mobilePhone} ${styles.phone2}`}>
        <div className={styles.uiHeaderDark}>
          <div className={styles.uiTitle}>Patient Profile</div>
        </div>
        <div className={styles.uiProfile}>
          <div className={styles.uiAvatar}></div>
          <div className={styles.uiName}>Sarah Johnson</div>
          <div className={styles.uiDetail}>LTV: $4,250</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.uiCard}>
            <div className={styles.uiCardTitle}>Treatment Plan</div>
            <div className={styles.uiBar}><div className={styles.uiBarFill} style={{width: '70%'}}></div></div>
          </div>
          <div className={styles.uiCard}>
            <div className={styles.uiCardTitle}>Next Appointment</div>
            <div className={styles.uiText}>Oct 24, 10:00 AM</div>
          </div>
        </div>
      </div>
      
      <div className={`${styles.mobilePhone} ${styles.phone3}`}>
        <div className={styles.uiHeader}>
          <div className={styles.uiTitle}>AI Receptionist</div>
        </div>
        <div className={styles.uiBody}>
          <div className={styles.aiBubble}>Hello! I'm DentTick AI. How can I help you today?</div>
          <div className={styles.userBubble}>Can I reschedule my appointment?</div>
          <div className={styles.aiBubble}>I can help with that. What day works better for you?</div>
        </div>
      </div>

      <div className={`${styles.mobilePhone} ${styles.phone4}`}>
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
    </>
  );
}
