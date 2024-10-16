import React from 'react'
import { Todo } from '../../types/Todo'
import { LinearLoader } from '../Loader/LinearLoader'

interface TodoTableProps {
  todos: Todo[]
  loading: boolean
}
const TodoTable = ({ todos, loading }: TodoTableProps) => {
  if (loading) {
    return <LinearLoader />
  }
  if (todos.length === 0) {
    return <div>No todos available</div>
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <pre>{JSON.stringify(todo)}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoTable
