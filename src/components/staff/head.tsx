import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './head.data'
import { StyledButton } from '../styled-button'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const StaffHead: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/home-feature.png" width={650} height={678} quality={97} alt="Feature img" />
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
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Child Care
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Gift teaching staff
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={85} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Small classes
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={40} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Verified Instructors
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={50} order={3} />
                </Box>
              </Box>

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
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Our Staff</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Certified Instructors
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      100%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={2}
                      variant="determinate"
                      value={75}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                    />
                  </Box>
                </Box>
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
              Our{' '}
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
                Staff <br />
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
              We take hiring seriously and employ only high quality employees for our staff.(407.100) Our staff undergo
              professional development training that exceeds the State of Illinois requirements. Most teachers gain ECE
              credentials within the first year of employment.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Our Montessori teachers are known as directors and directress. They are trained and certified in an
              American Montessori Society program. They continue their training all year round to improve their
              knowledge to better impact the children in a positive way.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              All are staff are CPR and First Aid trained.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              We check professional references. Based on state and/or local licensing requirements background checks are
              extensive which includes fingerprinting and appropriate criminal background checks, as well as,
              verification of educational credentials. Candidates who will transport children undergo a thorough driving
              history check and annual checks thereafter.
            </Typography>

            {/* <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid> */}
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
                Role of a teacher
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                The Montessori teacher serves as a link between the child and the environment. They better serve the
                children through observation and recording keeping of their growth and development. The child is allowed
                to work and develop at his / her own pace. The teacher realizes the uniqueness of each child as an
                individual and the importance of respect.
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                The Montessori materials are self-correcting, therefore; the teacher refrains from intervening in the
                child’s learning process and allows the child to discover and correct his or her own errors. The
                children’s growth comes from activities not from intellectual understanding. The Montessori teacher
                allows the child to develop physically, socially, emotionally, intellectually, and spiritually. The
                child’s work is measured against his/her own progress rather than compared to the achievement/ progress
                of others.
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                The teacher is trained to pay close attention and to recognize periods of readiness. The teacher gives
                presentation using the three period lesson works to help the child along the path to understanding and
                mastery. The teacher checks to makes sure that the classroom material are safe and ready for use each
                day.
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

export default StaffHead
