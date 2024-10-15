// const heading = React.createElement("h1", {}, "Hello world"); //we pass three arguments during this, {} is to give attributes to the tags
// console.log(heading); //it is object as we're creating a rect element and every react element is a object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Nested structure in react
/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm h2 tag"),
  ])
);
console.log(parent);
root.render(parent);
