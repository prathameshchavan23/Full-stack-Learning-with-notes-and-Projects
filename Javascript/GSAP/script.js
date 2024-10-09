// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"Blue",
//     rotate:360,
// })

// var t1 = gsap.timeline();
// t1.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   scale: 0.5,
//   rotate: 360,
// });

// t1.to("#box2", {
//   x: 1000,
//   duration: 2,
//   delay: 2,
//   rotate: 360,
//   scale: 0.5,
// });

// t1.to("#box3", {
//   x: 1000,
//   duration: 2,
//   delay: 3,
//   rotate: 360,
//   scale: 0.5,
// });

// let tl = gsap.timeline();

// tl.from(".logo", { y: -50, opacity: 0, duration: 1 })     // Logo slides in from above
//   .from(".menu-item", { opacity: 0, stagger: 0.2, duration: 0.8 })  // Menu items fade in one by one
//   .to(".background", { opacity: 1, duration: 1 });         // Background fades in

// gsap.from("#page2 #circle", {
//   scale: 0,
//   duration: 2,
//   rotate: 720,
//   // scrollTrigger:"#page2 #circle" //write can this type also
//   scrollTrigger: {
//     trigger: "#page2 #circle",
//     scroller: "body", //scroller: "body":
//     // Specifies the scrolling element. In this case, "body" means the entire page scroll is being watched.
//     // If you had a different scrollable container, you could specify it here.
//     markers: true,
//     //This adds visual markers on the screen, which help to debug the start and end points of the ScrollTrigger. You’ll see little labels indicating the start and end points.
//     start: "top 80%",
//     scrub: true,
//     //This makes the animation synchronized with the scroll position. It means the animation will play forward as you scroll down and reverse as you scroll up. It creates a smooth, scroll-based interaction.
//     end: "top 30%",

//   },
// });

// Locomotive scroll : copied from it's github , from smooth section
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//Locomotive js codepen code
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),//change here also 
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
