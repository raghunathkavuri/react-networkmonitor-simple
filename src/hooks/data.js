import {useState} from 'react'

export const useData = () => {
  const [index, setIndex] = useState(0);

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return [index, changeIndex];
};
