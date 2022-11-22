import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {divideByPrograms} from "./util";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const ProficiencyBar = ({feeds, filters}) => {
    const options = {
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
                position: 'bottom',
            },
            title: {
                display: true,
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
                }
            }
        },
    };

    const datasets = [
        {
            label: 'Assessed P > SOW P',
            data: divideByPrograms(feeds, 'higher').map(grp => grp.length),
            borderColor: '#009933',
            backgroundColor: '#4dff88',
        },
        {
            label: 'Assessed P < SOW P',
            data: divideByPrograms(feeds, 'lower').map(grp => grp.length),
            borderColor: '#cc0000',
            backgroundColor: '#ff6666',
        },
        {
            label: 'Assessed P = SOW P',
            data: divideByPrograms(feeds, 'equal').map(grp => grp.length),
            borderColor: '#0099ff',
            backgroundColor: '#80ccff',
        },
        {
            label: 'New Staff',
            data: divideByPrograms(feeds, 'newStaff').map(grp => grp.length),
            borderColor: '#ff9900',
            backgroundColor: '#ffcc80',
        },
    ]

    const dataGraph = {
        labels: feeds.programs,
        datasets: filters.map((current) => {
            const array = {
                Higher: datasets[0],
                Lower: datasets[1],
                Equal: datasets[2],
                New: datasets[3],
            }
            return array[current];
        })
    };

    return <Bar options={options} data={dataGraph} />;
}

export default ProficiencyBar;
