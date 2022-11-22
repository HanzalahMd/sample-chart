import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Card, Stack} from "@mui/material";
import DeliverableStatusTable from './components/DeliverableStatusTable';
import './ProjectStyle.css'
import RiskIssuesTable from "./components/RiskIssuesTable";

export default function WeeklyReport() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xl" disableGutters>
                <Card component="form" noValidate onSubmit={handleSubmit} style={{padding: '12px'}}>
                    <Typography component="h1" variant="h5" padding='17px 0px'>
                        EPM Code - Project Name - Phase
                    </Typography>
                    <Grid container spacing={1} direction='row'>
                        <Grid item xs={12}>
                        <Typography variant="h6" className='project-form-subheader'>
                            GTO Project Status Reporting
                        </Typography>
                        <Stack direction='row' justifyContent="center">
                            <TextField
                                fullWidth
                                label='BTS Head'
                                id="lastName"
                                name="lastName"
                                defaultValue='Melba Weissnat DDS'
                                color='secondary'
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="BTOM Head"
                                defaultValue='Angel McLaughlin'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Portfolio Head"
                                defaultValue='Melissa Bogisich'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Project Mgr."
                                defaultValue='Lucas Gorczany'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Delivery Head"
                                defaultValue='Gary Grady'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Delivery Mgr."
                                defaultValue='Leah Gutkowski'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                        <Stack direction='row' justifyContent="center">
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Business Segment"
                                defaultValue='Group Retail'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Approval Comittee"
                                defaultValue='ITC'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Approval Date"
                                defaultValue='05 Sep 2022'
                                name="lastName"
                                margin='normal'
                                size='small'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                        </Grid> {/* GTO Project Status Reporting */}
                        <Grid item lg={5} xs={12}>
                            <Typography variant="h6" className='project-form-subheader'>
                                Project Overview
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                defaultValue={
                                `Background: CRM users in MY and TH must toggle between multiple screens to form an scv.
Solution: Introduce new Leads Management process for RMs to assign and manage leads transparency`}
                                id="lastName"
                                name="lastName"
                            />
                        </Grid> {/* Project Overview */}
                        <Grid item lg={7} xs={12}>
                            <Typography variant="h6" className='project-form-subheader'>
                            Executive Summary
                        </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                defaultValue={`Reason for Red: Server handover delayed for 2 weeks and and data load delayed.
Mitigation Plan: Detailed plan being tracked daily.
Target to Green: RAG status will be moved to green once the revised plan is endorsed in the PSC.`}
                                id="lastName"
                                name="lastName"
                            />
                        </Grid> {/* Executive Summary */}
                        <Grid item lg={6} xs={12}>
                            <Typography variant="h6" className='project-form-subheader'>
                                Achievements / Updates Since Last Report
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                defaultValue={
                                `1. ITC1 - Project is reporting RED as we cannot meet the contingency plan and the original tech go-live dates for TH, MY.
2. PSC meeting concluded on 21st Oct.
3. Received endorsement from SC members on the revised timeline and the condition of success to all stakeholders.
4. A decision was taken to for notation in the 2nd sitting of Nov.
5. Revised plan presented to PWC members and got their endorsement.
6. GCR - Data loading in production - completed for TH and in progress for MY.`}
                                id="lastName"
                                name="lastName"
                                style={{marginBottom: '12px'}}
                            />
                            <Typography variant="h6" className='project-form-subheader'>
                                KPI
                            </Typography>
                            <Stack direction='row' justifyContent="center">
                                <TextField
                                    fullWidth
                                    label='UOBS'
                                    defaultValue='Nov-22'
                                    className='project-form-uobs'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBM'
                                    defaultValue='Nov-22'
                                    className= 'project-form-uobm'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBT'
                                    defaultValue='Nov-22'
                                    style={{ backgroundColor: '#FFA9A9'}}
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBI'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBC'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBV'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBHK'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                                <TextField
                                    fullWidth
                                    label='UOBOB'
                                    id="lastName"
                                    name="lastName"
                                    variant='filled'
                                    size='small'
                                />
                            </Stack>
                        </Grid> {/* Achievements & KPI */}
                        <Grid item lg={6} xs={12 }>
                            <Typography variant="h6" className='project-form-subheader'>
                                Key Deliverables Status
                            </Typography>
                            <DeliverableStatusTable />
                        </Grid> {/* Key Deliverable Status */}
                        <Grid item xs={12}>
                            <Typography variant="h6" className='project-form-subheader'>
                                Top 5 Risks Issues and Dependencies
                            </Typography>
                            <RiskIssuesTable />
                        </Grid> {/* 5 Risk Issues and Dependencies */}
                    </Grid>
                    <Grid container justifyContent="flex-end">
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
                </Card>
        </Container>
    );
}