import { CircularProgress, SxProps } from '@mui/material'
import Box from '@mui/material/Box'

export function Loader({ sx }: {sx?: SxProps}) {
  return (
    <Box sx={{ ...sx, width: '100%' }}>
      <CircularProgress size={20}/>
    </Box>
  )
}
