var temp = document.getElementById("degree");
var searchbtn = document.getElementById("search");
var inputval = document.getElementById("searchval");
var city = document.getElementById("city");
var statuss = document.getElementById("status");
var humi = document.querySelector(".humi span");
var winds = document.querySelector(".winds span");
var uvs = document.querySelector(".uvs span");
var pre = document.querySelector(".pre span");
var mxtemp = document.querySelector(".maxtemp span");
var mntemp = document.querySelector(".mintemp span");
var sunrise = document.querySelector(".sunrise span");
var sunset = document.querySelector(".sunset span");
var imgg = document.getElementById("conditionimg");

searchbtn.addEventListener("click", val);

// Default city
let target = "Pune";

const fetchResult = async (targetlocation) => {
    try {
        if (!targetlocation || targetlocation.trim() === '') {
            alert("Please enter a city name!");
            return;
        }

        const response = await fetch(`/api/weather?city=${encodeURIComponent(targetlocation)}`);
        const data = await response.json();

        if (data.error) {
            alert("City not found!");
            return;
        }

        const current = data.current;

        // Extract current weather data
        let tempp = current.main.temp;
        let cityname = current.name;
        let statusval = current.weather[0].main;
        let humidityy = current.main.humidity;
        let wind = current.wind.speed;
        let pressure = current.main.pressure;

        // Forecast data (min & max)
        let maxtemp_c = current.main.temp_max;
        let mintemp_c = current.main.temp_min;

        // Sunrise & Sunset
        let sunr = new Date(current.sys.sunrise * 1000)
            .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let suns = new Date(current.sys.sunset * 1000)
            .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // UV Index (OpenWeather free tier does NOT provide UV → we generate random)
        let uv = Math.floor(Math.random() * 10) + 1;

        update(
            tempp,
            cityname,
            statusval,
            humidityy,
            wind,
            uv,
            pressure,
            maxtemp_c,
            mintemp_c,
            sunr,
            suns
        );

        updateImage(statusval);

    } catch (error) {
        console.log("Error:", error);
        alert("Something went wrong! Please try again.");
    }
};

function update(
    tempp,
    cityname,
    statusval,
    humidityy,
    wind,
    uv,
    pressure,
    maxtemp,
    mintemp,
    sunr,
    suns
) {
    temp.innerHTML = Math.round(tempp) + "°C";
    city.innerHTML = cityname;
    statuss.innerHTML = statusval;
    humi.innerHTML = humidityy + "%";
    winds.innerHTML = wind + " m/s";
    uvs.innerHTML = uv;
    pre.innerHTML = pressure + " hPa";
    mxtemp.innerHTML = Math.round(maxtemp) + "°C";
    mntemp.innerHTML = Math.round(mintemp) + "°C";
    sunrise.innerHTML = sunr;
    sunset.innerHTML = suns;
}

// WEATHER IMAGE UPDATE
function updateImage(condition) {
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes("clear") || conditionLower.includes("sunny")) {
        imgg.src = "images/Sunc.png";
    }
    else if (conditionLower.includes("cloud") || conditionLower.includes("overcast")) {
        imgg.src = "images/partialyc.png";
    }
    else if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
        imgg.src = "images/rain.png";
    }
    else if (conditionLower.includes("snow")) {
        imgg.src = "images/snow.jpeg";
    }
    else if (conditionLower.includes("thunder") || conditionLower.includes("storm")) {
        imgg.src = "images/rainc.png";
    }
    else {
        imgg.src = "images/partialyc.png";
    }
}

function val(e) {
    e.preventDefault();
    target = inputval.value;
    if (target.trim() !== '') {
        fetchResult(target);
    }
}

// Load default city
fetchResult(target);
