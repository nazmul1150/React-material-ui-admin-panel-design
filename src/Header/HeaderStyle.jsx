import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from "../Theme"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const headeryStyle = makeStyles(() => ({
  //navbar css
  navbar: {
    padding: "0px 10px 0px 10px",
    position: "fixed",
  },
  navbar_section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbar_info: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  //nav profile
  profile_link: {
    display: "flex",
    textDecoration: "none",
    color: Theme.colors.link_color,
    "&:hover div": {
      color: Theme.colors.active_link_color,
    },
  },
  profile_active_link: {
    display: "flex",
    textDecoration: "none",
    "& div": {
      color: Theme.colors.active_link_color,
    },
  },
  //nav Notifation
  nav_notifaction: {
    width: "300px",
  },
  nav_notifaction_topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h3": {
      fontSize: "12px !important",
      color: Theme.colors.active_link_color,
      textTransform: "uppercase",
      fontWeight: "600",
      letterSpacing: "1px",
    },
    "& a": {
      fontSize: "12px !important",
      fontWeight: "400",
      color: Theme.colors.link_color,
      textDecoration: "none",
    },
    padding: "10px 20px",
    borderBottom: "1px solid #e9ecef",
  },
  nav_notifaction_body: {
    "& a": {
      textDecoration: "none",
    },
  },
  nav_notifactionlist: {
    padding: "0px !important",
    "& li": {
      background: Theme.colors.bg1,
      marginBottom: "2px !important",
    }
  },
  nav_notifaction_avater: {
    fontSize: "22px !important",
    fontWeight: "500",
  },
  nav_notifaction_text: {
    "& span": {
      fontSize: "16px !important",
      fontWeight: "500",
      color: Theme.colors.text_color,
      marginBottom: "4px !important",
      textTransform: "capitalize",
    },
    "& p": {
      fontSize: "12px !important",
      fontWeight: "500",
      color: Theme.colors.link_color,
      textTransform: "capitalize",
    },
  },
  nav_notifaction_footer: {
    "& a": {
      fontSize: "12px",
      fontWeight: "400",
      color: Theme.colors.link_color,
      textDecoration: "none",
    },
    padding: "10px 0px",
    borderTop: "1px solid #ced4da",
    textAlign: "center",
  },

  //sidebar
  drawer: {
    background: Theme.colors.bg2,
    position: "fixed",
  },
  drawerPaper: {
    width: "200px",
    marginTop: "65px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
    border: "0px !important",
    position: "fixed",
  },
  //side nav link
  navButton: {
    width: "100%",
  },
  //menu_dropdown
  menu_dropdown: {
    boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%) !important`,
    "& .css-15v22id-MuiAccordionDetails-root": {
      padding: "0px !important",
    },
    "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
      margin: "0px !important",
    },
    "& .css-h4y409-MuiList-root": {
      //paddingTop:"0px !important",
    },
    "& .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "35px !important",
    },
  },
  menu_dropdown_title: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    "& span": {
      fontSize: "16px !important",
      fontWeight: "400",
      color: Theme.colors.link_color,
    },
    color: Theme.colors.link_color,
  },

}))