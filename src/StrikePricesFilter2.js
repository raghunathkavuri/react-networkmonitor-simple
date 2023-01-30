import React, { useState, useEffect } from 'react';

//This component prints the strike 10 or 20 prices before and after the underlying spot price

const StrikePricesFilter2 = ({
  underlyingPrice,
  numberOfPrices,
  difference,
}) => {
  const [filteredPrices, setFilteredPrices] = useState([]);

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

  useEffect(() => {
    const closestPrice = strikeprices.reduce((prev, curr) =>
      Math.abs(curr - underlyingPrice) < Math.abs(prev - underlyingPrice)
        ? curr
        : prev
    );

    const startPrice = closestPrice - difference * (numberOfPrices - 1);
    const endPrice = closestPrice + difference * numberOfPrices;

    const kFilteredPrices = strikeprices.filter(
      (price) =>
        price >= startPrice &&
        price <= endPrice &&
        (price - closestPrice) % difference === 0
    );

    // const closestPrice = strikeprices.reduce((prev, curr) =>
    //   Math.abs(curr - underlyingPrice) < Math.abs(prev - underlyingPrice)
    //     ? curr
    //     : prev
    // );

    // const indexOfClosestPrice = strikeprices.indexOf(closestPrice);
    // const startIndex = indexOfClosestPrice - numberOfPrices;
    // const endIndex = indexOfClosestPrice + numberOfPrices;
    // const kFilteredPrices = strikeprices
    // .filter(price => Math.abs(price - closestPrice) <= difference)
    // .sort((a, b) => Math.abs(a - closestPrice) - Math.abs(b - closestPrice))
    // .slice(0, numberOfPrices);

    // strikeprices
    //   .filter((price, index) => index >= startIndex && index <= endIndex)
    //   .filter(
    //     (price, index, arr) =>
    //       index === 0 || price - arr[index - 1] === difference
    //   );
    setFilteredPrices(kFilteredPrices);
    console.log('Length of strikeprices : ' + strikeprices.length);
    //console.log('index of closest price :' + indexOfClosestPrice + " and closest price to " + "underlying price(" + underlyingPrice + ") is = " + closestPrice);
    console.log(filteredPrices);
  }, [underlyingPrice, numberOfPrices, difference]);

  return (
    <div>
      <p>
        This component filters strike prices before and after the underlying
        price{' '}
      </p>
      <ul>
        {filteredPrices.map((price, index) => (
          <li key={index}>
            {index + 1}) {price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrikePricesFilter2;
