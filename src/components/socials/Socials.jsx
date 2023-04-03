import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaCodepen } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


const actions = [
  { icon: <AiFillGithub />, name: 'GitHub', link:'https://www.google.com/' , target:'_blank'},
  { icon: <AiFillMail />, name: 'Contact' , link:'#contact' , target:''},
  { icon: <FaCodepen/>, name: 'CodePen' , link:'https://www.google.com/' , target:'_blank'},
  { icon: <LinkedInIcon />, name: 'LinkedIn' , link:'https://www.google.com/' , target:'_blank'},
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
          href = {action.link}
          target = {action.target}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}