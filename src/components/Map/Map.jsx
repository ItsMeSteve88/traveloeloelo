import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, Rating, useMediaQuery, Box } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'


const Map = ({setCoords, setBounds, coords, places}) =>
{
   const isDesktop = useMediaQuery('(min-width: 600px)')

   const markerContainer = {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      zIndex: '1',
      '&:hover': {
         zIndex: '2'
      }
   }

   const paper = {
     padding: "10px",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     width: "110px",
     cursor: "pointer",
     color: "black",
   };
   
  return (
    <Box
      sx={{
        height: "85vh",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAX1LN2B6KphTxSg4Kf4jVKlhe2bLFNNUI" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <Box
            key={i}
            sx={markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnOutlined fontSize="large" />
            ) : (
              <Paper elevation={3} sx={paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTXjtB8A2AAK_KZ9glBUgivgRmEAPPnlDYecwO4grXjkIMERdqzO_E3O9NVDK0OCujm8&usqp=CAU"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} precision={0.5} readOnly />
              </Paper>
            )}
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default Map