import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Testimonial } from '@/interfaces/testimonial'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.content}</Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 1,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
        <Box></Box>
      </Box>
    </Box>
  )
}
export default TestimonialItem
