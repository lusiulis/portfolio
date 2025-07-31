'use client';

import WhiteCat from './whiteCat';
import OrangeCat from './orangeCat';
import BlackCat from './blackCat';
import GrayCat from './grayCat';
import styles from '@/styles/components/characters/spacecat.module.scss';
import { useCallback, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SpaceCats = () => {
  const whiteRef = useRef<SVGSVGElement>(null);
  const grayRef = useRef<SVGSVGElement>(null);
  const blackRef = useRef<SVGSVGElement>(null);
  const orangeRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !whiteRef.current ||
        !grayRef.current ||
        !blackRef.current ||
        !orangeRef.current ||
        !containerRef.current
      )
        return;
      gsap.to([blackRef.current, grayRef.current], {
        scale: 1.5,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to([orangeRef.current, whiteRef.current], {
        scale: 0.5,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to([orangeRef.current, blackRef.current], {
        rotate: 40,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: 'sine.inOut',
      });

      gsap.to([whiteRef.current, grayRef.current], {
        rotate: -40,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: 'sine.inOut',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom -50%',
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      tl.addLabel('start')
        .to(
          orangeRef.current,
          {
            x: "40vw",
            y: "40vh",
          },
          'start'
        )
        .to(
          [whiteRef.current, blackRef.current],
          {
            y: "40vh",
            x: "100vw",
          },
          'start'
        )
        .to(
          grayRef.current,
          {
            y: "80vh",
            x: "80vw",
          },
          'start'
        );

      tl.addLabel('second')
        .to(
          orangeRef.current,
          {
            x: 0,
            y: 0,
          },
          'second'
        )
        .to(
          grayRef.current,
          {
            x: '+=60vw',
            y: '70vh',
          },
          'second'
        )
        .to(
          blackRef.current,
          {
            x: '-=200vw',
            y: '-=40vh',
          },
          'second'
        );
    },
    { scope: containerRef }
  );
  return (
    <div
      className={styles.container}
      ref={containerRef}
    >
      <WhiteCat ref={whiteRef} />
      <GrayCat ref={grayRef} />
      <BlackCat ref={blackRef} />
      <OrangeCat ref={orangeRef} />
    </div>
  );
};

export default SpaceCats;
