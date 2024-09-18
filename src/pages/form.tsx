import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, ChangeEvent } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { MenuItem, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material'

const Form: React.FC = () => {
  const [location, setLocation] = useState('') // Move useState inside the component
  const [program, setProgram] = useState('') // Add state for the program select

  interface FormData {
    fullname: string
    email: string
    telephone: string
    childsname: string
    noofkids: string
    dob: string
    date: string
    time: string
    message: string
    [key: string]: string // This allows for additional string-based keys
  }

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

  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    telephone: '',
    childsname: '',
    noofkids: '',
    dob: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value)
  }

  const handleProgramChange = (event: SelectChangeEvent) => {
    setProgram(event.target.value)
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
          onChange={handleLocationChange} // Use a dedicated handler for location
          label="Select HGA location of Interest"
        >
          {categoryDB.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="outlined-basic"
        value={formData.fullname}
        onChange={handleChange}
        label="Full Name"
        variant="outlined"
        fullWidth
        name="fullname"
      />
      <TextField
        id="outlined-basic"
        value={formData.email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
        fullWidth
        name="email"
      />
      <TextField
        id="outlined-basic"
        value={formData.telephone}
        onChange={handleChange}
        label="Telephone"
        variant="outlined"
        fullWidth
        name="telephone"
      />
      <TextField
        id="outlined-basic"
        value={formData.childsname}
        onChange={handleChange}
        label="Child's Name"
        variant="outlined"
        fullWidth
        name="childsname"
      />
      <TextField
        id="outlined-basic"
        value={formData.noofkids}
        onChange={handleChange}
        label="No. of Kids"
        variant="outlined"
        fullWidth
        name="noofkids"
      />

      <TextField
        id="date"
        value={formData.dob}
        onChange={handleChange}
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
        name="dob"
      />

      <FormControl fullWidth variant="outlined">
        <InputLabel id="program-label">Select Program of Interest</InputLabel>
        <Select
          labelId="program-label"
          id="program-select"
          value={program} // Use separate state for program
          onChange={handleProgramChange} // Use a dedicated handler for program
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
        value={formData.date}
        onChange={handleChange}
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
        name="date"
      />

      <TextField
        id="time"
        value={formData.time}
        onChange={handleChange}
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
        name="time"
      />

      <TextField
        id="outlined-multiline-flexible"
        value={formData.message}
        onChange={handleChange}
        label="Interest"
        multiline
        maxRows={4}
        fullWidth
        name="message"
      />

      <Link href="/thank" passHref>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Link>
    </Box>
  )
}

export default Form
