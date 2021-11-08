import * as React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';
import { Grid } from '@mui/material';
const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calendar
                    date={date}
                    setDate={setDate}>
                </Calendar>
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointments
                    date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;