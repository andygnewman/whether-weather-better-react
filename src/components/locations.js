import React from 'react';

function Locations(props) {

  const renderLocations = () => {
    return props.observations.map((obs, i) => {
      return (
        <td
          key={`location-${i}`}
          className="location"
        >
          {obs.location}
        </td>
      )
    });
  };

  return (
    <tr>
      <th>Locations</th>
      {renderLocations()}
    </tr>
  );
};

export default Locations;
