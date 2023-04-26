import React from 'react';
import { Button, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import { Image as ImageType } from './image.types';
import { Construction, Layers, MoreHoriz } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

interface ImagelistItemProps {
  image: ImageType,
}

function ImageListItem({ image }: ImagelistItemProps) {
  const theme = useTheme();

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
      <ListItemSecondaryAction>
        <Button>
          <MoreHoriz />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ImageListItem;
