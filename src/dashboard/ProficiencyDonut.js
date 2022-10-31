import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import payload from "../_mock/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const feed = payload.vendor.program;

const higher = feed.reduce((total, current) => {
        return total + current.assessedValue.high
    }, 0);

const lower = feed.reduce((total, current) => {
    return total + current.assessedValue.low
}, 0);

const equal = feed.reduce((total, current) => {
    return total + current.assessedValue.equal
}, 0);

const fresh = feed.reduce((total, current) => {
    return total + current.assessedValue.fresh
}, 0);

export const data = {
    labels: ['Higher', 'Lower', 'Equal', 'New Staff'],
    datasets: [
        {
            label: '# of Votes',
            data: [higher, lower, equal, fresh],
            backgroundColor: [
                '#4dff88',
                '#ff6666',
                '#80ccff',
                '#ffcc80',
            ],
            borderColor: [
                '#009933',
                '#cc0000',
                '#0099ff',
                '#ff9900',
            ],
            borderWidth: 1,
        },
    ],
};

export default function ProficiencyDonut() {
    return <Doughnut data={data} />;
}
