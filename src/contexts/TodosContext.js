import React, {createContext, useReducer} from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todo.reducers';

export const TodosContext = createContext();

const defaultTodos = [
  {id: 1, task: 'feed goat', completed: 'false'},
  {id: 2, task: 'play with pig', completed: 'false'},
];

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);                
  return(
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}