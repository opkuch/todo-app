import { Autocomplete, TextField } from '@mui/material'
import { getAssigneeOptions } from '../../../services/todoService'
import { TodoField } from '../../../types/Todo'
import { FormPartProps } from '../TodoForm'

const AssigneeInput = ({ todo, handleChangeTodo }: FormPartProps) => {
  return (
    <Autocomplete
      id="assignee-input"
      options={getAssigneeOptions()}
      value={todo?.assignee || ''}
      freeSolo
      onChange={(_e, value) =>
        handleChangeTodo(TodoField.Assignee, value || '')
      }
      onInputChange={(_e, value) =>
        handleChangeTodo(TodoField.Assignee, value || '')
      }
      renderInput={(params) => (
        <TextField
          {...params}
          value={todo?.assignee}
          helperText="Add the task assignee"
          placeholder="Assignee"
        />
      )}
    />
  )
}

export default AssigneeInput
