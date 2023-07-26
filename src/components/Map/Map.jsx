import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, Rating, useMediaQuery, Box } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'


const Map = ({setCoords, setBounds, coords}) =>
{
   const isMobile = useMediaQuery('(min-width: 600px)')
   
  return (
     <Box sx={{
        height: '85vh',
         width: '100%',
       }}>
        <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyAX1LN2B6KphTxSg4Kf4jVKlhe2bLFNNUI'}}
           defaultCenter={coords}
           center={coords}
           defaultZoom={14}
           margin={[50, 50, 50, 50]}
           options={''}
           onChange={(e) =>
           {
              setCoords({ lat: e.center.lat, lng: e.center.lng })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
           }}
           onChildClick={''}
        >
           
        </GoogleMapReact>
    </Box>
  )
}

export default Map