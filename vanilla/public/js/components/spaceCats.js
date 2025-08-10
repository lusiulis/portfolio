import { gsap } from 'https://cdn.skypack.dev/gsap';

export function initSpaceCats() {
  const blackCat = document.getElementById('black-cat');
  const whiteCat = document.getElementById('white-cat');
  const orangeCat = document.getElementById('orange-cat');
  const grayCat = document.getElementById('gray-cat');
  const container = document.getElementById('space-cats');

  gsap.to([blackCat, grayCat], {
    scale: 1.5,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  gsap.to([orangeCat, whiteCat], {
    scale: 0.5,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  gsap.to([orangeCat, blackCat], {
    rotate: 40,
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'sine.inOut',
  });

  gsap.to([whiteCat, grayCat], {
    rotate: -40,
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'sine.inOut',
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 40%',
      end: 'bottom -50%',
      scrub: 2,
    },
  });

  tl.addLabel('start')
    .to(
      orangeCat,
      {
        x: '40vw',
        y: '40vh',
      },
      'start'
    )
    .to(
      [whiteCat, blackCat],
      {
        y: '40vh',
        x: '100vw',
      },
      'start'
    )
    .to(
      grayCat,
      {
        y: '80vh',
        x: '80vw',
      },
      'start'
    );

  tl.addLabel('second')
    .to(
      orangeCat,
      {
        x: 0,
        y: 0,
      },
      'second'
    )
    .to(
      grayCat,
      {
        x: '+=60vw',
        y: '70vh',
      },
      'second'
    )
    .to(
      blackCat,
      {
        x: '-=200vw',
        y: '-=40vh',
      },
      'second'
    );
}
