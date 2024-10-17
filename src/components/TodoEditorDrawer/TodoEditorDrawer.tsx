import Drawer from '@mui/material/Drawer'
import TodoForm, { TodoFormProps } from '../TodoForm/TodoForm'
import { Typography } from '@mui/material'
import { getTodo } from '../../services/todoService'

interface TodoEditorDrawerProps extends TodoFormProps {
  isEditing: boolean
  toggleDrawer: (toOpen: boolean) => void
}
export default function TodoEditorDrawer({
  toggleDrawer,
  handleChangeTodo,
  handleSaveTodo,
  isEditing,
  todo,
  isSaving,
  refetchTodos,
}: TodoEditorDrawerProps) {
  const currentTodo = getTodo(todo?.id)
  return (
    <Drawer
      open={isEditing}
      sx={{ width: 250 }}
      PaperProps={{ sx: { padding: '1rem' } }}
      role="presentation"
      onClose={() => toggleDrawer(false)}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: '1.4rem',
        }}
      >
        Edit{' '}
        <Typography component="span" sx={{ textDecoration: 'underline' }}>
          {currentTodo?.assignee}
        </Typography>{' '}
        todo
      </Typography>
      <TodoForm
        refetchTodos={refetchTodos}
        todo={todo}
        handleChangeTodo={handleChangeTodo}
        handleSaveTodo={handleSaveTodo}
        isSaving={isSaving}
      />
    </Drawer>
  )
}
