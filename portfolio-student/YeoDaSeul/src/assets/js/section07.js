// 반응형 내 사진 애니메이션
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    const img01 = gsap.timeline().fromTo('.sec07__image .i1', { opacity: 1, x: -200 }, { opacity: 1, x: 0 });

    ScrollTrigger.create({
      animation: img01,
      trigger: '#section07',
      start: 'top 10%',
      end: '+=1500',
      scrub: 1,
      markers: false,
    });

    const img02 = gsap.timeline().fromTo('.sec07__image .i2', { opacity: 1, x: 200 }, { opacity: 1, x: 0 });

    ScrollTrigger.create({
      animation: img02,
      trigger: '#section07',
      start: 'top 10%',
      end: '+=1500',
      scrub: 1,
      markers: false,
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    const img01 = gsap.timeline().fromTo('.sec07__image .i1', { opacity: 1, x: -100 }, { opacity: 1, x: 0 });

    ScrollTrigger.create({
      animation: img01,
      trigger: '.skill__box',
      start: 'top 10%',
      end: '+=200',
      scrub: 1,
      markers: false,
    });

    const img02 = gsap.timeline().fromTo('.sec07__image .i2', { opacity: 1, x: 100 }, { opacity: 1, x: 0 });

    ScrollTrigger.create({
      animation: img02,
      trigger: '.skill__box',
      start: 'top 10%',
      end: '+=200',
      scrub: 1,
      markers: false,
    });
  },
});

// 반응형 글씨 교차 애니메이션
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    gsap.to('.sec07__textAni .skills__text', {
      scrollTrigger: {
        trigger: '.sec07__textAni .infinite__item',
        scrub: 1,
      },
      x: -150,
    });
    gsap.to('.sec07__textAni .skills__text02', {
      scrollTrigger: {
        trigger: '.sec07__textAni .infinite__item',
        scrub: 1,
      },
      x: 150,
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    gsap.to('.sec07__textAni .skills__text', {
      scrollTrigger: {
        trigger: '.sec07__textAni .infinite__item',
        scrub: 1,
      },
      x: -150,
    });
    gsap.to('.sec07__textAni .skills__text02', {
      scrollTrigger: {
        trigger: '.sec07__textAni .infinite__item',
        scrub: 1,
      },
      x: 150,
    });
  },
});

// 글씨 애니메이션
let typeSplit07H2 = new SplitType('.sec07__text > h2', {
  types: 'lines, words, chars',
  tagName: 'span',
});

// 글씨 애니메이션2
let typeSplit07P = new SplitType('.sec07__text > p', {
  types: 'lines, words, chars',
  tagName: 'span',
});

ScrollTrigger.matchMedia({
  '(min-width: 800px)': function () {
    gsap.from('.sec07__text > h2 .char', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '.sec07__text',
        start: 'top center',
        end: '+=400',
        // markers: true,
        scrub: 1,
        opacity: 1,
      },
    });

    gsap.from('.sec07__text > p .word', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '.sec07__text',
        start: 'top center',
        end: '+=400',
        // markers: true,
        scrub: 1,
        opacity: 1,
      },
    });
  },
  '(max-width: 799px)': function () {
    gsap.from('.sec07__text > h2 .char', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '#section07',
        start: 'top center',
        end: '+=400',
        // markers: true,
        scrub: 1,
        opacity: 1,
      },
    });

    gsap.from('.sec07__text > p .word', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      ease: 'circ.out',
      stagger: 0.3,

      scrollTrigger: {
        trigger: '#section07',
        start: 'top center',
        end: '+=400',
        // markers: true,
        scrub: 1,
        opacity: 1,
      },
    });
  },
});
