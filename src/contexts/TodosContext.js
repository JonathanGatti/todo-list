import React, {createContext} from 'react';
import todoReducer from '../reducers/todo.reducers';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  {id: 1, task: 'feed goat', completed: 'false'},
  {id: 2, task: 'play with pig', completed: 'false'},
];

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todoReducer);                
  return(
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}