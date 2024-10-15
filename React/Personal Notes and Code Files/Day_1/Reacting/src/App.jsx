import React from "react";
import Card from "./Components/card";
//Functional component
function App() {
  const name = 12; //to call this we can call inside return with {}
  const calc = (12 * 13) / 18;
  const data = [1, 2, 3];
  return (
    <>
      {/* {data.map((index,value)=><h1 key={index}>Hey</h1>)}
      {calc} {name}
      <Card></Card> */}
      {/* You can return anything inside  this map but foreach don't return anything*/}
      {/* {data.map((elem, index) => (
        <div key={index} className="w-32 h-32 bg-zinc-100 rounded-md"></div>
      ))}  */}
     <Card></Card>
    </> //fragment
  );
}

// function App() {
//   return <h1>hey</h1>; //This is JSX and converts into React.createElement
// }

// Function / Component name and file name should be same to export the file
export default App;
