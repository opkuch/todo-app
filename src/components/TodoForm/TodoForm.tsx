import { Autocomplete, Box, Button, TextField } from '@mui/material'
import { Todo, TodoField } from '../../types/Todo'
import { SelectPriority } from './parts/SelectPriority'
import { FormEvent } from 'react'

interface ITodoForm {
  todo?: Todo
  handleChangeTodo: (todoField: TodoField, value: string) => void
  handleSaveTodo: () => void
  refetchTodos: () => void
  getAssigneeOptions: () => string[]
}

const TodoForm = ({ todo, handleChangeTodo, handleSaveTodo, refetchTodos, getAssigneeOptions }: ITodoForm) => {

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSaveTodo()
    refetchTodos()
  }
  return (
    <form onSubmit={handleClick}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              maxWidth: 400,
            }}
          >
            <Autocomplete
              id="assignee-input"
              options={getAssigneeOptions()}
              value={todo?.assignee || ''}
              freeSolo
              onChange={(e, value) =>
                handleChangeTodo(TodoField.Assignee, value || '')
              }
              onInputChange={(e, value) =>
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
            <TextField
              id="task-input"
              className="task-input"
              defaultValue={''}
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
          </Box>
          <SelectPriority handleChange={handleChangeTodo} />
        </Box>
        <Button
          type="submit"
          disabled={!todo?.assignee || !todo?.priority || !todo?.task}
        >
          Save
        </Button>
      </Box>
    </form>
  )
}

export default TodoForm
