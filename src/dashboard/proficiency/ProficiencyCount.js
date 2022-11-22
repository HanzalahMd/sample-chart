import {Box, Card, Checkbox, Grid, ListItemText, OutlinedInput, Select, Chip} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ProficiencyBar from "./ProficiencyBar";
import ProficiencyDonut from "./ProficiencyDonut";

const names = [
    'Higher', 'Lower', 'Equal', 'New'
];

// eslint-disable-next-line react/prop-types
const ProficiencyCount = ({feeds}) => {
    const [filters, setFilters] = React.useState(['Higher', 'Lower', 'Equal', 'New']);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setFilters(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (<>
        <div style={{display: 'flex', justifyContent: 'end'}}>
            <div>
                <FormControl sx={{m: 1, width: 300}} size='small'>
                    <InputLabel id="demo-multiple-checkbox-label">Proficiency</InputLabel>
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
            </div>
        </div>

        <Card style={{padding: '12px'}}>
            <Grid container spacing={4} marginTop='16px'>
                <Grid item xs={12} lg={8}>
                    <ProficiencyBar feeds={feeds} filters={filters}/>
                </Grid>

                <Grid item xs={12} lg={4}
                      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '62px'}}>
                    <ProficiencyDonut feeds={feeds} filters={filters}/>
                </Grid>
            </Grid>
        </Card>
    </>)
}
export default ProficiencyCount;