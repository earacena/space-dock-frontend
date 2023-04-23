import React from 'react';
import { Button, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import type { Container as ContainerType } from './container.types';
import DeveloperBoard from '@mui/icons-material/DeveloperBoard';
import { OpenInNew } from '@mui/icons-material';

interface ContainerListItemProps {
  container: ContainerType,
}

function ContainerListItem({ container }: ContainerListItemProps) {
  return (
    <ListItem sx={{
      borderRadius: '10px',
      backgroundColor: '#28292a',
      margin: '12px',
    }}>
      <ListItemIcon>
        <DeveloperBoard />
      </ListItemIcon>
      <ListItemText>
        <span>
          <Typography variant="caption" component="p">
            ID
          </Typography>
          {container.containerShortId}
        </span>
        <span>
          <Typography variant="caption" component="p">
            NAME
          </Typography>
          {container.containerName}
        </span>
        <span>
          <Typography variant="caption" component="p">
            STATUS
          </Typography>
          {container.containerStatus}
        </span>
        <span>
          <Typography variant="caption" component="p">
            IMAGE
          </Typography>
          {container.containerImage}
        </span>
      </ListItemText>
      <ListItemSecondaryAction>
        <Button onClick={() => open(container.vscodeUri)}>
          <OpenInNew />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ContainerListItem;
