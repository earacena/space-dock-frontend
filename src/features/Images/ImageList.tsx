import { Construction } from '@mui/icons-material';
import { List, Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Image as ImageType } from './image.types';
import ImageListItem from './ImageListItem';
import ImageFormDialog from './ImageFormDialog';
import imageService from './api/image.service';

function ImageList() {
  const [images, setImages] = useState<ImageType[] | undefined>(undefined);
  const [imageFormDialogOpened, setImageDialogOpened] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await imageService.fetchAll();
        setImages(fetchedImages);
      } catch (error: unknown) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const areThereImages: boolean = images !== undefined && images.length !== 0;
  const retreivedResponseFromServer: boolean = images !== undefined;

  return (
    <Box>
      <List sx={{ display: areThereImages ? '' : 'none' }}>
        {images?.map((i) => (
          <ImageListItem key={i.imageId} image={i} />
        ))}
      </List>
      <ImageFormDialog
        open={imageFormDialogOpened}
        setOpen={setImageDialogOpened}
        setImages={setImages}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '20px' }}>
        {images === undefined && <CircularProgress sx={{ margin: '10px' }} />}
        {images?.length === 0 && <Typography>You have not created any images. Use the "Build Image" button below to get started.</Typography>}
        <Button variant="contained" size="large" color="primary" aria-label="build" onClick={() => setImageDialogOpened(true)} disabled={!retreivedResponseFromServer} sx={{ display: retreivedResponseFromServer ? '' : 'none' }}>
          <Construction sx={{ mr: 1 }} />
          Build Image
        </Button>
      </Box>
    </Box>

  );
}

export default ImageList;
