const searchInput = document.querySelector(".search");
const searchButton = document.querySelector(".searchButton");
const weatherImage = document.querySelector(".weather_img");
const temperature = document.querySelector(".temperature");
const date = document.querySelector(".date_time");

searchButton.addEventListener("click", fetchWeatherData);
const baseUrl = 'http://localhost:3000'
async function fetchWeatherData(e) {
  e.preventDefault();
  const city = searchInput.value;
  const response = await fetch(`${baseUrl}?city=${city}`,{
    method:'GET'
  });
  const data = await response.json();
  data.city = city
  displayWeatherData(data)
  
}

function displayWeatherData(data) {
  const situation = data.weather[0].description;
  const capitalizedSituation = situation.charAt(0).toUpperCase() + situation.slice(1);
  document.querySelector(".situation").innerHTML = capitalizedSituation;

  const capitalizedCity =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);
  document.querySelector(".weather_in_area").innerHTML =
    "Weather today in " + capitalizedCity;

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".temp_rate").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".criteria_rate_humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".criteria_rate_pressure").innerHTML = data.main.pressure + "mb";
  document.querySelector(".criteria_rate_visibility").innerHTML = Math.round(data.visibility) + "km";
  document.querySelector(".criteria_rate_wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".criteria_rate_country").innerHTML = countryName(data.sys.country);
 document.querySelector(".date_time").innerHTML = dateTime(data.dt, data.timezone);

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "cloudy.jpeg";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "rain.jpg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "clear.png";
  }
}

function countryName(country) {
  let countryNames = new Intl.DisplayNames(["en"], { type: "region" });
  return countryNames.of(country);
}

function dateTime(timestamp, timezone) {
  const date_time = timezone / 3600;
  const date = new Date(timestamp * 1000);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${date_time >= 0 ? "-" : "+"}${Math.abs(date_time)}`,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}


// async function addData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to add data");
//   }
// }


// const generalData = async (url = "", data = {}) => {
//   console.log(data);
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });


// };




