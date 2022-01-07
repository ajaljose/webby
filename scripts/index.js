$(document).ready(function(){
    debugger;
  $("#divContent").load('html/first.html');
})
gsap.registerPlugin(ScrollTrigger);

gsap.to(".navbar", {
  scrollTrigger: {
    trigger: ".two",
    endTrigger: ".one",
    scrub: true,
    toggleActions: "restart none none none",
    start: "bottom bottom"
  },
  snap: 0,
  backgroundColor: "black"
});