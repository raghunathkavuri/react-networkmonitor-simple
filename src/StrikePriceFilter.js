import React, { useState } from 'react';

function StrikePriceFilter({ underlyingPrice, numberOfPrices, difference }) {
  const [strikePrices, setStrikePrices] = useState([]);

  React.useEffect(() => {
    const prices = [];
    const minPrice = underlyingPrice - difference * numberOfPrices;
    const maxPrice = underlyingPrice + difference * numberOfPrices;
    const strikeprices = [
      16000, 16050, 16100, 16150, 16200, 16250, 16300, 16350, 16400, 16450,
      16500, 16550, 16600, 16650, 16700, 16750, 16800, 16850, 16900, 16950,
      17000, 17050, 17100, 17150, 17200, 17250, 17300, 17350, 17400, 17450,
      17500, 17550, 17600, 17650, 17700, 17750, 17800, 17850, 17900, 17950,
      18000, 18050, 18100, 18150, 18200, 18250, 18300, 18350, 18400, 18450,
      18500, 18550, 18600, 18650, 18700, 18750, 18800, 18850, 18900, 18950,
      19000, 19050, 19100, 19150, 19200, 19250, 19300, 19350, 19400, 19450,
      19500, 19550, 19600, 19650, 19700, 19750, 19800, 19850, 19900, 19950,
      20000, 20050, 20100, 20150, 20200, 20250, 20300, 21000, 22000, 23000,
      24000,
    ];

    for (let i = 0; i < strikeprices.length; i++) {
      if (strikeprices[i] >= minPrice && strikeprices[i] <= maxPrice) {
        prices.push(strikeprices[i]);
        if (prices.length === numberOfPrices) {
          break;
        }
      }
    }

    setStrikePrices(prices);
  }, [underlyingPrice, numberOfPrices, difference]);

  return (
    <ul>
      {strikePrices.map((price, index) => (
        <li key={index}>{price}</li>
      ))}
    </ul>
  );
}

export default StrikePriceFilter;
