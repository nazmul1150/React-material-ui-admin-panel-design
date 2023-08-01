import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Header/Navbar'
import Sidebar from './Header/Sidebar'
import Dashbord from './Body/Dashbord'
import Post from './Body/Post'
import Logout from './Body/Logout'
import Notification from './Body/Notification'
import Account from './Body/Account'
import { useState } from "react";
import { Box } from "@mui/material";
import {bodyStyle} from "./Body/BodyStyle"
import AddData from "./Body/AddData";

function App() {
  const classes = bodyStyle();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <BrowserRouter>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} handleDrawerClose={handleDrawerClose} />
      <Box className={classes.wrapper}>
        <Routes>
          <Route end path="/" element={<Dashbord />} />
          <Route path="/post" element={<Post />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adddata" element={<AddData />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
