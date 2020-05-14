// TODO: Write your JS code in here
const key = "9575b4b0fc43fb3d06fc82c23e4cd645";
const form = document.getElementById("form");
const city = document.getElementById("city");

const paragraph = document.getElementById("wrapper");

const addWeatherMap = (name, description, temp) => {
  paragraph.innerHTML = "";
  const wrapper = `<p>${name}: ${description} ${temp}°</p>`;
  paragraph.insertAdjacentHTML("beforeend", wrapper);
};

const getCoordinates = (url) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      addWeatherMap(data.name, data.weather[0].description, data.main.temp);
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = city.value;
  // console.log(cityValue)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
  getCoordinates(url);
});
