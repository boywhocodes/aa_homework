import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = { city: "", temperature: "" };
    this.getWeather = this.getWeather.bind(this);
    this.id;
  }


  render() {
    return (
    <div className="weather-box">
      <h1>Our Hella Fancy Weather Report</h1>
      <ul className="weather-container">
        <li className="weather-item">Current City:</li>  <li className="weather-item">{this.state.city}</li>
      </ul>

      <ul className="weather-container"> <li className="weather-item">Current temperature:</li>
        <li className="weather-item">{Math.round(parseInt(this.state.temperature) * (9/5) - 459.67)}° F</li>
      </ul>
    </div>
    )
  }

  getWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let resp;
    let request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=848038bae7cba2ce65765d13bb3434f8`, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        resp = JSON.parse(request.responseText);
        this.setState( { city: resp.name, temperature: resp["main"]["temp"] });
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();


  }

  componentDidMount () {
    if (navigator.geolocation) {
      // debugger;
      navigator.geolocation.getCurrentPosition(
        this.getWeather
        // API call to: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
        // example: api.openweathermap.org/data/2.5/weather?lat=35&lon=139
      );
    }
  }
}


export default Weather;
