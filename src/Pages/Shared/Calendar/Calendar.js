import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { isWeekend } from 'date-fns';


const Calendar = ({ date, setDate } ) => {
 
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={date}
        shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            // console.log(newValue)
            setDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
       
    );
};

export default Calendar;