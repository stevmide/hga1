import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function resources() {
  return (
    <>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box sx={{ width: { xs: '100%', md: '90%' } }}>
          <Image src="/images/feat2.jpg" width={520} height={400} quality={97} alt="Testimonial img" />
        </Box>
      </Grid>
    </>
  )
}

export default resources
