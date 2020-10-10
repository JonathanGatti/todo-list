import React, {useContext, memo} from 'react';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/TodosContext';


function Todo({ task, completed, id }) {
  const [ isEditing, toggle ] = useToggleState(false);
  const dispatch  = useContext(DispatchContext)
  return(
    <ListItem style={{height: '64px'}}>
      {isEditing ?  
          <EditTodoForm 
            id={id}
            task={task}
            toggleEditForm={toggle}
          /> : 
      <>
        <CheckBox tabIndex={-1} checked={completed} onClick={() => dispatch({type: 'TOGGLE', id: id})}/>
        <ListItemText style={{
          textDecoration: completed && 'line-through'
        }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label='edit' onClick={toggle}>
            <EditIcon  />
          </IconButton>
          <IconButton aria-label='delete' onClick={() => dispatch({type: 'REMOVE', id: id})}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
}

export default memo(Todo)