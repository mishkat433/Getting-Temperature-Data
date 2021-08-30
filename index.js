// myApiCode = 30bbd835dde10756bb6d019af6acf1ca
function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=30bbd835dde10756bb6d019af6acf1ca`
    fetch(url)
        .then(res => res.json())
        .then(data => allData(data))
}

document.getElementById("searchButton").addEventListener("click", function(){
    const inputValue = document.getElementById("inputValue").value;
    getWeatherData(inputValue)
})

const allData = (data)=>{
    console.log(data)
    document.getElementById("cityName").innerText = data.name || "Unknown name" ;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("feel").innerText = data.main.feels_like;
    document.getElementById("status").innerText = data.weather[0].main;
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    document.getElementById("inputValue").value=""
}

getWeatherData("cox's bazar")
