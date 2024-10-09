var form = document.querySelector("form");
// var inp1 = document.querySelector("#input1");
// var inp2 = document.querySelector("#input2");
var inputs = document.querySelectorAll('input[type="text"]')

form.addEventListener("submit", function (event) {
  // to stop loading form after clicking on it so we used prevent default
  event.preventDefault();
  if (inp1.value === "" || inp2.value === "") {
    alert("Input is blank")
  }
  else{
    alert("Form submitted");
  }
});
