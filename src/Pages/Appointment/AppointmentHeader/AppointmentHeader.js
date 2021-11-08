import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date ,setDate}) => {
    return (
       <Container sx={{my:5}}>
           <Grid container spacing={2}>
               <Grid items xs={12} md={6}>
                   <Calendar date={date} setDate={setDate}></Calendar>
               </Grid>
               <Grid items xs={12} md={6}>
                   <img src={chair} style={{width:'100%'}} alt="" />

               </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentHeader;