import React from "react";
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Typography, Tabs, Tab, Divider} from '@mui/material';
// sections
import ProficiencyCount from "../dashboard/ProficiencyCount";
import ProficiencyDonut from "../dashboard/ProficiencyDonut";
import Attrition from "../dashboard/Attrition";
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const [value, setValue] = React.useState('proficiency');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const display = () => {
        if(value === 'proficiency'){
            return (
                <Grid container spacing={3} marginTop='16px'>
                    <Grid item xs={12} md={6} lg={8}>
                        <ProficiencyCount />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <ProficiencyDonut />
                    </Grid>
                </Grid>
            )
        }

        if(value === 'attrition'){
            return <Attrition />
        }

        return <div />
        
    }

    return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

          <Grid container marginBottom='16px'>
              <Grid item lg={12}>
                  <Tabs value={value} onChange={handleChange} centered>
                      <Tab label="ProficiencyCount Count" value="proficiency" />
                      <Tab label="Attrition Rate" value="attrition"/>
                  </Tabs>
              </Grid>
          </Grid>

          <Divider variant="middle"/>

          <Grid container marginBottom='16px'>
              <Grid item lg={12}>
                  {display()}
              </Grid>
          </Grid>
      </Container>
    </>
  );
}
