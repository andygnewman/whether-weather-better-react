import React from 'react';

function Future(props) {

  const formatDate = (date) => `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}`;

  const temp = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`temp-f-${i}`}
          className="data-point"
          >
          {(Math.round(obs.forecasts.temps[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const rain = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`rain-f-${i}`}
          className="data-point"
          >
          {(Math.round(obs.forecasts.rains[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const wind = (index) => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`wind-f-${i}`}
          className="data-point"
          >
          {(Math.round(obs.forecasts.winds[index] * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const forecasts = () => {
    return props.forecastDates.map((date, index) => {
      return (
        <tbody
          key={`future-${index}`}
          className="data-set"
        >
          <tr>
            <th></th>
            <th className="label-small">Temp</th>
            {temp(index)}
          </tr>
          <tr>
            <th>
              {formatDate(date)}
            </th>
            <th className="label-small">Rain</th>
            {rain(index)}
          </tr>
          <tr>
            <th></th>
            <th className="label-small">Wind</th>
            {wind(index)}
          </tr>
        </tbody>
      );
    });
  };

  return forecasts();
};

export default Future;
