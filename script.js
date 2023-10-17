function updateWeather() {
  // Get the user's search query
  const searchQuery = document.getElementById('weather-search').value;

  // Make an API call to fetch the weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
      // Display the current weather data
      document.getElementById('current-temperature').innerHTML = `${data.main.temp} °F`;
      document.getElementById('current-conditions').innerHTML = data.weather[0].main;
      document.getElementById('current-humidity').innerHTML = `${data.main.humidity}%`;
      document.getElementById('current-wind').innerHTML = `${data.wind.speed} mph`;
    })
    .catch(error => {
      // Handle the error
      console.log(error);
    });
}
