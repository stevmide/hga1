import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
      <Typography variant="h1" component="h2" sx={{ color: 'black', mb: 1, fontSize: { xs: 32, md: 42 } }}>
        FAQ
      </Typography>
      <Typography sx={{ color: 'black', mb: 6, fontSize: { xs: 24, md: 38 } }}>
        For quick answers to common questions!
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="How can children learn if they’re free to do whatever they want? " {...a11yProps(0)} />
          <Tab label="If children work at their own pace, don’t they fall behind?" {...a11yProps(1)} />
          <Tab
            label="How well do Montessori students do compared to students in non-Montessori schools? "
            {...a11yProps(2)}
          />
          <Tab label="Do Montessori teachers follow a curriculum?" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <strong>How can children learn if they’re free to do whatever they want?</strong> <br /> <br />
        Dr. Montessori observed that children are more motivated to learn when working on something of their own
        choosing. A Montessori student may choose his focus of learning on any given day, but his decision is limited by
        the materials and activities in each area of the curriculum that his teacher has prepared and presented to him.
        Students typically set learning goals and create personal work plans under their teacher’s guidance.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <strong>If children work at their own pace, don’t they fall behind?</strong> <br /> <br />
        Although students are free to work at their own pace, they are not going to do it alone. The Montessori teacher
        closely observes each child and provides materials and activities that advance his learning by building on
        skills and knowledge already gained. This gentle guidance helps him master the challenge at hand and protects
        him from moving on before he’s ready, which is what actually causes children to “fall behind.” Students
        typically set learning goals and create personal work plans under their teacher’s guidance.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <strong>How well do Montessori students do compared to students in non-Montessori schools?</strong> <br />{' '}
        <br />
        How well do Montessori students do compared to students in non-Montessori schools? There is a small but growing
        body of well-designed research comparing Montessori students to those in traditional schools. These suggest that
        in academic subjects, Montessori students perform as well as or better than their non-Montessori peers. In one
        study, for example, children who had attended Montessori schools at the preschool and elementary levels earned
        higher scores in high school on standardized math and science tests. Another study found that the essays of
        12-year-old Montessori students were more creative and used more complex sentence structures than those produced
        by the non-Montessori group. The research also shows Montessori students to have greater social and behavioral
        skills. They demonstrate a greater sense of fairness and justice, for example, and are more likely to choose
        positive responses for dealing with social dilemmas.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <strong>Do Montessori teachers follow a curriculum?</strong> <br /> <br />
        Montessori schools teach the same basic skills as traditional schools and offer a rigorous academic program.
        Most of the subject areas are similar such as math, science, history, geography, and language but they are
        presented through an integrated approach that brings separate strands of the curriculum together. While studying
        a map of Africa, for example, students may explore the art, history, and inventions of several African nations.
        This may lead them to examine ancient Egypt, including hieroglyphs and their place in the history of writing.
        The study of the pyramids, of course, is a natural bridge to geometry. This approach to curriculum shows the
        interrelatedness of all things. It also allows students to become thoroughly immersed in a topic and to give
        their curiosity full rein.
      </CustomTabPanel>
    </Box>
  )
}
