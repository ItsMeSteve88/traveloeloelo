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
   const [childClicked, setChildClicked] = useState(null)

   const [coords, setCoords] = useState({})
   const [bounds, setBounds] = useState({})

   const [filteredPlaces, setFilteredPlaces] = useState([]);

   const [type, setType] = useState('restaurants')
   const [rating, setRating] = useState('')

   const [isLoading, setIsLoading] = useState(false)

   useEffect(() =>
   {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
      {
         setCoords({ lat: latitude, lng: longitude });
      })
   }, []);

   useEffect(() =>
   {
      const filteredPlaces = places.filter(place => place.rating > rating)
      setFilteredPlaces(filteredPlaces)
   },[rating])

   useEffect(() =>
   {
      if(bounds.sw && bounds.ne)
      setIsLoading(true)
      getPlacesData(type, bounds.sw, bounds.ne)
         .then((data) =>
         {
            setPlaces(data?.filter(place => place.name && place.num_reviews > 0))
            setFilteredPlaces([]) 
            setIsLoading(false)
      })
   }, [type, bounds])
   
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header setCoords={setCoords} />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
                 isLoading={isLoading}
                 type={type}
                 setType={setType}
                 rating={rating}
                 setRating={setRating}
          />
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
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App