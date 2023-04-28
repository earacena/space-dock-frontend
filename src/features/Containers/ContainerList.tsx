import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import ContainerListItem from './ContainerListItem';
import type { Container as ContainerType } from './container.types';
import containerService from './api/container.service';

function ContainerList() {
  const [containers, setContainers] = useState<ContainerType[]>([]);

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

  return (
    <List>
      {containers.map((c) => (
        <ContainerListItem key={c.containerId} container={c} />
      ))}
    </List>
  );
}

export default ContainerList;
