import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

function thank() {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'grey',
            borderRadius: 2,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            mt: { xs: -9 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ color: 'white', mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Thank You
          </Typography>
          <Typography sx={{ color: 'white', mb: 6 }}>
            <strong>Your form has been submitted successfully.</strong>
          </Typography>
          <Link href="/" passHref>
            <Typography sx={{ color: 'white', mb: 6, cursor: 'pointer' }}>
              <strong>Back to homepage</strong>
            </Typography>
          </Link>

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
            {/* <InputBase
                sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: '100%',
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                }}
                placeholder="Enter your Email Address"
                /> */}
            <Box>
              {/* <StyledButton disableHoverEffect size="large">
                Read more
                </StyledButton> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default thank
