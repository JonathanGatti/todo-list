import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList(props) {
  const { todos, removeTodo, toggleTodo, updateTodo } = props
  if(todos.length)
  return(
    <Paper>
      <List>
        {todos.map((todo,i) => (
          <>
            <Todo 
              key={todo.id}
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            {i < todos.length -1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  )
  return null
}

export default TodoList