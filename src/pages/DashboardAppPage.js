import React, {useState} from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import {Grid, Container, Typography, Tab, Tabs, Divider, Stack, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import exportMultipleChartsToPdf from '../components/download-button/DownloadButton'
import {evaluate} from "../dashboard/proficiency/util";

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
    // console.log(DATA)

    const changeDisplay = (event, newValue) => {
        setValue(newValue);
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
          <Divider />
          <Stack direction='row' justifyContent='space-between' alignItems='center' style={{marginTop: "16px"}}>
          <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
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
                <Button onClick={exportMultipleChartsToPdf} variant="contained" startIcon={<Iconify icon="material-symbols:download-rounded" />}
                >Export to PDF</Button>
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

          <Divider />

           <Grid marginBottom='16px'>
              <Grid item lg={12}>
                   {view()}
              </Grid>
           </Grid>

             {/* <Grid marginBottom='16px'> */}
             {/* <Grid item lg={12} className='download-report' style={{marginTop: "32px", paddingBottom: "32px"}}> */}
             {/*     /!* {view()} *!/ */}
             {/*     <ProficiencyCount vendorName={vendor}/> */}
             {/* </Grid> */}
             {/*   <Grid item lg={12} style={{marginTop: "32px", paddingBottom: "32px"}} className='download-report'> */}
             {/*       /!* {view()} *!/ */}
             {/*       <FilterControl vendorName={vendor}/> */}
             {/*   </Grid> */}
             {/*   <Grid item lg={12} style={{marginTop: "32px", paddingBottom: "32px"}} className='download-report'> */}
             {/*       /!* {view()} *!/ */}
             {/*       <DateFilter vendorName={vendor}/> */}
             {/*   </Grid> */}
             {/* </Grid> */}
      </Container>
    </>
  );
}
