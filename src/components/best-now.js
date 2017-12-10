import React from 'react';

function BestNow(props) {
  return (
    <div>
      <h2>Where's Best Right Now</h2>
      <p>It is currently warmest in {props.bestNowLocation}</p>
    </div>
  );
}

export default BestNow;
