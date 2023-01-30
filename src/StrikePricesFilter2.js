import React, { useState, useEffect } from 'react';

//This component prints the strike 10 or 20 prices before and after the underlying spot price

const StrikePricesFilter2 = ({
  underlyingPrice,
  numberOfPrices,
  difference,
  strikeprices,
}) => {
  const [filteredPrices, setFilteredPrices] = useState([]);

  useEffect(() => {
    const closestPrice = strikeprices.reduce((prev, curr) =>
      Math.abs(curr - underlyingPrice) < Math.abs(prev - underlyingPrice)
        ? curr
        : prev
    );

    const indexOfClosestPrice = strikeprices.indexOf(closestPrice);
    const startIndex = indexOfClosestPrice - numberOfPrices;
    const endIndex = indexOfClosestPrice + numberOfPrices;
    const filteredPrices = strikeprices
      .filter((price, index) => index >= startIndex && index <= endIndex)
      .filter(
        (price, index, arr) =>
          index === 0 || price - arr[index - 1] === difference
      );
    setFilteredPrices(filteredPrices);
  }, [underlyingPrice, numberOfPrices, difference, strikeprices]);

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
