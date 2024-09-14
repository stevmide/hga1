import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import Typography from '@mui/material/Typography'
import { MainLayout } from '@/components/layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import { MenuItem, FormControl, InputLabel, Grid, Select, SelectChangeEvent } from '@mui/material'

const DynamicHead = dynamic(() => import('../components/contact/head'))

// const DynamicTabs = dynamic(() => import('../components/academy/tabs'))

const categoryDB = [
  { label: 'Aurora', value: 1 },
  { label: 'Oakbrook Terrace', value: 2 },
]

const Contact: NextPageWithLayout = () => {
  const [location, setLocation] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value)
  }

  return (
    <>
      <DynamicHead />

      <Grid
        container
        spacing={2}
        sx={{
          p: 3, // Adds padding around the entire container
          mx: 'auto', // Centers the grid horizontally
          maxWidth: 1200, // Max width for the container to prevent stretching too far on large screens
        }}
      >
        {/* Left Side - Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 2, // Padding around the text section
            m: 2, // Margin around the text section
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 28, md: 36 } }}>
            Inquiry Form
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 16 }}>
            Please fill out the inquiry form on the right-hand side, and we will get back to you shortly. We are here to
            answer any questions you may have about our services and offerings.
          </Typography>
        </Grid>

        {/* Right Side - Form Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 2, // Padding around the form section
            m: 2, // Margin around the form section
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& > :not(style)': { m: 1, width: '100%' }, // Adjust width to fill container
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Telephone" variant="outlined" />

            <FormControl fullWidth variant="outlined">
              <InputLabel id="location-label">Select HGA location of Interest</InputLabel>
              <Select
                labelId="location-label"
                id="location-select"
                value={location}
                onChange={handleChange}
                label="Select HGA location of Interest"
              >
                {categoryDB.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField id="outlined-textarea" label="Message" placeholder="How can we help?" multiline />
          </Box>
          <Link href="/thank" passHref>
            <Button variant="contained">Submit Form</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

Contact.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Contact
