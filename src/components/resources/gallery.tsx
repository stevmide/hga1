import React from 'react'
import Image from 'next/image'
import { Box, Grid } from '@mui/material'

interface PictureGalleryProps {
  images: { src: string; alt: string }[]
}

const PictureGallery: React.FC<PictureGalleryProps> = ({ images }) => {
  return (
    <Box
      sx={{
        padding: '20px', // Add padding around the gallery
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '75%', // Maintain a 4:3 aspect ratio
                overflow: 'hidden',
                borderRadius: '8px', // Rounded corners for the images
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add a shadow to the images
              }}
            >
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PictureGallery
