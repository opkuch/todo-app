import { Todo } from "../types/Todo"
import { getData, setData } from "./localStorageService.ts"

const TODOS_KEY = 'todos-local-data'

function getTodos(): Todo[] {
    const todos = getData<Todo[]>(TODOS_KEY)
    console.log(todos)
    return todos || []
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
    const todos = getTodos()
    if (todoData) {
        todos?.unshift(todoData)
        setData(TODOS_KEY, todos)
    }
}

function updateTodo(updatedTodo: Todo): void{
    const todos = getTodos()
    if (updatedTodo) {
        const updatedTodos = todos?.map(todo => todo.id === updatedTodo.id? {...updatedTodo} : todo)
        setData(TODOS_KEY, updatedTodos)
    }
}

function getAssignees(): string[] {
    const todos = getTodos()
    if (todos) {
        return todos.map(todo => todo.assignee)
    }
    return []
}

export {
    getTodos,
    getTodo,
    saveTodo,
    updateTodo,
    getAssignees
}