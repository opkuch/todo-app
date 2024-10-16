import { useEffect, useState } from 'react'
import { Todo } from '../types/Todo'
import { getTodo, saveTodo } from '../services/todoService'
import { delay, makeId } from '../services/utilsService'

interface TodoEditPayload {
    todoId?: string
}

const useEditTodo = (todoEditPayload: TodoEditPayload) => {

    const { todoId } = todoEditPayload
    const [todo, setTodo] = useState<Todo | null>(null)

    useEffect(() => {
        if (todoId) {
            const nextTodo = getTodo(todoId)
            setTodo(nextTodo)
        } else {
            setTodo({
                id: makeId(),
                task: '',
                assignee: '',
                priority: 'Medium'
            })
        }
    }, [todoId])

    const handleChangeTodo = (field: keyof Todo, value: string) => {
        if (!todo) return
        setTodo({
            ...todo,
            [field]: value,
        })
    }

    const handleSaveTodo = async () => {
        if (!todo) return;
        try {
            await delay(1000)
            saveTodo(todo);
            setTodo({
                id: makeId(),
                task: '',
                assignee: '',
                priority: 'Medium'
            })
        } catch (err) {
            console.error(err)
        }
    }

    return { todo, handleChangeTodo, handleSaveTodo }
}


export default useEditTodo