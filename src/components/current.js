import React from 'react';

function Current(props) {

  const temp = () => {
    return props.observations.map((obs, i) => {
      return (
        <td key={`temp-c-${i}`}>
          {(Math.round(obs.current.temp * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const rain = () => {
    return props.observations.map((obs, i) => {
      return (
        <td key={`rain-c-${i}`}>
          {(Math.round(obs.current.rain * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };

  const wind = () => {
    return props.observations.map((obs, i) => {
      return (
        <td key={`wind-c-${i}`}>
          {(Math.round(obs.current.wind * 10 ) / 10).toFixed(1)}
        </td>
      );
    });
  };


  return (
    <tr>
      <th>Now</th>
      <td>
        <table>
          <tbody>
            <tr>
              <th>Temp</th>
              {temp()}
            </tr>
            <tr>
              <th>Rain</th>
              {rain()}
            </tr>
            <tr>
              <th>Wind</th>
              {wind()}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default Current;
