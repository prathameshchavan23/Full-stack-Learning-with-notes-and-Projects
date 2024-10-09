// we use `` (backtick) for string interpolation , we make placeholders we can directly inject the string here
const name = "pratham";
const repoCount = 50;
console.log(`hello my name is ${name} is my repo count is ${repoCount}`)//${} using this we inject var here
//declaring string below
const gameName = new String('Prathamesh')// we can see which value is in which position as per given value for eg:- P is on 0th position , u can run this on inspect--> console tab
// console.log(gameName[0]);
// console.log(gameName.__proto__);// gives object
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // values from 0 to 3 will be included here
// console.log(newString)

// const anotherString= gameName.slice(-8,4) // values will be reverse from -8 to 
// console.log(anotherString)

// const newStringOne = "  Prathamesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim());// it trims the extra space filled by user in the form or website 

const url = "https://prathamesh.com/prathamesh%20chavan";// we can replace %20 word with any letter or word or char
console.log(url.replace('%20','-'))
console.log(url.includes('kalesh'))// to check this word exists in the string or not
console.log(gameName.split('-'));
//Template literal string to print any character like ' or "
 let message= `Hello all
 ' kara
 "je baat che"`;