import { Dialog, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React, { SetStateAction } from 'react';
import ImageForm from './ImageForm';

interface ImageFormDialogProps {
  open: boolean,
  setOpen: (value: SetStateAction<boolean>) => void,
}

function ImageFormDialog({ open, setOpen }: ImageFormDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="image form dialog">
        Build an image
      </DialogTitle>
      <DialogContent>
        <ImageForm imageFormDialogOpen={open} setImageFormDialogOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default ImageFormDialog;
