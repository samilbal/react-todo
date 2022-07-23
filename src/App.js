import { useState, useReducer } from "react";
import Todo from "./components/Todo";
import { ACTIONS } from "./components/ACTIONS";
import reducer from "./components/Reducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title } });
    setTitle("");
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
