import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Grid, TextField} from "@mui/material";
import ProficiencyDetails from "./ProficiencyDetails";

const names = [
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

export default function FilterControl({vendorName}) {
    const [evaluation, setEvaluation] = React.useState([
        'higher',
        'lower',
        'equal'
    ]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setEvaluation(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (<>
    <Grid container justifyContent='flex-end'>
        <Grid item lg={2}>
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel>Evaluation Filter</InputLabel>
                <Select
                    multiple
                    value={evaluation}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {names.map((name) => (
                        <MenuItem key={name.name} value={name.name}>
                            <Checkbox checked={evaluation.indexOf(name.name) > -1} />
                            <ListItemText primary={name.value} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    </Grid>
         <ProficiencyDetails vendorName={vendorName} filters={evaluation} />
    </>);
}
