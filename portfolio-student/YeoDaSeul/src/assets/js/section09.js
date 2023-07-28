gsap.from('.sec09__image .i3 img', {
  y: -400,
  duration: 1.5,
  opacity: 0,
  ease: 'bounce',
  scrollTrigger: {
    trigger: '#section09',
    start: 'top top',
    end: 'bottom bottom',
    // markers: true,
    scrub: 1,
  },
});

gsap.from('.sec09__image .i3 h2', {
  y: 100,
  duration: 1.5,
  opacity: 0,
  ease: 'bounce',
  scrollTrigger: {
    trigger: '#section09',
    start: 'top top',
    end: 'bottom bottom',
    // markers: true,
    scrub: 1,
  },
});

gsap.from('.sec09__image .i1', {
  rotate: 360,
  duration: 1,
  scale: 0,
  ease: 'circ',
  scrollTrigger: {
    trigger: '.sec09__image .i1',
    start: 'top 80%',
    end: 'bottom bottom',
    markers: false,
    scrub: 1,
  },
});
gsap.from('.sec09__image .i2', {
  rotate: 360,
  duration: 1,
  scale: 0,
  ease: 'circ',
  scrollTrigger: {
    trigger: '.sec09__image .i2',
    start: 'top 80%',
    end: 'bottom bottom',
    markers: false,
    scrub: 1,
  },
});
gsap.from('.sec09__image .i4', {
  rotate: 360,
  duration: 1,
  scale: 0,
  ease: 'circ',
  scrollTrigger: {
    trigger: '.sec09__image .i4',
    start: 'top 80%',
    end: 'bottom bottom',
    markers: false,
    scrub: 1,
  },
});
gsap.from('.sec09__image .i5', {
  rotate: 360,
  duration: 1,
  scale: 0,
  ease: 'circ',
  scrollTrigger: {
    trigger: '.sec09__image .i5',
    start: 'top 80%',
    end: 'bottom bottom',
    markers: false,
    scrub: 1,
  },
});
