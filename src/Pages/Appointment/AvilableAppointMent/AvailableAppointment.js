import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const Bookings =[
    {name:'Teeth Orthodontics',
    id:1,
    time:'8.00 AM - 9.00 AM',
    spaces:10
    },
    {name:'Cosmetic Dentisty',
    id:2,
    time:'10.00 AM - 11.30 AM',
    spaces:8
    },
    {name:'Teeth Cleaning',
    id:3,
    time:'5.00 PM - 6.30 PM',
    spaces:10
    },
    {name:'Cavity Protection ',
    id:4,
    time:'7.00 AM - 8.30 AM',
    spaces:10
    },
    {name:'Teeth Orthodontics',
    id:5,
    time:'8.00 AM - 9.00 AM',
    spaces:10
    },
    {name:'Teeth Orthodontics',
    id:6,
    time:'8.00 AM - 9.00 AM',
    spaces:10
    
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'primary.main', my: 5 }}>Available Appointments on {date.toDateString()} </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully ???</Alert>}
            <Grid container sx={{mb:3}} spacing={2}>
                {
                    Bookings.map(booking=><Booking
                    key={booking.id}
                    booking ={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
                
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;