import { Chart, registerables } from "chart.js";


export const DisplayCardGraphTop = ({id,data,brColor,bgColor}) => {
    const ctx = document.getElementById(id).getContext('2d');
    
    Chart.register(...registerables);
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: "myChart",
            datasets: [{
                label: id,
                data: data,
                borderColor: brColor,
                backgroundColor: bgColor,
                fill: true,
                tension: 0.5,
            }]
        },
        options: {
            scales: {
                x: {
                    display: false,
                    title: { display: false },
                },
                y: {
                    display: false,
                    title: { display: false },
                }
            },
            plugins: {
                legend: { display: false },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    return myChart;

}


export const DisplayCardGraphMidel = ({id,git add,datasets,xAxislabels}) => {
    const ctx = document.getElementById(id).getContext('2d');
    
    Chart.register(...registerables);
    const myChart = new Chart(ctx, {
        type: type ? type : "line",
        data: {
            labels: xAxislabels,
            datasets: datasets,
        },
        options: {
            scales: {
                // x: {
                //     display: false,
                //     title: { display: false },
                // },
                // y: {
                //     display: false,
                //     title: { display: false },
                // }
            },
            plugins: {
                legend: { position: "bottom" },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    return myChart;

}