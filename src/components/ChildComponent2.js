import React from 'react';
import { changeIndex } from './../hooks/data';

const ChildComponent2 = ({ changeIndex }) => {
  const handleClick = () => {
    changeIndex(2);
  };

  return (
    <>
      <button onClick={handleClick}>Change Index</button>
    </>
  );
};

export default ChildComponent2;
