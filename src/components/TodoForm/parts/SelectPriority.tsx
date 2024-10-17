import { Box, FormHelperText, MenuItem, Select } from '@mui/material'
import { TodoField } from '../../../types/Todo'
import { PRIORITY_OPTIONS } from '../../../constants/priority'

interface SelectPriorityProps {
  handleChange: (field: TodoField, value: string) => void
}

export const SelectPriority = ({ handleChange }: SelectPriorityProps) => {
  return (
    <Box>
      <Select
        id="priority-select"
        defaultValue={PRIORITY_OPTIONS.Medium}
        onChange={(e) => handleChange(TodoField.Priority, e.target.value)}
        sx={{}}
      >
        {Object.keys(PRIORITY_OPTIONS).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id="priority-select">
        Select task priority
      </FormHelperText>
    </Box>
  )
}
