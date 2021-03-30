const header = document.querySelector('header');

gsap.from(header, {
  opacity: 0,
  delay: 0.5,
  duration: 1.5,
  ease: 'power2.inOut'})
gsap.from('h1', {
  opacity: 0,
  delay: 2,
  duration: 1,
  ease: 'power2.inOut' })
gsap.from('nav', {
  opacity: 0,
  delay: 2,
  duration: 1,
  ease: 'power2.inOut'})
gsap.from('p', {
  opacity: 0,
  delay: 2,
  duration: 1,
  ease: 'power2.inOut'})