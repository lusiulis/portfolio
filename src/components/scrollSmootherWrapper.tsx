'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactNode, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const ScrollSmootherWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true
      });

      smoother.scrollTo(0, true);

      return () => {
        smoother.kill();
      };
    });

    return () => mm.revert();
  }, []);
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};

export default ScrollSmootherWrapper;
