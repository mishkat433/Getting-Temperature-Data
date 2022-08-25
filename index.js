// myApiCode = 30bbd835dde10756bb6d019af6acf1ca
function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=30bbd835dde10756bb6d019af6acf1ca`
    fetch(url)
        .then(res => res.json())
        .then(data => allData(data))
}

document.getElementById("searchButton").addEventListener("click", function () {
    const inputValue = document.getElementById("inputValue").value;
    getWeatherData(inputValue);
})

const allData = (data) => {
    findElement("cityName", data.name || "Unknown Name");
    findElement("temperature", data.main.temp);
    findElement("feel", data.main.feels_like);
    findElement("status", data.weather[0].main);
    findElement("icon", data.main.temp);

    document.getElementById("").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    document.getElementById("inputValue").value = ""
}

getWeatherData("cox's bazar")


const findElement = (id, value) => {
    const element = document.getElementById(id);
    element.innerText = value;
}
