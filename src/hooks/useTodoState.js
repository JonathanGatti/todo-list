import useLocalStorageState from './useLocalStorageState';

import { v4 as uuidv4 } from 'uuid';


export default initialVal => {
  const [todos, setTodos] = useLocalStorageState('todos', initialVal)

  const addTodo = newTodoText =>{
    setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
  }
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos)
  }
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      )
      setTodos(updatedTodos);
  }
  const updateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
      )
      setTodos(updatedTodos);
  }
  return [todos, addTodo, removeTodo, toggleTodo, updateTodo]
}

