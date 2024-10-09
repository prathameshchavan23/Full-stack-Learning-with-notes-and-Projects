const countValue = document.querySelector("#counter");

const increment = () => {
  //get the value from UI
  let value = parseInt(countValue.innerText);
  // increment the value by 1
  value = value + 1;
  // update the UI with the new value
  countValue.innerText = value;
};

const decrement = () => {
  //get the value from UI
  let value = parseInt(countValue.innerText);
  // increment the value by 1
  value = value - 1;
  // update the UI with the new value
  countValue.innerText = value;
};

