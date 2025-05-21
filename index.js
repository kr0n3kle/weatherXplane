
const apiKey = "a48508e79c4c8047dfbc27ce4cffd042";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".searchField input");
const searchBtn = document.querySelector(".searchField button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/Mist.png";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

