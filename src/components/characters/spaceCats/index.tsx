'use client';

import WhiteCat from './whiteCat';
import OrangeCat from './orangeCat';
import BlackCat from './blackCat';
import GrayCat from './grayCat';
import styles from '@/styles/components/characters/spacecat.module.scss';
import { useCallback, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const SpaceCats = () => {
  const whiteRef = useRef<SVGSVGElement>(null);
  const grayRef = useRef<SVGSVGElement>(null);
  const blackRef = useRef<SVGSVGElement>(null);
  const orangeRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const vw = useCallback((v: number) => (window.innerWidth * v) / 100, []);
  const vh = useCallback((v: number) => (window.innerHeight * v) / 100, []);

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
          markers: true,
          invalidateOnRefresh: true,
        },
      });

      tl.addLabel('start')
        .to(
          orangeRef.current,
          {
            x: vw(40),
            y: vh(40),
          },
          'start'
        )
        .to(
          [whiteRef.current, blackRef.current],
          {
            y: vh(40),
            x: vw(100),
          },
          'start'
        )
        .to(
          grayRef.current,
          {
            y: vh(80),
            x: vw(80),
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

  /* useGSAP(() => {
    if (
      !whiteRef.current ||
      !grayRef.current ||
      !blackRef.current ||
      !orangeRef.current ||
      !containerRef.current
    )
      return;

    const ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.to([whiteRef.current, grayRef.current], {
          scale: 2,
          rotate: 40,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });

        gsap.to([orangeRef.current, blackRef.current], {
          scale: 0.5,
          rotate: -40,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }, 100);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom -50%',
          scrub: 2,
          markers: true,
          preventOverlaps: true,
        },
      });

      tl.addLabel('start')
        .to(
          grayRef.current,
          {
            x: '+=120vw',
            y: '+=60vh',
            immediateRender: false,
          },
          'start'
        )
        .to(
          blackRef.current,
          {
            x: '-=120vw',
            y: '+=60vh',
            immediateRender: false,
          },
          'start'
        )
        .to(
          [whiteRef.current, orangeRef.current],
          {
            y: '+=40vh',
            immediateRender: false,
          },
          'start'
        );

      tl.addLabel('second')
        .to(
          whiteRef.current,
          {
            y: '-=40vh',
            x: '-=100vw',
            immediateRender: false,
          },
          'second'
        )
        .to(
          orangeRef.current,
          {
            y: '-=40vh',
            x: '+=100vw',
            immediateRender: false,
          },
          'second'
        );

      tl.addLabel('third')
        .to(
          [blackRef.current, whiteRef.current],
          {
            x: '+=80vw',
            y: '+=40',
            immediateRender: false,
          },
          'third'
        )
        .to(
          [grayRef.current, orangeRef.current],
          {
            x: '-=80vw',
            y: '+=40',
            immediateRender: false,
          },
          'third'
        );

      tl.addLabel('final')
        .to(
          [grayRef.current, orangeRef.current],
          {
            opacity: 0,
            x: '-=40vw',
            immediateRender: false,
          },
          'final'
        )
        .to(
          [blackRef.current, whiteRef.current],
          {
            opacity: 0,
            x: '+=40vw',
            immediateRender: false,
          },
          'final'
        );
    });
  }, []); */
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
