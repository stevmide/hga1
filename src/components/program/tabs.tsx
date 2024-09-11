import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '70%', m: 10 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Infant" {...a11yProps(0)} />
          <Tab label="Young Toddler" {...a11yProps(1)} />
          <Tab label="Older Toddler (24 – 36 Month)" {...a11yProps(2)} />
          <Tab label="Preschool (2.5 – 6 Years)" {...a11yProps(3)} />
          <Tab label="School Age" {...a11yProps(4)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      Infants start learning right from birth. They start to learn about their environment, people, faces, sounds, feelings and smell. Our infant classroom is design in a home like way, moreover the color materials, the lighting, and the classroom set up as a whole, allows the child to explore, feel and develop his/her personality.  Our staff continuity helps to bring about a consistent relationship through communication, love, and security to the infants.
      <h2>Program Highlight</h2>
      <ul>
        <li>Nutritional meals prepared at the facility</li>
        <li>Online portfolio to follow classroom activities and pictures</li>
        <li>Infant CPR/First Aid trained staff</li>
        <li>Monthly curriculum</li>
        <li>Screening</li>
        <li>Accident report if it occurs</li>
        <li>Classroom ratio 1:10 teacher/student</li>
        <li>Music and story time</li>
        <li>Outdoor activities</li>
        <li>Parent/Teacher conferences twice a year</li>
        <li>Monthly newsletter</li>
    </ul>


      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      As children develop into toddlers, they begin to learn through imitation, observation, experimentation and exploration. Our toddler classroom is designed with Montessori materials that help the child learn, while practicing day to day activities mirrored at home.
      <h2>Program Highlight</h2>
      <ul>
        <li>Nutritional meals prepared at the facility</li>
        <li>Online portfolio to follow classroom activities and pictures</li>
        <li>Infant CPR/First Aid trained staff</li>
        <li>Monthly curriculum</li>
        <li>Screening</li>
        <li>Accident report if it occurs</li>
        <li>Classroom ratio 1:10 teacher/student</li>
        <li>Music and story time</li>
        <li>Outdoor activities</li>
        <li>Parent/Teacher conferences twice a year</li>
        <li>Monthly newsletter</li>
       </ul>

      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={2}>
      Our older toddler’s room is design with Montessori materials that encourages exploration. The toddlers are still in a large motor movement stage of development.
      They like to try new and challenging things as well as continue with the easy materials that they have mastered which helps in building confidence. Their growth and development continues as an independent learner who learns through experimentation. The toddler classroom stimulates the senses and provides activities in an orderly and safe environment.
       <h2>Program Highlight</h2>
       <ul>
        <li>Nutritional meals prepared at the facility</li>
        <li>Online portfolio to follow classroom activities and pictures</li>
        <li>Infant CPR/First Aid trained staff</li>
        <li>Monthly curriculum</li>
        <li>Screening</li>
        <li>Accident report if it occurs</li>
        <li>Classroom ratio 1:10 teacher/student</li>
        <li>Music and story time</li>
        <li>Outdoor activities</li>
        <li>Parent/Teacher conferences twice a year</li>
        <li>Monthly newsletter</li>
       </ul>

      </CustomTabPanel>
     
      <CustomTabPanel value={value} index={3}>
      Our Aurora location preschool  program includes mixed age groups from 3-6 year old and our Oakbrook Terrace location 2.5 to 6 years of age.  The classrooms are set up with Montessori materials that cater to both the preschoolers and the kindergartners.
      The classroom provides the children with materials that are appropriate for varying ages, interests, and levels of development. The classroom stimulates the senses and provides activities in an orderly and safe environment. The daily classroom activity helps the children to recognize their need as individuals and also assists them in developing their potential to the fullest.
      <h2>Program Highlight</h2>
      <ul>
        <li>Nutritional meals prepared at the facility</li>
        <li>Online portfolio to follow classroom activities and pictures</li>
        <li>Infant CPR/First Aid trained staff</li>
        <li>Monthly curriculum</li>
        <li>Screening</li>
        <li>Accident report if it occurs</li>
        <li>Classroom ratio 1:10 teacher/student</li>
        <li>Music and story time</li>
        <li>Outdoor activities</li>
        <li>Parent/Teacher conferences twice a year</li>
        <li>Monthly newsletter</li>
    </ul>

    <h2>Area of Focus</h2>
    <ul>
        <li>Practical Life</li>
        <li>Math</li>
        <li>Sensory Motor</li>
        <li>Art</li>
        <li>Geography</li>
        <li>Language</li>
        <li>Physical motor development</li>
        <li>Music and Dance</li>
        <li>Outdoor activities</li>
    </ul>
        
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
      His Grace Academy (Aurora Location only) offers a before and after program that encourage children to learn, socialize, build mutual respect for one another and make responsible choices. We provide a safe environment where the children can have fun and are encouraged to be the best they can be.
      <h2>Program Highlight</h2>
      <ul>
        <li>Nutritional Snacks</li>
        <li>Art and Craft</li>
        <li>Music and Dance</li>
        <li>Outdoor Activities</li>
      </ul>


        
      </CustomTabPanel>     
     
     
    </Box>
  );
}
