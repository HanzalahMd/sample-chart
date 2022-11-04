import React, {useState} from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Typography, Tab, Tabs, Divider} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// sections
import AttritionCount from "../dashboard/attrition/AttritionCount";
import ProficiencyCount from "../dashboard/proficiency/ProficiencyCount";
import FilterControl from "../dashboard/proficiency/FilterControl";
import AttritionDetail from "../dashboard/attrition/AttritionDetail";
import DateFilter from "../dashboard/attrition/DateFilter";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const [value, setValue] = useState("proficiency-count");
    const [vendor, setVendor] = useState('HCL');
    // console.log(DATA)

    const changeDisplay = (event, newValue) => {
        setValue(newValue);
    };

    const changeVendor = (event) => {
        setVendor(event.target.value);
    };

    // eslint-disable-next-line consistent-return
    const view = () => {
        if(value === "proficiency-count"){return <ProficiencyCount vendorName={vendor} />}
        if(value === 'proficiency-details'){return <FilterControl vendorName={vendor} />}
        if(value === 'attrition-count'){return <DateFilter vendorName={vendor}/>}
        if(value === 'attrition-detail'){return <AttritionDetail vendorName={vendor} />}
    }

    const menuItems = ['HCL', 'Optimum', 'Azure', 'Zhulke', 'Accenture'];

    return (
    <>
      <Helmet>
        <title> Dashboard | Partner Performance </title>
      </Helmet>

      <Container maxWidth="xl">
          <Divider />
          <div style={{marginTop: "16px"}}>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel>Vendor</InputLabel>
                  <Select
                      value={vendor}
                      onChange={changeVendor}
                      autoWidth
                      label="Vendor"
                  >
                      {menuItems.map(menu => {
                          return <MenuItem key={menuItems.indexOf(menu)} value={menu}>{menu}</MenuItem>
                      })}
                  </Select>
              </FormControl>
          </div>

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
      </Container>
    </>
  );
}
