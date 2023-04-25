import React, { Fragment, KeyboardEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import HomeIcon from '@mui/icons-material/Home';
import { Menu } from '@mui/icons-material';

const drawerWidth = 300;

interface ElevationScrollProps {
  children: React.ReactElement,
}

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ElevationScroll: React.FC<ElevationScrollProps> = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const drawerContents = (
    <List sx={{ width: '300px', maxWidth: '360px', padding: 0 }}>
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
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)`},
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>
            <span css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
              <span role="img" aria-label="satalitte" css={{ fontSize: '40px', paddingRight: '5px' }}>🛰</span>
              <Typography variant="h4" component="h1" sx={{ fontFamily: "Abel" }}>Space Dock</Typography>
            </span>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="app sections"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            }
          }}
        >
          {drawerContents}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            }
          }}
          open
        >
          {drawerContents}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Sidebar;
