//async is a keyword with which we can create async functions and await is a keyowrd which can only be used with async to handle promises, these promises are asynchronous , async await is a syntactical suagr of .then and .catch at backend js uses .then and .catch for async/await
//async function always return a promise , if you return a string for eg: return "hello" , it will wrap it inside a promise and return you
//if using promise and calling promise inside a async function it will give a return as promise no need to wrap it

// const p = new Promise((resolve,reject)=>{
//   resolve("Promise resolved value")
// })

async function x() {
  //   console.log("HI"); //here if we don't use await then js engine print this first then will resolve the promise after 3000 seconds
  // return "hello";
  return p;
}
//calling above function
const dataPromise = x();
dataPromise.then((res) => console.log(res));

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000); //if we change the time as the time expires of respective promise it will gate printed on console if one promise has 2s and other 5s then 2s wala get's print first and 5s wala get's second
  // the timer ticking doesn't start at await, instead it started in the beginning of the code only where promise was declared.
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value 2");
  }, 3000);
});

async function handlePromise() {
  // Await can only used inside an async function
  // Can only write await keyword in front of a promise
  console.log("Hello world"); //it will print hello world then it will await for 3 sec
  const val = await p; // here JS engine waits for promise to get resolved then only it prints other things
  console.log("Hell");
  console.log(val);

  const val2 = await p2; //both the values will be printed at same time as asynchronous operations runs parallely
  console.log("Hell 2");
  console.log(val2);
}
handlePromise();

// While await is running in JS Engine, it does not actually wait rather the function is suspended and call stack is free for other stuffs but it looks like program is waiting at that point, it will move out of call stack and it will not move out of main thread and not block the main thread
//await is not blocking the main thread, it's just suspending the execution of the function and
//if our p1 function has greater time taking than p2 than first p1 function will get resolved as js engine runs synchronously line by line and after running p1 it moves to p2 till then p2 has resolved already as it has less time so it prints the result

const API_URL = "https://api/github/com/users/pratham_chavan23";
async function handlePromis() {
  const data = await fetch(API_URL); //here data is a response
  //what fetch does => it gives a response as object, to convert this to json use .json so response.json will be a promise and you will the get after resolving it
  //   const JsonValue = await data.json();
  //   console.log(JsonValue)

  // You can use try catch for Error handling and can also use  . Catch() method
  try {
    const JsonValue = await data.json();
    console.log(JsonValue);
  } catch (err) {
    console.log(err);
  }
}
