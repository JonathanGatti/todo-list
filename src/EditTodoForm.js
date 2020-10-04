import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';

function EditTodoForm({ toggleEditForm, updateTodo, task, id }) {
  const [ value, handleChange, reset ] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      updateTodo(id, value)
      toggleEditForm()
      reset()
    }}>
      <TextField 
        margin='normal'
        fullWidth
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default EditTodoForm