document.getElementById("root"); //ere you will get wole code by root
//make sure to use it on document object, it returns a single object

//below mwtods use document object, bot return multiple items, list returned is not an array
document.getElementsByClassName("root");
document.getElementsByTagName();
//select anyting on browser and write $0 in console tab you will get code for tat element
//query selector meade tumi multiple inputs dile tari to first input as output deil
document.querySelector("#root"); //#defines it is Id
document.querySelector(".root"); //. defines it is class
document.querySelector("root"); //ere root is a tag and te first root tage will be visible ere
document.querySelectorAll("root"); //it will give all element of root , it is used for multipkle inputs

document.innerHTML(); //
console.dir(); //gives the element as an object

//To add new element
document.createElement("div");
content.appendChild(code); //here to add child element , it adds as last siblings
//To add te child in any position like before begin or end , after begin or end we use insertAdjacentElement
let newText = document.createElement("p");
newText.textContent = "Hello, World!";
content.insertAdjacentElement("beforeBegin", newText); //here to add before begin
content.insertAdjacentElement("afterBegin", newText);
content.insertAdjacentElement("beforeend", newText);
content.insertAdjacentElement("afterend", newText);

//we can update styling in css
content.style.color = "red";
content.style.backgroundcolor = "red";
content.style.cssText = "color:red; backgroundColor:black; font-size:4rem";
content.setAttribute("style", "background-color:red "); //style is a attribute name
let classNames = content.className;
content.className.split("");

//Event listener
document.addEventListener("click", function () {
  console.log("click event");
});

//Double click event 
document.addEventListener("dblclick",  (e) => {
  console.log("double click",e.key);
});

//focus event
const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('focus', (e) => {
  usernameInput.addEventListener('blur', (e) => { //you can check the type blur in the type as it will show thrr type focus
    console.log(e.type); //we can see here the type of focus or blur
    inputValue = e.target.value
    paragraph.innerText = e.target.value
})


//to print key property of event , input element
document.addEventListener("input",  (e) => {
  console.log("input event",e.key);
});

document.addEventListener("keypress",  (e) => {
  console.log("input event",e.key);
  console.log("input event",e.code);

});

//here we can add event listener to any element
let coding = document.querySelector("h1");
coding;
coding.addEventListener("click", function () {
  console.log("add event listener");
  coding.style.color = "red";
});

//to remove event listener , we create only function as functions are objects it can have different address so one function is used to add and remove both
function print() {
  alert("hey i clicked");
}
document.addEventListener("click", print);
document.removeEventListener("click", print);

//to access addeventListener object
const content = document.querySelector("#wrapper");
content.addEventListener("click", function (event) {
  console.log(event);
  event.preventdefault(); //that if the event does not get explicitly handled, its default action should not be taken as it normally would be
});

//to avoid many events
let exercise = document.createElement("div");
function para() {
  console.log("I have clicked" + event.target.textContent); //event has been targeted to the text which has been clicked
}
exercise.addEventListener("click", para);
for (let i = 1; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = `This is paragraph ${i}`;
  // To add before content + after content we can use += like textcontent += ''
  exercise.appendChild(newElement);
  
}
document.body.appendChild(exercise); //important to show body as you can't append directly on document

//to target any specific element we can add nodename property
let code = document.querySelector("#wrapper");
code.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("you clicked on span" + event.target.textContent);
  }
});

//adding 100 paras
const t1 = performance.now();
for (i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is paragraph" + i;
  document.body.appendChild(para);
}
const t2 = performance.now();
console.log(`time taken ${t2 - t1}ms`);

//optimizing above code
const t3 = performance.now();
let myDIv = document.createElement("div");
for (i = 1; i <= 100; i++) {
  let newPara = document.createElement("p");
  newPara.textContent = "This is optimized code" + i;
  document.body.appendChild(newPara);
}
document.body.appendChild(myDIv);
const t4 = performance.now();
console.log(`time taken ${t4 - t3}ms`);

//Promise
// let myPromise = new Promise(function (resolve,reject){
//     setTimeout(function(){
//         console.log('I m inside promise')
//     },5000)
//     // resolve(2234)
//     reject(new Error('New error'))
// })
// // myPromise.then((value) => {console.log(value)})//when promise get's fulfilled we use then here
// myPromise.catch((value) => {console.log(value)})

// let wadd1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("1st");
//   }, 2000);
//   resolve(true)
// });

// let output = wadd1.then((value) => {
//   //it is returning promise
//   let wadaa2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("2nd");
//     }, 2000);
//     resolve("wada2 resolved");
//   });
//   return wadaa2;
// });

// output.then((value) => console.log(value));


//async await
// async function utility(){
    
//     let mahWeath = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('I m inside promise')
//         },1000)
//     });
    
//     let dmWeath = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('I m inside promise')
//         },1000)
//     });
    
//     let mh = await mahWeath; // await means below linecan't get execeuted if it's above line is not executed
//     let dm = await dmWeath;
    
//     return [mh,dm];

// }

//async syntax
// async function abcd() {
//   return 7
// }
// abcd()

// //json(javascript object notation), fetch API
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.org/posts')
//     let data = await content.json()
//     console.log(data)
// }
// utility()

const nameTag = document.querySelector('name-tag')
nameTag.innerText = localStorage.nam

location.reload() //location means current location of page and it reloads the whole page