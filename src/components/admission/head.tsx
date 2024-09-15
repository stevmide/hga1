import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Head: FC = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: '200px',
          width: '100%',
          marginTop: { xs: '64px', sm: '88px' }, // Adjust based on your menu height
        }}
      >
        {/* Background Image */}
        <Image
          src="/images/adm.jpg"
          alt="Resources background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* Overlay for better text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          }}
        />

        {/* Content */}
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              mt: { xs: -9 },
              textAlign: 'center',
              color: 'white', // Ensure text is visible on the background
              py: 8, // Add some vertical padding
            }}
          >
            <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
              Admission
            </Typography>
            <Typography sx={{ mb: 6, fontSize: { xs: 28, md: 38 } }}>
              {/* Add your subtitle here if needed */}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                width: { xs: '100%', md: 560 },
                mx: 'auto',
              }}
            >
              {/* Add your content here */}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Head
