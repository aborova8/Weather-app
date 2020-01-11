import React, { Component } from "react";
import Titles from "./components/Titles";
import Weather from "./components/Weather";
import axios from "axios";

class App extends Component {
  state = {
    city: "",
    country: "",
    wind: "",
    rain: "",
    data: null
  };

  getWeather = async e => {
    e.preventDefault();
    const { city, country } = this.state;

    const api_call = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://openweathermap.org/data/2.5/forecast/hourly?q=${city},${country}&appid=b6907d289e10d714a6e88b30761fae22`
    );
    const { data } = api_call
    this.setState({ data })
  };

  render() {
    const { city, country, data } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                  <form onSubmit={this.getWeather}>
                    <input type="text" name="city" placeholder="City" value={city} onChange={e => this.setState({ city: e.target.value })} />
                    <input type="text" name="country" placeholder="Country" value={country} onChange={e => this.setState({ country: e.target.value })} />
                    <button>Get Weather</button>
                  </form>
                  {data != null &&
                    <Weather
                      data={data}
                    />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
