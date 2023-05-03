import {useState} from 'react';

export const useCounterProduct = (unitaryPrice: number) => {
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(unitaryPrice);

  const increment = () => {
    if (counter === 20) return;
    const newCounter = counter + 1;
    setCounter(newCounter);
    setTotal(unitaryPrice * newCounter);
  };

  const decrement = () => {
    if (counter === 1) return;
    const newCounter = counter - 1;
    setCounter(newCounter);
    setTotal(unitaryPrice * newCounter);
  };

  return {
    total,
    unitaryPrice,
    counter,
    decrement,
    increment,
  };
};
