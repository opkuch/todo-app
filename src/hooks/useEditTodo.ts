import { useState } from 'react'
import { Todo } from '../types/Todo'
import { saveTodo } from '../services/todoService'
import { makeId } from '../services/utilsService'

const useEditTodo = () => {

    const [todo, setTodo] = useState<Todo>({
        id: makeId(),
        task: '',
        assignee: '',
        priority: 'Medium'
    })
    const [isEditing, setIsEditing] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
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
            setIsSaving(true)
            saveTodo(todo)
            setTodo({
                id: makeId(),
                task: '',
                assignee: '',
                priority: 'Medium'
            })
            setIsSaving(false)
            setIsEditing(false)
        } catch (err) {
            console.error(err)
        }
    }

    return { todo, setTodo, isEditing, isSaving, setIsEditing, handleChangeTodo, handleSaveTodo }
}


export default useEditTodo