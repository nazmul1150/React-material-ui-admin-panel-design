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

export const bodyStyle = makeStyles(() => ({
  //appbar css
  wrapper: {
    minHeight: "200vh",
    height: "auto",
    background: "#efefef",
    marginTop: "60px",
    padding: theme.spacing(3, 2, 0, 30),
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(3, 2, 0, 29),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 2),
      marginTop: "60px",
    },
  },
  //Dashbord
  dashbord: {
  },
  //graph top
  dashbord_graph_top: {},
  dashbord_cardContant: {
    position: "relative",
    padding: "30px 0px 60px 0px !important",
  },
  cardLabel: {
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    letterSpacing: "0.13em !important",
    textTransform: "uppercase",
    color: Theme.colors.link_color,
    textAlign: "center",
    marginBottom: "5px !important",
    opacity: 0.75,
  },
  cardTitle: {
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    letterSpacing: "0.03em !important",
    textTransform: "capitalize",
    color: Theme.colors.text_color,
    textAlign: "center",
  },
  cardRadioBtns: {
    textAlign: "center",
  },
  cardRadioBtn: {
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    fontSize: "1rem !important",
    fontWeight: "500 !important",
  },
  displayCardGraphTop: {
    position: "absolute",
    width: "100% !important",
    height: "40% !important",
    left: 0,
    bottom: 0,
  },
  //graph middle
  dashbord_graph_midel: {
    margin: "40px 0px 40px 0px !important",
  },


  //Form
  form_box: {
    width: "50%",
    margin: "0 auto",
    background: "#ffffff",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    padding: "30px 30px",
  },
  form_title: {
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    fontSize: "2rem !important",
    fontWeight: "500 !important",
    margin: "0px 0px 30px 0px !important",
    textAlign: "center",
  },

  //text fild
  cssLabel: {
    color: "#6f6b80 !important",
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    lineHeight: 1.6,
    fontSize: "18px !important",
    "& .Mui-focused": {
      color: "#6f6b80 !important",
    },
  },
  //input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
    {
      //opacity: 0.5,
      border: "1px solid #d6dbe5",
      borderRadius: "12px",
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderRadius: "12px",
      border: "1px solid #d6dbe5",
    },
    "&$cssFocused $notchedOutline": {
      color: "#6f6b80 !important",
      border: "1px solid #d6dbe5 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d6dbe5 !important",
      borderRadius: "12px",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    },
    "& .MuiInputBase-input": {
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
      lineHeight: 1.6,
      fontSize: "18px !important",
    },

  },
  notchedOutline: {},
  cssFocused: {
  },
  forminput: {
    marginBottom: "10px !important",
  },

  //radio btn fild
  form_Radiotitle: {
    fontSize: "18px !important",
    color: "#6f6b80 !important",
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
  },
  form_Radiobtn: {
    "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root": {
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
    "& .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label": {
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
  },
  //form img fild
  form_imgtitle: {
    fontSize: "18px !important",
    color: "#6f6b80 !important",
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    marginBottom: "2px !important",
  },
  form_course_box: {
    "& label":{
      fontSize: "18px !important",
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      fontSize: "18px !important",
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    },
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#6f6b80 !important",
    },
  },
  form_course: {
    color: "#6f6b80 !important",
    fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    lineHeight: 1.6,
    fontSize: "18px !important",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d6dbe5 !important",
      borderRadius: "12px",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
    },
    "& .MuiInputBase-input": {
      color: "#6f6b80 !important",
      fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
      lineHeight: 1.6,
      fontSize: "18px !important",
    },
  },




}))