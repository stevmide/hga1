import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 7 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '70%', m: 10 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Aurora Academy " {...a11yProps(0)} />
          <Tab label="Oakbrook Terrace Academy" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        His Grace Academy, Aurora, IL His Grace Christian Academy, Aurora facility is designed like home to feel like
        home. Helping children develop and learn through fun and creativity.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        His Grace Christian Academy, Oakbrook Terrace, IL HGA Oakbrook Terrace facility Provides an all-inclusive, safe,
        and caring environment for children. We provide reliable care for your precious little ones!
      </CustomTabPanel>
    </Box>
  )
}
