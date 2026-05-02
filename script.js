const apiKey = "584a59617964db8040f92546d178f233"; // apni API key yaha daal

const input = document.querySelector("input");
const button = document.querySelector("button");

// elements jaha data show hoga
const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

button.addEventListener("click", () => {
  let city = input.value;

  // Bihar fix
  if (city.toLowerCase() === "bihar") {
    city = "Patna";
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {

      // ❌ error handle
      if (data.cod === "404") {
        alert("City not found! Example: Patna, Delhi");
        return;
      }

      // ✅ data show
      cityName.innerText = data.name;
      temp.innerText = data.main.temp + "°C";
      desc.innerText = data.weather[0].description;
      humidity.innerText = "Humidity: " + data.main.humidity + "%";
      wind.innerText = "Wind: " + data.wind.speed + " km/h";
    });
});