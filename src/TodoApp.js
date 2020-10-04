import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function TodoApp() {
  const initialTodos= [
    {id:1, task:'walk dog', completed: false},
    {id:2, task:'say hallo', completed: true},
    {id:3, task:'clean sink', completed: false},
  ]
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Paper
      style={{
        padding:0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position="static" style={{height: '64px'}}>
        <Toolbar>
          <Typography variant="h6" color='inherit'>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoForm />
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp;