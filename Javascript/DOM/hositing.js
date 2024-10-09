debugger
var x = 7;
function getname(){
    console.log("Prathamesh Chavan");//it will give function in source
}
var gh = function getname(){
    console.log("Prathamesh Chavan");//it will give undefined in source as it behaves like a variable here
}

var getName2 = ()=>{
    console.log("Prathamesh Chavan"); //it will be undefined 
}
console.log(x);
getname()
console.log(getname);


//Local storage madhe string madhe data kasa push kryacha
const user = "Prathamesh";
localStorage.setItem("user",JSON.stringify(user));
localStorage.getItem("user")
JSON.parse(localStorage.setItem("user"))