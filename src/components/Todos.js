import React, { useId } from "react";
import Todo from "./Todo";

function Todos({ todoLists, removetodo, checktodo }) {
  return (
    <div>
      {todoLists ? (
        todoLists.map((todoList) => {
          return (
            <Todo
              key={todoList.id}
              todoList={todoList.datas}
              removetodo={removetodo}
              id={todoList.id}
              checked={todoList.checked}
              checktodo={checktodo}
            />
          );
        })
      ) : (
        <h1>TODO IS EMPTY</h1>
      )}
    </div>
  );
}

export default Todos;
