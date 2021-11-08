import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: ''}

  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  
const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = { ...bookingInfo };
  newInfo[field] = value;
  // console.log(newInfo);
  setBookingInfo(newInfo);
  }
  
  const handleBookingSubmit = e => {
      // send to server
    const appointment= {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    // console.log(appointment)
    fetch('http://localhost:5000/appointments',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
        
      },
      body: JSON.stringify(appointment)
      
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true);

          handleBookingClose();
       
     }
    })
    // handleBookingClose();
        e.preventDefault();
}

    
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:"info.main",mb:2,textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
          <TextField
          disabled
          sx={{width:'90%',m:1}}
          id="outlined-size-small"
          size="small"
          defaultValue={time}
        />
          <TextField
          sx={{width:'90%',m:1}}
          id="outlined-size-small"
              size="small"
              name="patientName"
              onBlur={handleOnBlur}
          defaultValue={user.displayName}
        />
          <TextField
          sx={{width:'90%',m:1}}
          id="outlined-size-small"
              size="small"
              name="email"
              onBlur={handleOnBlur}
          defaultValue={user.email}
        />
          <TextField
          sx={{width:'90%',m:1}}
          id="outlined-size-small"
              size="small"
              name="phone"
              onBlur={handleOnBlur}
          defaultValue="Phone Number"
        />
          <TextField
          disabled
          sx={{width:'90%',m:1}}
          id="outlined-size-small"
          size="small"
          defaultValue={date.toDateString()}
        />
        <Button type="submit" variant="contained">Book Now</Button>
          </form>
         
        </Box>
      </Modal>
    );
};

export default BookingModal;