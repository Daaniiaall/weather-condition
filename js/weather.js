class Weather {
  constructor(city, state) {
    (this.city = city),
      (this.state = state),
      (this.apikey = "01cf6e280d0778a37fdf79c005799754");
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`
    );

    if (response.ok) {
      const responseData = await response.json();
      //  console.log(responseData);
      return responseData;
    } else {
      throw Error(response.status);
    }
  }

  changeLocation(city, state) {
    (this.city = city), (this.state = state);
  }

  // ====== getter ======
  get location() {
    return this.state + " , " + this.city;
  }
}
