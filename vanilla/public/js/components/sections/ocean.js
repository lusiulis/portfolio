import { gsap } from 'https://cdn.skypack.dev/gsap';

export function initOcean() {
  const wave1 = document.getElementById('w1');
  const wave2 = document.getElementById('w2');
  const oceanContainer = document.getElementById('ocean-container');

  gsap.fromTo(
    wave1,
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
      yoyo: true,
    }
  );

  gsap.fromTo(
    wave2,
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
      yoyo: true,
    }
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: oceanContainer,
      start: 'top top',
      end: '+=2000px',
      pin: true,
      scrub: true,
    },
  });
}
