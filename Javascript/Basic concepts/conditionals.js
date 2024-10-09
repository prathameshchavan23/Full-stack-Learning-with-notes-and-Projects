// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //here it is out of scope of if

// const user = true
// const debitcardv = true
// const loginfromgoogle = true
// const loginfromgmail = true

// if(user && debitcardv){
//     console.log("allowed")
// }

// if(loginfromgoogle && loginfromgmail){
//     console.log("user logged")
// }


//switch 
// const month =3
// switch(month){
//     // case 1:
//     case "jan":
//         console.log("january")
//         break;
//         case 2:
//             console.log("february")
//             break;

//     default:
//           console.log("default")
//           break  
// }

// falsy values 
// false,0,-0,BigInt 0n, "empty string", null, undefined,Nan

//truthy values
//"0",'false'," ",[], {}, function(){}

//nullish coalescing operator (??): it works with mostly null,undefefined
let val1
val1 = null ?? 15
// val1 undefined ?? 15
console.log(val1)

//Ternary operator
//condition?true:false
const age = 25
const user = age >= 18 ? "adult" : "minor"
console.log(user)


for(let i=1;i<=10;i++){
    console.log(`Outer loop value ${i}`)
    for(let j=1;j<=10;j++)
        console.log(`Inner loop value ${j}`)
    console.log(i+"*" + j + " = "+i*j)
}


let index=0
while(index<=0){
    console.log(`value of index is ${index}`)
    index = index + 2
}
 //pehle kaam fir condition
 let score =0
do{
  console.log(`score is ${score}`)
  score++
}while(score<=10)