'use client';

import FunTitle from '../common/funTitle';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { initialFunTitle } from '@/lib/gsapAnimations';
import styles from '@/styles/components/scenes/introscene.module.scss';

const IntroScene = () => {
  const loadedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!loadedRef.current) return;

    gsap.to(loadedRef.current, {
      width: '50vw',
      delay: 0.5,
      duration: 1,
      onComplete: () => {
        document.body.style.overflowY = 'scroll';
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <FunTitle
        title=' Who is Lu'
        subtitle='Luis Fernando Vargas Benambourg'
        description='Software engineer'
        args='.is'
        final='?'
        animation={initialFunTitle}
        initTitle
      >
        <div
          className={styles.loaded}
          ref={loadedRef}
        />
      </FunTitle>
    </div>
  );
};

export default IntroScene;
