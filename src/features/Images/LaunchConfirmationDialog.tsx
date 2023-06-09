import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Image as ImageType } from './image.types';
import containerService from '../Containers/api/container.service';
import type { Container as ContainerType } from '../Containers/container.types';

interface LaunchConfirmationDialogProps {
  setOpen: (value: React.SetStateAction<boolean>) => void,
  open: boolean,
  image: ImageType
}

function LaunchConfirmationDialog({ image, open, setOpen }: LaunchConfirmationDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const launchHandler = async () => {
    try {
      // Send a request to backend to create a container with the given image
      const containerInfo = containerService.create(image.imageShortId);

    } catch (error: unknown) {
      console.error(error)
    }

    // Close Dialog
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        Are you sure?
      </DialogTitle>
      <DialogContent>
        {`Are you sure you want to launch a container using image "${image.imageShortId}"?`}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button variant="contained" onClick={launchHandler}>
          Launch
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LaunchConfirmationDialog;
