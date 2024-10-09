// Get the content of the first h1 element
// var h1 = document.querySelector("#first-h1").textContent;

// // Split the text content into individual characters
// var splittedText = h1.split("");

// // Wrap each character in a <span>
// var add = "";
// splittedText.forEach((elem) => {
//   add += `<span>${elem}</span>`;
// });

// // Replace the original text with the new HTML
// document.querySelector("#first-h1").innerHTML = add;

// Animate with GSAP
// gsap.to("#first-h1 span", {
//   color: "#e3e3c4", // Color change to be animated
//   stagger: 0.1,     // Animation delay between each span
//   scrollTrigger: {
//     trigger: "#first-h1", // The element to trigger the animation
//     scroller: "body", // Only needed if using a custom scroll container
//     markers: true,    // Shows markers for debugging
//     start: "top 50%", // When the top of the trigger hits 50% of the viewport
//     end: "top 10%",   // Animation will end when the trigger hits 10% of the viewport
//     scrub: 1          // Smooth animation controlled by the scroll
//   }
// });

var allh1 = document.querySelectorAll("#page2 h1");

allh1.forEach((elem) => {
  var clutter = "";  // Initialize empty string to hold the spans
  var h1Text = elem.textContent;  // Get the text content of each h1 element
  var h1Splitted = h1Text.split("");  // Split the text into individual characters

  // Iterate over each character
  h1Splitted.forEach((e) => {
    clutter += `<span>${e}</span>`;  // Append each character inside a span
  });

  elem.innerHTML = clutter;  // Replace the original h1 text with the span-wrapped version
  console.log(elem);
});

