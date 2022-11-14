import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {eq} from "lodash/lang";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProficiencyDonut = ({feeds}) => {

    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: false,
                text: `Proficiency Chart for ${feeds.vendor}`,
            },
            datalabels: {
                color: 'black',
                display (context){
                    const index = context.dataIndex;
                    return context.dataset.data[index];
                },
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

    const total = higher + lower + equal + newStaff;

    const getPercentage = (value) => {
        return Math.round((value/total) * 100);
    }

    const dataGraph = {
        labels: ['Higher', 'Lower', 'Equal', 'New Staff'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    higher, lower, equal, newStaff
                ],
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

    return <Doughnut data={dataGraph} options={options}/>;
}

export default ProficiencyDonut;
