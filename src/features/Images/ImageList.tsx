import { Construction } from '@mui/icons-material';
import { List, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Image as ImageType } from './image.types';
import ImageListItem from './ImageListItem';
import ImageFormDialog from './ImageFormDialog';
import imageService from './api/image.service';

function ImageList() {
  const [images, setImages] = useState<ImageType[]>([]);
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

  return (
    <Box>
      <List>
        {images.map((i) => (
          <ImageListItem key={i.imageId} image={i} />
        ))}
      </List>
      <ImageFormDialog
        open={imageFormDialogOpened}
        setOpen={setImageDialogOpened}
        setImages={setImages}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Button variant="contained" size="large" color="primary" aria-label="build" onClick={() => setImageDialogOpened(true)}>
          <Construction sx={{ mr: 1 }} />
          Build Image
        </Button>
      </Box>
    </Box>

  );
}

export default ImageList;
