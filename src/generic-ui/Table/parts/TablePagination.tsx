import { Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import ArrowBackSvg from '../../../assets/arrow-back.svg'
import ArrowForwardSvg from '../../../assets/arrow-forward.svg'
import { Table } from '@tanstack/react-table'

const TablePagination = <T,>({ table }: { table: Table<T> }) => {
  return (
    <Box component="tfoot">
      <TableRow>
        <TableCell>
          <Button
            className={`cursor-pointer ${
              !table.getCanPreviousPage() ? 'icon-disabled' : ''
            }`}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Box
              component="img"
              sx={{
                maxHeight: 24,
                maxWidth: 24,
              }}
              src={ArrowBackSvg}
            />
          </Button>
        </TableCell>
        <TableCell>
          <Button
            className={`cursor-pointer ${
              !table.getCanNextPage() ? 'icon-disabled' : ''
            }`}
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <Box
              component="img"
              sx={{
                maxHeight: 24,
                maxWidth: 24,
              }}
              src={ArrowForwardSvg}
            />
          </Button>
        </TableCell>
        <TableCell>
          <Box
            sx={{
              display: 'flex',
              gap: '.2rem',
              width: 'fit-content',
            }}
          >
            <Typography>Page</Typography>
            <Typography>{table.getState().pagination.pageIndex + 1}</Typography>
            <Typography>of</Typography>
            <Typography>{table.getPageCount().toLocaleString()}</Typography>
          </Box>
        </TableCell>
      </TableRow>
    </Box>
  )
}

export default TablePagination
