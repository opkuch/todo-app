import { Todo } from "../types/Todo"
import { getData, setData } from "./localStorageService.ts"
import { makeId } from "./utilsService.ts"

const TODOS_KEY = 'todos-local-data'

function getTodos(): Todo[] {
    const todos = getData<Todo[]>(TODOS_KEY)
    return todos || []
}

function getTodo(todoId?: string): Todo | undefined {
    const todos = getTodos()
    if (todos) {
        const todo = todos?.find(todo => todo.id === todoId)
        return todo
    }
    return
}

function saveTodo(todoData: Todo): void {
    const todos = getTodos()
    if (todoData) {
        const existedTodo = getTodo(todoData.id)
        if (existedTodo) {
            _updateTodo(todoData)
            return
        }
        todos?.unshift(todoData)
        setData(TODOS_KEY, todos)
    }
}

function removeTodo(todoId: string): void {
    if (!todoId) return
    const todos = getTodos()
    const idx = todos.findIndex(todo => todo?.id === todoId)
    if (idx > -1) {
        todos.splice(idx, 1)
        setData(TODOS_KEY, todos)
    }
}

function getAssignees(): string[] {
    const todos = getTodos()
    if (todos) {
        return todos.map(todo => todo.assignee)
    }
    return []
}

function getAssigneeOptions() {
    const allAssignees = getAssignees()
    const options = [...new Set(allAssignees)]
    return options
}

function generateNewTodo(): Todo {
    return {
        id: makeId(),
        task: '',
        assignee: '',
        priority: 'Medium',
      }
}

function _updateTodo(updatedTodo: Todo): void {
    const todos = getTodos()
    if (updatedTodo) {
        const updatedTodos = todos?.map(todo => todo.id === updatedTodo.id ? { ...updatedTodo } : todo)
        setData(TODOS_KEY, updatedTodos)
    }
}

export {
    getTodos,
    getTodo,
    saveTodo,
    removeTodo,
    getAssignees,
    getAssigneeOptions,
    generateNewTodo
}