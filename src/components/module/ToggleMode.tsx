import { memo } from 'react'

// Hooks
import { useColorScheme } from '@mui/material/styles'

// Components
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import WbSunny from '@mui/icons-material/WbSunny'
import NightlightIcon from '@mui/icons-material/Nightlight'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

type Mode = 'light' | 'dark' | 'system'

function ToggleMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode)
  }

  if (!mode) {
    return null
  }

  return (
    <FormControl sx={{ width: '140px' }}>
      <InputLabel id="demo-simple-select-label">Theme</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        label="Theme"
        onChange={handleChange}
        sx={{ height: '44px' }}
      >
        <MenuItem value={'light'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WbSunny /> Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <NightlightIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SettingsBrightnessIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default memo(ToggleMode)
