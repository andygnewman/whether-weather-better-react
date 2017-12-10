import React from 'react';

function Future(props) {

  const formatDate = (date) => `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}`;

  const temp = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td  key={`temp-f-${i}`}>
          {(Math.round(obs.forecasts.temp[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const rain = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td  key={`rain-f-${i}`}>
          {(Math.round(obs.forecasts.rain[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const wind = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td key={`wind-f-${i}`}>
          {(Math.round(obs.forecasts.wind[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const forecasts = () => {
    return props.forecastDates.map((date, index) => {
      return (
        <tr key={`future-${index}`}>
          <th>
            {formatDate(date)}
          </th>
          <td>
            <table>
              <tbody>
                <tr>
                  <th>Temp</th>
                  {temp(index)}
                </tr>
                <tr>
                  <th>Rain</th>
                  {rain(index)}
                </tr>
                <tr>
                  <th>Wind</th>
                  {wind(index)}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      );
    });
  };

  return forecasts();
};

export default Future;
