import { useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table as MUITable } from '@mui/material'
import TableHeader from './parts/TableHeader'
import TableBody from './parts/TableBody'
import './table.css'
import TablePagination from './parts/TablePagination'

export interface TableProps<T> {
  data: T[]
  columns: ColumnDef<T, unknown>[]
  handleEditClick: (rowData: T) => void
  handleDeleteClick: (rowData: T) => void
  size?: 'small' | 'medium'
}

const Table = <T,>({
  data,
  columns,
  size = 'medium',
  handleEditClick,
  handleDeleteClick,
}: TableProps<T>) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <MUITable
      size={size}
      sx={{
        border: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: '6px',
      }}
    >
      <TableHeader headerGroups={table.getHeaderGroups()} />
      <TableBody
        getRowModel={table.getRowModel}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <TablePagination table={table} />
    </MUITable>
  )
}

export default Table
