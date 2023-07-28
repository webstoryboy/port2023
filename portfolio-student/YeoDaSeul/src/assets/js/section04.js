// 반응형에서 애니메이션 따로 주기
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    // about h2 글짜 쪼개기
    let typeSplit02 = new SplitType('.sec04__title > div', {
      types: 'lines, words, chars',
      tagName: 'span',
    });
    // // about h2
    gsap.from('.sec04__title > div .line', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '#section04',
        start: 'top center',
        end: '+=800',
        // markers: true,
        scrub: 1,
        opacity: 1,
      },
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    // about h2 글짜 쪼개기
    let typeSplit02 = new SplitType('.sec04__title > div', {
      types: 'lines, words, chars',
      tagName: 'span',
    });
    // // about h2
    gsap.from('.sec04__title > div .line', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '#section04',
        start: 'top center',
        end: '+=800',
        // markers: true,
        opacity: 1,
      },
    });
  },
});
// 반응형에서 애니메이션 따로 주기
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    const ani2 = gsap.timeline();
    ani2
      .from('.sec04__image .i4', { y: -100, autoAlpha: 0, ease: 'circ', duration: 0.5 })
      .from('.sec04__image .i1', { y: -100, autoAlpha: 0, borderRadius: 200 })
      .fromTo('.sec04__image .i2', { x: -100, autoAlpha: 0, rotate: 0 }, { x: 0, autoAlpha: 1, rotate: 10 })
      .fromTo('.sec04__image .i6', { x: 100, autoAlpha: 0, rotate: 0 }, { x: 0, autoAlpha: 1, rotate: -10 })
      .from('.sec04__image .i3', { y: 100, autoAlpha: 0, rotate: 10, ease: 'elastic' })
      .from('.sec04__image .i5', { y: 100, autoAlpha: 0, rotate: -10, ease: 'elastic' });

    ScrollTrigger.create({
      animation: ani2,
      trigger: '.sec04__image',
      start: 'top top',
      end: '+=4000',
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: false,
    });
  },

  // mobile
  '(max-width: 799px)': function () {},
});

let typeSplit03 = new SplitType('.sec04__desc > p', {
  types: 'lines, words, chars',
  tagName: 'span',
});
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    // about p
    const aboutP = gsap.from('.sec04__desc > p .line', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.4,

      scrollTrigger: {
        trigger: '.sec04__desc',
        start: 'top top',
        end: '+=500',
        markers: false,
        scrub: 1,
        opacity: 1,
      },
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    gsap.from('.sec04__desc > p', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.4,

      scrollTrigger: {
        trigger: '#section04',
        start: 'top top',
        end: '+=500',
        // markers: true,
        opacity: 1,
      },
    });
  },
});

// 사탕
TweenMax.to('.sec04__bgImg .bgI01', 0.3, {
  x: '+=10',
  rotation: '+=60',
  yoyo: true,
  duration: 0.3,
  repeat: Infinity,
});
TweenMax.to('.sec04__bgImg .bgI01', 0.3, {
  x: '-=10',
  rotation: '-=30',
  yoyo: true,
  duration: 0.3,
  repeat: Infinity,
});
// 고양이
TweenMax.to('.sec04__bgImg .bgI02', 0.3, {
  x: '-=10',
  rotation: '-=60',
  yoyo: true,
  duration: 0.3,
  repeat: Infinity,
});
TweenMax.to('.sec04__bgImg .bgI02', 0.3, {
  x: '+=10',
  rotation: '+=30',
  yoyo: true,
  duration: 0.3,
  repeat: Infinity,
});
