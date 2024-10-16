import TodoForm from './components/TodoForm/TodoForm'
import { useTodos } from './hooks/useTodos'
import TodoTable from './components/TodoTable/TodoTable'
import MainLayout from './generic-ui/MainLayout/MainLayout'
import { getAssignees } from './services/todoService'
function App() {
  const { todos, loading, refetch } = useTodos()
  const getAssigneeOptions = () => {
    const allAssignees = getAssignees()
    const options = [...new Set(allAssignees)]
    return options
  }
  return (
    <MainLayout
      sx={{
        width: '60%',
        height: '100vh',
        margin: 'auto',
        padding: '1rem',
        background: '#f1f1f1',
      }}
    >
      <TodoForm refetchTodos={refetch} getAssigneeOptions={getAssigneeOptions} />
      <TodoTable todos={todos} loading={loading} getAssigneeOptions={getAssigneeOptions} />
    </MainLayout>
  )
}

export default App
