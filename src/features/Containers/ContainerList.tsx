import React, { useEffect, useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Button, Chip, List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ContainerListItem from './ContainerListItem';
import type { Container as ContainerType } from './container.types';

function ContainerList() {
  const [containers, setContainers] = useState<ContainerType[]>([]);

  // Fetch info of all containers
  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/fetch/container/info/all');
        const responseJson = await response.json();
        setContainers(responseJson.containers);
      } catch (err: unknown) {
        console.error(err)
      }
    };

    fetchContainers();
  }, []);

  return (
    <List>
      {containers.map((c) => (
        <ContainerListItem key={c.containerId} container={c}/>
      ))}
    </List>
  );
}

export default ContainerList;
