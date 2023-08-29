import { useState } from "react";

import "./App.css";
import UseState_Comp from "./components/useState/UseState_Comp";
import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import UserReducer from "./components/useReducer/UserReducer";
import TodoList from "./components/totolist/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState_Comp /> */}
      {/* <UseContext /> */}
      {/* <UseEffect /> */}
      {/* <UserReducer /> */}
      <TodoList />
      {/* <TodoList /> */}
    </>
  );
}

export default App;
