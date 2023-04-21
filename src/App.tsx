import { useState } from 'react';
import { css, Global } from '@emotion/react';
import { Sidebar } from './features/Sidebar';
import { Home } from './features/Home';
import { Images } from './features/Images';
import { Containers } from './features/Containers';
import { Route, Routes } from 'react-router-dom';

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
