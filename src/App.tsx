import { useState } from 'react';
import { css, Global } from '@emotion/react';
import Sidebar from './Sidebar';
import Home from './Home';
import Images from './Images';
import Containers from './Containers';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <div
      className="App"
      css={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}
    >
      <Global styles={{
        maxHeight: '100vh',
        maxWidth: '100vw',
        width: '100vw',
        height: '100vh',
        body: {
          margin: '0',
        }
      }} />
      <Sidebar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/containers" element={<Containers />} />
      </Routes>
    </div>
  );
}

export default App;
