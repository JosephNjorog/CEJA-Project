import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList'; // Updated component

const theme = createTheme({
  // Your custom Material-UI theme customizations here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <PropertyList /> {/* Replace with relevant component */}
      </div>
    </ThemeProvider>
  );
}

export default App;
