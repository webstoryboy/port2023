ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    const ani9 = gsap
      .timeline()
      .fromTo(
        '.sec03__circle .circle01',
        { xPercent: -300, borderRadius: 0, rotate: 360 },
        { xPercent: 0, borderRadius: 500, rotate: 0 },
        'first',
      )
      .fromTo(
        '.sec03__circle .circle02',
        { xPercent: 300, borderRadius: 0 },
        { xPercent: 0, borderRadius: 300 },
        'first',
      )
      .fromTo(
        '.sec03__circle .circle03',
        { xPercent: -400, borderRadius: 20 },
        { xPercent: 0, borderRadius: 200 },
        'second',
      )
      .fromTo(
        '.sec03__circle .circle04',
        { xPercent: 600, borderRadius: 0 },
        { xPercent: 0, borderRadius: 100 },
        'second',
      )
      .fromTo('.sec03__image .i1', { scale: 0, rotate: 360 }, { scale: 1, rotate: 0 }, 'img')
      .from('.sec03__image .i2', { xPercent: 300 }, 'img02');

    ScrollTrigger.create({
      animation: ani9,
      trigger: '#section03',
      start: 'top top',
      end: '+=5500',
      scrub: 1,
      pin: true,
      markers: false,
      anticipatePin: 1,
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    const ani10 = gsap
      .timeline()
      .fromTo('.sec03__image .i1', { yPercent: 200, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1 }, 'img')
      .fromTo('.sec03__image .i2', { xPercent: 300, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1 }, 'img');

    ScrollTrigger.create({
      animation: ani10,
      trigger: '#section02',
      start: 'top top',
      end: '+=180',
      scrub: 1,
      markers: false,
    });
  },
});
