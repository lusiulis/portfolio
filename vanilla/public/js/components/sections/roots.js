import { gsap } from 'https://cdn.skypack.dev/gsap';

export function initRoots() {
  const title = document.getElementById('roots-title');
  const subtitle = document.getElementById('roots-subtitle');
  const description = document.getElementById('roots-description');
  const container = document.getElementById('rootsTitle');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1,
    },
  });
  tl.from(title, {
    translateY: '-200px',
    rotateX: -90,
    opacity: 0,
  });
  tl.from([subtitle, description], {
    translateY: '100px',
    rotateX: 90,
    opacity: 0,
    delay: 1,
  });
}
