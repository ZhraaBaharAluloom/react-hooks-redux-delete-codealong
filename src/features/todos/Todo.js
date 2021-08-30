import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(todo.id);
    dispatch(todoRemoved(todo.id));
  };
  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Remove</button>
    </li>
  );
}

export default Todo;
