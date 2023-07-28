gsap.from('.sec08__title > h2.title01', {
  x: 500,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
  ease: 'circ',
  scrollTrigger: {
    trigger: '#section08',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    markers: false,
  },
});
gsap.from('.sec08__title > h2.title02', {
  x: -500,
  opacity: 0,
  stagger: 0.8,
  duration: 1,
  ease: 'circ',
  scrollTrigger: {
    trigger: '#section08',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    markers: false,
  },
});
const hoverItems = document.querySelectorAll('.hoverItem');

hoverItems.forEach(hoverItem => {
  const tl = gsap.timeline({ paused: true });
  tl.to(hoverItem, { duration: 0.5, opacity: 0 });
  hoverItem.animation = tl;

  hoverItem.addEventListener('mouseenter', function () {
    this.animation.play();
  });
});
