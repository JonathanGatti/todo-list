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
    }}
      style={{marginLeft: '1rem', width: '50%'}}
    >
      <TextField 
        margin='normal'
        fullWidth
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm