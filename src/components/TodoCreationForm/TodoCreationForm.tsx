import TodoForm, { TodoFormProps } from '../TodoForm/TodoForm'

interface TodoCreationFormProps extends TodoFormProps {
  isEditing: boolean
}

const TodoCreationForm = ({
  todo,
  isEditing,
  isSaving,
  handleChangeTodo,
  handleSaveTodo,
  refetchTodos,
}: TodoCreationFormProps) => {
  return (
    <TodoForm
      refetchTodos={refetchTodos}
      todo={!isEditing ? todo : undefined}
      handleChangeTodo={handleChangeTodo}
      handleSaveTodo={handleSaveTodo}
      isSaving={isSaving}
    />
  )
}

export default TodoCreationForm
