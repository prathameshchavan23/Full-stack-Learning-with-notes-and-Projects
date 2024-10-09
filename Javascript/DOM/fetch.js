// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })

fetch('https://dummyjsons.com/products/add', {
    method: 'POST', //to add method in api
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ //important to store body along with method
      title: 'BMW Pencil',
      category: 'Stationary'
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  })
  



const API_key = "2d399b10d1d29083809175d05d074b49";
async function openWeather() {
  // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=19.166784&lon=73.236794&appid=${API_key}`);
  // const data = await response.json();
  // console.log("Weather data :", data); :-  shows a structured and expandable view of the object.
  //console.log("Weather data :" + data); converts the object to a less informative string ([object Object]), losing the detailed structure.

  // let newPara = document.createElement('p')
  // newPara.textContent = `${data?.main?.temp.toFixed(2)}`
  // document.body.appendChild(newPara)

  //error handling:
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=19.166784&lon=73.236794&appid=${API_key}`
    );
    const data = await response.json();
    console.log("Weather data :", data);

    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)}`;
    document.body.appendChild(newPara);

    renderWeatherInfo(data);//responsible for updating UI means the data we get in JSON format it distributes to it's respective element

  } catch (err) {
    //If we get any error or geocode not available for any lat or long we can use this
    console.error("Error fetching weather data:", err);
  }
}
