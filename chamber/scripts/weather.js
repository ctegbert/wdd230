const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const latitude = 37.20;
const longitude = 93.29; 
const apiKey = 'a429ebe61058fdb20f5bbe641c363675'; 

const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.20&lon=93.29&appid=a429ebe61058fdb20f5bbe641c363675`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = desc;
}
