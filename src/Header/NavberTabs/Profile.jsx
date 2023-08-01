import { Avatar, Box, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react'
import { headeryStyle } from '../HeaderStyle'
import pofile from '../../img/2.jpg'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { NavLink } from 'react-router-dom';


const settings = [
  { label: "Profile", icon: <PermIdentityOutlinedIcon />, link: "post" },
  { label: "Account", icon: <AccountBalanceWalletOutlinedIcon />, link: "account" },
  { label: "Logout", icon: <LogoutOutlinedIcon />, link: "logout" },
];

const Profile = () => {
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
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,cursor:"pointer" }}>
          <Avatar alt="Remy Sharp" src={pofile} />
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
        {settings.map((setting, i) => (
          <MenuItem component={ListItem} key={i} onClick={handleCloseUserMenu}>
            <NavLink
            end
              to={setting.link}
              className={({ isActive }) => (isActive ? classes.profile_active_link :  classes.profile_link)}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText>{setting.label}</ListItemText>
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Profile
