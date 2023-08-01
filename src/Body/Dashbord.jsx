import React, { useEffect, useState } from 'react'
import { bodyStyle } from "./BodyStyle";
import PageTitles from '../Components/PageTitles';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DisplayCardGraphTop, DisplayCardGraphMidel } from "../Components/GraphComponent";
import { Display_GraphData_Card_Top, Display_GraphData_Top } from '../data';
import UserOverviewComponent from '../Components/UserOverviewComponent';

const Dashbord = () => {
  const classes = bodyStyle();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      Display_GraphData_Top.map((item, i) =>
        DisplayCardGraphTop({
          id: item.id,
          data: item.data,
          brColor: item.brColor,
          bgColor: item.bgColor,
        })
      );
      setFetched(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);




  return (
    <Box className={classes.dashbord}>
      <PageTitles label="Dashbord" title="Home Overview" />
      <Box className={classes.dashbord_graph_top}>
        <Grid container spacing={2}>
          {Display_GraphData_Card_Top.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Card>
                <CardContent className={classes.dashbord_cardContant}>
                  <canvas id={item.label}
                    className={classes.displayCardGraphTop}
                  >
                  </canvas>
                  <Typography
                    variant="h6"
                    component="p"
                    className={classes.cardLabel}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h6"
                    className={classes.cardTitle}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    className={classes.cardRadioBtns}
                  >
                    <Button
                      startIcon={item.icon}
                      className={classes.cardRadioBtn}
                      style={{
                        color: item.label[0] === "P" ? "#1976d2" : "rgb(211 11 11)"
                      }}
                    >
                      {item.iconLabel}
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Box>
      <Box className={classes.dashbord_graph_midel}>
        <UserOverviewComponent />
      </Box>

    </Box>
  )
}

export default Dashbord
