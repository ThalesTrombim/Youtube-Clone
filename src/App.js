import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    
    palette: {
      spacing: 4,
      type: darkMode ?'dark' : 'light',
      primary: {
        main: '#F44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ?'#232323' : '#FFF',
        dark: darkMode ?'#181818' : '#F4F6F8',
        paper: darkMode ? '#232323' : '#FFF', 
      },
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
     <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App;
