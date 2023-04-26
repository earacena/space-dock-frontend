import { Construction, TableRows, TableRowsRounded } from '@mui/icons-material';
import { List, Box, Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Image as ImageType } from './image.types';
import ImageListItem from './ImageListItem';
import ImageFormDialog from './ImageFormDialog';

function ImageList() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/fetch/image/info/all");
        const responseJson = await response.json();
        setImages(responseJson.images);
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
        open={open}
        setOpen={setOpen}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Button variant="contained" size="large" color="primary" aria-label="build" onClick={() => setOpen(true)}>
          <Construction sx={{ mr: 1 }}  />
          Build Image
        </Button>

      </Box>
    </Box>

  );
}

export default ImageList;
