import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Todo } from '../../types/Todo'
import Table from '../../generic-ui/Table/Table.tsx'
import { PRIORITY_FILTERS } from '../../constants/filters.ts'

const TodoTable = ({
  todos,
  loading,
  getAssigneeOptions,
}: {
  todos: Todo[]
  loading: boolean
  getAssigneeOptions: () => string[]
}) => {
  const assigneeFilterOptions = ['', ...getAssigneeOptions()]
  const columns = useMemo<ColumnDef<Todo, unknown>[]>(
    () => [
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
        },
        filterFn: 'equals'
      },
      {
        accessorKey: 'priority',
        accessorFn: (row) => row.priority,
        id: 'priority',
        header: 'Priority',
        cell: (info) => info.getValue(),
        meta: {
          selectOptions: PRIORITY_FILTERS,
        },
      },
    ],
    [todos?.length, loading]
  )

  return <Table data={todos} loading={loading} columns={columns} />
}

export default TodoTable
