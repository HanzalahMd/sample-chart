import { Container, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import React from "react";
import ProficiencyCount from "./ProficiencyCount";
import FilterControl from "./FilterControl";
import DateFilter from "../attrition/DateFilter";
import {evaluate} from "./util";
import exportMultipleChartsToPdf from "../../components/download-button/DownloadButton";

export default function ExportFunction () {
    const {id} = useParams();
    console.log({id})
    const feeds = evaluate(id);
    // setTimeout(() => exportMultipleChartsToPdf(), 500);
    
    return (<>
        <Container maxWidth='xl'>
            <button onClick={exportMultipleChartsToPdf}>download</button>
            <Grid>
                <Grid item className='download-report' padding='16px'>
                    <ProficiencyCount feeds={feeds}/>
                </Grid>
                <Grid item className='download-report' padding='16px'>
                    <FilterControl feeds={feeds}/>
                </Grid>
                <Grid item className='download-report' padding='16px'>
                    <DateFilter vendorName={feeds.vendor}/>
                </Grid>
            </Grid>
        </Container>
    </>)
}