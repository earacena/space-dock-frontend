import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ height: '100vh', maxWidth: '360px', borderRadius: '0px 16px 16px 0', bgcolor: '#2d2f31' }}>
      <nav>
        <List sx={{ width: '300px', maxWidth: '360px' }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => {
              setSelectedIndex(0);
              navigate('/');
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => {
              setSelectedIndex(1);
              navigate('/images');
            }}
          >
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText>
              Images
            </ListItemText>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => {
              setSelectedIndex(2);
              navigate('/containers');
            }}
          >
            <ListItemIcon>
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText>
              Containers
            </ListItemText>
          </ListItemButton>

        </List>
      </nav>
    </Box>
  );
}


export default Sidebar;
