import { Box, Typography } from '@mui/material'

const TodoHeader = () => {
  return (
    <Box component="header" sx={headerStyles.header}>
      <Typography component="h1" sx={{...headerStyles.h1, ...headerStyles.coloredSpan}}>
        <span>Task</span>
        <span>Todo</span>
      </Typography>
    </Box>
  )
}

const headerStyles = {
    header: {
        paddingBlock: '1rem',
        borderBottom: '1px solid lightgray',
    },
    h1: {
        display: 'flex',
        gap: '.5rem',
        fontFamily: 'Arvo',
        fontSize: '1.5rem',
    },
    coloredSpan: {
        '& span:first-of-type': {
            color: 'lightgray'
        }
    }
}
export default TodoHeader
