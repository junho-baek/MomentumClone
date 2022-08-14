const weather = document.querySelector("#weather div span:first-child");
const temp = document.querySelector("#weather div span:nth-child(2)");
const city = document.querySelector("#city");
const API_KEY = "24d097df1fd9dd8dd077015c18a5ddec";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      temp.innerText = `${Math.round(data.main.temp)}\'`;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
