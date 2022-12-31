import Todos from "./components/Todos";
import { useEffect, useId, useState } from "react";

function App() {
  const [datas, setDatas] = useState("");
  const [todoLists, setodoLists] = useState([]);
  const id = useId();
  const addtodo = () => {
    if (!datas) {
      alert("todo cant be empty");
    } else {
      setodoLists([
        { datas: datas, id: new Date().getMilliseconds(), checked: false },
        ...todoLists,
      ]);
      setDatas("");
    }
  };
  const removetodo = (id) => {
    console.log(id + "id");
    const newtodo = todoLists.filter((todoList) => todoList.id !== id);
    setodoLists(newtodo);
  };
  const checktodo = (check, id) => {
    const completedTodo = todoLists.filter((todoList) => {
      if (todoList.id === id) {
        return [(todoList.checked = check), ...todoLists];
      } else {
        return [...todoLists];
      }
    });
    setodoLists(completedTodo);
  };

  return (
    <>
      <div>
        <h1>A Simple Todo App</h1>
        <form
          className="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={datas}
            onChange={(e) => setDatas(e.target.value)}
          />
          <button onClick={() => addtodo()} type="submit">
            ADD TODO
          </button>
        </form>
        <Todos
          todoLists={todoLists}
          removetodo={removetodo}
          checktodo={checktodo}
        />
      </div>
    </>
  );
}

export default App;
