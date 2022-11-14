import React, {useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Grid} from "@mui/material";
import attritionData from "../../_mock/attritionData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AttritionCount = ({vendorName, range, dateFrom}) => {
    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Attrition Rate for ${vendorName ?? '...'}`,
            },
        },
    };

    const months = [...Array(range)].map((_, index) => {
        const date = dateFrom.add(index, 'M')
        return date.format("MMM YY")
    });

    const filteredMonth = months.map(month => {
        return attritionData.find(val => val.month === month)
    })

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Total Headcount',
                data: filteredMonth.map(month => month.value.headcount),
                backgroundColor: '#4dff88',
                borderColor: '#009933'
            },
            {
                label: 'Attrition Count',
                data: filteredMonth.map(month => month.value.attrition),
                backgroundColor: '#ff6666',
                borderColor: '#cc0000',
            },
        ],
    };
    return (<>
        <Grid>
            <Grid>
                 <Bar options={options} data={data} />
            </Grid>
        </Grid>
    </>)
}

export default AttritionCount;
