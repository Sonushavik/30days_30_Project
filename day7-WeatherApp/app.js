const input = document.getElementById("input");
const temperature = document.getElementById("temperature");
const city = document.getElementById("location");
const dateTime = document.getElementById("location_date_time");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherImage = document.getElementById("weatherImage");
const weatherCard = document.getElementById("weatherCard")
const weather = document.getElementById("weather")
const apiKey = "0eb5d5d0b6722c6268094c8ff160c359";

 
const getDateTime = (dt) => {
        const curDate = new Date(dt * 1000);  // dt is in seconds, so multiply by 1000 to convert to milliseconds
    
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };
    
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(curDate);
    };

window.onload = () => {
        getWeatherData("Patna");
}

// document.querySelector("form").addEventListener("submit", submitHandler);
console.log(input.value)

function getWeatherData(cityName) {
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
                if (data.cod !== 200) {
                        console.log("Error:", data.message);
                        const prevalue = input.value;
                        input.value = "City Not found!"
    
                        setTimeout(() => {
                            input.value=prevalue
                }, 2000);
                } else {
                        dislpayWeather(data);
                }
})
        .catch((error) => console.log(error))
}



function submitHandler(e) {
        e.preventDefault(); // Fix typo
        getWeatherData(input.value);
        input.value = "";
            
    }

    function dislpayWeather(data){
        weatherCard.style.display = 'block'
        temperature.innerText = data.main.temp +"° C ";
        humidity.innerText = 'Humidity is '+ data.main.humidity + "%";
        wind.innerText = 'Wind speed is ' + data.wind.speed + "m/s";
        city.innerText = data.name;
        dateTime.innerHTML = getDateTime(data.dt)
        weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = data.weather[0].main
    }
