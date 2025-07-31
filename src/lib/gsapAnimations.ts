'use client';

import gsap from 'gsap';

export type IFunTitleRefs = {
  titleRef: HTMLElement | null;
  subTitleRef: HTMLElement | null;
  descriptionRef: HTMLElement | null;
  triggerRef?: HTMLElement | null;
};

export const initialFunTitle = ({
  titleRef,
  subTitleRef,
  descriptionRef,
}: IFunTitleRefs) => {
  gsap.to(titleRef, {
    rotationX: 0,
    transformOrigin: '50% 50% -100px',
  });
  gsap.to([subTitleRef, descriptionRef], {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: 'power2.out',
  });
};

export const defaultFunTitle = ({
  descriptionRef,
  subTitleRef,
  titleRef,
  triggerRef,
}: IFunTitleRefs) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerRef,
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1,
    },
  });
  tl.from(titleRef, {
    translateY: '-200px',
    rotateX: -90,
    opacity: 0,
  });
  tl.from([subTitleRef, descriptionRef], {
    translateY: '100px',
    rotateX: 90,
    opacity: 0,
    delay: 1,
  });
};
