// //for of loop
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     // console.log(num)
// }

// const greetings = `Hello world`
// for (const greet of greetings) {
// console.log(`Each char is ${greet}`)
// }

//Maps
// const map = new Map() //only key values
// map.set('IN','India')
// map.set('fra','france')
// map.set('Pak','Pakistan')
// // console.log(map)

// for (const [key,value] of map) {
//     // console.log(key,': ',value)
// }
//The for..of loop only supports iterable objects like arrays, not objects.
// If you have to use an object though, ES2017 (ES8) allows you to use Object.values:

// const foo = { a: 'foo', z: 'bar', m: 'baz' };
// for (let value of Object.values(foo)) {
//     // console.log(value);
// }

// // const myObject = {
//     game1: "subway surfers",
//     game2: "GTA 6"
// }

// for (const gaming of myObject) {
//     // console.log(gaming)
// }

//for in loop used to print mostly keys
let myObject = {
  car1: "benz",
  car2: "bentley",
  car3: "buggati",
};

for (const key in myObject) {
  //    console.log(myObject[key]) //to print object
  //   console.log(`${key}  is for ${myObject[key]}`)
}
//array keys is index for forin loop

//for each loop
const coding = [1, 2, 3, 4, 5];
// coding.forEach((items)=>{
//     console.log(items)
// })
// coding.forEach((item,index,arg)=>{
//     console.log(item,index,arg)
// })

const logArrayElements = (element, index /*, array */) => {
  // console.log(`a[${index}] = ${element}`);
};
[2, 5, , 9].forEach(logArrayElements);

// Notice that index 2 is skipped, since there is no item at

// let values = coding.forEach((items)=>{
//     console.log(items)
//     return items
// })
// console.log(values) //for each doesn't return value so it will not return any value

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// //if ur writing num > 4 without {} so it will return value without writing return but if you use it, we are explicitllity returning so we use return keyword
// let values = myNums.filter ((nums)=> nums>4)
// let values = myNums.filter ((nums)=> {return nums>4})
// console.log(values)

// const newNums = []
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//         }
//     })
//     console.log(newNums)
let books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    published: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published: 1813,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: 1951,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    published: 1979,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    published: 1954,
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    published: 1890,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    published: 1865,
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    published: 1884,
  },
];

let userBooks = books.filter((bk) => bk.author === "Mark Twain");
userBooks = books.filter((bk) => bk.published >= 1800);
// console.log(userBooks);


const arr = [5, 1, 3, 2, 6];
// const sortedarr = arr.map((double)=>double*2)
// console.log(sortedarr)
const sortedarr = arr.map((double) => double.toString(35));
// console.log(sortedarr);

const newSums = [1, 2, 3, 4, 5, 6, 7, 8];
// const sett = newSums.map((nk)=> nk+4 )
const sett = newSums
  .map((nk) => nk * 10)
  .map((nk) => nk + 1)
  .filter((nk) => nk >= 40);
// console.log(sett)

//reduce
const arr1 = [1, 2, 3,4,5,6];
const myTotal = arr1.reduce((acc, currval) => {
  // console.log(`acc: ${acc} & currval is ${currval}`);
  return acc + currval;
}, 0); //0 is the starting value
// console.log(myTotal)
const output = arr1.reduce((max,currval)=>{
      if(currval > max){
        max = currval
      }
      return max
},0)
// console.log(output)


const arr2 = [/* some array */];
const maxVal = arr1.length ? Math.max(...arr1) : undefined;
// console.log(maxVal);


// Things learned:
// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

let users = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
  },
  {
    "firstName": "Jane",
    "lastName": "Smith",
    "age": 30
  },
  {
    "firstName": "Bob",
    "lastName": "Johnson",
    "age": 40
  },
  {
    "firstName": "Alice",
    "lastName": "Williams",
    "age": 28
  },
  {
    "firstName": "Mike",
    "lastName": "Davis",
    "age": 35
  },
  {
    "firstName": "Emily",
    "lastName": "Miller",
    "age": 22
  },
  {
    "firstName": "David",
    "lastName": "Wilson",
    "age": 45
  },
  {
    "firstName": "Sarah",
    "lastName": "Taylor",
    "age": 32
  },
  {
    "firstName": "Kevin",
    "lastName": "Brown",
    "age": 38
  },
  {
    "firstName": "Lisa",
    "lastName": "White",
    "age": 29
  }
]

// let findAge = users.filter((ag)=>ag.age>30).map((ag)=>ag.firstName)
// console.log(findAge)
// let see = users.reduce(function(acc,curr){
//   if(curr[age>30]){
//     acc[curr.age] = ++acc[curr.age]
//   } else{
//     acc[curr.age]=1
//   } return acc
// },[]) //[] initial value of this is empty array


