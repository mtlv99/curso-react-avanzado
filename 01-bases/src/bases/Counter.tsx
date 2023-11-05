import React, { useState } from "react";

interface Props {
    initialValue?: number;
}

export const Counter = ({ initialValue = 10 }: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
