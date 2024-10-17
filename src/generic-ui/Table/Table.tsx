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

export interface TableProps<T> {
  data: T[]
  columns: ColumnDef<T, unknown>[],
  handleEditClick: (rowData: T) => void,
}

const Table = <T,>({ data, columns, handleEditClick }: TableProps<T>) => {
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
    <MUITable>
      <TableHeader headerGroups={table.getHeaderGroups()} />
      <TableBody getRowModel={table.getRowModel} handleEditClick={handleEditClick}/>
    </MUITable>
  )
}

export default Table
