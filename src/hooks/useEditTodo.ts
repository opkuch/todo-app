import { useState } from 'react'
import { Todo } from '../types/Todo'
import { saveTodo } from '../services/todoService'
import { delay, makeId } from '../services/utilsService'


const useEditTodo = () => {

    const [todo, setTodo] = useState<Todo>({
        id: makeId(),
        task: '',
        assignee: '',
        priority: 'Medium'
    })

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
            if (!todo?.assignee || !todo?.priority) {
                return
            }
            await delay(500)
            saveTodo(todo)
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

    return { todo, setTodo, handleChangeTodo, handleSaveTodo }
}


export default useEditTodo