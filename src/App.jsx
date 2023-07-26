import React, { useState, useEffect } from 'react'
import { createTheme, ThemeProvider, Grid } from '@mui/material'
import Header from './components/Header/Header'
import { CssBaseline } from '@mui/material'
import List from './components/List/List'
import Map from './components/Map/Map'
import { getPlacesData } from './api'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
       main: "#fbeaab",
       light: "#f1ba00",
       dark: "#f48800"
    },
    secondary: {
       main: "#abbcfb",
       light: "#5372ea",
       dark: "#3b53c4"
    },
    background: {
      default: "#",
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
   const [places, setPlaces] = useState([])
   const [coords, setCoords] = useState({})
   const [bounds, setBounds] = useState({})

   useEffect(() =>
   {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
      {
         setCoords({ lat: latitude, lng: longitude });
      })
   }, []);

   useEffect(() => {
      getPlacesData(bounds.sw, bounds.ne)
         .then((data) =>
         {
            console.log(data)
         setPlaces(data)
      })
   }, [bounds, coords])
   
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
              <List places={places} />
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
              <Map setCoords={setCoords} setBounds={setBounds} coords={coords} places={places} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App