import { MenuItem, Select } from '@mui/material'
import { Priority, Todo, TodoField } from '../../../types/Todo'

interface SelectPriorityProps {
  priority?: Priority
  handleChange: (field: keyof Todo, value: string) => void
}

export const SelectPriority = ({
  priority,
  handleChange,
}: SelectPriorityProps) => {

  const PriorityOptions: Record<Priority, string> = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
  }

  return (
    <Select
      id="priority-select"
      value={priority}
      defaultValue={PriorityOptions.Medium}
      onChange={(e) => handleChange(TodoField.Priority, e.target.value)}
    >
      {Object.keys(PriorityOptions).map((option) => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
      ))}
    </Select>
  )
}
