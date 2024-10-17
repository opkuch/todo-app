import { Box, Button } from '@mui/material'
import { Todo, TodoField } from '../../types/Todo'
import { SelectPriority } from './parts/SelectPriority'
import { FormEvent } from 'react'
import { Loader } from '../../generic-ui/Loader/Loader'
import AssigneeInput from './parts/AssigneeInput'
import TaskInput from './parts/TaskInput'

export interface TodoFormProps {
  todo?: Todo
  isSaving: boolean
  handleChangeTodo: (todoField: TodoField, value: string) => void
  handleSaveTodo: () => void
  refetchTodos: () => void
}

export interface FormPartProps {
  todo?: Todo
  handleChangeTodo: (todoField: TodoField, value: string) => void
}

const TodoForm = ({
  todo,
  isSaving,
  handleChangeTodo,
  handleSaveTodo,
  refetchTodos,
}: TodoFormProps) => {
  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSaveTodo()
    refetchTodos()
  }
  return (
    <form onSubmit={handleClick}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '22vw' }}>
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
            <AssigneeInput todo={todo} handleChangeTodo={handleChangeTodo} />
            <TaskInput todo={todo} handleChangeTodo={handleChangeTodo} />
          </Box>
          <SelectPriority todo={todo} handleChangeTodo={handleChangeTodo} />
        </Box>
        <Button
          type="submit"
          disabled={
            isSaving || !todo?.assignee || !todo?.priority || !todo?.task
          }
          sx={{
            alignSelf: 'start',
            justifyContent: 'start',
          }}
        >
          {isSaving ? (
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                gap: '.3rem',
              }}
            >
              Send <Loader />
            </Box>
          ) : (
            'Send'
          )}
        </Button>
      </Box>
    </form>
  )
}

export default TodoForm
