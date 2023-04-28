import React, { SetStateAction } from 'react';
import {
  Box,
  Button,
  DialogActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import imageService from './api/image.service';
import { Image as ImageType } from './image.types';

interface Inputs {
  gitRepositoryLink: string;
  baseImage: string;
  buildCommand: string;
  updateCommand: string;
  startCommand: string;
}

interface ImageFormProps {
  setImageFormDialogOpen: (value: SetStateAction<boolean>) => void;
  setImages: (value: SetStateAction<ImageType[] | undefined>) => void;
}

function ImageForm({
  setImageFormDialogOpen,
  setImages,
}: ImageFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      console.log(formData);
      const imageInfo = await imageService.create(formData);

      // Update images list
      setImages((images) => images?.concat(imageInfo))

      // Close dialog
      setImageFormDialogOpen(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          id="git-repository-input"
          variant="outlined"
          label="Git Repository Link"
          sx={{ my: '5px' }}
          error={errors?.gitRepositoryLink?.type === 'required'}
          {...register('gitRepositoryLink', { required: 'true' })}
        />
        <FormControl
          sx={{
            my: '16px',
          }}
        >
          <FormLabel id="base-image-radio-buttons-group">Base Image</FormLabel>
          <RadioGroup {...register('baseImage', { required: 'true' })}>
            <FormControlLabel
              value="node:current-alpine"
              label="Node:Alpine"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>

        <TextField
          sx={{ my: '10px' }}
          fullWidth
          rows={3}
          id="update-command-multiline-input"
          multiline
          label="Update Command"
          error={errors?.updateCommand?.type === 'required'}
          {...register('updateCommand')}
        />
        <TextField
          sx={{ my: '10px' }}
          fullWidth
          rows={3}
          id="build-command-multiline-input"
          multiline
          label="Build Command"
          error={errors?.buildCommand?.type === 'required'}
          {...register('buildCommand')}
        />
        <TextField
          sx={{ my: '10px' }}
          fullWidth
          rows={3}
          id="start-command-multiline-input"
          multiline
          label="Start Command"
          error={errors?.startCommand?.type === 'required'}
          {...register('startCommand', { required: 'true' })}
        />

        <DialogActions>
          <Button type="button" onClick={() => setImageFormDialogOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Build
          </Button>
        </DialogActions>
      </Box>
    </form>
  );
}

export default ImageForm;
