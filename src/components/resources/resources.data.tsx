import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'A gifted teaching staff',
    description: 'All our teachers are certified instructors',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Small classes',
    description: 'Conducive learning environment',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Varied instruction',
    description: 'We teach differently to different children, rather than maintain a one-size-fits-all approach',
    icon: <LocalLibraryIcon />,
  },
]
