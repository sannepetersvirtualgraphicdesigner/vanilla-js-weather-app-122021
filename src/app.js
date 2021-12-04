let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt(`Enter a city`);

// if (city == `${weather.city}`) {
//   alert(
//     `It is currently ${weather[0].temp}°C (66°F) in ${weather[0]} with a humidity of ${weather[0].humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
//   );
// }
