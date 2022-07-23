import React from "react";
import { ACTIONS } from "./ACTIONS";

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#000" : "#00FF00" }}>
        {todo.title}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        delete
      </button>
      {/* <button
        onClick={() =>
          dispatch({
            type: ACTIONS.EDIT_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        edit
      </button> */}
    </div>
  );
}

export default Todo;
