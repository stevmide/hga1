import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './admission.data'
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

const Admission: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/adm01.jpg" width={650} height={400} quality={97} alt="Feature img" />
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
                Begin a Tour <br />
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
              Welcoming a new family and child into the HGCA community provides us an opportunity to grow! Our process
              of admission starts by where the family is invited to get to know the facility by an initial tour. By
              scheduling a tour with our Admissions Director, parents are invited to walk the facility and observe
              children working in their classrooms. This initial visit is generally conducted with only the parents and
              allows them to better focus on the daily practices and rhythms of the classroom where they can decide if
              this is the right place for their child.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Interested parents may schedule tour by calling the office at (630) 613-8431, emailing HGCA Management at
              wegrow.montessorihouseobt@gmail.com, or use form on website. Tours scheduled will be sent an confirmation
              email from Google Calendar. If you must re-schedule just contact the school.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Please be detailed in your email and leave your phone number.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              <strong>Parent Visit</strong>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              During the visit, each family will receive an informational handout and a tour of the classrooms.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              <strong>Child Visit</strong>
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              A visit with your child is generally scheduled after your initial tour. For parents of an infant/toddler,
              both parents and child are scheduled to meet and get to know the teacher and the program. For Primary
              level, your child will meet one or more teachers, and is given the opportunity to work one-on-one with
              them doing Montessori lessons and work with other children in the classroom. Your child’s visit could last
              from 15 minutes up to 30 minutes based on his or her comfort and readiness to interact in a Montessori
              classroom.
            </Typography>
          </Grid>
        </Grid>

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
                Schedule a Visit
              </Typography>
              <Typography sx={{ color: 'white', mb: 6 }}>
                <strong>
                  If you’re interested in learning more about His Grace Academy, we welcome you visit one of our centers
                  for a tour. Availability is based on appointment. Please use the form below to request a tour.
                </strong>
              </Typography>

              <Typography sx={{ color: 'white', mb: 6 }}>
                Fill out this form to schedule a tour of our centers, all (*) fields are required.
              </Typography>

              <Link href="/form" passHref>
                <StyledButton
                  disableHoverEffect={false}
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Schedule a tour
                </StyledButton>
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
      </Container>
      <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: 2,
              py: { xs: 4, md: 10 },
              px: { xs: 4, md: 8 },
              mt: { xs: -9 },
              textAlign: 'center',
            }}
          >
            <Typography variant="h1" component="h2" sx={{ color: 'black', mb: 1, fontSize: { xs: 32, md: 42 } }}>
              Requirement
            </Typography>
            <Typography sx={{ color: 'black', mb: 6, fontSize: { xs: 20, md: 20 } }}>
              Application Requirement
            </Typography>

            <Typography sx={{ color: 'black', mb: 6, textAlign: 'left' }}>
              We recommend a tour and meeting with the Director. The director will establish the paperwork and needs to
              start care. <br />
              This primarily will include: <br />
              <ul>
                <li>
                  An up-to-date physical with immunization with lead and TB on the State of Illinois physical form
                  signed by a nurse practitioner or doctor
                </li>
                <li>Original birth certificate</li>
                <li>Three emergency contacts with their phone number and addresses</li>
                <li>Signed Summary of Licensing Standards for Day Care Centers</li>
                <li>Late Pick Up Policy</li>
                <li>Consents</li>
                <li>Guidance and discipline</li>
                <li>Enrollment package</li>
              </ul>
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: '#5EB9F5',
              borderRadius: 2,
              py: { xs: 4, md: 10 },
              px: { xs: 4, md: 8 },
              mt: { xs: -9 },
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: 'black', mb: 6, fontSize: { xs: 28, md: 42 } }}>Requirement Form</Typography>
            <Typography sx={{ color: 'black', mb: 6, textAlign: 'left' }}>
              <ul>
                <li>
                  Child Medical: Use this form for each individual child to prove current immunizations and health
                  history.{' '}
                </li>
              </ul>
              <br />
              <Link
                href="https://dph.illinois.gov/content/dam/soi/en/web/idph/files/forms/certificate-ofchild-health-examination-03032017.pdf"
                passHref
              >
                <Typography sx={{ color: 'black', mb: 6, cursor: 'pointer' }}>
                  <strong>Certificate of child health care form</strong>
                </Typography>
              </Link>
              <ul>
                <li>
                  Summary of Licensing for Day Care Centers: Please read and fill out the back page for each individual
                  child in your home in care.
                </li>
              </ul>
              <Link href="https://dcfs.illinois.gov/" passHref>
                <Typography sx={{ color: 'black', mb: 6, cursor: 'pointer' }}>
                  <strong>Licensing Standard for Day Care Centers</strong>
                </Typography>
              </Link>
              <ul>
                <li>Consents for Care</li>
                <li>Emergency/Contingency List</li>
                <li>Late Pick Up Policy</li>
              </ul>
            </Typography>
            <Typography sx={{ color: 'black', mb: 6, textAlign: 'left', fontSize: { xs: 20, md: 20 } }}>
              Documents Submission
            </Typography>
            <Typography sx={{ color: 'black', mb: 1, textAlign: 'left' }}>
              <strong>Do not email your documents but you can fax them to the below numbers</strong>
              <br />
              Fax: (630) 319-5991 Oakbrook Terrace OR (630) 340-4313 Aurora Location <br />
              ATTN: HGA of Oakbrook Terrace OR ATTN: HGA of Aurora
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          ></Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Admission
