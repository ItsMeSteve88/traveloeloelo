import React from 'react'
import { createTheme, ThemeProvider, Grid } from '@mui/material'
import Header from './components/Header/Header'
import { CssBaseline } from '@mui/material'
import List from './components/List/List'
import Map from './components/Map/Map'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#454545",
    },
    secondary: {
      main: "#454545",
    },
    background: {
      default: "#fbeaab",
    },
  },
  typography: {
    fontFamily: "Mallanna",
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
});

const App = () =>
{
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map />
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default App