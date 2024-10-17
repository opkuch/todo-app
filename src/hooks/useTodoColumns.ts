import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Todo } from '../types/Todo'
import { PRIORITY_FILTERS } from '../constants/filters'
import { getAssigneeOptions } from '../services/todoService'

const useTodoColumns = ({ todos }: { todos: Todo[] }) => {
    const columns = useMemo<ColumnDef<Todo>[]>(
        () => {
            const assigneeFilterOptions = ['', ...getAssigneeOptions()]

            return [
                {
                    accessorFn: (row) => row.task,
                    id: 'task',
                    header: 'Task',
                    cell: (info) => info.getValue(),
                    enableColumnFilter: false,
                },
                {
                    accessorFn: (row) => row.assignee,
                    id: 'assignee',
                    header: 'Assignee',
                    cell: (info) => info.getValue(),
                    meta: {
                        selectOptions: assigneeFilterOptions,
                        variant: "normal"
                    },
                    filterFn: 'equals',
                },
                {
                    accessorKey: 'priority',
                    accessorFn: (row) => row.priority,
                    id: 'priority',
                    header: 'Priority',
                    cell: (info) => info.getValue(),
                    meta: {
                        selectOptions: PRIORITY_FILTERS,
                        variant: "chip"
                    },
                }
            ]
        },
        [todos]
    )

    return { columns, }
}

export default useTodoColumns