import React from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DATA from "../../_mock/data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const ProficiencyBar = ({vendorName}) => {
    const feed = DATA.vendors.find(vendor => vendor.name === vendorName);

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
                position: 'bottom'
            },
            title: {
                display: true,
                text: `Proficiency Chart for ${vendorName}`,
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
                    size: 17
                }
            }
        },
    };

    const dataGraph = {
        labels: feed.program.map(prg => prg.name),
        datasets: [
            {
                label: 'Assessed P > SOW P',
                data: feed.program.map(prg => prg.assessedValue.high),
                borderColor: '#009933',
                backgroundColor: '#4dff88',
            },
            {
                label: 'Assessed P < SOW P',
                data: feed.program.map(prg => prg.assessedValue.low),
                borderColor: '#cc0000',
                backgroundColor: '#ff6666',
            },
            {
                label: 'Assessed P = SOW P',
                data: feed.program.map(prg => prg.assessedValue.equal),
                borderColor: '#0099ff',
                backgroundColor: '#80ccff',
            },
            {
                label: 'New Staff',
                data: feed.program.map(prg => prg.assessedValue.fresh),
                borderColor: '#ff9900',
                backgroundColor: '#ffcc80',
            },
        ],
    };

    return <Bar options={options} data={dataGraph} />;
}

export default ProficiencyBar;
