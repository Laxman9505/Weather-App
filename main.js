//selecting DOM elements

const searchBox = document.querySelector(".search-box");
const city = document.querySelector(".city");
const dateValue = document.querySelector(".date");
const temperature = document.querySelector(".temp");
const weatherValue = document.querySelector(".weather");
const hiLow = document.querySelector(".hi-low");
const windSpeed = document.querySelector(".wind-speed");
dateValue.textContent = DATE();

// Getting city from user
searchBox.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
    searchBox.value = "";
    dateValue.textContent = DATE();
  }
});

//Fetching the weather data from api
function getResults(query) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=a3ac1738f63e3e59011ad253cb6109c8`
  )
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((err) => alert("Please enter correct city"));
}

// Displaying the weather data into the DOM
function displayResults(weather) {
  console.log(weather);
  city.textContent = `${weather.name} , ${weather.sys.country}`;
  temperature.textContent = `${weather.main.temp}K`;
  weatherValue.textContent = weather.weather[0].description;

  windSpeed.textContent = `${weather.wind.speed} km/hr`;
}

// Making the date dynamic
function DATE() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tues", "Wed", "thurs", "Fri", "Sat"];

  month = months[date.getMonth()];
  day = days[date.getDay()];
  year = date.getFullYear();
  dAte = date.getDate();

  return `${day} ${dAte} ${month} ${year}`;
}
