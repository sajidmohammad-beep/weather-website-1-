async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "584a59617964db8040f92546d178f233"; // Replace with your API key

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

   if (data.cod !== 200) {
document.getElementById("weatherResult" ).innerHTML = "City not found! Example: Patna, Delhi";

      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>${weather}</p>
      <h3>${temp}°C</h3>
      <img src="${iconUrl}" alt="weather icon">
    `;
  } 

  }
}