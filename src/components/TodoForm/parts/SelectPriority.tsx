import { MenuItem, Select } from '@mui/material'
import { Todo, TodoField } from '../../../types/Todo'
import { PRIORITY_OPTIONS } from '../../../constants/priority'

interface SelectPriorityProps {
  handleChange: (field: keyof Todo, value: string) => void
}

export const SelectPriority = ({
  handleChange,
}: SelectPriorityProps) => { 

  return (
    <Select
      id="priority-select"
      defaultValue={PRIORITY_OPTIONS.Medium}
      onChange={(e) => handleChange(TodoField.Priority, e.target.value)}
    >
      {Object.keys(PRIORITY_OPTIONS).map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}
