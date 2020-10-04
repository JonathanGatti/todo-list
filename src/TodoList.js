import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList(props) {
  const { todos, removeTodo, toggleTodo, updateTodo } = props
  return(
    <Paper>
      <List>
        {todos.map(todo => (
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
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList