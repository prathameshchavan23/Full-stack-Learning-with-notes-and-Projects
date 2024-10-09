const p1 = new Promise((resolve, reject) => {
  setInterval(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setInterval(() => resolve("p2 success"), 1000);
  setInterval(() => reject("p2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setInterval(() => resolve("p3 success"), 2000);
});

// Promise.all([p1, p2, p3])
// Promise.allSettled([p1, p2, p3])
Promise.any([p1, p2, p3]) //it will get you first success promise if it had any rejection before it, for every rejection it gives aggregate eroor
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    //it is used to catch  uncaught error, and .error shows error like UI
    console.error(err);
    console.log(err.errors); //for printing all error in the array format you  can use error[0] for any particular error
  });
