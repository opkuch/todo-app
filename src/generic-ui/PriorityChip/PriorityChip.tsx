import { Chip } from '@mui/material'
import { PRIORITY_OPTIONS } from '../../constants/priority'

const PriorityChip = ({
  label,
  variant,
}: {
  label: string
  variant: 'filled' | 'outlined'
}) => {
  const getColorByPriority = () => {
    switch (label) {
      case PRIORITY_OPTIONS.Low:
        return 'primary'
      case PRIORITY_OPTIONS.Medium:
        return 'warning'
      case PRIORITY_OPTIONS.High:
        return 'error'
      default:
        return 'primary'
    }
  }
  return (
    <Chip
      component="div"
      label={label}
      variant={variant}
      sx={{
        height: 'auto',
        minHeight: 15
      }}
      color={getColorByPriority()}
    />
  )
}

export default PriorityChip
