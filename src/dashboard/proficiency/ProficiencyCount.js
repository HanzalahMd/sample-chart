import {Grid} from "@mui/material";
import React from "react";
import ProficiencyBar from "./ProficiencyBar";
import ProficiencyDonut from "./ProficiencyDonut";

// eslint-disable-next-line react/prop-types
const ProficiencyCount = ({vendorName}) => {
    return <Grid container spacing={3} marginTop='16px'>
            <Grid item xs={12} md={6} lg={8}>
                <ProficiencyBar vendorName={vendorName} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <ProficiencyDonut vendorName={vendorName} />
            </Grid>
    </Grid>
}

export default ProficiencyCount;