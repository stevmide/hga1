import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Resources: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/resource.jpg" width={650} height={678} quality={97} alt="Feature img" />
              <Box
                sx={{
                  position: 'absolute',
                  top: -36,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: 190,
                }}
              ></Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              {' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Book and Research <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              The Absorbent Mind (Heny Holt & Co., 1995), by Dr. Maria Montessori
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Montessori Madness! A Parent to Parent Argument for Montessori Education (Sevenoff, 2009), by Trevor
              Eissler
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Discovery of The Child (Fides, 1967), by Dr. Maria Montessori
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              The Element: How Finding Your Passion Changes Everything (Penguin/Viking 2009), by Sir Ken Robinson
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Drive (Penguin, 2011), by Dan Pink
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              A Whole New Mind (Penguin, 2006), by Dan Pink
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              <a href="http://digital.library.upenn.edu/women/montessori/method/method.html"> The Montessori Method</a>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              <a href="https://www.cdc.gov/vaccines/parents/downloads/parent-ver-sch-0-6yrs.pdf">
                {' '}
                Additional Information
              </a>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              <a href="https://www.keepandshare.com/doc20/26353/january-newsletter-2023-pdf-692k?da=y"> Latest News</a>
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
          <Container>
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                borderRadius: 10,
                py: { xs: 4, md: 10 },
                px: { xs: 4, md: 8 },
                mt: { xs: -9 },
                textAlign: 'center',
              }}
            >
              <Typography variant="h1" component="h2" sx={{ color: 'white', mb: 1, fontSize: { xs: 32, md: 42 } }}>
                Job Opening
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                We offer a great opportunity for our teachers and staffs to grow their career. You may also fax your
                resume and transcripts to us. We are always interested in meeting qualified and experienced teachers.
              </Typography>

              <Typography sx={{ color: 'white', mb: 6 }}>
                Please fax or email your resume and transcripts to:
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                His Grace Academy Childcare <br /> Fax # 630.340.4313 <br /> E-mail: info@hisgracechildcare.com
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
                <Box>
                  {/* <StyledButton disableHoverEffect size="large">
                Read more
                </StyledButton> */}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default Resources
