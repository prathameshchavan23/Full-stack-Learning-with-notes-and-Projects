"use strict"
let mydate = new Date() 
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(typeof mydate);// it is an object


let mycreateddate = new Date(2023,0,20,5,3)// month  starts from 0 in js
console.log(mycreateddate.toLocaleString())

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000))
console.log(myTimeStamp)
console.log(mycreateddate.getTime())// to check time from particular date

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)// +1 cause as month starts from 0 in js so jan should be from 1
console.log(newDate.getDay())//getDay() method returns the day of the week (0 to 6) of a date

console.log(newDate.toLocaleString('default',{//customizing locale string
    weekday: 'long',
}))
