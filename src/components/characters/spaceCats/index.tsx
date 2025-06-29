'use client';

import WhiteCat from './whiteCat';
import OrangeCat from './orangeCat';
import BlackCat from './blackCat';
import GrayCat from './grayCat';
import styles from '@/styles/components/characters/spacecat.module.scss';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SpaceCats = () => {
  const whiteRef = useRef<SVGSVGElement>(null);
  const grayRef = useRef<SVGSVGElement>(null);
  const blackRef = useRef<SVGSVGElement>(null);
  const orangeRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log('Layout start', whiteRef.current?.getBoundingClientRect());
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
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, containerRef);

    const handleRefresh = () => {
      console.log('AFTER FULL LOAD', whiteRef.current?.getBoundingClientRect());
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    if (document.readyState === 'complete') {
      handleRefresh();
    } else {
      window.addEventListener('load', handleRefresh);
    }

    return () => {
      ctx.revert();
      window.removeEventListener('load', handleRefresh);
    };
  }, []);
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
