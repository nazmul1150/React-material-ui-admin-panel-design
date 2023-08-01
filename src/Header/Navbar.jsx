import { AppBar, Box, Hidden, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { headeryStyle } from './HeaderStyle'
import Message from './NavberTabs/Message'
import Notifations from './NavberTabs/Notifations'
import Profile from './NavberTabs/Profile'
import Searchbar from './NavberTabs/Searchbar'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({handleDrawerToggle}) => {
  const classes = headeryStyle();

  return (
    <AppBar className={classes.navbar}>
      <Toolbar disableGutters className={classes.navbar_section}>
        <Box>{"<AdminPanel/>"}</Box>
        <Box className={classes.navbar_info}>
          <Hidden mdDown>
            <Searchbar />
            <Message />
            <Notifations />
            <Profile />
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
