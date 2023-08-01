/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';



const PlaceDetails = ({place}) => {
  return (
    <Card elevation={6} sx={{ bgcolor: "#fff" }}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTXjtB8A2AAK_KZ9glBUgivgRmEAPPnlDYecwO4grXjkIMERdqzO_E3O9NVDK0OCujm8&usqp=CAU"
        }
        title={place.name}
      />
      <CardContent sx={{ padding: "20px" }}>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" color="text.secondary">
            Price:
          </Typography>
          <Typography gutterBottom variant="subtitle1" color="text.secondary">
            {place.price_level}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          marginBottom={1}
        >
          <ArrowUpwardOutlinedIcon fontSize="large" />
          <Typography gutterBottom variant="body1" color="text.primary">
            Ranked {place.ranking}
          </Typography>
        </Box>
        {place?.address && (
          <Box
            display="flex"
            justifyContent="space-between"
            gap={2}
            marginBottom={1}
          >
            <LocationOnOutlinedIcon fontSize="large" />
            <Typography gutterBottom variant="body1" color="text.primary">
              {place.address}
            </Typography>
          </Box>
        )}
        {place?.address && (
          <Box
            display="flex"
            justifyContent="space-between"
            gap={2}
            marginBottom={1}
          >
            <PhoneOutlinedIcon fontSize="large" />
            <Typography gutterBottom variant="body1" color="text.primary">
              {place.phone}
            </Typography>
            <Box justifySelf="flex-end">
              <Chip
                label={place.distance_string}
                variant="default"
                color="primary"
                icon={<NearMeOutlinedIcon />}
              />
            </Box>
          </Box>
        )}
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-end"
          flexWrap="wrap"
          gap={1}
          marginBottom={1}
        >
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              label={name}
              variant="outlined"
              size="small"
              color="primary"
              sx={{ color: "black", border: "2px solid #fbeaab" }}
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" gutterBottom>
          <Typography variant="body1" color="text.primary">
            Rating: out of {place.num_reviews} reviews
          </Typography>
          <Rating value={Number(place.rating)} readOnly/>
        </Box>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            variant="contained"
            color="success"
            href={place.web_url}
            target="blank"
            //onClick={() => window.open(place.web_url, "_blank")}
            // sx={
            //   Button.color === "info"
            //     ? { border: "2px solid white" }
            //     : { border: "2px solid #29b6f6" }
            // }
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            variant="contained"
            color="info"
            href={place.website}
            target="blank"
            //onClick={() => window.open(place.website, "_blank")}
            // sx={
            //   Button.color === "success"
            //     ? { border: "2px solid white" }
            //     : { border: "2px solid #66bb6a" }
            // }
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails