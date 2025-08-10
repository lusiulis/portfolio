import { gsap } from 'https://cdn.skypack.dev/gsap';
import { initSpaceCats } from '../spaceCats.js';
import { loadHTML } from '../../loader.js';

export async function initIntro() {
  const title = document.getElementById('intro-title');
  const subtitle = document.getElementById('intro-subtitle');
  const description = document.getElementById('intro-description');
  const loadBar = document.getElementById('intro-loadbar');
  const navLoadBar = document.getElementById('nav-loadbar');

  gsap.to(title, {
    rotationX: 0,
    transformOrigin: '50% 50% -100px',
  });

  gsap.to([subtitle, description], {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: 'power2.out',
  });

  gsap.to(loadBar, {
    width: '50vw',
    delay: 0.5,
    duration: 1,
    onComplete: () => {
      document.body.style.overflowY = 'scroll';
    },
  });

  gsap.to(navLoadBar, {
    width: 0,
    duration: 1.5,
  });

  await loadHTML('space-cats', '/components/spaceCats.html');
  initSpaceCats();
}
