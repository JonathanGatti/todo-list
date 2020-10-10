import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {TodosContext} from './contexts/TodosContext';

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState('')
  const {addTodo} = useContext(TodosContext)
  return (
    <Paper style={{
      margin:'1rem 0',
      padding:'0 1rem'
    }}>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(value);
        reset();
      }
      }>
      <TextField
        margin='normal'
        label='Add New Todo'
        value={value}
        onChange={handleChange}
        fullWidth
      />
      </form>
    </Paper>
  )
}