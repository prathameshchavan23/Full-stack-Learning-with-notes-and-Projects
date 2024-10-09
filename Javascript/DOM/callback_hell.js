// 1.) "Time, tide and JS waits for none"
// 2.) Callback function enables us to do async programming in JS. We use this for some functions that are interdependent on each other for execution. For eg: Ordering can be done after adding items in cart. So we pass cb functions as argument to functions which then call the cb function passed. However this causes some problems:

//      a.) Callback Hell: When a callback function is kept inside another function, which in turn is kept inside another function. (in short, a lot of nested callbacks). This causes a pyramid of doom structure causing our code to grow horizontally, making it tough to manage our code.

//      b.) Inversion of control: This happens when the control of program is no longer in our hands. In nested functions, one API calls the callback function received but we don't know how the code is written inside that API and how will it effect our code. Will our function be called or not? What if called twice? What if it has bogs inside it? We have given control of our code to other code.

const cart = ["shoes", "jeans", "kurtas"];
api.createOrder(cart, function (orderId) {
  //it's creating a pyramid like structure, callback hell
  api.proceedToPayment(orderId, function (paymentInfo) {
    api.showOrderSummary(paymentInfo, function () {
      api.updateWallet();
    });
  });
});

// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.They contain two properties: PromiseState and PromiseResult.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable.
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()
//In browser the promise can be seen as pending and in state it is fulfilled it's because of inconsistency of browser

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWallet(paymentInfo));



//   1. Promise can be created using a new Promise() constructor function.
//   2. This constructor function takes a callback function as argument. 
//   3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
//   4. We can only resolve or reject a promise. Nothing else can be done.
//   5. An error can also be created using new Error('error message').
//   6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
//   7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
//   8. It can be useful in a way if we want to catch error for a particular portion of a chain.
//   9. We can have multiple catch based on requirement and then a general catch at the end.
//   10. Always remember to return a value in the promise chain for the next .then to use .
//   11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.
  
  
  
  
  const cart = ['shoes', 'pants', 'kurta'];
  
  createOrder(cart)
    .then(function(orderId) {
      console.log(orderId);
      return orderId;
    })
    .then(function(orderID) {
      return proceedToPayment(orderID)
    })
    .then(function({ message, amt }) {
      console.log(message, 'of amount:', amt);
      return showOrderSummary(message, amt);
    })
    .then(function({ message, amt }) {
      console.log('Your wallet has beed debited by:', amt);
    })
    .catch(function(err) {
      console.log(err.message);
    })
    .then(function() {
      console.log('No matter what happens, I will get executed');
    });
  
  
  
  function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
      // create order
      // Validate Cart
      // orderId
      if (!validateCart(cart)) {
        const err = new Error('Cart is not valid!');
        reject(err);
      }
      // logic for createOrder
      const orderId = '12345';
      if (orderId) {
        setTimeout(function() {
          resolve(orderId);
        }, 5000)
      }
    });
  
    return pr;
  }
  
  function proceedToPayment(orderID) {
    // Logic for handling payment.
    // This function returns a promise
    return new Promise(function(resolve, reject) {
      // logic
      resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
    })
  }
  
  function showOrderSummary(paymentInfo, amt) {
    return new Promise(function(resolve, reject) {
      // console.log(amt);
      if (amt >= 2000) {
        resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
      } else {
        reject(new Error('Please buy more for discount'));
      }
    })
  }
  
  function validateCart(cart) {
    // code to validate cart.
    return true;
    // return false;
  }
  
  