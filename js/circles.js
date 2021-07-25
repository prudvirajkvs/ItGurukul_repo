const circlesStart = () => {
  console.log('circles started');
  document.getElementById('nav-brand').style.display =
    'inline-block !important';
};

const t = new gsap.timeline({ onstart: circlesStart });

const textTween = gsap.fromTo(
  '.cir-intro-text',
  { scale: () => (windowWidth > 756 ? 5 : 1.5), top: '10%' },
  { opacity: 1, scale: 1, duration: 5, right: '10%' }
);
const circle_tween = [
  gsap.fromTo(
    '.circle',
    { scale: 1 },
    {
      width: () => (windowWidth > 756 ? '100px' : '60px'),
      height: () => (windowWidth > 756 ? '100px' : '60px'),
      x: () => (windowWidth > 756 ? 100 : 10),
      duration: 5,
      ease: 'ease',
      onstart: circlesStart,
    }
  ),
  textTween,
];

const circle_tween_square1 = [
  gsap.to('.cir-1', {
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, 0)',
    width: () => (windowWidth > 756 ? '60%' : '80%'),

    height: '60%',
    borderRadius: '10px',
    duration: 10,
    position: 'absolute',
    zIndex: 1,
    offset: 5,
  }),
  gsap.fromTo(
    '.cir-1>p',
    { display: 'none', opacity: 0, scale: 2 },
    { display: 'block', opacity: 1, delay: 4, scale: 1, duration: 5 }
  ),
];
const circle_tween_square2 = [
  gsap.to('.cir-2', {
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, 0)',
    width: () => (windowWidth > 756 ? '60%' : '80%'),
    height: '60%',
    borderRadius: '10px',

    position: 'absolute',
    duration: 10,
    offset: 10,
  }),
  gsap.fromTo(
    '.cir-2>p',
    { display: 'none', opacity: 0, scale: 2 },
    { display: 'block', opacity: 1, delay: 4, scale: 1, duration: 5 }
  ),
];
const circle_tween_square3 = [
  gsap.to('.cir-3', {
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, 0)',
    width: () => (windowWidth > 756 ? '60%' : '80%'),

    height: '60%',
    borderRadius: '10px',

    position: 'absolute',
    duration: 10,
  }),

  gsap.fromTo(
    '.cir-3>p',
    { display: 'none', opacity: 0, scale: 2 },
    { display: 'block', opacity: 1, delay: 4, scale: 1, duration: 5 }
  ),
];
const circle_tween_square4 = [
  gsap.to('.cir-4', {
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, 0)',
    width: () => (windowWidth > 756 ? '60%' : '80%'),

    height: '60%',
    borderRadius: '10px',

    position: 'absolute',

    duration: 10,
  }),

  gsap.fromTo(
    '.cir-4>p',
    { display: 'none', opacity: 0, scale: 2 },
    { display: 'block', opacity: 1, delay: 4, scale: 1, duration: 5 }
  ),
];

t.add(circle_tween);
t.add(circle_tween_square1);
t.add(circle_tween_square2);
t.add(circle_tween_square3);
t.add(circle_tween_square4);
const circle_scene = new ScrollMagic.Scene({
  triggerElement: '.circle-container',
  duration: 6000,
  triggerHook: 0,
  offset: () => (windowWidth > 756 ? 0 : -100),
})
  .setTween(t)
  .setPin('.circle-container')

  .addTo(controller);
