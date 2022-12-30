import Todo from "./components/Todo";
import Todos from "./components/Todos";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState("");
  const [todoList, setodoList] = useState([]);


  const addtodo = () =>  {
     setodoList(datas)
  };
  useEffect(() => {
    addtodo()
  },[])
  
  return (
    <>
      <div>
        <input
          type="text"
          value={datas}
          onChange={(e) => setDatas(e.target.value)}
        />
        <button type="submit" onClick={addtodo}>
          ADD TODO
        </button>
      </div>
      
      <Todos todoList />
    </>
  );
}

export default App;
