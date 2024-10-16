import Form from './components/TodoForm/TodoForm'
import MainLayout from './components/MainLayout/MainLayout'
import { useTodos } from './hooks/useTodos'
import TodoTable from './components/TodoTable/TodoTable'

function App() {
  const { todos, loading, refetch } = useTodos()
  const assigneeOptions = todos.map(todo => todo.assignee)
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
      <Form refetchTodos={refetch} assigneeOptions={assigneeOptions}/>
      <TodoTable todos={todos} loading={loading} />
    </MainLayout>
  )
}

export default App
