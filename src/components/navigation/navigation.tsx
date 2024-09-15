import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => {
        const isActive = router.pathname === destination // Check if the path is the current page

        return (
          <Box
            component="div"
            key={destination}
            sx={{
              position: 'relative',
              color: isActive ? 'primary.main' : 'text.disabled', // Change color if active
              cursor: 'pointer',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: '1.2rem', md: 'inherit' },

              // Hover effect for the curve and color change
              '&:hover': {
                color: 'primary.main', // Change text color on hover
              },

              '&:hover .curve': {
                display: 'block', // Show curve on hover
              },
            }}
          >
            <Link href={destination} passHref>
              <Box component="a" sx={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}>
                <Box
                  className="curve"
                  sx={{
                    display: isActive ? 'block' : 'none', // Show curve if active, otherwise hidden
                    position: 'absolute',
                    top: 12,
                    transform: 'rotate(3deg)',
                    '& img': { width: 44, height: 'auto' },
                  }}
                >
                  <Image src="/images/headline-curve.svg" alt="Headline curve" width={40} height={30} />
                </Box>
                {label}
              </Box>
            </Link>
          </Box>
        )
      })}
    </Box>
  )
}

export default Navigation

// import React, { FC } from 'react'
// import Box from '@mui/material/Box'
// import { Link as ScrollLink } from 'react-scroll'
// import { navigations } from './navigation.data'

// const Navigation: FC = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
//       {navigations.map(({ path: destination, label }) => (
//         <Box
//           component={ScrollLink}
//           key={destination}
//           activeClass="current"
//           to={destination}
//           spy={true}
//           smooth={true}
//           duration={350}
//           sx={{
//             position: 'relative',
//             color: 'text.disabled',
//             cursor: 'pointer',
//             fontWeight: 600,
//             display: 'inline-flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             px: { xs: 0, md: 3 },
//             mb: { xs: 3, md: 0 },
//             fontSize: { xs: '1.2rem', md: 'inherit' },
//             ...(destination === '/' && {
//               color: 'primary.main',
//             }),

//             '& > div': { display: 'none' },

//             '&.current>div': { display: 'block' },

//             '&:hover': {
//               color: 'primary.main',
//               '&>div': {
//                 display: 'block',
//               },
//             },
//           }}
//         >
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 12,
//               transform: 'rotate(3deg)',
//               '& img': { width: 44, height: 'auto' },
//             }}
//           >
//             {/* eslint-disable-next-line */}
//             <img src="/images/headline-curve.svg" alt="Headline curve" />
//           </Box>
//           {label}
//         </Box>
//       ))}
//     </Box>
//   )
// }

// export default Navigation
