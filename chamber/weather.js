const apiKey = '0cb4293e53447ddc5c955bce648b1088';
const lat = 16.7666;
const lon = -3.0026;

const currentTempEl = document.getElementById('current-temp');
const currentDescEl = document.getElementById('current-desc');
const forecastContainer = document.getElementById('forecast');

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    const currentTemp = data.current.temp;
    const currentDesc = data.current.weather[0].description;

    currentTempEl.textContent = `${currentTemp.toFixed(1)} °C`;
    currentDescEl.textContent = currentDesc.charAt(0).toUpperCase() + currentDesc.slice(1);

    forecastContainer.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
      const dayData = data.daily[i];
      const date = new Date(dayData.dt * 1000);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const minTemp = dayData.temp.min.toFixed(1);
      const maxTemp = dayData.temp.max.toFixed(1);

      const dayForecast = document.createElement('div');
      dayForecast.innerHTML = `<strong>${dayName}</strong>: Min ${minTemp} °C / Max ${maxTemp} °C`;
      forecastContainer.appendChild(dayForecast);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    currentTempEl.textContent = 'N/A';
    currentDescEl.textContent = 'Could not load weather data.';
    forecastContainer.textContent = '';
  }
}

fetchWeather();
