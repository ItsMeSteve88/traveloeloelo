import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from '@mui/material'
import PlaceDetails from './../PlaceDetails/PlaceDetails';

const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) =>
{
   
   const [elRefs, setElRefs] = useState([])
   
   useEffect(() =>
   {
      const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())
      setElRefs(refs)
   }, [places])

   const loading = {
     height: "600px",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
   };
   
  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <Box sx={loading}>
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <FormControl sx={{ m: 1, minWidth: 120, marginBottom: "30px" }}>
          <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120, marginBottom: "30px" }}>
            <InputLabel id='rating'>Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} sx={{ height: "75vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default List