export interface Todo {
    id: string
    task: string
    assignee: string
    priority: Priority
}

export enum TodoField {
    Task = 'task',
    Assignee = 'assignee',
    Priority = 'priority',
}

export type Priority = 'Low' | 'Medium' | 'High'