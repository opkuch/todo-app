import { flexRender, HeaderGroup } from '@tanstack/react-table'
import Filter from './Filter'
import { Box, TableHead, TableRow, TableCell} from '@mui/material'

const TableHeader = <T,>({
  headerGroups,
}: {
  headerGroups: HeaderGroup<T>[]
}) => {
  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableCell key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <>
                    <Box
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>
                    {header.column.getCanFilter() ? (
                      <Filter column={header.column} />
                    ) : null}
                  </>
                )}
              </TableCell>
            )
          })}
        </TableRow>
      ))}
    </TableHead>
  )
}

export default TableHeader
