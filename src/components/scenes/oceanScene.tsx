'use client';

import styles from '@/styles/components/scenes/oceanscene.module.scss'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'

const OceanScene = () => {
  const container = useRef<HTMLDivElement>(null);
  const wave1 = useRef<HTMLDivElement>(null);
  const wave2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.fromTo(
      wave1.current,
      {
        xPercent: -5,
        yPercent: -20,
        opacity: 1,
        zIndex: 5,
      },
      {
        xPercent: 0,
        yPercent: -80,
        repeat: -1,
        duration: 14,
        ease: 'none',
        opacity: 0,
        zIndex: 1,
        yoyo: true
      }
    );
    gsap.fromTo(
      wave2.current,
      {
        xPercent: 0,
        yPercent: -120,
        opacity: 0,
        zIndex: 1,
      },
      {
        xPercent: -5,
        yPercent: -40,
        repeat: -1,
        duration: 14,
        ease: 'none',
        opacity: 1,
        delay: 4,
        zIndex: 5,
        yoyo: true
      }
    );
  }, { scope: container });

  return (
    <div className={`scene-overall ${styles.oceanContainer}`} ref={container}>
      <div className="scene-container">
        {
          //ADD TEXT CONTENT OR OTHER STUFF
        }
      </div>
      <div className={styles.sky}>
        <div className={styles.cover} />
      </div>

      <div className={styles.ocean}>
        <div className={styles.skyMask} />
        <div className={`${styles.waves} ${styles.w1}`} ref={wave1} />
        <div className={`${styles.waves} ${styles.w2}`} ref={wave2} />
      </div>
    </div>
  )
}

export default OceanScene