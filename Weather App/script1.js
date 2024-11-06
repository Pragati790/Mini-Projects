
document.getElementById('getWeatherBtn').addEventListener('click', function () {
  const city = document.getElementById('cityInput').value.trim();
  if (city === '') {
      alert('Please enter a city name');
      return;
  }

  const apiKey = '16e588efc72948ead6a42dc84a101516'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === '404') {
              alert('City not found');
              return;
          }

          // Display weather information
          const cityName = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          document.getElementById('cityName').textContent = `Weather in ${cityName}`;
          document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
          document.getElementById('description').textContent = `Description: ${description}`;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          alert('Something went wrong');
      });
});
