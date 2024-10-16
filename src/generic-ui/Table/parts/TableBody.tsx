import { flexRender, RowModel } from '@tanstack/react-table'

const TableBody = <T,>({ getRowModel }: { getRowModel: () => RowModel<T> }) => {
  return (
    <tbody>
      {getRowModel().rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
