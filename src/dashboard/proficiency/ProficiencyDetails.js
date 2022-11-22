import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Card} from "@mui/material";
import CustomToolbar from "../../components/toolbar/CustomToolbar";

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

// eslint-disable-next-line react/prop-types
export default function ProficiencyDetails({feeds, filter}) {
    const current = feeds[filter].filter(val => val.proficiencyEval !== '')

    return (
        <Card>
            <DataGrid
                style={{padding: '12px'}}
                rows={current}
                columns={columns}
                pageSize={12}
                rowsPerPageOptions={[12]}
                autoHeight
                components={{ Toolbar: CustomToolbar }}
                initialState={{
                    columns: {
                        columnVisibilityModel: {
                            id: false,
                        },
                    },
                }}
            />
        </Card>
    );
}
