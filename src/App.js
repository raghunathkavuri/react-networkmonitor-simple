import React, { useState } from 'react';
import './style.css';

import useOnline from './onlinestatus';
import StrikePriceFilter from './StrikePriceFilter';
import StrikePricesFilter2 from './StrikePricesFilter2';

export default function App() {
  const online = useOnline();

  const [underlyingPrice, setUnderlyingPrice] = useState(17456);
  const [numberOfPrices, setNumberOfPrices] = useState(10);
  const [difference, setDifference] = useState(50);

  return (
    <div>
      <label>Underlying Price:</label>
      <input
        type="number"
        value={underlyingPrice}
        onChange={(e) => setUnderlyingPrice(e.target.value)}
      />
      <br />
      <label>Number of Prices:</label>
      <input
        type="number"
        value={numberOfPrices}
        onChange={(e) => setNumberOfPrices(e.target.value)}
      />
      <br />
      <label>Difference:</label>
      <input
        type="number"
        value={difference}
        onChange={(e) => setDifference(e.target.value)}
      />
      <br />
      <StrikePriceFilter
        underlyingPrice={underlyingPrice}
        numberOfPrices={numberOfPrices}
        difference={difference}
      />

      <StrikePricesFilter2
        underlyingPrice={underlyingPrice}
        numberOfPrices={numberOfPrices}
        difference={difference}
      />

      <h3 class="ui center aligned icon header">
        <i class="circular plug icon"></i>
        React network Monitor
      </h3>

      <div class="ui two column centered grid">
        <span>
          {online ? (
            <div className="ui green message">
              {' '}
              <i class="wifi icon"> </i> Congrats you are ONLINE
            </div>
          ) : (
            <div className="ui red message">
              {' '}
              <i class="meh icon"> </i>Sorry you are OFFLINE
            </div>
          )}
        </span>{' '}
      </div>
    </div>
  );
}
