import { Box, FormHelperText, MenuItem, Select } from '@mui/material'
import { TodoField } from '../../../types/Todo'
import { PRIORITY_OPTIONS } from '../../../constants/priority'
import { FormPartProps } from '../TodoForm'
import PriorityChip from '../../../generic-ui/PriorityChip/PriorityChip'

export const SelectPriority = ({ todo, handleChangeTodo }: FormPartProps) => {
  return (
    <Box>
      <Select
        id="priority-select"
        inputProps={{
          sx: {
            paddingBlock: '11px',
            minWidth: '75px',
          }
        }}
        defaultValue={PRIORITY_OPTIONS.Medium}
        value={todo?.priority || PRIORITY_OPTIONS.Medium}
        onChange={(e) => handleChangeTodo(TodoField.Priority, e.target.value)}
      >
        {Object.keys(PRIORITY_OPTIONS).map((option) => (
          <MenuItem key={option} value={option}>
            <PriorityChip label={option} variant="outlined"/>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id="priority-select">Select task priority</FormHelperText>
    </Box>
  )
}
