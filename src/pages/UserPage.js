import { Helmet } from 'react-helmet-async';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination, Divider,
} from '@mui/material';
// components
import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Iconify from '../components/iconify';
// mock
import projects from "../_mock/project";

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: 'EPM Code', width: 120 },
  { field: 'name', headerName: 'Project Name', width: 280 },
  { field: 'phase', headerName: 'Phase', width: 120 },
  { field: 'btsHead', headerName: 'BTS Head', width: 120 },
  { field: 'btomHead', headerName: 'BTOM Head', width: 120 },
  { field: 'portfolioHead', headerName: 'Portfolio Head', width: 120 },
  { field: 'projectManager', headerName: 'Project Manager', width: 120 },
  { field: 'deliveryHead', headerName: 'Delivery Head', width: 120 },
  { field: 'deliveryManager', headerName: 'Delivery Manager', width: 120 },
  { field: 'businessSegment', headerName: 'Business Segment', width: 120 },
  { field: 'team', headerName: 'Team', width: 120 },
  { field: 'startDate', headerName: 'Start Date', width: 120 },
  { field: 'completionDate', headerName: 'Completion Date', width: 140 },
  { field: 'strategic', headerName: 'Strategic', width: 120 },
  { field: 'approvalComm', headerName: 'Approval Committee', width: 120 },
  { field: 'lastUpdatedBy', headerName: 'Last Updated By', width: 140 },
  { field: 'lastUpdatedDate', headerName: 'Last Updated Date', width: 140 },
  { field: 'approvalDate', headerName: 'Approval Date', width: 120 },
];

export default function UserPage() {
  const [checked, setChecked] = React.useState(false);

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
    btsHead: false,
    btomHead: false,
    portfolioHead: false,
    projectManager: false,
    deliveryHead: false,
    deliveryManager: false,
    strategic: false,
    lastUpdatedBy: false,
    approvalDate: false
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setColumnVisibilityModel({
      btsHead: !columnVisibilityModel.btsHead,
      btomHead: !columnVisibilityModel.btomHead,
      portfolioHead: !columnVisibilityModel.portfolioHead,
      projectManager: !columnVisibilityModel.projectManager,
      deliveryHead: !columnVisibilityModel.deliveryHead,
      deliveryManager: !columnVisibilityModel.deliveryManager,
      strategic: !columnVisibilityModel.strategic,
      lastUpdatedBy: !columnVisibilityModel.lastUpdatedBy,
      approvalDate: !columnVisibilityModel.approvalDate
    })
  };

  return (
    <>
      <Helmet>
        <title> Project Dashboard </title>
      </Helmet>

      <Container maxWidth='xl'>
        <Divider />
        <Stack direction="row" alignItems="center" justifyContent="space-between" style={{marginTop: "16px"}}>
          <Typography variant="h4" gutterBottom>
            Project List
          </Typography>
          <div>Download Button</div>
        </Stack>
        <Stack direction='row' alignItems="flex-start" justifyContent='space-between' style={{marginTop: "16px"}}>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Project
          </Button>
          <FormGroup>
            <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show all columns" />
          </FormGroup>
        </Stack>

        <Card style={{marginTop: "16px"}}>
          <DataGrid
              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                  setColumnVisibilityModel(newModel)
              }
              rows={projects}
              columns={columns}
              pageSize={9}
              rowsPerPageOptions={[9]}
              autoHeight='true'
              disableSelectionOnClick
          />
        </Card>
      </Container>
    </>
  );
}
