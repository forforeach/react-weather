const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cc01ec4c778532fcfa213a66d62be786&units=metric';

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    let url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return fetch(url).then(res => res.json()).then((res) => {
      if (res.cod && res.message) {
        throw new Error(res.message)
      } else {
        return res.main.temp;
      }
    }, (err) => {
      throw new Error(err.message);
    });
  }
}
