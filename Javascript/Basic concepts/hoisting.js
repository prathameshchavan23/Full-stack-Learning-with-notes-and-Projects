// getName();
// console.log(x)
// console.log(getName) // it gives the whole function


// var x=7;
// function getName(){
//     console.log("Prathamesh chavan")
// }

let src={
    a:10,
    b:20,
    c:30,
}
// let dest= {...src} //... is a spread operator
let dest= Object.assign({},src);
src.a=90;
console.log("src:",src);
console.log("dest:",dest);