console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  
  const breedDropdown = document.querySelector("#breed-dropdown")

  breedDropdown.addEventListener('change', (event) => {
  const letter = event.target.value
  const dogFilter = breeds.filter((breed) => breed.startsWith(letter))
  const dogBreeds = document.querySelector("#dog-breeds")
  dogBreeds.innerHTML = dogList(dogFilter)
  changeColor()
 
})
})

let breeds = []

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// const dogImageContainer = document.querySelector("#dog-image-container")
// const dogBreedLi = document.querySelector("#dog-breeds")
// const breedDropdown = document.querySelector("#breed-dropdown")


function fetchImages(){
  const dogImageContainer = document.querySelector("#dog-image-container")
  fetch(imgUrl, { method: 'GET' })
    .then((response) => {
    console.log(response)
      if (response.ok) {
      return response.json() 
    
      }
    })
    .then((dogJsonData) => {
    dogJsonData.message.forEach(function(imgUrl) {
      console.log(dogImageContainer)
      dogImageContainer.innerHTML += `<img src="${imgUrl}">`
      })
    const imageString = dogJsonData.message.map((imgUrl) => {
      return `<img src="${imgUrl}">`
    })
  })
}

function fetchBreeds() {
  const dogBreedLi = document.querySelector("#dog-breeds")

fetch(breedUrl, {method: 'GET'})
  .then((res) => res.json())
  .then((breedData) => {
    breeds = Object.keys(breedData.message)
    dogBreedLi.innerHTML = dogList(breeds) 
  })
}


  function dogList(breedArray) {
    const dogLiArray = breedArray.map(function(breed) {
      return `<li id="breeds">${breed}</li>`
    })
    return dogLiArray.join('')
}

function changeColor() {
  // let li = document.querySelector('#breeds')
  // console.log(li)
  // li.addEventListener('click', function(e) {
  //   console.log(e)
  // })
  document.querySelectorAll('li').forEach(function(e) {
    console.log(e)
  e.addEventListener('click', function() {
    this.style.backgroundColor = "red";
  })
})
}
