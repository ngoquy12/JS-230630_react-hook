import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";

// Comp_A => Comp_B => Comp_C
// Từ A truyền xuống B qua props
// Từ B xuống C cũng thông qua props

// Khai báo context ở component và export ra bên ngoài để sử dụng
export const ThemeContext = createContext(); // Bước 1

export default function UseContext() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Bước 2:
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={handleChangeTheme}>Change theme</button>
        <Comp_A />
      </div>
    </ThemeContext.Provider>
  );
}
