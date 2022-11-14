import * as React from 'react';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AttritionCount from "./AttritionCount";

export default function DateFilter({vendorName}) {
    const minDate = dayjs('2020/1/1');
    const [dateUntil, setDateUntil] = React.useState(dayjs())
    const [dateFrom, setDateFrom] = React.useState(dayjs().subtract(11, 'M'));
    const [monthRange, setMonthRange] = React.useState(12)
    const [validationTo, setValidationTo] = React.useState({
        error: false,
        text: ''
    })

    React.useEffect(() => {
    }, [monthRange]);

    const changeDateFrom = (newValue) => {
        const diff = dateUntil.diff(newValue, 'month');
        if( diff < 12){
           setDateFrom(newValue)
           setMonthRange(dateUntil.diff(newValue, 'month') + 1)
           setValidationTo({error: false, text: ''})
        } else if (diff >= 12){
           setDateFrom(newValue);
           setValidationTo({error: true, text: 'Cannot be more than 11 months from start date'})
        }
    }

    const changeDateUntil = (newValue) => {
        const diff = newValue.diff(dateFrom, 'month');
        if (diff >= 12){
            setDateUntil(newValue);
            setValidationTo({error: true, text: 'Cannot be more than 11 months from start date'})
        } else if( diff >= 0){
            setDateUntil(newValue);
            setMonthRange(newValue.diff(dateFrom, 'month') + 1)
            setValidationTo({error: false, text: ''})
        } else if (diff < 0){
            setDateUntil(newValue);
            setDateFrom(newValue)
        }
    }

    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container justifyContent={"flex-end"} columnSpacing={2} marginTop="17px">
                <Grid item lg={2}>
                    <DatePicker
                        views={['year', 'month']}
                        openTo={'month'}
                        label="Start Date"
                        minDate={minDate}
                        maxDate={dateUntil}
                        value={dateFrom}
                        onChange={changeDateFrom}
                        renderInput={(params) => <TextField {...params} />}
                        disableFuture
                    />
                </Grid>
                <Grid item lg={2}>
                    <DatePicker
                        views={['year', 'month']}
                        openTo={'month'}
                        label="End Date"
                        minDate={minDate}
                        maxDate={dayjs()}
                        value={dateUntil}
                        onChange={changeDateUntil}
                        renderInput={(params) => <TextField {...params} error={validationTo.error} helperText={validationTo.text}/>}
                        disableFuture
                    />
                </Grid>
            </Grid>
        </LocalizationProvider>
          <AttritionCount range={monthRange} dateFrom={dateFrom} vendorName={vendorName}/>
    </>);
}
