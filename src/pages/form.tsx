import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { MenuItem, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material'

function Form() {
  const categoryDB = [
    { label: 'Aurora', value: 1 },
    { label: 'Oakbrook Terrace', value: 2 },
  ]

  const categoryXY = [
    { label: 'Infant', value: 1 },
    { label: 'Young Toddler', value: 2 },
    { label: 'Older-Toddler (24–36 Month)', value: 3 },
    { label: 'Early-Childhood (2.5–6 Years)', value: 4 },
    { label: 'School Age', value: 5 },
  ]

  const [location, setLocation] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column', // Align fields vertically
        gap: 2, // Space between fields
        p: 3, // Padding around the form
        maxWidth: '400px', // Max width for the form
        margin: 'auto', // Center the form horizontally
        '& .MuiTextField-root': { m: 1 }, // Margin for each TextField
        '& .MuiFormControl-root': { m: 1 }, // Margin for each FormControl
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
        Schedule a tour
      </Typography>

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

      <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Telephone" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Child's Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="No. of Kids" variant="outlined" fullWidth />

      <TextField
        id="date"
        label="Child's Birthday"
        type="date"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: '2000-01-01',
          max: '2025-12-31',
        }}
      />

      <FormControl fullWidth variant="outlined">
        <InputLabel id="program-label">Select Program of Interest</InputLabel>
        <Select
          labelId="program-label"
          id="program-select"
          value={location}
          onChange={handleChange}
          label="Select Program of Interest"
        >
          {categoryXY.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="date-of-visit"
        label="Date of Visit"
        type="date"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: '2000-01-01',
          max: '2025-12-31',
        }}
      />

      <TextField
        id="time"
        label="Time (opening hours 06:30 to 17:30)"
        type="time"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 minutes interval (optional)
        }}
      />

      <TextField id="outlined-multiline-flexible" label="Interest" multiline maxRows={4} fullWidth />

      <Link href="/thank" passHref>
        <Button variant="contained">Submit</Button>
      </Link>
    </Box>
  )
}

export default Form
