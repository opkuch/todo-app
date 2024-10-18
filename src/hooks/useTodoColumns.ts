import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Todo, TodoField } from '../types/Todo'
import { PRIORITY_FILTERS } from '../constants/filters'
import { getAssigneeOptions } from '../services/todoService'

const useTodoColumns = ({ todos }: { todos: Todo[] }) => {
    const columns = useMemo<ColumnDef<Todo>[]>(
        () => {
            const assigneeFilterOptions = ['', ...getAssigneeOptions()]

            return [
                {
                    accessorFn: (row) => row.task,
                    id: TodoField.Task,
                    header: 'Task',
                    cell: (info) => info.getValue(),
                    enableColumnFilter: false,
                },
                {
                    accessorFn: (row) => row.assignee,
                    id: TodoField.Assignee,
                    header: 'Assignee',
                    cell: (info) => info.getValue(),
                    meta: {
                        selectOptions: assigneeFilterOptions,
                        variant: "normal"
                    },
                    filterFn: 'equals',
                },
                {
                    accessorFn: (row) => row.priority,
                    id: TodoField.Priority,
                    header: 'Priority',
                    cell: (info) => info.getValue(),
                    meta: {
                        selectOptions: PRIORITY_FILTERS,
                    },
                }
            ]
        },
        [todos]
    )

    return { columns, }
}

export default useTodoColumns