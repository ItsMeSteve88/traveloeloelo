import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, Rating, useMediaQuery, Box } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'


const Map = () =>
{
   const isMobile = useMediaQuery('(min-width: 600px)')
   const coordinates = { lat: 0, lng: 0 }
  return (
     <Box sx={{
        height: '85vh',
         width: '100%',
       }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyAX1LN2B6KphTxSg4Kf4jVKlhe2bLFNNUI'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={14}
           margin={[50, 50, 50, 50]}
           options={''}
           onChange={''}
           onChildClick={''}
        >
           
        </GoogleMapReact>
    </Box>
  )
}

export default Map