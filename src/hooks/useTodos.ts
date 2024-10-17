import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo.ts';
import { delay } from '../services/utilsService.ts';
import { getTodos } from '../services/todoService.ts';

const DELAY_AMOUNT = 1000
export function useTodos() {

    const [todos, setTodos] = useState<Todo[]>([])
    const [refetchTime, setRefetchTime] = useState<number>(Date.now())
    const [loading, setLoading] = useState<boolean>(false)

    const fetchTodos = async () => {
        try {
            setLoading(true)
            await delay(DELAY_AMOUNT) // Imitate waiting for a server request, even though we fetch synchronously todos from local storage
            const fetchedTodos = getTodos()
            setTodos(fetchedTodos || [])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    };

    const refetch = () => setRefetchTime(Date.now())

    useEffect(() => {
        fetchTodos(); // Fetch todos whenever the component mounts or refetchTime state changes
    }, [refetchTime])

    return { todos, loading, refetch }
}
