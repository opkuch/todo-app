import { flexRender, RowModel } from '@tanstack/react-table'
import {
  Button,
  TableBody as MUITableBody,
  TableCell,
  TableRow,
} from '@mui/material'

const TableBody = <T,>({
  getRowModel,
  handleEditClick,
}: {
  getRowModel: () => RowModel<T>
  handleEditClick: (rowData: T) => void
}) => {
  return (
    <MUITableBody>
      {getRowModel().rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              )
            })}

            <TableCell>
              <Button onClick={() => handleEditClick(row.original)}>
                Edit
              </Button>
            </TableCell>
            <TableCell>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>
        )
      })}
    </MUITableBody>
  )
}

export default TableBody
