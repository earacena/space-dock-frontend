import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React, { useState } from 'react';
import ImageForm from './ImageForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ImageFormModal() {

  const [open, setOpen] = useState<boolean>(false);


  return (
    <Modal
      aria-labelledby="image-form-modal"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <ImageForm />
        </Box>
      </Fade>
    </Modal>
  );
}

export default ImageFormModal;
