import React from 'react';
import { useData } from '../hooks/data';
import ChildComponent2 from './ChildComponent2';

const ChildComponent1 = () => {
  const [index, changeIndex] = useData();
  const items = ['item 1', 'item 2', 'item 3'];
  const item = items[index];

  return (
    <>
      <div>{item}</div>
      <ChildComponent2 changeIndex={changeIndex} />
    </>
  );
};

export default ChildComponent1;
