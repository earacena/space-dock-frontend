import React, { useState } from 'react';
import { Button, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Tooltip, Typography } from '@mui/material';
import { Image as ImageType } from './image.types';
import { Layers, RocketLaunch } from '@mui/icons-material';
import LaunchConfirmationDialog from './LaunchConfirmationDialog';

interface ImagelistItemProps {
  image: ImageType,
}

function ImageListItem({ image }: ImagelistItemProps) {
  const [launchConfirmationDialogOpened, setLaunchConfirmationDialogOpened] = useState(false);

  return (
    <ListItem
      sx={{
        borderRadius: '10px',
        backgroundColor: '#28292a',
        margin: '12px',
      }}
    >
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText>
        <span>
          <Typography variant="caption" component="p" sx={{ color: '#e8eaf6' }}>
            ID
          </Typography>
          {image.imageShortId}
        </span>
        <span>
          <Typography variant="caption" component="p" sx={{ color: '#e8eaf6' }}>
            NAME
          </Typography>
          {image.repoName}
        </span>
      </ListItemText>
      <LaunchConfirmationDialog
        open={launchConfirmationDialogOpened}
        setOpen={setLaunchConfirmationDialogOpened}
        image={image}
      />
      <ListItemSecondaryAction>
        <Tooltip title="Launch container with this image">
          <Button onClick={() => setLaunchConfirmationDialogOpened(true)}>
            <RocketLaunch />
          </Button>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ImageListItem;
