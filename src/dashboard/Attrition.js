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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
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
            text: 'Attrition Rate for HCL',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Total Headcount',
            data: labels.map(() => faker.datatype.number({ min: 100, max: 150 })),
            backgroundColor: '#4dff88',
            borderColor: '#009933'
        },
        {
            label: 'Attrition Count',
            data: labels.map(() => faker.datatype.number({ min: -20, max: -1 })),
            backgroundColor: '#ff6666',
            borderColor: '#cc0000',
        },
    ],
};

function Attrition() {
    return <Bar options={options} data={data} />;
}

export default Attrition;
