import React, { useId } from "react";

function Todos({ todoList }) {
  const id =useId
  return <div>
    {
      todoList ? 
          console.log(todoList)
       : <h1>TODO IS EMPTs</h1>
    }
  </div>;
}

export default Todos;
