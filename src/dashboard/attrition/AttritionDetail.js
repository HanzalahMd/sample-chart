import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import resources from "../../_mock/resource";
import CustomToolbar from "../../components/toolbar/CustomToolbar";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'vendor', headerName: 'Vendor', width: 90 },
    { field: 'program', headerName: 'Program', width: 90 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 180 },
    { field: 'offBoardedDate', headerName: 'Off-boarded Date', width: 280 },
    { field: 'attritionReason', headerName: 'Attrition Reason', width: 280 },
];

// eslint-disable-next-line react/prop-types
export default function AttritionDetail({vendorName}) {
    const feeds = resources.filter(resource => resource.vendor === vendorName && resource.status === 'Off-Boarded' )

    return (
        <div>
            <DataGrid
                rows={feeds}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                autoHeight='true'
                components={{ Toolbar: CustomToolbar }}
            />
        </div>
    );
}
