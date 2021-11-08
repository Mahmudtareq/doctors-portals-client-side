import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess}) => {
    const {name,time,spaces} = booking;
    const [openBooking, setBookingOPen] = React.useState(false);
    const handleBookingOpen = () => setBookingOPen(true);
    const handleBookingClose = () => setBookingOPen(false);
    return (
        <>
          <Grid item xs={12} sm={6} md={4}>
               <Paper elevation={3} sx={{py:5}}>
                   <Typography variant="h5"  sx={{ color: 'info.main',fontWeight:600  }}  gutterBottom component="div">
                       {name}
                   </Typography>
                   <Typography variant="h6" sx={{ color: 'success.main',fontWeight:500,mb:2 }} gutterBottom component="div">
                       {time}
                   </Typography>
                   <Typography  sx={{mb:2 }}  variant="caption" display="block" gutterBottom>
                       {spaces} SPACES AVAILABLE
      
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
               </Paper>
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
        
        >

        </BookingModal>
        
        </>      
    );
};

export default Booking;