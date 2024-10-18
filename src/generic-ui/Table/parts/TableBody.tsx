import { flexRender, Row, RowModel } from '@tanstack/react-table'
import {
  Button,
  TableBody as MUITableBody,
  TableCell,
  TableRow as MUITableRow,
} from '@mui/material'
import { TodoField } from '../../../types/Todo'
import PriorityChip from '../../PriorityChip/PriorityChip'

const TableBody = <T,>({
  getRowModel,
  handleDeleteClick,
  handleEditClick,
}: {
  getRowModel: () => RowModel<T>
  handleEditClick?: (rowData: T) => void
  handleDeleteClick?: (rowData: T) => void
}) => {
  const rowModel = getRowModel()

  return (
    <MUITableBody>
      {rowModel.rows.length ? (
        rowModel.rows.map((row) => {
          return (
            <TableRow
              key={row.id}
              row={row}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )
        })
      ) : (
        <MUITableRow className='empty-row'>
          <TableCell>No Items yet..</TableCell>
        </MUITableRow>
      )}
    </MUITableBody>
  )
}

const TableRow = <T,>({
  row,
  handleEditClick,
  handleDeleteClick,
}: {
  row: Row<T>
  handleEditClick?: (rowData: T) => void
  handleDeleteClick?: (rowData: T) => void
}) => {
  return (
    <MUITableRow key={row.id}>
      {row.getVisibleCells().map((cell) => {
        return (
          <TableCell key={cell.id}>
            {cell?.column?.id === TodoField?.Priority ? (
              <PriorityChip
                label={cell.getValue() as string}
                variant="outlined"
              />
            ) : (
              flexRender(cell.column.columnDef.cell, cell.getContext())
            )}
          </TableCell>
        )
      })}

      <TableCell>
        {handleEditClick && (
          <Button
            color="secondary"
            onClick={() => handleEditClick(row.original)}
          >
            Edit
          </Button>
        )}
      </TableCell>
      <TableCell>
        {handleDeleteClick && (
          <Button
            color="error"
            variant="contained"
            onClick={() => handleDeleteClick(row.original)}
          >
            Delete
          </Button>
        )}
      </TableCell>
    </MUITableRow>
  )
}

export default TableBody
