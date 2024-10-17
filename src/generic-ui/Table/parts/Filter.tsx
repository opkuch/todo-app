import { MenuItem, Select } from '@mui/material'
import { Column } from '@tanstack/react-table'
import { makeId } from '../../../services/utilsService'
import { TodoField } from '../../../types/Todo'
import PriorityChip from '../../PriorityChip/PriorityChip'

const Filter = <T,>({ column }: { column: Column<T> }) => {
  const { selectOptions } = column?.columnDef?.meta ?? {}
  return (
    <Select
      defaultValue=""
      onChange={(e) => column.setFilterValue(e.target.value)}
      inputProps={{
        sx: selectStyles.selectInput,
      }}
      sx={selectStyles.select}
    >
      {selectOptions?.map((option) => {
        return (
          <MenuItem
            key={option || makeId()}
            defaultValue=""
            value={option}
            sx={selectStyles.menuItem}
          >
            {column?.id === TodoField.Priority ? (
              option ? (
                <PriorityChip label={option} variant="outlined" />
              ) : (
                ''
              )
            ) : (
              option
            )}
          </MenuItem>
        )
      })}
    </Select>
  )
}

export default Filter

const selectStyles = {
  select: {
    minWidth: 100,
    minHeight: 35,
    maxHeight: '1.5rem',
    padding: 'unset',
  },
  selectInput: {
    paddingBlock: 0,
    minHeight: 100,
  },
  menuItem: {
    minWidth: 100,
    '&.MuiMenuItem-root': {
      minHeight: 25,
    },
  },
}

