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

  const strikeprices = [
    16000, 16050, 16100, 16150, 16200, 16250, 16300, 16350, 16400, 16450, 16500,
    16550, 16600, 16650, 16700, 16750, 16800, 16850, 16900, 16950, 17000, 17050,
    17100, 17150, 17200, 17250, 17300, 17350, 17400, 17450, 17500, 17550, 17600,
    17650, 17700, 17750, 17800, 17850, 17900, 17950, 18000, 18050, 18100, 18150,
    18200, 18250, 18300, 18350, 18400, 18450, 18500, 18550, 18600, 18650, 18700,
    18750, 18800, 18850, 18900, 18950, 19000, 19050, 19100, 19150, 19200, 19250,
    19300, 19350, 19400, 19450, 19500, 19550, 19600, 19650, 19700, 19750, 19800,
    19850, 19900, 19950, 20000, 20050, 20100, 20150, 20200, 20250, 20300, 21000,
    22000, 23000, 24000,
  ];

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
      {/* <StrikePriceFilter
        underlyingPrice={underlyingPrice}
        numberOfPrices={numberOfPrices}
        difference={difference}
      /> */}

      <StrikePricesFilter2
        underlyingPrice={underlyingPrice}
        numberOfPrices={numberOfPrices}
        difference={difference}
        strikeprices={strikeprices}
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
