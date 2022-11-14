import {Grid} from "@mui/material";
import React from "react";
import ProficiencyBar from "./ProficiencyBar";
import ProficiencyDonut from "./ProficiencyDonut";

// eslint-disable-next-line react/prop-types
const ProficiencyCount = ({feeds}) =>
    <Grid container spacing={4} marginTop='16px'>
             <Grid item xs={12} lg={8}>
                <ProficiencyBar feeds={feeds} />
             </Grid>

             <Grid item xs={12} lg={4}>
                <ProficiencyDonut feeds={feeds} />
             </Grid>
    </Grid>

export default ProficiencyCount;