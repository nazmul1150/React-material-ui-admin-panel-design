import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsActiveIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import { headeryStyle } from './HeaderStyle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideNavdata = ({ handleDrawerClose }) => {
  const classes = headeryStyle();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
    { label: "Blog", link: "/post", icon: <BookIcon /> },
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];

  

  return (
    <>
      <List>
        {listItemData.map((item, i) => (
          <NavLink
            end
            to={item.link}
            className={({ isActive }) => (isActive ? classes.profile_active_link : classes.profile_link)}
            onClick={handleDrawerClose}
            key={i}>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
              {/* <Menu open={true}>
              <MenuItem>First</MenuItem>
              <MenuItem>Second</MenuItem>
              <MenuItem>Third</MenuItem>
            </Menu> */}
            </ListItem>
          </NavLink>
        ))}
      </List>

      <Accordion className={classes.menu_dropdown}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box className={classes.menu_dropdown_title}>
            <BookIcon /> <span>Menu</span> 
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {listItemData.map((item, i) => (
              <NavLink
                end
                to={item.link}
                className={({ isActive }) => (isActive ? classes.profile_active_link : classes.profile_link)}
                onClick={handleDrawerClose}
                key={i}>
                <ListItem>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      <List>
        {listItemData.map((item, i) => (
          <NavLink
            end
            to={item.link}
            className={({ isActive }) => (isActive ? classes.profile_active_link : classes.profile_link)}
            onClick={handleDrawerClose}
            key={i}>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  )
}

export default SideNavdata

{/* <Accordion>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{item}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Box className={classes.single_course_tabs_content}>
                        </Box>
                      </AccordionDetails>
                    </Accordion> 
                  
                  */}
