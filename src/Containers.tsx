import React, { useEffect, useState } from 'react';
import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Container {
  containerId: string,
  containerShortId: string,
  containerImage: string,
  containerName: string,
  containerStatus: string,
  vscodeUri: string,
}

function Containers() {
  const [containers, setContainers] = useState<Container[]>([]);

  // Fetch info of all containers
  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/fetch/containers/info/all');
        const responseJson = await response.json();
        console.log(responseJson);
        setContainers(responseJson.containers);
      } catch (err: unknown) {
        console.error(err)
      }
    };

    fetchContainers();
  }, []);

  return (
    <TableContainer>
      <Table aria-label="container table">
        <TableHead>
          <TableRow>
            <TableCell>Short ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Container Name</TableCell>
            <TableCell>Base Image</TableCell>
            <TableCell>VsCode URI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {containers.map((c) => (
            <TableRow
              key={c.containerId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{c.containerShortId}</TableCell>
              <TableCell><Chip color={c.containerStatus === "running" ? "success" : "error"} label={c.containerStatus}/></TableCell>
              <TableCell>{c.containerName}</TableCell>
              <TableCell>{c.containerImage}</TableCell>
              <TableCell>{c.vscodeUri}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Containers;
