import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function NewProjectForm() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const testObject = {
            id: data.get('id'),
            name: data.get('name'),
            approvalDate: dayjs(value).format('DD/MM/YYYY')
        };

        localStorage.setItem('projectList', JSON.stringify(testObject));
        navigate('/project')
    };

    return (
        <Container component="main" maxWidth="lg">
                <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{backgroundColor: 'aliceblue', padding: '7px', display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
                                New Project
                            </Typography>
                            <Stack style={{margin: '9px 0px'}} direction='row' justifyContent="center">
                                <TextField
                                    fullWidth
                                    label="EPM Code"
                                    name="id"
                                />
                                <TextField
                                    fullWidth
                                    label="Project Name"
                                    name="name"
                                />
                            </Stack >
                            <Stack style={{margin: '9px 0px'}} direction='row' justifyContent="center">
                                <TextField
                                    fullWidth
                                    label='BTS Head'
                                    name="bts-head"
                                    color='secondary'
                                />
                                <TextField
                                    fullWidth
                                    label="BTOM Head"
                                    name="btom-head"
                                />
                                <TextField
                                    fullWidth
                                    label="Portfolio Head"
                                    name="portfolio-head"
                                />
                                <TextField
                                    fullWidth
                                    label="Project Mgr."
                                    name="project-mgr"
                                />
                                <TextField
                                    fullWidth
                                    label="Delivery Head"
                                    name="delivery-head"
                                />
                                <TextField
                                    fullWidth
                                    label="Delivery Mgr."
                                    name="delivery-mgr"
                                />
                            </Stack>
                            <Stack style={{margin: '9px 0px'}} direction='row' justifyContent="center">
                                <TextField
                                    fullWidth
                                    label="Business Segment"
                                    name="business-segment"
                                />
                                <TextField
                                    fullWidth
                                    label="Approval Comittee"
                                    name="approval-comm"
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Approval Date"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField name='approvalDate' {...params} fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </Grid> {/* GTO Project Status Reporting */}
                    </Grid>
                    <Grid container justifyContent="flex-end" spacing={1}>
                        <Grid item>
                            <Button
                                color='error'
                                variant="outlined"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => navigate('/project')}
                            >
                                Close
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                color='success'
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </Container>
    );
}