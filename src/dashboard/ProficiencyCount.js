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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import payload from "../_mock/data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
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
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'ProficiencyCount Chart for HCL',
        },
        datalabels: {
            color: 'black',
            display (context){
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                return value;
            },
            anchor: 'center',
            align: 'center',
            font: {
                size: 17
            }
        }
    },
};

const feed = payload.vendor.program;

const data = {
    labels: feed.map(prg => prg.name),
    datasets: [
        {
            label: 'Assessed P > SOW P',
            data: feed.map(prg => prg.assessedValue.high),
            borderColor: '#009933',
            backgroundColor: '#4dff88',
        },
        {
            label: 'Assessed P < SOW P',
            data: feed.map(prg => prg.assessedValue.low),
            borderColor: '#cc0000',
            backgroundColor: '#ff6666',
        },
        {
            label: 'Assessed P = SOW P',
            data: feed.map(prg => prg.assessedValue.equal),
            borderColor: '#0099ff',
            backgroundColor: '#80ccff',
        },
        {
            label: 'New Staff',
            data: feed.map(prg => prg.assessedValue.fresh),
            borderColor: '#ff9900',
            backgroundColor: '#ffcc80',
        },
    ],
};

export default function ProficiencyCount() {
    return <Bar options={options} data={data} />;
}
