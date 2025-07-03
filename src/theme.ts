import { deepOrange, teal, cyan, orange } from '@mui/material/colors'
import { createTheme, type Theme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: string
      boardBarHeight: string
    }
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    trello?: {
      appBarHeight: string
      boardBarHeight: string
    }
  }
}

// Create a theme instance.
const theme: Theme = createTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  components: {
    mergeClassNameAndStyle: true
  }
})

export default theme
