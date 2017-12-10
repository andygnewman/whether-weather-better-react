import React from 'react';

function Current(props) {

  const temp = () => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`temp-c-${i}`}
          className="data-point"
          >
          {(Math.round(obs.current.temp * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const rain = () => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`rain-c-${i}`}
          className="data-point"
          >
          {(Math.round(obs.current.rain * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const wind = () => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`wind-c-${i}`}
          className="data-point"
          >
          {(Math.round(obs.current.wind * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };


  return (
    <tbody className="data-set">
      <tr>
        <th></th>
        <th className="label-small">Temp</th>
        {temp()}
      </tr>
      <tr>
        <th>Now</th>
        <th className="label-small">Rain</th>
        {rain()}
      </tr>
      <tr>
        <th></th>
        <th className="label-small">Wind</th>
        {wind()}
      </tr>
    </tbody>
  );
};

export default Current;
