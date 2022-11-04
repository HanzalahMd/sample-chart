import React from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import DATA from "../../_mock/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProficiencyDonut = ({vendorName}) => {
    const feed = DATA.vendors.find(vendor => vendor.name === vendorName);

    const higher = feed.program.reduce((total, current) => {
        return total + current.assessedValue.high
    }, 0);

    const lower = feed.program.reduce((total, current) => {
        return total + current.assessedValue.low
    }, 0);

    const equal = feed.program.reduce((total, current) => {
        return total + current.assessedValue.equal
    }, 0);

    const fresh = feed.program.reduce((total, current) => {
        return total + current.assessedValue.fresh
    }, 0);

    const dataGraph = {
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

    return <Doughnut data={dataGraph} />;
}

export default ProficiencyDonut;
