import { Drawer, Hidden } from '@mui/material';
import React from 'react'
import { headeryStyle } from './HeaderStyle'
import SideNavdata from './SideNavdata';

const Sidebar = ({mobileOpen,handleDrawerToggle,handleDrawerClose}) => {
  const classes = headeryStyle();
  return (
    <nav aria-label="mailbox folders" className={classes.drawer}>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor={"left"}
          classes={{ paper: classes.drawerPaper }}
        >
          <SideNavdata handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <SideNavdata />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Sidebar
