import { Todo } from "../models/Todo"
import { getData, setData } from "./localStorageService.ts"

const TODOS_KEY = 'todos-local-data'

function getTodos(): Todo[] | null {
    const todos = getData<Todo[]>(TODOS_KEY)
    return todos
}

function getTodo(todoId: string): Todo | null {
    const todos = getTodos()
    if (todos) {
        const todo = todos?.find(todo => todo.id === todoId) || null
        return todo
    }
    return null
}

function saveTodo(todoData: Todo): void {
    // change to save or update
    const todos = getTodos()
    if (todos) {
        todos?.unshift(todoData)
        setData(TODOS_KEY, todos)
    }
}

function updateTodo(updatedTodo: Todo): void{
    const todos = getTodos()
    if (todos) {
        const updatedTodos = todos?.map(todo => todo.id === updatedTodo.id? {...updatedTodo} : todo)
        setData(TODOS_KEY, updatedTodos)
    }
}

export {
    getTodos,
    getTodo,
    saveTodo,
    updateTodo
}