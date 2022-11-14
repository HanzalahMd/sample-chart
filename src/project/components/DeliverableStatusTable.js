import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../ProjectStyle.css';

const columns = [
    { field: 'id', headerName: 'Deliverable', width: 300, sortable: false },
    {
        field: 'lastName',
        headerName: 'Status',
        width: 130,
        editable: true,
        sortable: false
    },
    {
        field: 'firstName',
        headerName: 'Plan%',
        type: 'number',
        width: 90,
        editable: true,
        sortable: false
    },
    {
        field: 'age',
        headerName: 'Actual%',
        type: 'number',
        width: 90,
        editable: true,
        sortable: false
    },
    {
        field: 'targetDate',
        headerName: 'Target Date',
        sortable: false,
        width: 120,
    },
];

const rows = [
    { id: 'Requirement / FSD', lastName: 'Completed', firstName: 100, age: 100, targetDate: '14 Mar' },
    { id: 'Design & Development & SIT Preparation', lastName: 'In Progress', firstName: 100, age: 100, targetDate: '13 May' },
    { id: 'SIT', lastName: 'In Progress', firstName: 98, age: 98, targetDate: '07 Oct' },
    { id: 'UAT', lastName: 'Not Yet Started', firstName: 85, age: 70, targetDate: '31 Oct' },
    { id: 'Prod Preparation', lastName: 'Not Yet Started', firstName: 76, age: 80, targetDate: '22 Nov' },
];

export default function deliverableStatusTable() {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                disableColumnMenu
                hideFooter
                autoHeight
                density='compact'
                showCellRightBorder
            />
        </Box>
    );
}
