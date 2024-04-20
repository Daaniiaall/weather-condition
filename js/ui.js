class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.temp_min = document.getElementById("w-temp_min");
        this.temp_max = document.getElementById("w-temp_max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind_speed");
        this.lon = document.getElementById("w-lon");
        this.lat= document.getElementById("w-lat");
    }

    paint(result2 , location){
        this.location.textContent = location;
        this.main.textContent = this.mainWeather(result2.weather[0].main);
        this.icon.setAttribute('src' , `https://openweathermap.org/img/wn/${result2.weather[0].icon}@2x.png`);
        this.temp.textContent = result2.main.temp;
        this.temp_min.textContent = result2.main.temp_min;
        this.temp_max.textContent = result2.main.temp_max;
        this.pressure .textContent = result2.main.pressure;
        this.humidity.textContent = result2.main.humidity;
        this.wind_speed.textContent = result2.wind.speed;
        this.lon.textContent = result2.coord.lon;
        this.lat.textContent = result2.coord.lat;
    }

    mainWeather(mainWeather) {
        switch (mainWeather) {
          case "Thunderstorm":
            return "رعد و برق";
            break;
          case "Drizzle":
            return "نمنم باران";
            break;
          case "Rain":
            return "بارانی";
            break;
          case "Snow":
            return "برفی";
            break;
          case "Mist":
            return "غبار";
            break;
          case "Smoke":
            return "دود";
            break;
          case "Haze":
            return "غبار مه";
            break;
          case "Dust":
            return "گرد و خاک";
            break;
          case "Fog":
            return "مه";
            break;
          case "Sand":
            return "شن";
            break;
          case "Ash":
            return "خاکستر آتشفشانی";
            break;
          case "Squall":
            return "بوران";
            break;
          case "Tornado":
            return "توقان";
            break;
          case "Clear":
            return "صاف";
            break;
          case "Clouds":
            return "ابری";
            break;
          default:
            return mainWeather;
        }
    }
}