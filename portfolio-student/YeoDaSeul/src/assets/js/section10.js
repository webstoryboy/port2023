console.clear();

gsap.utils.toArray('.cardCont').forEach(function (card) {
  gsap.set(card, {
    transformStyle: 'preserve-3d',
    transformPerspective: 1000,
  });
  const q = gsap.utils.selector(card);
  const front = q('.cardFront');
  const back = q('.cardBack');

  gsap.set(back, { rotationY: -180 });

  const tl = gsap
    .timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5);
  card.addEventListener('mouseenter', function () {
    tl.play();
  });
  card.addEventListener('mouseleave', function () {
    tl.reverse();
  });
});
setTimeout(() => {
  const hide = item => {
    gsap.set(item, { autoAlpha: 0 });
  };

  const animate = item => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if (item.classList.contains('reveal_LTR')) {
      (x = -100), (y = 0);
    } else if (item.classList.contains('reveal_BTT')) {
      (x = 0), (y = 200);
    } else if (item.classList.contains('reveal_TTB')) {
      (x = 0), (y = -100);
    } else {
      (x = 100), (y = 0);
    }

    gsap.fromTo(
      item,
      { autoAlpha: 0, x: x, y: y },
      { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: 'auto', ease: 'expo' },
    );
  };

  gsap.utils.toArray('.reveal').forEach(item => {
    hide(item);

    ScrollTrigger.create({
      trigger: item,
      start: 'top bottom',
      end: 'bottom top',
      markers: false,
      onEnter: () => {
        animate(item);
      },
    });
  });
});
