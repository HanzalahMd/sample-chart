import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Grid, TextField} from "@mui/material";
import ProficiencyDetails from "./ProficiencyDetails";

const filters = [
    {
        name: 'higher',
        value: 'Evaluation > SOW'
    },
    {
        name: 'lower',
        value: 'Evaluation < SOW'
    },
    {
        name: 'equal',
        value: 'Evaluation = SOW'
    }
];

export default function FilterControl({feeds}) {
    const [filter, setFilter] = React.useState(filters[0].name);

    return (<>
    <Grid container justifyContent='flex-end'>
        <Grid item lg={2}>
            <FormControl fullWidth style={{margin: '12px 0px'}}>
                <InputLabel>Evaluation Filter</InputLabel>
                <Select
                    value={filter}
                    label="Evaluation"
                    onChange={e => setFilter(e.target.value)}
                >
                    <MenuItem value='higher'>{filters[0].value}</MenuItem>
                    <MenuItem value='lower'>{filters[1].value}</MenuItem>
                    <MenuItem value='equal'>{filters[2].value}</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
         <ProficiencyDetails feeds={feeds} filter={filter} />
    </>);
}
