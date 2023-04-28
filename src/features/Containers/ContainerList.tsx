import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, List, Typography } from '@mui/material';
import ContainerListItem from './ContainerListItem';
import type { Container as ContainerType } from './container.types';
import containerService from './api/container.service';

function ContainerList() {
  const [containers, setContainers] = useState<ContainerType[] | undefined>(undefined);

  // Fetch info of all containers
  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const fetchedContainers: ContainerType[] = await containerService.fetchAll();
        setContainers(fetchedContainers);
      } catch (err: unknown) {
        console.error(err);
      }
    };

    fetchContainers();
  }, []);

  const areThereContainers: boolean = containers !== undefined && containers.length !== 0;

  return (
    <Box>
      <List sx={{ display: areThereContainers ? '' : 'none' }}>
        {containers?.map((c) => (
          <ContainerListItem key={c.containerId} container={c} />
        ))}
      </List>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '20px' }}>
        {containers === undefined && <CircularProgress sx={{ margin: '10px' }} />}
        {containers?.length === 0 && <Typography>You have not created any containers. Go to the 'Images' tab to launch a container from an image.</Typography>}
      </Box>
    </Box>
  );
}

export default ContainerList;
