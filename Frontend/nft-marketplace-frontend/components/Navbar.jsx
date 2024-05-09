import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters variant="dense">
        <IconButton color="inherit" aria-label="menu" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          My NFT Real Estate Marketplace
        </Typography>
        {/* Add search bar, filters, and other navigation elements here */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
