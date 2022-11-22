import React, {useEffect, useState} from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import {
    Grid,
    Container,
    Typography,
    Tab,
    Tabs,
    Divider,
    Stack,
    Button,
    OutlinedInput,
    Box,
    Chip,
    Checkbox, ListItemText
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Routes, Route, useNavigate} from 'react-router-dom'
import exportMultipleChartsToPdf from '../components/download-button/DownloadButton'
import {evaluate} from "../dashboard/proficiency/util";
import '../dashboard/proficiency/proficiencyStyle.css'

// sections
import AttritionCount from "../dashboard/attrition/AttritionCount";
import ProficiencyCount from "../dashboard/proficiency/ProficiencyCount";
import FilterControl from "../dashboard/proficiency/FilterControl";
import AttritionDetail from "../dashboard/attrition/AttritionDetail";
import DateFilter from "../dashboard/attrition/DateFilter";
import Iconify from "../components/iconify";
import ProficiencyDetails from "../dashboard/proficiency/ProficiencyDetails";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const [value, setValue] = useState("proficiency-count");
    const [vendor, setVendor] = useState('');
    const feeds = evaluate(vendor);
    console.log(feeds);
    const navigate = useNavigate();
    // console.log(DATA)

    const changeDisplay = (event, newValue) => {
        setValue(newValue);
    };

    const names = [
        'Proficiency Count', 'Proficiency Details', 'Attrition Count', 'Attrition Details', 'Attrition Rate', 'Attrition Reason'
    ];

    const [filters, setFilters] = React.useState(['Proficiency Count']);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setFilters(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const view = () => {
        if(value === "proficiency-count"){return <ProficiencyCount feeds={feeds} />}
        if(value === 'proficiency-details'){return <FilterControl feeds={feeds} />}
        if(value === 'attrition-count'){return <DateFilter vendorName={vendor}/>}
        if(value === 'attrition-detail'){return <AttritionDetail vendorName={vendor} />}
        return 'No Data';
    }

    const menuItems = ["", 'HCL', 'Optimum', 'Azure', 'Accenture'];

    return (
    <>
      <Helmet>
        <title> Partner Performance </title>
      </Helmet>
        <Container maxWidth="xl">
            <Stack direction='row' justifyContent='space-between' alignItems='center' >
                <div>
                    <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
                        <InputLabel>Vendor</InputLabel>
                        <Select
                            value={vendor}
                            onChange={(e) => setVendor(e.target.value)}
                            autoWidth
                            label="Vendor"
                            style={{minWidth: '120px'}}
                        >
                            {menuItems.map(menu => <MenuItem key={menuItems.indexOf(menu)} value={menu}>{menu}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl size="small">
                        <InputLabel>Tab</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={filters}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag"/>}
                            renderValue={(selected) => (
                                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value}/>
                                    ))}
                                </Box>
                            )}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={filters.indexOf(name) > -1}/>
                                    <ListItemText primary={name}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button style={{margin: '0px 12px'}} variant="contained"
                    ><a href={`/download/${vendor}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}>
                        Download PDF
                    </a></Button>
                </div>
            </Stack>
            <Grid marginBottom='16px'>
                <Grid item lg={12}>
                    <Tabs value={value} onChange={changeDisplay} centered>
                        <Tab label="Proficiency Count" value="proficiency-count" />
                        <Tab label="Proficiency Details" value="proficiency-details" />
                        <Tab label="Attrition Count" value="attrition-count"/>
                        <Tab label="Attrition Details" value="attrition-detail"/>
                        <Tab label="Attrition Rate" value="attrition-rate"/>
                        <Tab label="Attrition Reason" value="attrition-reason"/>
                    </Tabs>
                </Grid>
            </Grid>
            <Divider style={{margin: '12px 0px'}} />
           <Grid padding='16px' className='download-report'>
              <Grid item lg={12}>
                   {vendor === '' ? 'Please select vendor to display result' : view()}
              </Grid>
           </Grid>
      </Container>
    </>
  );
}
