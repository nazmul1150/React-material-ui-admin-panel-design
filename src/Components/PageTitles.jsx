import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { comStyle } from './ComStyle';

const PageTitles = ({label,title}) => {
    const classes = comStyle();
    return (
        <Box className={classes.page_banner}>
            <Typography
                variant="h6"
                component="p"
                className={classes.page_sub_title}
            >
                {label}
            </Typography>
            <Typography
                variant="h3"
                component="h3"
                className={classes.page_title}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default PageTitles
