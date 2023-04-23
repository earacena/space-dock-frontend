import { TableRows, TableRowsRounded } from '@mui/icons-material';
import { List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Image as ImageType } from './image.types';
import ImageListItem from './ImageListItem';

function ImageList() {
  const [images, setImages] = useState<ImageType[]>([]);

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
    <List>
      {images.map((i) => (
        <ImageListItem key={i.imageId} image={i} />
      ))}
    </List>
    //<TableContainer>
    //    <Table aria-label="container table">
    //    <TableHead>
    //      <TableRow>
    //        <TableCell>Short ID</TableCell>
    //        <TableCell>Repo ID</TableCell>
    //        <TableCell>Base Image</TableCell>
    //        <TableCell>Packages</TableCell>
    //      </TableRow>
    //    </TableHead>
    //    <TableBody>
    //      {images.map((i) => (
    //        <TableRow
    //          key={i.imageId}
    //          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //        >
    //          <TableCell component="th" scope="row">{i.imageShortId}</TableCell>
    //          <TableCell>{i.repoId}</TableCell>
    //          <TableCell>{i.baseImage}</TableCell>
    //          <TableCell>
    //            {i.packages}
    //          </TableCell>
    //        </TableRow>
    //      ))}
    //    </TableBody>
    //  </Table>
    //</TableContainer>
  );
}

export default ImageList;
