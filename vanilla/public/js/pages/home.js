import { initIntro } from '../components/sections/intro.js';
import { initOcean } from '../components/sections/ocean.js';
import { initRoots } from '../components/sections/roots.js';
import { loadHTML } from '../loader.js';

export async function initHome() {
  await loadHTML('intro-container', '/components/sections/intro.html');
  await initIntro();

  await loadHTML('roots-container', '/components/sections/roots.html');
  initRoots();

  await loadHTML('ocean-scene', '/components/sections/ocean.html');
  initOcean();
}
