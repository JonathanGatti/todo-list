import React, {createContext} from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

const defaultTodos = [
  {id: 1, task: 'feed goat', completed: 'false'},
  {id: 2, task: 'play with pig', completed: 'false'},
];

export function TodosProvider(props) {
  const [todos, addTodo, removeTodo, toggleTodo, updateTodo] = useTodoState(defaultTodos);                
  return(
    <TodosContext.Provider value={{todos, addTodo, removeTodo, toggleTodo, updateTodo}}>
      {props.children}
    </TodosContext.Provider>
  )
}