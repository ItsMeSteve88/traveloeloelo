import React from 'react'
import { createTheme, ThemeProvider, Box } from '@mui/material'
import Header from './components/Header/Header'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
        main: '#454545',
      },
      secondary: {
        main: '#454545',
      },
      background: {
        default: '#fbeaab',
      },
    },
    typography: {
      fontFamily: 'Mallanna',
   },
   shape: {
       borderRadius: 10,
   },
   breakpoints: {
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
   },
})

const App = () =>
{
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Box>
         <Header />
       </Box>
     </ThemeProvider>
   );
}

export default App