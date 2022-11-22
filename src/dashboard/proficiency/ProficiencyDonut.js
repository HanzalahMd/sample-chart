import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {divideByPrograms} from "./util";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProficiencyDonut = ({feeds, filters}) => {

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                display: false
            },
            title: {
                text: 'Overall',
                display: true
            },
            datalabels: {
                color: 'black',
                anchor: 'center',
                align: 'center',
                font: {
                    size: 14
                },
                formatter: (value) => {
                    return `${value} (${getPercentage(value)}%)`;
                }
            }
        },
    };

    const higher = feeds.higher.length;
    const lower = feeds.lower.length;
    const equal = feeds.equal.length;
    const newStaff = feeds.newStaff.length;

    const datasets = [
        {
            label: 'Assessed P > SOW P',
            data: higher,
            borderColor: '#009933',
            backgroundColor: '#4dff88',
        },
        {
            label: 'Assessed P < SOW P',
            data: lower,
            borderColor: '#cc0000',
            backgroundColor: '#ff6666',
        },
        {
            label: 'Assessed P = SOW P',
            data: equal,
            borderColor: '#0099ff',
            backgroundColor: '#80ccff',
        },
        {
            label: 'New Staff',
            data: newStaff,
            borderColor: '#ff9900',
            backgroundColor: '#ffcc80',
        },
    ]

    const total = higher + lower + equal + newStaff;

    const getPercentage = (value) => {
        return Math.round((value/total) * 100);
    }

    const filtering = (val) => {
        const result = filters.map((current) => {
            const array = {
                Higher: datasets[0],
                Lower: datasets[1],
                Equal: datasets[2],
                New: datasets[3],
            }
            return array[current][val];
        })
        return result
    }

    const dataGraph = {
        labels: ['Higher', 'Lower', 'Equal', 'New Staff'],
        datasets: [
            {
                label: filtering('label'),
                data: filtering('data'),
                borderColor: filtering('borderColor'),
                backgroundColor: filtering('backgroundColor'),
            },
        ]
    };

    return <Doughnut data={dataGraph} options={options}/>;
}

export default ProficiencyDonut;
