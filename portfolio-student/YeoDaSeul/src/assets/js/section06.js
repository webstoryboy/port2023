// 반응형 스킬핀
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    const skillPin = gsap.timeline();
    skillPin.from('.sec06__left', {});

    ScrollTrigger.create({
      animation: skillPin,
      trigger: '.sec06__left .left__img',
      start: 'top 0%',
      end: '+=3000',
      scrub: 1,
      pin: '.sec06__left',
      markers: false,
      anticipatePin: 1,
      pinSpacing: true,
    });

    const ani3 = gsap.timeline();
    ani3.from('.skill__box h2 img', {
      autoAlpha: 0,
      y: -100,
      ease: 'elastic',
      duration: 0.3,
      stagger: 0.2, // 로고들 간의 간격 조절
    });

    ScrollTrigger.create({
      animation: ani3,
      trigger: '.skill__box',
      start: 'top top',
      end: '+=3000',
      scrub: 1,
      markers: false,
      anticipatePin: 1,
    });
  },

  // mobile
  '(max-width: 799px)': function () {
    const skillBoxes = document.querySelectorAll('.skill__box');

    skillBoxes.forEach((box, index) => {
      const direction = index % 2 === 0 ? 'right' : 'left';
      const distance = direction === 'left' ? -100 : 100;

      gsap.fromTo(
        box,
        {
          x: distance,
          scale: 1,
          y: 100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          scale: 1,
          y: 100,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: '.sec06__left',
            start: 'top top',
            end: '+=300',
            // markers: true,
          },
        },
      );
    });

    gsap.from('.skill__box h2 img', {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.sec06__left',
        start: 'top top',
        end: '+=300',
        // markers: true,
      },
    });
  },
});
