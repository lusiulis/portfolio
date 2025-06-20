'use client';

import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactNode, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
    });

    smoother.scrollTo(0, true);

    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};

export default ScrollSmootherWrapper;
