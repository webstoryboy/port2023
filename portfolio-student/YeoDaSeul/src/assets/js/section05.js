// 반응형 스티커
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    gsap.set('.sec05__sticker .s1', { opacity: 1, scale: 1.5, rotate: 0 });
    gsap.set('.sec05__sticker .s2', { opacity: 1, scale: 1.5, rotate: 0 });
    gsap.set('.sec05__sticker .s3', { opacity: 1, scale: 1.5, rotate: 0 });

    gsap.to('.sec05__sticker .s1', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: -30,
      y: '20vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });

    gsap.to('.sec05__sticker .s2', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: 30,
      y: '-5vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });

    gsap.to('.sec05__sticker .s3', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: -30,
      y: '10vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    gsap.set('.sec05__sticker .s1', { opacity: 1, scale: 1, rotate: 0 });
    gsap.set('.sec05__sticker .s2', { opacity: 1, scale: 1, rotate: 0 });
    gsap.set('.sec05__sticker .s3', { opacity: 1, scale: 1, rotate: 0 });

    gsap.to('.sec05__sticker .s1', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: -30,
      y: '20vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });

    gsap.to('.sec05__sticker .s2', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: 30,
      y: '-5vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });

    gsap.to('.sec05__sticker .s3', {
      duration: 0.1,
      opacity: 1,
      scale: 1,
      rotate: -30,
      y: '10vh',
      scrollTrigger: {
        trigger: '.sec05__sticker .s3',
        scrub: 1,
      },
    });
  },
});

// 반응형 글씨 교차 애니메이션
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    gsap.to('.skills__text', {
      scrollTrigger: {
        trigger: '.infinite__item',
        scrub: 1,
      },
      x: -150,
    });
    gsap.to('.skills__text02', {
      scrollTrigger: {
        trigger: '.infinite__item',
        scrub: 1,
      },
      x: 150,
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    gsap.to('.skills__text', {
      scrollTrigger: {
        trigger: '.infinite__item',
        scrub: 1,
      },
      x: -150,
    });
    gsap.to('.skills__text02', {
      scrollTrigger: {
        trigger: '.infinite__item',
        scrub: 1,
      },
      x: 150,
    });
  },
});
