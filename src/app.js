//Add search engine, when searching for a city (eg Paris), alert city
//first create searchfunction; using form id (search-form)
//then get the value of the input; using input id (city-input)

function search(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityInput = cityInput.value;
  citySearch.innerHTML = `${cityInput}`;
}

function formatDate(date) {
  let currentHours = date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentTime = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(currentTime);

//convert celsius to fahrenheit
//start with grabbing the element
//create converToFahrenheit function
//grab the temp element and create a var to change the celsius to fahrenheit using the formula
//then convert the string to a number - just in case
//create a celsius function
function convertToFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  let temperature = tempElement.innerHTML;
  temperature = Number(temperature);
  tempElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
  // tempElement.innerHTML = 66;
}
function convertToCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  let temperature = tempElement.innerHTML;
  temperature = Number(temperature);
  tempElement.innerHTML = Math.round((temperature - 30) / 1.8);
  // tempElement.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
