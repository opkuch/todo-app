import { TextField } from '@mui/material'
import { TodoField } from '../../../types/Todo'
import { FormPartProps } from '../TodoForm'

const TaskInput = ({todo, handleChangeTodo}: FormPartProps) => {
  return (
    <TextField
      id="task-input"
      className="task-input"
      value={todo?.task || ''}
      onChange={(e) => handleChangeTodo(TodoField.Task, e.target.value)}
      margin="normal"
      multiline
      rows={4}
      sx={{
        width: '100%',
      }}
      placeholder="Write task here.."
      helperText="Write a description of your task here"
    />
  )
}

export default TaskInput
