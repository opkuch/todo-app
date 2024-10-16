import { MenuItem, Select } from '@mui/material'
import { Column } from '@tanstack/react-table'
import { makeId } from '../../../services/utilsService'

const Filter = <T,>({ column }: { column: Column<T, unknown> }) => {
  const { selectOptions } = column?.columnDef?.meta ?? {}
  return (
    <Select
      onChange={(e) => column.setFilterValue(e.target.value)}
      sx={{
        minWidth: 100,
        maxHeight: '1.5rem',
        padding: 'unset',
        '& .MuiSelect-select': {
          padding: '0 14px'
        }
      }}
    >
      {selectOptions?.map((option) => (
        <MenuItem key={option || makeId()} value={option} sx={{
          minWidth: 100,
          height: '1.5rem'
        }}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}

export default Filter
