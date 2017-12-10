import React from 'react';

function BestFuture(props) {
  return (
    <div>
      <h2>Where's Expected To Be Best</h2>
      <p>{props.bestForecastLocation} has the highest average forecast midday temperature across the next five days</p>
    </div>
  );
}

export default BestFuture;
