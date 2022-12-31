import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function Todo({ todoList, id, removetodo, checked, checktodo }) {
  return (
    <div className="todo-item">
      <h2 style={{ textDecoration: checked ? "line-through" : null }}>
        {todoList}
      </h2>
      <div className="todo-icons">
        <button onClick={() => removetodo(id)} className="delete">
          <MdDeleteOutline />
        </button>
        <input
          type="checkbox"
          onClick={(e) => {
            checktodo(e.target.checked, id);
          }}
        />
      </div>
    </div>
  );
}

export default Todo;
