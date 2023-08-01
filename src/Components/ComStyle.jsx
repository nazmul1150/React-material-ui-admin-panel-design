
import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
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

export const comStyle = makeStyles(() => ({
    //page banner
    page_banner: {
        padding: "0px 0px 30px 0px !important",
    },
    page_sub_title: {
        fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
        fontSize: "14px !important",
        fontWeight: "600 !important",
        letterSpacing: "0.13em !important",
        textTransform: "uppercase",
        color: Theme.colors.link_color,
        marginBottom: "4px !important",
        opacity: 0.75,
    },
    page_title: {
        fontFamily: `"Fira Sans", "Helvetica Neue", Arial, sans-serif !important`,
        fontSize: "1.5rem !important",
        fontWeight: "500 !important",
        letterSpacing: "0.03em !important",
        textTransform: "capitalize",
        color: Theme.colors.active_link_color,
    },

    //graph
    displayUserGraph: {
        width: "100% !important",
        height: "300px !important",
    },

}));
