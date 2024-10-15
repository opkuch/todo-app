export interface Todo {
    id: string
    task: string
    assignee: string
    priority: Priority
}

type Priority = 'Low' | 'Medium' | 'High'