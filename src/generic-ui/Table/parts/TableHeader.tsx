import { flexRender, HeaderGroup } from '@tanstack/react-table'
import Filter from './Filter'

const TableHeader = <T,>({
  getHeaderGroups,
}: {
  getHeaderGroups: () => HeaderGroup<T>[]
}) => {
  return (
    <thead>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <>
                    <div
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
                    </div>
                    {header.column.getCanFilter() ? (
                      <Filter column={header.column} />
                    ) : null}
                  </>
                )}
              </th>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

export default TableHeader
