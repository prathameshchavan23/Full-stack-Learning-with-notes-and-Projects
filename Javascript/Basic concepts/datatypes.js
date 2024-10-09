// Primitive
// 7 types : String , Number , Boolean , Null , undefined , Symbol, BigInt
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 67578934n // n determines js will use bigint by automatic
// Reference type (NON-primitive)
// Array, Objects , Functions 
const colleges = [coep,modern,sp,jspm] //array


let myObje = { // declaring object
    name: 'Prathamesh', // key value pairs
    age:21,
}

const myFunction= function(){
    console.log("I am a function")
}

console.log(typeof colleges);//typeof operator gives datatype value like for null it's object and for undefimed it's undefined , askable questn in interview

