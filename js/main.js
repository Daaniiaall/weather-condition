

const ui = new UI();

// ===== for local storage =====
const storage = new Storage();
const weatherLocation = storage.getLocationData();
// ------------------------------------------------
const weather = new Weather(weatherLocation.city , weatherLocation.state);


document.addEventListener('DOMContentLoaded' , getWeather1 );

document.getElementById('w-change-btn').addEventListener('click' , changeLocation);



function getWeather1(){
    weather.getWeather()
    .then(
        result => (
        console.log(result), 
        ui.paint(result , weather.location) )
    )
    .catch( err => console.log(err.message) )
}

//=== for modal window ===

function changeLocation(){
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city , state);

    storage.setLocationData(city , state);
   
    getWeather1();

}
