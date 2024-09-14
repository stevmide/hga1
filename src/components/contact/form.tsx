import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import { MenuItem, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material'

export default function BasicTextFields() {
  const categoryDB = [
    { label: 'Aurora', value: 1 },
    { label: 'Oakbrook Terrace', value: 2 },
  ]

  const LocationDropdown = () => {
    const [location, setLocation] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
      setLocation(event.target.value)
    }

    return (
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Telephone" variant="outlined" />
        <TextField id="outlined-basic" label="Select HGA location of Interest?" variant="outlined" />
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
      </Box>
    )
  }
}
