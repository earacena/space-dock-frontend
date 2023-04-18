import React from 'react';
import { useNavigate } from 'react-router';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {

  const navigate = useNavigate();

  return (
    <Box sx={{ height: '100vh', maxWidth: '360px' }}>
      <nav>
        <List sx={{ width: '300px', maxWidth: '360px' }}>

          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => navigate('/images')}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText>
              Images
            </ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => navigate('/containers')}>
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
