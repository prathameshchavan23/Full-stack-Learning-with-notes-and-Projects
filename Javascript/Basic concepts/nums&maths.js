const score = 400;
console.log(score);

const balance = new Number(100)// syntax, run it on console u will get many mehods for it
console.log(balance); 
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))// precision values should be 2 for calculations
const otherNumber = 56.899
console.log(otherNumber.toPrecision(2))// gives precise value and round off according to input 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
// you have various properties of number and maths u can access or see it from console tab
console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,6,9))// to find min value in an array
// console.log(Math.max(4,6,1,3))
console.log(Math.random());// everytime value will be between 0 & 1
console.log((Math.random()*10)+1);// as after multiplying by 10 it will become 0.59 to 5.9 and for no.s like 0.001 we have added +1  , floor method is added for rounding off the number
console.log(Math.floor(Math.random()*10)+1)

const min=10;
const max =20;
// remember below formula 
console.log(Math.floor(Math.random() * (max-min +1)+min))



//revise
console.log("Hello")
let lastName = "chavan";// it is a primitive so it will be a string, using dot operator we can also use this as a object like lastName.age;
let firstName= new String('Hello');// it is a object, it is a way to declare object using String constructor function













