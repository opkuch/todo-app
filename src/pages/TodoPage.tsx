import { useTodos } from '../hooks/useTodos'
import useEditTodo from '../hooks/useEditTodo'
import { generateNewTodo, removeTodo } from '../services/todoService'
import TodoHeader from '../components/TodoHeader/TodoHeader'
import MainLayout from '../generic-ui/MainLayout/MainLayout'
import TodoTable from '../components/TodoTable/TodoTable'
import { Todo } from '../types/Todo'
import { Box } from '@mui/material'
import TodoEditorDrawer from '../components/TodoEditorDrawer/TodoEditorDrawer'
import TodoCreationForm from '../components/TodoCreationForm/TodoCreationForm'

const TodoPage = () => {
  const { todos, refetch } = useTodos()
  const {
    todo,
    setTodo,
    isEditing,
    isSaving,
    setIsEditing,
    handleChangeTodo,
    handleSaveTodo,
  } = useEditTodo()

  const handleEditClick = (todoToEdit: Todo) => {
    if (todoToEdit) {
      setIsEditing(true)
      setTodo(todoToEdit)
    }
  }

  const handleDeleteClick = (todoId: string) => {
    if (todoId) {
      removeTodo(todoId)
      refetch()
    }
  }

  const toggleDrawer = (toOpen: boolean) => {
    setIsEditing(toOpen)
    if (!toOpen) {
      setTodo(generateNewTodo())
    }
  }
  return (
    <MainLayout sx={todoPageStyles.mainLayout}>
      <TodoHeader />
      <Box component="section" className="todo-section" sx={todoPageStyles.row}>
        <TodoCreationForm
          refetchTodos={refetch}
          todo={todo}
          handleChangeTodo={handleChangeTodo}
          handleSaveTodo={handleSaveTodo}
          isEditing={isEditing}
          isSaving={isSaving}
        />
        <TodoTable
          todos={todos}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
        <TodoEditorDrawer
          refetchTodos={refetch}
          todo={todo}
          handleChangeTodo={handleChangeTodo}
          handleSaveTodo={handleSaveTodo}
          isEditing={isEditing}
          isSaving={isSaving}
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </MainLayout>
  )
}

export default TodoPage

const todoPageStyles = {
  mainLayout: {
    width: '100%',
    padding: '1rem',
    background: '#fefefe',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: '1rem',
    gap: '1rem',
  },
}
