import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Head: FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            sx={{
              backgroundColor: 'white',
              mt: { xs: -9 },
              textAlign: 'center',
            }}
          >
            <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
              Our Program
            </Typography>
            <Typography sx={{ mb: 6, fontSize: { xs: 28, md: 38 } }}> </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              His Grace Christain Academy has an inclusive educational program. All children can learn and therefore
              should have the opportunity to benefit from a diverse educational experience. Individual difference makes
              each of us unique beings; through inclusion, all children in an accepting and developmentally appropriate
              environment can experience these differences. “Growth comes from activity, not from intellectual
              understanding.”, Maria Montessori.
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
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Head
