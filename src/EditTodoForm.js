import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
import { TodosContext } from './contexts/TodosContext';


function EditTodoForm({ task, id }) {
  const [ value, handleChange, reset ] = useInputState(task);
  const { dispatch } = useContext(TodosContext)
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({ type: 'EDIT', id: id, newTask: value})
      dispatch({type: 'TOGGLE'})
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