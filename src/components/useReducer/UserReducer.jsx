import React, { useReducer, useState } from "react";
// useState
// + Khai báo giá trị khởi tạo
// + Bắt sự kiện tăng giảm và xử lý

// useReducer
// + Khai báo giá trị khởi tạo
// + Bắt sự kiện tăng giảm và xử lý
// + Tạo reducer để xử lý logic
// + Truyền dispath

// Bước 1: Khai báo giá trị khởi tạo
const initialValue = 0;

// Bước 2: Tạo các hành động
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Bước 3: Tạo hàm reducer
/**
 * Hàm reducer
 * @param {*} state state hiện tại
 * @param {*} action hành động
 */
const reducer = (state, action) => {
  console.log("action", action);
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};

export default function UserReducer() {
  // // Hàm xử lý tăng
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };

  // // Hàm xử lý giảm
  // const handleDecrease = () => {
  //   setCount(count - 1);
  // };

  // Bước 4: Gọi ra useReducer
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => dispatch(UP_ACTION)}>Tăng</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Giảm</button>
      </div>
    </>
  );
}
