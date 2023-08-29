import React, { useEffect, useState } from "react";

export default function UseEffect() {
  // Cách 1: useEffect(callback)
  // + callback sẽ được gọi khi component được mounted
  // + callback được gọi khi component được gắn vào DOM
  // + callback sẽ được gọi khi state thay đổi => ít dùng
  // Cách 2: useEffect(callback, [])
  // + callback sẽ được gọi khi component được mounted
  // + callback chỉ được gọi trong lần đầu tiên component được render <=> componentDidMount trong lifecycle
  // Cách 3: useEffect(callback, [deps])
  // + callback sẽ được gọi khi component được mounted
  // + callback được gọi khi dependency(có thể là state, props hoặc dữ liệu khác) thay đổi

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Cách 1
  // useEffect(() => {
  //   // Thay đổi tiêu đề trên tab trình duyệt
  //   document.title = name;
  //   console.log("useEffect được gọi...");
  // });

  // Cách 2
  // useEffect(() => {
  //   // Phù hợp cho việc gọi API để hiển thị thông tin
  //   console.log("useEffect ở cách thứ 2 được gọi...");
  // }, []);

  // Cách 3
  useEffect(() => {
    console.log("useEffect ở cách thứ 3 được gọi...", name);
  }, [name]);

  useEffect(() => {
    console.log("useEffect ở cách thứ 3 được gọi...", email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lấy dữ liệu từ các ô input và gửi lên server
    const newUser = {
      name: name,
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(newUser);
  };

  return (
    <>
      {console.log("render")}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
