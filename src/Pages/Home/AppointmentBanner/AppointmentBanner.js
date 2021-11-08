import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg ={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175
}

const AppointmentBanner = () => {
    return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img 
              style={{width:400,marginTop:'-110px'}}
              src={doctor} alt="" />
            
          </Grid>
          <Grid item xs={12} md={6} sx={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign:'left'  }}>
              <Box>
              <Typography variant="body2" sx={{my:4}} style={{color:'#49ABA8'}}>
                  APPOINTMENT 
              </Typography>
              <Typography variant="h4"  sx={{mb:3}} style={{color:'white'}}>
                 Make An  APPOINTMENT Today
              </Typography>
              <Typography variant="h4"  sx={{mb:4}} style={{color:'white',fontSize:18,fontWeight:300}} >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus iste commodi id nam ad impedit sed velit a? Temporibus?
              </Typography>
              <Button  sx={{mb:2}} variant="contained" style={{backgroundColor:'#49ABA8'}}>LearnMore</Button>
              </Box>
          </Grid>
        </Grid>
    </Box>
     
    );
};

export default AppointmentBanner;