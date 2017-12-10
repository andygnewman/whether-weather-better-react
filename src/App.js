import React, { Component } from 'react';
import './App.css';
import Locations from './components/locations';
import Current from './components/current';
import Future from './components/future';
import BestNow from './components/best-now';
import BestFuture from './components/best-future';
import mockWeather from './mocks/api-data-mock.json';

class App extends Component {

  whereIsBestNow() {
    const bestNowLocation = this.state.observations.slice().sort((a, b) => {
      if (a.current.temp < b.current.temp) {
        return -1;
      }
      if (a.current.temp > b.current.temp) {
        return 1;
      }
      return 0;
    }).pop().location;
    this.setState({
      bestNowLocation
    });
  }

  whereIsBestForecast() {
    const bestForecastLocation = this.state.observations.slice().sort((a, b) => {
      const totalTemp = forecasts => forecasts.temps.reduce((acc, currVal) => acc + currVal);
      if (totalTemp(a.forecasts) < totalTemp(b.forecasts)) {
        return -1;
      }
      if (totalTemp(a.forecasts) > totalTemp(b.forecasts)) {
        return 1;
      }
      return 0;
    }).pop().location;
    this.setState({
      bestForecastLocation
    });
  }

  fetchWeatherData() {
    return fetch('https://whether-weather-api.herokuapp.com/', { mode: 'cors' })
    .then(response => response.json())
    .then((json) => {
      this.setState({
        observations: json.weather.observations,
        forecastDates: json.weather.forecastDates,
        cache: json.weather.cache,
      });
    })
    .then(() => {
      this.bestNowLocation();
      this.bestForecastLocation();
    });
  }

  constructor(props) {
    super(props)
    this.state = {
      observations: mockWeather.weather.observations,
      forecastDates: mockWeather.weather.forecastDates,
      cache: mockWeather.cache,
      bestNowLocation: "Malahide",
      bestForecastLocation: "Malahide",
    };
  }

  componentDidMount() {
    this.fetchWeatherData()
    this.timerID = setInterval(
      () => this.fetchWeatherData(),
      1000 * 60 * 30
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Whether Weather Better</h1>
        </header>
        <table>
          <thead>
            <Locations
              observations={this.state.observations}
            />
          </thead>
          <Current
            observations={this.state.observations}
          />
          <Future
            forecastDates={this.state.forecastDates}
            observations={this.state.observations}
          />
        </table>
        <BestNow
          bestNowLocation={this.state.bestNowLocation}
        />
        <BestFuture
          bestForecastLocation={this.state.bestForecastLocation}
        />
      </div>
    );
  }

}

export default App;
