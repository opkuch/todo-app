import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo.ts';
import { getData } from '../services/localStorageService.ts'
import { delay } from '../services/utilsService.ts';

const DELAY_AMOUNT = 1000
export function useFetchTodos(refetch: string) {

    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>('')

    const fetchTodos = async () => {
        try {
            setLoading(true)
            await delay(DELAY_AMOUNT) // Imitate waiting for a server request, even though we fetch synchronously todos from local storage
            const fetchedTodos = getData<Todo[]>('todos')
            setTodos(fetchedTodos || [])
            setLoading(false)
        } catch (error) {
            console.log(error)
            setErrorMsg('Could not get your todos for some reason..')
        }
    };

    useEffect(() => {
        fetchTodos(); // Fetch todos whenever the component mounts or refetch param changes
    }, [refetch])

    return { todos, loading, errorMsg }
}
