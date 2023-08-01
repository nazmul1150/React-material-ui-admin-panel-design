import { Avatar, Badge, Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { headeryStyle } from '../HeaderStyle'
import ForumIcon from '@mui/icons-material/Forum';
import { NavLink } from 'react-router-dom';


const settings = [
  { label: "suzzeth bungaos", date: "October 03, 2017 8:45am" },
  { label: "nazmul hossen", date: "October 03, 2017 8:45am" },
  { label: "alam mea", date: "October 03, 2017 8:45am" },
];

const Message = () => {
  const classes = headeryStyle();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,cursor:"pointer" }} color="inherit">
        <Badge badgeContent={4} color='secondary'>
          <ForumIcon />
        </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box className={classes.nav_notifaction}>
          <Box className={classes.nav_notifaction_topbar}>
            <Typography variant="h3" conponents="h3">
              Message
            </Typography>
            <NavLink to="#">Mark All as Read</NavLink>
          </Box>
          <Box className={classes.nav_notifaction_body}>
            <List className={classes.nav_notifactionlist}>
              {settings.map((item, i) => (
                <NavLink to="#" key={i}>
                  <ListItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <Avatar className={classes.nav_notifaction_avater}>
                        {item.label[0].toUpperCase()}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      className={classes.nav_notifaction_text}
                      primary={item.label}
                      secondary={item.date}>
                    </ListItemText>
                  </ListItem>
                </NavLink>
              ))}
            </List>
          </Box>
          <Box className={classes.nav_notifaction_footer}>
            <NavLink to="#">Show All</NavLink>
          </Box>
        </Box>
      </Menu>
    </Box>
  )
}

export default Message
