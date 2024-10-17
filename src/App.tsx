import TodoForm from './components/TodoForm/TodoForm'
import { useTodos } from './hooks/useTodos'
import TodoTable from './components/TodoTable/TodoTable'
import MainLayout from './generic-ui/MainLayout/MainLayout'
import { getAssignees } from './services/todoService'
import useEditTodo from './hooks/useEditTodo'
import { Todo } from './types/Todo'

function App() {
  const { todos, loading, refetch } = useTodos()
  const { todo, setTodo, handleChangeTodo, handleSaveTodo } = useEditTodo()

  const getAssigneeOptions = () => {
    const allAssignees = getAssignees()
    const options = [...new Set(allAssignees)]
    return options
  }
  const handleEditClick = (todoToEdit: Todo) => {
    if (todoToEdit) {
      setTodo(todoToEdit)
    }
  }
  return (
    <MainLayout
      sx={{
        width: '60%',
        height: '100vh',
        margin: 'auto',
        padding: '1rem',
        background: '#fefefe',
      }}
    >
      <TodoForm
        refetchTodos={refetch}
        getAssigneeOptions={getAssigneeOptions}
        todo={todo}
        handleChangeTodo={handleChangeTodo}
        handleSaveTodo={handleSaveTodo}
      />
      <TodoTable
        todos={todos}
        getAssigneeOptions={getAssigneeOptions}
        handleEditClick={handleEditClick}
      />
    </MainLayout>
  )
}

export default App
