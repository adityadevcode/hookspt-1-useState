// import React from 'react'

// const Usereducer = () => {
//   return (
//     <>Usereducer</>
//   )
// }

// export default Usereducer;

// The useReducer hook is a very useful React hook that does a similar thing to the useState hook
// this hook should be used to handle more complex logic than the useState hook.
// It’s worthy of note that the useState hook is internally implemented with the useReducer hook.

// The hook takes a reducer as an argument and can optionally take the initial state and an init function as arguments.
// const [state, dispatch] =useReducer(reducer, initialState, init)
// Here, init is a function and it is used whenever we want to create the initial state lazily.

// we are using the useReducer hook. This hook accepts the reducer and the initial state and returns the state and the 
// dispatch function. Here, the dispatch function serves the same purpose as the setter function for the useState hook
//  and we can call it anything we want instead of dispatch.

// This shows the power of the useReducer hook. We could also achieve this functionality with the useState hook but as 
// you can see from the example above, the useReducer hook helped us to keep things neater. useReducer is often beneficial 
// when the state object is a complex structure and is updated in different ways as against a simple value-replace. Also, 
// once these update functions get more complicated, useReducer makes it easy to hold all that complexity in a reducer function 
// (which is a pure JS function) making it very easy to write tests for the reducer function alone.

// We could have also passed the third argument to the useReducer hook to create the initial state lazily. 
// This means that we could calculate the initial state in an init function.








export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

const Usereducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      };

      return [...state, newTodo];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case COMPLETE_TODO:
      const completeTodo = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });

      return completeTodo;

    default:
      return state;
  }
};

export default Usereducer;

