import React from 'react';
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
import { faker } from '@faker-js/faker';
import {Grid} from "@mui/material";
import dayjs from "dayjs";
import DateFilter from "./DateFilter";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const filter = [];

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

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Total Headcount',
                data: months.map(() => faker.datatype.number({ min: 30, max: 60 })),
                backgroundColor: '#4dff88',
                borderColor: '#009933'
            },
            {
                label: 'AttritionCount Count',
                data: months.map(() => faker.datatype.number({ min: -20, max: -1 })),
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
