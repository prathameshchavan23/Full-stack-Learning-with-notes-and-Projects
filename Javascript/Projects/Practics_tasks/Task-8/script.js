var input = document.querySelector("input");

var data = [
  {
    name: "Prathamesh",
    src: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww",
  },
  {
    name: "Shyam",
    src: "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww",
  },
  {
    name: "Rahul",
    src: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",
  },
  {
    name: "Krishna",
    src: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww",
  },
];

// Function to render the list of people
function renderPeople(people) {
  var pers = "";
  people.forEach(function (elem) {
    pers += `
      <div class="person">
        <div class="img">
          <img src="${elem.src}" alt="${elem.name}">
        </div>
        <h4>${elem.name}</h4>
      </div>`;
  });
  document.querySelector(".people").innerHTML = pers;
}

// Initial render of all people
renderPeople(data);

// Add event listener for the input field to filter the names
input.addEventListener("input", function () {
  var searchValue = input.value.toLowerCase();

  // Filter the data based on input value
  var matching = data.filter(function (e) {
    return e.name.toLowerCase().startsWith(searchValue);
  });

  // Render the filtered people
  renderPeople(matching);
});

