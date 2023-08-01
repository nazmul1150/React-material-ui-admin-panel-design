import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { blue, deepPurple, red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { fakeArrayGenetator } from '../utils/FackArrayDataGenetstor';
import { comStyle } from './ComStyle';
import { DisplayCardGraphMidel } from './GraphComponent';

const GraphData = [
    {
        id: "userGraph",
        type: "line",
        xAxislabels: ["week1", "week2", "week3", "week4"],
        datasets: [
            {
                label: "Current Month",
                data: fakeArrayGenetator({ count: 30, digit: 100 }),
                borderColor: blue["A200"],
                backgroundColor: "rgba(21,101,192,0.6)",
                fill: true,
                tension: 0.5,
            },
            {
                label: "Last Month",
                data: fakeArrayGenetator({ count: 30, digit: 100 }),
                borderColor: red["A200"],
                backgroundColor: "rgba(198,40,40,0.6)",
                fill: true,
                tension: 0.5,
            },
        ],
    },
    {
        id: "userPieGraph",
        type: "pie",
        xAxislabels: ["Desktop", "Tablet", "Mobile"],
        datasets: [
            {
                label: "Current Month",
                data: fakeArrayGenetator({ count: 30, digit: 1000 }),
                borderColor: blue["A200"],
                backgroundColor: [blue[100], blue[200], blue[300]],
                fill: true,
                tension: 0.5,
            },
        ],
    }
];

const UserOverviewComponent = () => {
    const classes = comStyle();
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched) {
            GraphData.map((item) => DisplayCardGraphMidel({
                id: item.id,
                type: item.type,
                datasets: item.datasets,
                xAxislabels: item.xAxislabels,
            })
            );

            setFetched(true);
        }

    }, [fetched])

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} md={7}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5' component='h6'>
                                User Overview
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <canvas
                                id='userGraph'
                                className={classes.displayUserGraph}></canvas>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={5}>
                <Card>
                        <CardContent>
                            <Typography variant='h5' component='h6'>
                            Device Overview
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <canvas
                                id='userPieGraph'
                                className={classes.displayUserGraph}></canvas>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserOverviewComponent
