import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import connectBg from '../../../images/bg.png';

const ContactBg ={
    background:`url(${connectBg})`,
    // backgroundColor:'black',
    // backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode: ' darken,lighten ',
    // bgcolor: 'background.paper'
    // marginTop:175
}

const ContactUs = () => {
    return (
        <Container style={ContactBg} sx={{my:5,p:4}}>
            <Typography variant="body1" sx={{color:'info.main'}}>
                CONTACT US
            </Typography>
            <Typography variant="h6" sx={{color:'text.main',my:4}}>
               Always  Connect  With Us
            </Typography>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        mx:'Auto'
    
        
      }}
    >
      <TextField sx={{color:'info.main'}} fullWidth label="Email Address" required id="fullWidth" />
      <br />
      <br />
      <TextField required fullWidth label="Subject" id="fullWidth" />
      <br />
      <br />
      <TextField
      fullWidth
      required
      id="filled-multiline-static"
      rows={5}
      label="Your Message *"
      multiline
        />

     <Button sx={{mt:3,px:5}} variant="contained">Submit</Button>

        
  </Box>

    </Container>
    );
};

export default ContactUs;