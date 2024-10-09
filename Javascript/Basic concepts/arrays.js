// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers);

// to push no at end
// numbers.push(10);
// console.log(numbers);
// // to push no at start
// numbers.unshift(8);
// console.log(numbers);
// // to push no at middle
// numbers.splice(2,0,'a','b');//2 is index,0 is count means no no.s should delete , 
// console.log(numbers);

let numers = [1,2[3,4],4,5,6[5,6]]
let realarray = numers.flat(Infinity)
// console.log(realarray)
// console.log(Array.isArray("Pratham"))// to check is this array
// console.log(Array.from("Pratham"))//to convert it to array
// console.log(Array.from("{name: Pratham}"))



// console.log(numbers.indexOf(10));//when the given no is no present so compiler gives output as -1 here
// if(numbers.indexOf(3) != -1)
//     console.log("present");

// console.log(numbers.includes(3))// it gives true or false
// console.log(numbers.indexOf(10,1))//3 means no which you are searching, 1 is index from where youare searching

//array of object
// let courses=[
//     {no:1, name:'pratham'},
//     {no:2, name:'ritesh'}
// ]
// console.log(courses);
// console.log(shift.indexOf({no:1, name:'pratham'}));// here we will get -1 beacuse in heap or refernce the value gets referred the above value has diff address
// console.log(shift.includes({no:1, name:'pratham'}));
   
// let pratham =courses.find(function(pratham){
//     return pratham.name ==='pratham';
// })
//write above code using arrow function
// let pratham =courses.find(pratham => pratham.name ==='pratham');
//look at syntax properly
// console.log(pratham)



// let numbers=[1,2,3,4,5,6,7]
// numbers.pop()//to remove last no
// numbers.shift() // to remove first no
// numbers.splice(2,1)//to remove from middle
// console.log(numbers)
// to empty the array
// let no = [1,2,3,4,5]
// let no2= no
// // no.length=0 
// no.splice(0,no.length)
// console.log(no)
// console.log(no2)


//combining array
// let first=[1,2,3]
// let second=[4,5,6]
// let combine= first.concat(second)
// let combine= [...first,'a',...second]//using spread operator we can combine to arrays
// console.log(combine)

//slicimg array: we'll give index under which only they'll be print on console
// let marks = [10,20,30,40,50,60,70,80]
// console.log(marks.slice(1,7))//last element will be excluded


//for iterating an array
let arr=[1,2,3,4,5]
//for of loop
// for(let value of arr)
//     console.log(value)

//for each loop needs callback function
// arr.forEach(number => console.log(number))//arrow function

// const joined  = arr.join(',')//to join an array
// console.log(joined)


// let messge = 'This is my first msg'
// let parts = messge.split(' ')//splitting messg base on blank space and it creates array
// console.log(parts) 
// let joined  = parts.join('&')//to join an array
// console.log(joined)

//sorting array
// let numbers = [30,40,10,20,50]
// numbers.sort()
// numbers.reverse()
// console.log(numbers)

//filtering array
// let number = [1,2,-1,-2]
// let filtered = number.filter(value => value>=0)
// console.log(filtered)

//mapping of array
// let number = [7,8,9,10]
// console.log(number)
//  let items = number.map(function(value){
//     return 'student_no ' + value;
//  });
//  console.log(items)

// //mapping with objects
let numbers = [1,2,-1,-2]
// let filtered = number.filter(value => value>=0)
// console.log(filtered)

//with objects
// let items = filtered.map(num => {value:num});// 0 index is mapped with value with key 1 
// console.log(items)

//combining above both code using chaining
let items = numbers
              .filter(value => value>=0)
              .map(num =>{ return {value:num}});
              console.log(items)

