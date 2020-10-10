import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
import { DispatchContext } from './contexts/TodosContext';


function EditTodoForm({ task, id, toggleEditForm }) {
  const [ value, handleChange, reset ] = useInputState(task);
  const dispatch = useContext(DispatchContext)
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({ type: 'EDIT', id: id, newTask: value})
      reset()
      toggleEditForm();
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