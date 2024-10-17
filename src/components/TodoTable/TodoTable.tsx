import { Todo } from '../../types/Todo'
import Table from '../../generic-ui/Table/Table.tsx'
import useTodoColumns from '../../hooks/useTodoColumns.ts'
import { Box } from '@mui/material'
import ConfirmationModal from '../../generic-ui/ConfirmationModal/ConfirmationModal.tsx'
import { useState } from 'react'

const TodoTable = ({
  todos,
  handleEditClick,
  handleDeleteClick
}: {
  todos: Todo[]
  handleEditClick: (todoData: Todo) => void
  handleDeleteClick: (todoId: string) => void
}) => {
  const { columns } = useTodoColumns({ todos })
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [todoIdToDelete, setTodoIdToRemove] = useState('')
  const handleConfirm = () => {
    if (todoIdToDelete) {
      handleDeleteClick(todoIdToDelete)
      setTodoIdToRemove('')
      setOpenDeleteModal(false)
    }
  }
  return (
    <Box sx={{width: '100%'}}>
      <Table
        size="small"
        data={todos}
        columns={columns}
        handleEditClick={handleEditClick}
        handleDeleteClick={(todo: Todo) => {
          setTodoIdToRemove(todo?.id)
          setOpenDeleteModal(true)
        }}
      />
      <ConfirmationModal
        open={openDeleteModal}
        title="Delete Todo"
        text="Are you sure you want to delete this todo?"
        handleConfirm={handleConfirm}
        handleClose={() => setOpenDeleteModal(false)}
      />
    </Box>
  )
}

export default TodoTable
