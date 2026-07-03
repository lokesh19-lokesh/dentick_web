"use client";
import { useState, useRef } from 'react';
import styles from '../app/page.module.css';

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.heroVideoBox} onClick={togglePlay} style={{ cursor: 'pointer' }}>
      <video 
        ref={videoRef}
        loop
        muted
        playsInline 
        className={styles.heroVideo}
      >
        <source src="https://res.cloudinary.com/vhy1bvij/video/upload/v1783056244/dentick_cdq3c9.mp4" type="video/mp4" />
      </video>
      
      {!isPlaying && (
        <div className={styles.videoPlayBtn}>
          <svg className={styles.playIcon} viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
      
      <div className={styles.overlay}></div>
      <div className={styles.heroVideoText}>
        <h2>Empower your clinic with patient-first AI</h2>
        <p>Watch how DentTick automates your growth workflow.</p>
      </div>
    </div>
  );
}
