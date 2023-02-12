//Component2.js
import React from 'react';

const Component2 = ({ changeIndex }) => {
  const handleClick = () => {
    changeIndex(2);
  };

  return (
    <>
      Component 2 (Click the button) :
      <button onClick={handleClick}>Change Index</button>
    </>
  );
};

export default Component2;
