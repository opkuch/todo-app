import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Todo } from '../../types/Todo'
import Table from '../../generic-ui/Table/Table.tsx'
import { PRIORITY_FILTERS } from '../../constants/filters.ts'

const TodoTable = ({
  todos,
  getAssigneeOptions,
  handleEditClick,
}: {
  todos: Todo[]
  getAssigneeOptions: () => string[]
  handleEditClick: (todoData: Todo) => void
}) => {
  const assigneeFilterOptions = useMemo(
    () => ['', ...getAssigneeOptions()],
    [getAssigneeOptions]
  )
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
        },
      },
    ],
    [assigneeFilterOptions]
  )

  return (
    <>
      <Table data={todos} columns={columns} handleEditClick={handleEditClick} />
    </>
  )
}

export default TodoTable
