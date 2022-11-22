// import './App.css';
// // import Usestate from './Components/Usestate';
// // "import Useeffect from './Components/Useeffect';
// import Usereducer from './Components/Usereducer';

// function App() {
//   return (
//     <>
//      {/* <Usestate /> */}
//      {/* <Useeffect /> */}
//      <Usereducer />
//     </>
//   );
// }

// export default App;

import { useReducer, useState } from "react";
import Usereducer, { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./Components/Usereducer";

function App() {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodoItem = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);
    dispatch({
      type: ADD_TODO,
      id: newId,
      text: text
    });

    setText("");
  };

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, id });
  };

  const completeTodo = (id) => {
    dispatch({ type: COMPLETE_TODO, id });
  };

  return (
    <div className="App">
      <h1>Todo Example</h1>
      <form className="input" onSubmit={addTodoItem}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button disabled={text.length === 0} type="submit">
          +
        </button>
      </form>
      <div className="todos">
        {state.map((todo) => (
          <div key={todo.id} className="todoItem">
            <p className={todo.completed && "strikethrough"}>{todo.text}</p>
            <span onClick={() => removeTodo(todo.id)}>&#10005;</span>
            <span onClick={() => completeTodo(todo.id)}>&#10003;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;