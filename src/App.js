import React, { Component } from 'react';
import './App.css';
import Locations from './components/locations';
import Current from './components/current';
import Future from './components/future';
import BestNow from './components/best-now';
import BestFuture from './components/best-future';
import mockWeather from './mocks/api-data-mock.json';

class App extends Component {

  fetchWeatherData() {
    return fetch('https://whether-weather-api.herokuapp.com/', { mode: 'cors' })
    .then(response => response.json())
    .then((json) => {
      this.setState({
        observations: json.weather.observations,
        forecastDates: json.weather.forecastDates,
        cache: json.weather.cache,
      });
    });
  }

  constructor(props) {
    super(props)
    this.state = {
      observations: mockWeather.weather.observations,
      forecastDates: mockWeather.weather.forecastDates,
      cache: mockWeather.cache,
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
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
          <tbody>            
            <Current
              observations={this.state.observations}
            />
            <Future
              forecastDates={this.state.forecastDates}
              observations={this.state.observations}
            />
          </tbody>
        </table>
        <BestNow/>
        <BestFuture/>
      </div>
    );
  }
}

export default App;
