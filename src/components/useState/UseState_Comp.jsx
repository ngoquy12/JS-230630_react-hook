import React, { useState } from "react";

const totals = [100, 200, 300, 400];

export default function UseState_Comp() {
  // Phạm vi viết code jsvascript
  const [count, setCount] = useState(() => {
    console.log("initial running...");
    // Đối với initialState là một callback thì nó sẽ lấy giá trị được return từ callback là initialState
    const totalCount = totals.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    }, 0);

    return totalCount;
  });

  console.log("re-render");

  // Hàm xử lý tăng
  const handleCount = () => {
    // Cập nhật lại giá trị của state
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 3);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Count</button>
    </>
  );
}
