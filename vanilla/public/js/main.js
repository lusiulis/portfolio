import { initHome } from './pages/home.js';
import { initProjects } from './pages/projects.js';
import { initContact } from './pages/contact.js';
import { initError } from './pages/error.js';
import { loadHTML } from './loader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';
import { ScrollSmoother } from 'https://cdn.skypack.dev/gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  effects: true,
  smoothTouch: 0,
  normalizeScroll: true
});

smoother.scrollTo(0, true);

async function router() {
  const hash = location.hash || '#home';

  switch (hash) {
    case '#home': {
      await loadHTML('app', 'pages/home.html');
      initHome();
      break;
    }
    case '#projects': {
      await loadHTML('app', 'pages/projects.html');
      initProjects();
      break;
    }
    case '#contact': {
      await loadHTML('app', 'pages/contact.html');
      initContact();
      break;
    }
    default: {
      await loadHTML('app', 'pages/error.html');
      initError();
    }
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
