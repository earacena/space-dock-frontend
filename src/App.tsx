import { useState } from 'react';
import { css, Global } from '@emotion/react';
import { Sidebar } from './features/Sidebar';
import { Home } from './features/Home';
import { ImagesList } from './features/Images';
import { ContainerList } from './features/Containers';
import { Route, Routes } from 'react-router-dom';
import { Container as MuiContainer, createTheme, CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';

const injectDarkGlobalStyles = <GlobalStyles styles={{ body: { backgroundColor: '#1f1f1f' } }} />;

function App() {
  const [themeMode, setThemeMode] = useState<string>('dark');
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  const lightTheme = createTheme();

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <div
        className="App"
        css={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}
      >
        <CssBaseline />
        {themeMode === 'dark' && injectDarkGlobalStyles}
        <Sidebar />
        <MuiContainer>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/images" element={<ImagesList />} />
            <Route path="/containers" element={<ContainerList />} />
          </Routes>
        </MuiContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
