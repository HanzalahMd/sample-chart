import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import resources from "../../_mock/resource";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'vendor', headerName: 'Vendor', width: 90 },
    { field: 'program', headerName: 'Program', width: 90 },
    { field: 'squad', headerName: 'Squad', width: 150 },
    { field: 'name', headerName: 'Name', width: 180, editable:true },
    { field: 'role', headerName: 'Role', width: 180 },
    { field: 'proficiencySOW', headerName: 'SOW', width: 180 },
    { field: 'proficiencyEval', headerName: 'Evaluation', width: 180 },
];

const getValue = (text) => {
    const value = text.substring(1, 2);
    return Number(value)
}

// eslint-disable-next-line react/prop-types
export default function ProficiencyDetails({vendorName, filters}) {
    const feeds = resources.filter(resource => resource.vendor === vendorName)

    const higher = feeds.filter(feed => {
        return getValue(feed.proficiencyEval) > getValue(feed.proficiencySOW)
    })
    const lower = feeds.filter(feed => {
        return getValue(feed.proficiencyEval) < getValue(feed.proficiencySOW)
    })
    const equal = feeds.filter(feed => {
        return getValue(feed.proficiencyEval) === getValue(feed.proficiencySOW)
    })

    const filter = () => {
        const categories = {higher, lower, equal}
        if (filters.length === 1){
            return categories[filters[0]]
        }
        if (filters.length === 2){
            return categories[filters[0]].concat(categories[filters[1]])
        }
        if (filters.length === 3){
            return categories[filters[0]]
                .concat(categories[filters[1]], categories[filters[2]])
        }
        return [];
    }

    return (
        <div>
            <DataGrid
                rows={filter()}
                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[12]}
                autoHeight
            />
        </div>
    );
}
