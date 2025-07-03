import { memo } from 'react'
import Box from '@mui/material/Box'
import { ToggleMode } from '@/components/module'

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        paddingX: 2
      }}
    >
      <ToggleMode />
    </Box>
  )
}

export default memo(AppBar)
