import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../ProjectStyle.css';

const columns = [
    { field: 'id', headerName: 'Type', width: 90 },
    {
        field: 'item',
        headerName: 'Item',
        width: 350,
        editable: true,
        sortable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        editable: true,
        sortable: false
    },
    {
        field: 'owner',
        headerName: 'Owner',
        width: 120,
        editable: true,
        sortable: false
    },
    {
        field: 'dateRaised',
        headerName: 'Date Raised',
        sortable: false,
        width: 120,
    },
    { field: 'resolution', headerName: 'Target Resolution', width: 150, sortable: false },
    {
        field: 'mitigationStep',
        headerName: 'Mitigation Steps',
        width: 350,
        editable: true,
        sortable: false
    },
    {
        field: 'p',
        headerName: 'P',
        width: 50,
        editable: true,
        sortable: false
    },
    {
        field: 'i',
        headerName: 'I',
        sortable: false,
        width: 50,
    },
    {
        field: 'overall',
        headerName: 'Overall',
        sortable: false,
        width: 100,
    }
];

const rows = [
    { id: 'R', item: 'Testing resource requirement is unclear', status: 'Closed', owner: 'Lawrence', dateRaised: '31 Jan', resolution: '18 Mar', mitigationStep: 'Closely follow up status notebook of procurement', p: 'M', i: 'H', overall: 'M' },
    { id: '', item: '', status: '', owner: '', dateRaised: '', resolution: '', mitigationStep: '', p: '', i: '', overall: '' },
    { id: '', item: '', status: '', owner: '', dateRaised: '', resolution: '', mitigationStep: '', p: '', i: '', overall: '' },
    { id: '', item: '', status: '', owner: '', dateRaised: '', resolution: '', mitigationStep: '', p: '', i: '', overall: '' },
    { id: '', item: '', status: '', owner: '', dateRaised: '', resolution: '', mitigationStep: '', p: '', i: '', overall: '' },
];

export default function RiskIssuesTable() {
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
