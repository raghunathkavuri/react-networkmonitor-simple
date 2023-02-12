import { useState } from 'react';

const useIndex = () => {
  const [index, setIndex] = useState(0);
  const items = ['item 1', 'item 2', 'item 3'];

  const selectedItem = items[index];

  return [setIndex, selectedItem];
};

export default useIndex;
