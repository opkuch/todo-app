import { Autocomplete, Box, Button, TextField } from '@mui/material'
import useEditTodo from '../../hooks/useEditTodo'
import { TodoField } from '../../types/Todo'
import { SelectPriority } from './parts/SelectPriority'

interface ITodoForm {
  todoId?: string
  refetchTodos: () => void
  assigneeOptions: string[]
}

const TodoForm = ({ todoId, refetchTodos, assigneeOptions }: ITodoForm) => {
  const { todo, handleChangeTodo, handleSaveTodo } = useEditTodo({ todoId })

  const handleClick = async () => {
    await handleSaveTodo()
    refetchTodos()
  }
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        id="task-input"
        label={TodoField.Task}
        value={todo?.task || ''}
        onChange={(e) => handleChangeTodo(TodoField.Task, e.target.value)}
        margin="normal"
      />
      <Autocomplete
        //        disablePortal
        key={todo?.task}
        id="assignee-input"
        options={assigneeOptions}
        value={todo?.assignee}
        freeSolo
        onChange={(e, value) => handleChangeTodo(TodoField.Assignee, value || '')}
        onInputChange={(e, value) => handleChangeTodo(TodoField.Assignee, value)}
        renderInput={(params) => (
          <TextField {...params} />
        )}
      />
      <SelectPriority
        handleChange={handleChangeTodo}
        priority={todo?.priority}
      />
      <Button onClick={handleClick}>Save</Button>
    </Box>
  )
}

export default TodoForm
