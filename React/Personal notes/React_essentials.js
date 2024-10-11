//immutable vs mutable
var arr = [1, 2, 3, 4];
var arr2 = arr;
console.log(arr2);
//here both arr and arr2 are popped cause they are reference type they don't copy
// react.js has state which can't be mutate means immutable(can't edit or update)
var state = [1, 2, 3, 4];
//don't use pop here as it is immutable use a new arrya
state = [5, 6];

//to copy the variable without changing their values we use spread operator
var arr = [1, 2, 3, 4];
var arr2 = [...arr];
arr2.pop();
console.log(arr2); //1,2,3
console.log(arr); //1,2,3,4

var copy = { name: "Prathamesh", age: 24, name: "Prathan" };
var state = { ...copy };
state.name = "Pratham";
console.log(copy);
console.log(state);

//destructuring
var obj = {
  name: "Prathamesh",
  social: {
    facebook: {
      first: "Hey",
      sec: "hello",
    },
  },
};

const { sec: SecondName } = obj.social.facebook;

const user = {
  id: 101,
  username: "john_doe",
  contact: {
    email: "john@example.com",
    phone: "123456789",
  },
};
const {
  username,
  contact: { phone },
} = user;

const arr = [12, function () {}, 13];
const [first, , third] = arr; //destructured to take output as 12,13

/*Import export
hum log component banaate hai, component matlab page ka
hissa, navbar, sidebar, cart, landing, second, ab dikkat ye aati
hai ki har hissa alag alag component hai aur components ko hum
log alag alag files mein rakhte hai, to inko last mein jodna bhi
padta hai, jodne ke liye use hota hai import and export */

function cart() {}
export default cart;

export function ABCD() {}

export function efg() {}

//when we use object inside a arrow function wrap it that with() as it will treat that object as it's body of fucntion
const abcd = () => ({
  name: "Hello",
});

//when we used state so har baar ek naya array add karna is not possible so we can use map
var state = [1, 2, 3, 4, 5];
state.map((elem) => elem + 1);
//map returns every array and filter is used to reduce the array

var arr = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "harshika", gender: "female" },
];
const ans = arr.filter((elem) => elem.gender === "others");
