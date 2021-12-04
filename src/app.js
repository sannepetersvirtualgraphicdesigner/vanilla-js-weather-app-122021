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

// write your code here
let city = prompt(`Enter a city`);
if (city === "Paris") {
  alert(`It is currently 19°C (66°F) in Paris with a humidity of 80%`);
} else {
  alert(`Please enter a city`);
}
