import { useState } from 'react'
import { LinearLoader } from '../LinearLoader/LinearLoader'
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import TableHeader from './parts/TableHeader'
import TableBody from './parts/TableBody'
import './table.css'

export interface TableProps<T> {
  data: T[]
  columns: ColumnDef<T, unknown>[]
  loading: boolean
}

const Table = <T,>({ data, columns, loading }: TableProps<T>) => {
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
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })
  if (loading) {
    return <LinearLoader />
  }
  if (data.length === 0) {
    return <div>No todos available</div>
  }
  return (
    <table>
      <TableHeader getHeaderGroups={table.getHeaderGroups} />
      <TableBody getRowModel={table.getRowModel}/>
    </table>
  )
}

export default Table
