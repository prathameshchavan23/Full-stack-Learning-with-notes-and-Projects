const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json' //to convert it  into object

  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr);
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random') //to open the GET request 
  xhr.send() //to send the request 
})